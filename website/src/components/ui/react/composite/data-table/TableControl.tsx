import type { Table } from "@tanstack/react-table";
import * as React from "react";
import { useDebounceCallback } from "usehooks-ts";

import { INPUT_DEBOUNCE_INTERVAL } from "@/constants/debounce-interval";

import { Button } from "@/components/ui/react/Button";
import { Input } from "@/components/ui/react/Input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/react/Pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface TableControlsProps {
  table: Table<any>;
  tableRef: React.RefObject<HTMLTableElement | null>;
}

export const TableControls: React.FC<TableControlsProps> = ({
  table,
  tableRef,
}) => {
  const { pageSize, pageIndex } = table.getState().pagination;
  const pageCount = table.getPageCount();
  const currentPage = pageIndex + 1;

  const [page, setPage] = React.useState<number | undefined>(currentPage);

  const updatePage = React.useCallback(
    (newPage: number | undefined) => {
      if (newPage && newPage > 0 && newPage <= pageCount) {
        table.setPageIndex(newPage - 1);
      }
    },
    [table, pageCount],
  );

  const debounced = useDebounceCallback(updatePage, INPUT_DEBOUNCE_INTERVAL);

  React.useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-6 rounded-b-md px-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <Pagination className="justify-stretch sm:justify-end">
        <PaginationContent className="flex w-full items-center justify-between gap-2 sm:w-fit sm:justify-stretch">
          <PaginationItem>
            <Button
              variant="ghost"
              onClick={() => {
                table.previousPage();
              }}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft />
            </Button>
          </PaginationItem>

          <div className="flex items-center gap-2">
            <Input
              className="rounded-quantus h-6 w-9 border px-1 text-center"
              value={page}
              onChange={(e) => {
                const newPage = Number(e.target.value) || undefined;

                setPage(newPage);

                debounced(newPage);
              }}
              disabled={pageCount <= 1}
            />

            <span>of {pageCount}</span>
          </div>

          <PaginationItem>
            <Button
              variant="ghost"
              onClick={() => {
                table.nextPage();
              }}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
