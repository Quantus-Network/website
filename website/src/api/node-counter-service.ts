// Types for Node Counter
export interface NodeData {
  id: string;
  name?: string;
  version?: string;
  timestamp: number;
}

export interface NodeCounterState {
  count: number | null;
  status: "disconnected" | "connecting" | "connected" | "error";
  statusMessage: string;
}

export interface NodeCounterOptions {
  wsUrl?: string;
  maxReconnectAttempts?: number;
  reconnectDelay?: number;
  heartbeatInterval?: number;
  nodeTimeout?: number;
}

export type NodeCounterListener = (state: NodeCounterState) => void;

/**
 * Node Counter Service
 * Manages WebSocket connection to substrate network and tracks connected nodes
 */
class NodeCounterService {
  private ws: WebSocket | null = null;
  private listeners: Set<NodeCounterListener> = new Set();
  private reconnectAttempts = 0;
  private heartbeatIntervalId: number | null = null;
  private isConnecting = false;

  private options: Required<NodeCounterOptions> = {
    wsUrl: "wss://tc0.res.fm/feed",
    maxReconnectAttempts: 5,
    reconnectDelay: 1000,
    heartbeatInterval: 30000,
    nodeTimeout: 300000, // 5 minutes
  };

  private state: NodeCounterState = {
    count: null,
    status: "disconnected",
    statusMessage: "Not connected",
  };

  constructor(options: NodeCounterOptions = {}) {
    this.options = { ...this.options, ...options };
  }

  /**
   * Subscribe to state changes
   */
  subscribe(listener: NodeCounterListener): () => void {
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
  getState(): NodeCounterState {
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
      console.log("Connected to substrate feed");
      this.isConnecting = false;
      this.reconnectAttempts = 0;
      this.updateState("connected", "Connected to network");
    };

    this.ws.onmessage = (event) => {
      try {
        this.handleMessage(event.data);
      } catch (error) {
        console.error("Error processing message:", error);
      }
    };

    this.ws.onclose = (event) => {
      console.log("WebSocket connection closed:", event.code, event.reason);
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

      const message = await JSON.parse(textData);

      if (
        message.length >= 4 &&
        message[0] === 0 &&
        typeof message[1] === "number"
      ) {
        const chainData = message[3];
        const nodeCount = chainData[2]
        this.state.count = nodeCount;

        this.notifyListeners();
      }

      
    } catch (error) {
      // Non-JSON messages are logged but not processed
      console.debug("Received non-JSON message:", data);
    }
  }

  private updateState(
    status: NodeCounterState["status"],
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

export default NodeCounterService;
