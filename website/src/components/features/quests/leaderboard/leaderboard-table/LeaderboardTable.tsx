import { DataTable } from "@/components/ui/react/composite/data-table/DataTable";

import { useLeaderboardTable } from "./Hook";
import type { Locale } from "@/utils/i18n";

interface LeaderboardTableProps {
  locale: Locale;
}

const LeaderboardTable = ({ locale }: LeaderboardTableProps) => {
  const { getStatus, table, error, t } = useLeaderboardTable(locale);

  return (
    <DataTable
      table={table}
      fetch={{
        status: getStatus(),
        errorFallback: <p>Error: {error && error.message}</p>,
      }}
      withControls
      t={t}
    />
  );
};

export default LeaderboardTable;
