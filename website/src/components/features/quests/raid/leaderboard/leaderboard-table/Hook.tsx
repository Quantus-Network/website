import type { OnChangeFn, PaginationState } from "@tanstack/react-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useCallback, useEffect, useMemo, useState } from "react";

import api, {
  type RaidLeaderboardEntrant,
  type RaidLeaderboardResponse,
} from "@/api/client";
import { LEADERBOARD_COLUMNS } from "./Columns";
import { QUERY_DEFAULT_LIMIT } from "@/constants/query-default-limit";
import useFetch from "@/hooks/useFetch";
import { DATA_POOL_INTERVAL } from "@/constants/data-pool-interval";
import { createTranslator, type Locale } from "@/utils/i18n";
import { useDebounceCallback } from "usehooks-ts";
import { INPUT_DEBOUNCE_INTERVAL } from "@/constants/debounce-interval";

export const useLeaderboardTable = (locale: Locale) => {
  const [t, setT] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const pageSize = QUERY_DEFAULT_LIMIT;
  const currentPageIndex = page - 1;
  const paginationValue: PaginationState = {
    pageSize,
    pageIndex: currentPageIndex,
  };

  const updateKeywordFn = useCallback(
    (newKeyword: string) => {
      setKeyword(newKeyword.trim());
      setPage(1);
    },
    [setKeyword],
  );

  const handleChangeKeyword = useDebounceCallback(
    updateKeywordFn,
    INPUT_DEBOUNCE_INTERVAL,
  );

  const handleChangePagination: OnChangeFn<PaginationState> = (pagination) => {
    if (typeof pagination === "function") {
      const newPagination = pagination(paginationValue);

      setPage(newPagination.pageIndex + 1);
    } else {
      setPage(pagination.pageIndex + 1);
    }
  };

  const normalizeData = (fetchData: RaidLeaderboardResponse | null) =>
    (fetchData?.data ?? []).filter((data) => ![1, 2, 3].includes(data.rank));

  const fetchFn = useCallback(async () => {
    const res = await api.fetchRaidLeaderboard({
      page,
      pageSize,
      filterByReferralCode: keyword,
    });
    return res.json();
  }, [page, pageSize, keyword]);

  const {
    data: fetchData,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<RaidLeaderboardResponse>({
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

  const data = normalizeData(fetchData);

  const table = useReactTable<RaidLeaderboardEntrant>({
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
    handleChangeKeyword,
    table,
    getStatus,
    error,
    t,
  };
};
