import type { OnChangeFn, PaginationState } from "@tanstack/react-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { parseAsInteger, useQueryState } from "nuqs";
import { useCallback, useEffect, useMemo, useState } from "react";

import api, {
  type LeaderboardEntrant,
  type LeaderboardResponse,
} from "@/api/client";
import { LEADERBOARD_COLUMNS } from "./Columns";
import { QUERY_DEFAULT_LIMIT } from "@/constants/query-default-limit";
import useFetch from "@/hooks/useFetch";
import { DATA_POOL_INTERVAL } from "@/constants/data-pool-interval";

export const useLeaderboardTable = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [pageSize, setPageSize] = useQueryState(
    "pageSize",
    parseAsInteger.withDefault(QUERY_DEFAULT_LIMIT),
  );

  const currentPageIndex = page - 1;
  const paginationValue: PaginationState = {
    pageSize,
    pageIndex: currentPageIndex,
  };

  const handleChangePagination: OnChangeFn<PaginationState> = (pagination) => {
    if (typeof pagination === "function") {
      const newPagination = pagination(paginationValue);

      setPage(newPagination.pageIndex + 1);
      setPageSize(newPagination.pageSize);
    } else {
      setPage(pagination.pageIndex + 1);
      setPageSize(pagination.pageSize);
    }
  };

  const fetchFn = useCallback(async () => {
    const res = await api.fetchLeaderboard({ page, pageSize });
    return res.json();
  }, [page, pageSize]);

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

  const columns = useMemo(() => LEADERBOARD_COLUMNS, []);
  const [rowCount, setRowCount] = useState<number>(data?.meta.total_items ?? 0);

  const table = useReactTable<LeaderboardEntrant>({
    data: data?.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: paginationValue,
    },
    rowCount,
    onPaginationChange: handleChangePagination,
    manualPagination: true,
  });

  console.log(loading, fetchError);

  const success = !loading && !fetchError;
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
    if (!loading && data?.meta.total_items) setRowCount(data.meta.total_items);
  }, [loading, data?.meta.total_items]);

  return {
    table,
    getStatus,
    error,
  };
};
