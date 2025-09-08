// Types for Node Counter
export interface NodeData {
  id: string;
  name?: string;
  version?: string;
  timestamp: number;
}

export interface NodeCounterState {
  count: number;
  status: 'disconnected' | 'connecting' | 'connected' | 'error';
  statusMessage: string;
  nodes: Map<string, NodeData>;
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
  private connectedNodes: Map<string, NodeData> = new Map();
  private listeners: Set<NodeCounterListener> = new Set();
  private reconnectAttempts = 0;
  private heartbeatIntervalId: number | null = null;
  private isConnecting = false;

  private options: Required<NodeCounterOptions> = {
    wsUrl: 'wss://tc0.res.fm/feed',
    maxReconnectAttempts: 5,
    reconnectDelay: 1000,
    heartbeatInterval: 30000,
    nodeTimeout: 300000, // 5 minutes
  };

  private state: NodeCounterState = {
    count: 0,
    status: 'disconnected',
    statusMessage: 'Not connected',
    nodes: this.connectedNodes,
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
      count: this.connectedNodes.size,
      nodes: new Map(this.connectedNodes),
    };
  }

  /**
   * Start the WebSocket connection
   */
  connect(): void {
    if (this.isConnecting || (this.ws && this.ws.readyState === WebSocket.CONNECTING)) {
      return;
    }

    this.isConnecting = true;
    this.updateState('connecting', 'Connecting to network...');

    try {
      this.ws = new WebSocket(this.options.wsUrl);
      this.setupEventListeners();
    } catch (error) {
      console.error('Failed to create WebSocket connection:', error);
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
    this.updateState('disconnected', 'Disconnected');
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
      console.log('Connected to substrate feed');
      this.isConnecting = false;
      this.reconnectAttempts = 0;
      this.updateState('connected', 'Connected to network');
      this.startHeartbeat();
    };

    this.ws.onmessage = (event) => {
      try {
        this.handleMessage(event.data);
      } catch (error) {
        console.error('Error processing message:', error);
      }
    };

    this.ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event.code, event.reason);
      this.isConnecting = false;
      this.cleanup();
      
      if (this.reconnectAttempts < this.options.maxReconnectAttempts) {
        this.scheduleReconnect();
      } else {
        this.updateState('error', 'Connection failed - max retries exceeded');
      }
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      this.isConnecting = false;
      this.handleConnectionError();
    };
  }

  private handleMessage(data: string): void {
    try {
      const message = JSON.parse(data);
      
      // Handle different message types based on the substrate feed format
      if (message.type === 'node_connected' || message.event === 'connected') {
        this.addNode(message);
      } else if (message.type === 'node_disconnected' || message.event === 'disconnected') {
        this.removeNode(message.id || message.nodeId);
      } else if (message.type === 'node_list' || Array.isArray(message.nodes)) {
        this.handleNodeList(message.nodes || message);
      } else if (message.type === 'heartbeat' || message.ping) {
        this.handleHeartbeat();
      } else {
        this.tryExtractNodeInfo(message);
      }

      this.notifyListeners();
    } catch (error) {
      // Non-JSON messages are logged but not processed
      console.debug('Received non-JSON message:', data);
    }
  }

  private addNode(nodeInfo: any): void {
    const nodeData: NodeData = {
      id: nodeInfo.id || nodeInfo.nodeId || this.generateNodeId(),
      name: nodeInfo.name || nodeInfo.nodeName,
      version: nodeInfo.version,
      timestamp: Date.now()
    };

    this.connectedNodes.set(nodeData.id, nodeData);
  }

  private removeNode(nodeId: string): void {
    if (nodeId) {
      this.connectedNodes.delete(nodeId);
    }
  }

  private handleNodeList(nodes: any[]): void {
    this.connectedNodes.clear();
    if (Array.isArray(nodes)) {
      nodes.forEach(node => this.addNode(node));
    }
  }

  private tryExtractNodeInfo(message: any): void {
    if (message.peer || message.peerId) {
      this.addNode({
        id: message.peer || message.peerId,
        name: message.peerName,
        version: message.version
      });
    }
  }

  private generateNodeId(): string {
    return `node_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private handleHeartbeat(): void {
    const cutoffTime = Date.now() - this.options.nodeTimeout;
    for (const [nodeId, node] of this.connectedNodes.entries()) {
      if (node.timestamp < cutoffTime) {
        this.connectedNodes.delete(nodeId);
      }
    }
  }

  private updateState(status: NodeCounterState['status'], statusMessage: string): void {
    this.state.status = status;
    this.state.statusMessage = statusMessage;
    this.notifyListeners();
  }

  private notifyListeners(): void {
    const currentState = this.getState();
    this.listeners.forEach(listener => {
      try {
        listener(currentState);
      } catch (error) {
        console.error('Error in node counter listener:', error);
      }
    });
  }

  private startHeartbeat(): void {
    this.heartbeatIntervalId = window.setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        try {
          this.ws.send(JSON.stringify({ type: 'ping' }));
        } catch (error) {
          console.debug('Heartbeat ping failed:', error);
        }
      }
      
      // Clean up old nodes
      this.handleHeartbeat();
      this.notifyListeners();
    }, this.options.heartbeatInterval);
  }

  private cleanup(): void {
    if (this.heartbeatIntervalId) {
      clearInterval(this.heartbeatIntervalId);
      this.heartbeatIntervalId = null;
    }
  }

  private handleConnectionError(): void {
    this.cleanup();
    this.updateState('error', 'Connection error');
    this.scheduleReconnect();
  }

  private scheduleReconnect(): void {
    this.reconnectAttempts++;
    const delay = this.options.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
    
    this.updateState('connecting', `Reconnecting... (${this.reconnectAttempts}/${this.options.maxReconnectAttempts})`);

    setTimeout(() => {
      if (this.reconnectAttempts <= this.options.maxReconnectAttempts) {
        this.connect();
      }
    }, delay);
  }
}

export default NodeCounterService;