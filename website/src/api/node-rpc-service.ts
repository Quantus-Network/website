// Types for Node Counter
export interface NodeData {
  id: string;
  name?: string;
  version?: string;
  timestamp: number;
}

export interface NodeRpcState {
  count: number | null;
  blockHeight: number | null;
  status: "disconnected" | "connecting" | "connected" | "error";
  statusMessage: string;
}

export interface NodeRpcOptions {
  wsUrl?: string;
  chainGenesisHash?: string;
  maxReconnectAttempts?: number;
  reconnectDelay?: number;
  heartbeatInterval?: number;
  nodeTimeout?: number;
}

export type NodeRpcListener = (state: NodeRpcState) => void;

const TELEMETRY_ACTIONS = {
  FeedVersion: 0,
  BestBlock: 1,
  AddedNode: 3,
  RemovedNode: 4,
  AddedChain: 11,
  RemovedChain: 12,
  SubscribedTo: 13,
  Pong: 15,
  TelemetryInfo: 23,
} as const;

const PLANCK_GENESIS_HASH =
  "0x4901bf5c57fd3f9e726af399c763de6670dbdb115a91c0237e173f16eef65e72";

const MESSAGE_TIMEOUT_MS = 60_000;

/**
 * Node Counter Service
 * Manages WebSocket connection to the Quantus telemetry feed and tracks
 * Planck mainnet node count and block height.
 */
class NodeRpcService {
  private ws: WebSocket | null = null;
  private listeners: Set<NodeRpcListener> = new Set();
  private reconnectAttempts = 0;
  private heartbeatIntervalId: number | null = null;
  private messageTimeoutId: number | null = null;
  private pingTimeoutId: number | null = null;
  private isConnecting = false;
  private pingId = 0;
  private pingSentAt: number | null = null;
  private subscribed = false;
  private planckChainSeen = false;

  private options: Required<NodeRpcOptions> = {
    wsUrl: "wss://feed-telemetry.quantus.cat/feed",
    chainGenesisHash: PLANCK_GENESIS_HASH,
    maxReconnectAttempts: 5,
    reconnectDelay: 1000,
    heartbeatInterval: 30000,
    nodeTimeout: 300000, // 5 minutes
  };

  private state: NodeRpcState = {
    count: null,
    blockHeight: null,
    status: "disconnected",
    statusMessage: "Not connected",
  };

  constructor(options: NodeRpcOptions = {}) {
    this.options = { ...this.options, ...options };
  }

