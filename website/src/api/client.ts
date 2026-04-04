
import type {
  NodeRpcListener,
  NodeData,
  NodeRpcOptions,
  NodeRpcState,
} from "./node-rpc-service";
import env from "@/config";
import NodeRpcService from "./node-rpc-service";
import type { EthereumAddressData } from "@/interfaces/EthereumSecurity";

// Types for API responses
interface ChainStatsData {
  allTransactions: {
    totalCount: number;
  };
  allAccounts: {
    totalCount: number;
  };
}

interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: Array<string | number>;
  }>;
}

interface ContactData {
  name: string;
  email: string;
  message: string;
}

interface SubscribeData {
  email: string;
}

export interface Entrant {
  quan_address: string;
  eth_address: string;
  referral_code: string;
  referrals_count: number;
  is_reward_program_participant: boolean;
  last_selected_at: string;
  created_at: string;
}

export interface LeaderboardEntrant {
  address: Entrant;
  rank: number;
}

export interface RaidLeaderboardEntrant {
  raid_id: number;
  rank: number;
  raider: {
    address: string;
    referral_code: string;
    referrals_count: number;
  };
  total_submissions: number;
  total_impressions: number;
  total_replies: number;
  total_retweets: number;
  total_likes: number;
  /** This is a date string ISO-8601 */
  last_activity: string;
}

type ApiResponse<T = any> = Promise<Response>;

const createApiClient = () => {
  const nodeRpc = new NodeRpcService();

  const methods = {
    /**
     * Get Ethereum security analysis
     */
    getEthereumSecurityAnalysis: async (addressOrEnsName: string): Promise<EthereumAddressData | null> => {
      const data = await fetch(`${env.TASK_MASTER_URL}/risk-checker/${addressOrEnsName}`);
      return (await data.json())?.data as EthereumAddressData | null;
    },

    /**
     * Submit a contact form inquiry
     */
    contact: (name: string, email: string, message: string): ApiResponse => {
      return fetch(`${env.API_URL}/inquiries`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        } as ContactData),
      });
    },

    /**
     * Subscribe to waitlist
     */
    subscribe: (
      email: string,
      firstName: string,
      lastName: string,
    ): ApiResponse => {
      return fetch(`${env.API_URL}/waitlist`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email,
          firstName,
          lastName,
        } as SubscribeData),
      });
    },

    /**
     * Node Counter Methods
     */
    nodeRpc: {
      /**
       * Subscribe to node RPC updates
       * @param listener Callback function that receives state updates
       * @returns Unsubscribe function
       */
      subscribe: (listener: NodeRpcListener) => nodeRpc.subscribe(listener),

      /**
       * Get current node counter state
       */
      getState: () => nodeRpc.getState(),

      /**
       * Start the WebSocket connection to track nodes
       */
      connect: () => nodeRpc.connect(),

      /**
       * Disconnect from the node tracking WebSocket
       */
      disconnect: () => nodeRpc.disconnect(),

      /**
       * Check if currently connected
       */
      isConnected: () => nodeRpc.isConnected(),

      /**
       * Get just the current node count (convenience method)
       */
      getCount: () => nodeRpc.getState().count,

      /**
       * Get the current block height
       */
      getBlockHeight: () => nodeRpc.getState().blockHeight,

      /**
       * Get current connection status
       */
      getStatus: () => ({
        status: nodeRpc.getState().status,
        message: nodeRpc.getState().statusMessage,
      }),
    },
  };

  return methods;
};

const apiClient = createApiClient();
export default apiClient;

// Export types for use in other files
export type {
  ChainStatsData,
  GraphQLResponse,
  ContactData,
  SubscribeData,
  NodeData,
  NodeRpcState,
  NodeRpcOptions,
  NodeRpcListener,
};
