import { useCallback, useEffect, useState } from "react";

import api, { type LeaderboardResponse } from "@/api/client";

import useFetch from "@/hooks/useFetch";
import { DATA_POOL_INTERVAL } from "@/constants/data-pool-interval";
import { createTranslator, type Locale } from "@/utils/i18n";

export const useWinnerPodium = (locale: Locale) => {
  const [t, setT] = useState<any>(null);

  const fetchFn = useCallback(async () => {
    const res = await api.fetchLeaderboard({ page: 1, pageSize: 3 });
    return res.json();
  }, []);

  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<LeaderboardResponse>({
    fetchFn,
    polling: {
      enabled: true,
      interval: DATA_POOL_INTERVAL,
    },
  });

  const loading = fetchLoading || t === null;
  const success = t !== null && !loading && !fetchError;
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

  useEffect(() => {
    const loadTranslation = async () => {
      const tFn = await createTranslator(locale);
      setT(() => tFn); // ← Use function updater to set a function
    };

    loadTranslation();
  }, [locale]);

  return {
    data,
    status: getStatus(),
    error,
    t,
  };
};
