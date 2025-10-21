import { useState, useEffect, useRef, useCallback } from "react";

interface UseFetchOptions<T> {
  fetchFn: () => Promise<T>;
  enabled?: boolean;
  polling?: {
    enabled: boolean;
    interval: number; // in milliseconds
  };
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  startPolling: (interval?: number) => void;
  stopPolling: () => void;
}

function useFetch<T>({
  fetchFn,
  enabled = true,
  polling,
  onSuccess,
  onError,
}: UseFetchOptions<T>): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef<boolean>(true);
  const pollingConfigRef = useRef(polling);

  // Update polling config ref when it changes
  useEffect(() => {
    pollingConfigRef.current = polling;
  }, [polling]);

  const executeFetch = useCallback(
    async (silently = false) => {
      if (!isMountedRef.current) return;

      if (!silently) setLoading(true);
      setError(null);

      try {
        const result = await fetchFn();

        if (isMountedRef.current) {
          setData(result);
          setError(null);
          onSuccess?.(result);
        }
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("An error occurred");

        if (isMountedRef.current) {
          setError(error);
          onError?.(error);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    },
    [fetchFn, onSuccess, onError],
  );

  const stopPolling = useCallback(() => {
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
      pollingIntervalRef.current = null;
    }
  }, []);

  const startPolling = useCallback(
    (interval?: number) => {
      stopPolling();

      const pollInterval =
        interval || pollingConfigRef.current?.interval || 5000;

      pollingIntervalRef.current = setInterval(() => {
        executeFetch(true);
      }, pollInterval);
    },
    [executeFetch, stopPolling],
  );

  // Initial fetch and polling setup
  useEffect(() => {
    if (!enabled) return;

    executeFetch();

    if (polling?.enabled) {
      startPolling(polling.interval);
    }

    return () => {
      stopPolling();
    };
  }, [
    enabled,
    executeFetch,
    polling?.enabled,
    polling?.interval,
    startPolling,
    stopPolling,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      stopPolling();
    };
  }, [stopPolling]);

  return {
    data,
    loading,
    error,
    refetch: executeFetch,
    startPolling,
    stopPolling,
  };
}

export default useFetch;
