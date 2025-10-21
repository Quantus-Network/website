import { NuqsAdapter } from "nuqs/adapters/react";
import { DataTable } from "@/components/ui/react/composite/data-table/DataTable";

import { useLeaderboardTable } from "./Hook";

const Component = () => {
  const { getStatus, table, error } = useLeaderboardTable();

  return (
    <DataTable
      table={table}
      fetch={{
        status: getStatus(),
        errorFallback: <p>Error: {error && error.message}</p>,
      }}
      withControls
    />
  );
};

export const LeaderboardTable = () => {
  return (
    <NuqsAdapter>
      <Component />
    </NuqsAdapter>
  );
};
