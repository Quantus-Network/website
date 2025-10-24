import { useCallback } from "react";

import api, { type LeaderboardResponse } from "@/api/client";

import useFetch from "@/hooks/useFetch";
import { DATA_POOL_INTERVAL } from "@/constants/data-pool-interval";

export const useWinnerPodium = () => {
  const fetchFn = useCallback(async () => {
    const res = await api.fetchLeaderboard({ page: 1, pageSize: 3 });
    return res.json();
  }, []);

  const {
    data,
    loading,
    error: fetchError,
  } = useFetch<LeaderboardResponse>({
    fetchFn,
    polling: {
      enabled: true,
      interval: DATA_POOL_INTERVAL,
    },
  });

  const success = !loading && !fetchError;
  const error = !loading && fetchError;

  const getStatus = (): "success" | "error" | "loading" | "idle" => {
    switch (true) {
      case success:
        return "success";
      case !!error:
        return "error";
      case !!loading:
        return "loading";
      default:
        return "idle";
    }
  };

  return {
    data,
    status: getStatus(),
    error,
  };
};
