import type { OnChangeFn, PaginationState } from "@tanstack/react-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useCallback, useEffect, useMemo, useState } from "react";

import api, {
  type LeaderboardEntrant,
  type LeaderboardResponse,
} from "@/api/client";
import { LEADERBOARD_COLUMNS } from "./Columns";
import { QUERY_DEFAULT_LIMIT } from "@/constants/query-default-limit";
import useFetch from "@/hooks/useFetch";
import { DATA_POOL_INTERVAL } from "@/constants/data-pool-interval";
import { createTranslator, type Locale } from "@/utils/i18n";

export const useLeaderboardTable = (locale: Locale) => {
  const [t, setT] = useState<any>(null);
  const [page, setPage] = useState(1);

  const pageSize = QUERY_DEFAULT_LIMIT;
  const currentPageIndex = page - 1;
  const paginationValue: PaginationState = {
    pageSize,
    pageIndex: currentPageIndex,
  };

  const handleChangePagination: OnChangeFn<PaginationState> = (pagination) => {
    if (typeof pagination === "function") {
      const newPagination = pagination(paginationValue);

      setPage(newPagination.pageIndex + 1);
    } else {
      setPage(pagination.pageIndex + 1);
    }
  };

  const fetchFn = useCallback(async () => {
    const res = await api.fetchLeaderboard({ page, pageSize });
    return res.json();
  }, [page, pageSize]);

  const {
    data: fetchData,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<LeaderboardResponse>({
    fetchFn,
    polling: {
      enabled: true,
      interval: DATA_POOL_INTERVAL,
    },
  });

  const columns = useMemo(() => LEADERBOARD_COLUMNS, []);
  const [rowCount, setRowCount] = useState<number>(
    fetchData?.meta.total_items ?? 0,
  );

  const data = (page === 1 ? fetchData?.data.slice(3) : fetchData?.data) ?? [];

  const table = useReactTable<LeaderboardEntrant>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: paginationValue,
    },
    rowCount,
    onPaginationChange: handleChangePagination,
    manualPagination: true,
  });

  const loading = fetchLoading || t === null;
  const success = t !== null && !loading && !fetchError;
  const error = !loading && fetchError;

  const getStatus = () => {
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
    if (!loading && fetchData?.meta.total_items)
      setRowCount(fetchData.meta.total_items);
  }, [loading, fetchData?.meta.total_items]);

  useEffect(() => {
    const loadTranslation = async () => {
      const tFn = await createTranslator(locale);
      setT(() => tFn); // ← Use function updater to set a function
    };

    loadTranslation();
  }, [locale]);

  return {
    table,
    getStatus,
    error,
    t,
  };
};