  /**
   * Subscribe to state changes
   */
  subscribe(listener: NodeRpcListener): () => void {
    this.listeners.add(listener);

    // Immediately call with current state
    listener(this.getState());

    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener);
    };
  }

  /**
   * Get current state snapshot
   */
  getState(): NodeRpcState {
    return {
      ...this.state,
    };
  }

  /**
   * Start the WebSocket connection
   */
  connect(): void {
    if (
      this.isConnecting ||
      (this.ws && this.ws.readyState === WebSocket.CONNECTING)
    ) {
      return;
    }

    this.isConnecting = true;
    this.updateState("connecting", "Connecting to network...");

    try {
      this.ws = new WebSocket(this.options.wsUrl);
      this.setupEventListeners();
    } catch (error) {
      console.error("Failed to create WebSocket connection:", error);
      this.handleConnectionError();
    }
  }

  /**
   * Disconnect from the WebSocket
   */
  disconnect(): void {
    this.cleanup();
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.subscribed = false;
    this.planckChainSeen = false;
    this.updateState("disconnected", "Disconnected");
    this.isConnecting = false;
  }

  /**
   * Check if currently connected
   */
  isConnected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  private setupEventListeners(): void {
    if (!this.ws) return;

    this.ws.onopen = () => {
      this.isConnecting = false;
      this.reconnectAttempts = 0;
      this.subscribed = false;
      this.planckChainSeen = false;
      this.updateState("connected", "Connected to network");
      this.resetMessageTimeout();
      this.sendPing();
    };

    this.ws.onmessage = (event) => {
      try {
        void this.handleMessage(event.data);
      } catch (error) {
        console.error("Error processing message:", error);
      }
    };

    this.ws.onclose = () => {
      this.isConnecting = false;
      this.cleanup();

      if (this.reconnectAttempts < this.options.maxReconnectAttempts) {
        this.scheduleReconnect();
      } else {
        this.updateState("error", "Connection failed - max retries exceeded");
      }
    };

    this.ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      this.isConnecting = false;
      this.handleConnectionError();
    };
  }

  private async handleMessage(data: unknown): Promise<void> {
    let textData = "";

    if (data instanceof Blob) {
      textData = await data.text();
    } else if (data instanceof ArrayBuffer) {
      textData = new TextDecoder("utf-8").decode(data);
    } else {
      textData = String(data);
    }

    this.resetMessageTimeout();

    const messages = this.deserializeFeed(textData);
    let stateChanged = false;

    for (const { action, payload } of messages) {
      switch (action) {
        case TELEMETRY_ACTIONS.BestBlock: {
          const [bestBlock] = payload as [number, number, unknown?];
          if (typeof bestBlock === "number") {
            this.state.blockHeight = bestBlock;
            stateChanged = true;
          }
          break;
        }

        case TELEMETRY_ACTIONS.AddedChain: {
          const [, genesisHash, nodeCount] = payload as [
            string,
            string,
            number,
          ];
          if (genesisHash === this.options.chainGenesisHash) {
            this.planckChainSeen = true;
            this.state.count = nodeCount;
            stateChanged = true;
            this.maybeSubscribeToChain();
          }
          break;
        }

        case TELEMETRY_ACTIONS.RemovedChain: {
          const genesisHash = payload as string;
          if (genesisHash === this.options.chainGenesisHash) {
            this.planckChainSeen = false;
            this.state.count = null;
            stateChanged = true;
          }
          break;
        }

        case TELEMETRY_ACTIONS.Pong: {
          this.handlePong(String(payload));
          break;
        }

        case TELEMETRY_ACTIONS.SubscribedTo:
        case TELEMETRY_ACTIONS.FeedVersion:
        case TELEMETRY_ACTIONS.TelemetryInfo:
        case TELEMETRY_ACTIONS.AddedNode:
        case TELEMETRY_ACTIONS.RemovedNode:
          break;

        default:
          break;
      }
    }

    if (stateChanged) {
      this.notifyListeners();
    }
  }

  private deserializeFeed(
    data: string,
  ): Array<{ action: number; payload: unknown }> {
    const json = JSON.parse(data) as unknown;

    if (!Array.isArray(json) || json.length === 0 || json.length % 2 !== 0) {
      throw new Error("Invalid telemetry feed message");
    }

    const messages = new Array<{ action: number; payload: unknown }>(
      json.length / 2,
    );

    for (let index = 0; index < messages.length; index += 1) {
      messages[index] = {
        action: json[index * 2] as number,
        payload: json[index * 2 + 1],
      };
    }

    return messages;
  }

  private maybeSubscribeToChain(): void {
    if (
      this.subscribed ||
      !this.ws ||
      this.ws.readyState !== WebSocket.OPEN ||
      !this.planckChainSeen
    ) {
      return;
    }

    this.ws.send(`subscribe:${this.options.chainGenesisHash}`);
    this.subscribed = true;
  }

  private sendPing(): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      return;
    }

    if (this.pingSentAt != null) {
      this.handleConnectionError();
      return;
    }

    this.pingId += 1;
    this.pingSentAt = Date.now();
    this.ws.send(`ping:${this.pingId}`);
  }

  private handlePong(id: string): void {
    if (this.pingSentAt == null) {
      return;
    }

    if (Number(id) !== this.pingId) {
      this.handleConnectionError();
      return;
    }

    const latency = Date.now() - this.pingSentAt;
    this.pingSentAt = null;

    if (this.pingTimeoutId != null) {
      clearTimeout(this.pingTimeoutId);
    }

    this.pingTimeoutId = window.setTimeout(
      () => this.sendPing(),
      Math.max(0, this.options.heartbeatInterval - latency),
    );
  }

  private resetMessageTimeout(): void {
    if (this.messageTimeoutId != null) {
      clearTimeout(this.messageTimeoutId);
    }

    this.messageTimeoutId = window.setTimeout(() => {
      this.handleConnectionError();
    }, MESSAGE_TIMEOUT_MS);
  }

  private updateState(
    status: NodeRpcState["status"],
    statusMessage: string,
  ): void {
    this.state.status = status;
    this.state.statusMessage = statusMessage;
    this.notifyListeners();
  }

  private notifyListeners(): void {
    const currentState = this.getState();
    this.listeners.forEach((listener) => {
      try {
        listener(currentState);
      } catch (error) {
        console.error("Error in node counter listener:", error);
      }
    });
  }

  private cleanup(): void {
    if (this.heartbeatIntervalId != null) {
      clearInterval(this.heartbeatIntervalId);
      this.heartbeatIntervalId = null;
    }

    if (this.messageTimeoutId != null) {
      clearTimeout(this.messageTimeoutId);
      this.messageTimeoutId = null;
    }

    if (this.pingTimeoutId != null) {
      clearTimeout(this.pingTimeoutId);
      this.pingTimeoutId = null;
    }

    this.pingSentAt = null;
  }

  private handleConnectionError(): void {
    this.cleanup();
    this.updateState("error", "Connection error");
    this.scheduleReconnect();
  }

  private scheduleReconnect(): void {
    this.reconnectAttempts++;
    const delay =
      this.options.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);

    this.updateState(
      "connecting",
      `Reconnecting... (${this.reconnectAttempts}/${this.options.maxReconnectAttempts})`,
    );

    setTimeout(() => {
      if (this.reconnectAttempts <= this.options.maxReconnectAttempts) {
        this.connect();
      }
    }, delay);
  }
}

export default NodeRpcService;
