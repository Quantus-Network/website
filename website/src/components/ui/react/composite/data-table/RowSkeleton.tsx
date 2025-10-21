import * as React from "react";

import { Skeleton } from "@/components/ui/react/Skeleton";
import { TableCell, TableRow } from "@/components/ui/react/Table";

export interface RowSkeletonProps {
  columnsLength: number;
  rowCount?: number;
}

export const RowSkeleton: React.FC<RowSkeletonProps> = ({
  columnsLength,
  rowCount = 1,
}) => {
  return Array.from({ length: rowCount }).map((_a, rowIdx) => (
    <TableRow key={rowIdx}>
      {Array.from({ length: columnsLength }).map((_b, cellIdx) => {
        return (
          <TableCell key={cellIdx}>
            <Skeleton className="h-4 w-full" />
          </TableCell>
        );
      })}
    </TableRow>
  ));
};
