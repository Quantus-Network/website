import NodeCounterService from "./node-counter-service";
import type {
  NodeCounterListener,
  NodeData,
  NodeCounterOptions,
  NodeCounterState,
} from "./node-counter-service";
import env from "@/config";

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

interface LeaderboardEntrant {
  quan_address: string;
  eth_address: string;
  referral_code: String;
  referrals_count: number;
  is_reward_program_participant: boolean;
  last_selected_at: string;
  created_at: string;
}

interface LeaderboardOptions {
  page?: number;
  pageSize?: number;
}

interface LeaderboardResponse {
  data: LeaderboardEntrant[];
  meta: {
    page: number;
    page_size: number;
    total_items: number;
    total_pages: number;
  };
}

type ApiResponse<T = any> = Promise<Response>;

const createApiClient = () => {
  const nodeCounter = new NodeCounterService();

  const methods = {
    fetchLeaderboard: (
      options: LeaderboardOptions,
    ): ApiResponse<LeaderboardResponse> => {
      let url = `${env.TASK_MASTER_URL}/addresses/leaderboard`;

      let queryParams = [];
      if (options.page) queryParams.push(`page=${options.page}`);
      if (options.pageSize) queryParams.push(`page_size=${options.pageSize}`);

      if (queryParams.length != 0) url = url + "?" + queryParams.join("&");

      return fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    /**
     * Fetch blockchain statistics including transaction and account counts
     */
    chainStats: (): ApiResponse<GraphQLResponse<ChainStatsData>> => {
      const query = `
        query GetStatus {
          allTransactions: eventsConnection(
            orderBy: id_ASC, 
            where: {
              OR: {
                type_in: [TRANSFER, REVERSIBLE_TRANSFER]
              }
            }
          ) {
            totalCount
          }
          allAccounts: accountsConnection(
            orderBy: id_ASC
          ) {
            totalCount
          }
        }
      `;

      return fetch(env.GRAPHQL_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          query,
        }),
      });
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
    subscribe: (email: string): ApiResponse => {
      return fetch(`${env.API_URL}/waitlist`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email,
        } as SubscribeData),
      });
    },

    /**
     * Helper method to handle GraphQL responses with proper error checking
     */
    async handleGraphQLResponse<T>(response: Response): Promise<T> {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: GraphQLResponse<T> = await response.json();

      if (data.errors && data.errors.length > 0) {
        throw new Error(`GraphQL error: ${data.errors[0].message}`);
      }

      if (!data.data) {
        throw new Error("No data returned from GraphQL query");
      }

      return data.data;
    },

    /**
     * Convenience method to get chain stats with automatic error handling
     */
    async getChainStats(): Promise<ChainStatsData> {
      const response = await methods.chainStats();
      return methods.handleGraphQLResponse<ChainStatsData>(response);
    },

    /**
     * Node Counter Methods
     */
    nodeCounter: {
      /**
       * Subscribe to node count updates
       * @param listener Callback function that receives state updates
       * @returns Unsubscribe function
       */
      subscribe: (listener: NodeCounterListener) =>
        nodeCounter.subscribe(listener),

      /**
       * Get current node counter state
       */
      getState: () => nodeCounter.getState(),

      /**
       * Start the WebSocket connection to track nodes
       */
      connect: () => nodeCounter.connect(),

      /**
       * Disconnect from the node tracking WebSocket
       */
      disconnect: () => nodeCounter.disconnect(),

      /**
       * Check if currently connected
       */
      isConnected: () => nodeCounter.isConnected(),

      /**
       * Get just the current node count (convenience method)
       */
      getCount: () => nodeCounter.getState().count,

      /**
       * Get current connection status
       */
      getStatus: () => ({
        status: nodeCounter.getState().status,
        message: nodeCounter.getState().statusMessage,
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
  NodeCounterState,
  NodeCounterOptions,
  NodeCounterListener,
};
