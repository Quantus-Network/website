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
  maxReconnectAttempts?: number;
  reconnectDelay?: number;
  heartbeatInterval?: number;
  nodeTimeout?: number;
}

export type NodeRpcListener = (state: NodeRpcState) => void;

/**
 * Node Counter Service
 * Manages WebSocket connection to substrate network and tracks connected nodes
 */
class NodeRpcService {
  private ws: WebSocket | null = null;
  private listeners: Set<NodeRpcListener> = new Set();
  private reconnectAttempts = 0;
  private heartbeatIntervalId: number | null = null;
  private isConnecting = false;

  private options: Required<NodeRpcOptions> = {
    wsUrl: "wss://a1-dirac.quantus.cat",
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

  private blockHeightSubscriptionId: string | null = null;

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
      if (
        this.blockHeightSubscriptionId &&
        this.ws.readyState === WebSocket.OPEN
      ) {
        this.ws.send(
          JSON.stringify({
            id: 3,
            jsonrpc: "2.0",
            method: "chain_unsubscribeNewHeads",
            params: [this.blockHeightSubscriptionId],
          }),
        );
      }
      this.ws.close();
      this.ws = null;
    }
    this.blockHeightSubscriptionId = null;
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
      this.updateState("connected", "Connected to network");

      // Request system health (includes peer count)
      this.ws?.send(
        JSON.stringify({
          id: 1,
          jsonrpc: "2.0",
          method: "system_health",
          params: [],
        }),
      );

      // Subscribe to new block heads for live block height
      this.ws?.send(
        JSON.stringify({
          id: 2,
          jsonrpc: "2.0",
          method: "chain_subscribeNewHeads",
          params: [],
        }),
      );
    };

    this.ws.onmessage = (event) => {
      try {
        this.handleMessage(event.data);
      } catch (error) {
        console.error("Error processing message:", error);
      }
    };

    this.ws.onclose = (event) => {
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

  private async handleMessage(data: any): Promise<void> {
    try {
      let textData = "";

      // Check if the data is a Blob
      if (data instanceof Blob) {
        textData = await data.text();
      } else {
        textData = data;
      }

      const message = JSON.parse(textData);

      // system_health response — peer count as validator/node count
      if (message.id === 1 && message.result != null) {
        this.state.count = message.result.peers ?? this.state.count;
        this.notifyListeners();
      }

      // chain_subscribeNewHeads confirmation — store subscription id
      if (message.id === 2 && message.result != null) {
        this.blockHeightSubscriptionId = message.result;
      }

      // chain_subscribeNewHeads notification — live block height
      if (
        message.method === "chain_newHead" &&
        message.params?.result?.number != null
      ) {
        const hexNumber = message.params.result.number as string;
        this.state.blockHeight = parseInt(hexNumber, 16);
        this.notifyListeners();
      }
    } catch (error) {
      // Non-JSON messages are logged but not processed
      console.debug("Received non-JSON message:", data);
    }
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
    if (this.heartbeatIntervalId) {
      clearInterval(this.heartbeatIntervalId);
      this.heartbeatIntervalId = null;
    }
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
