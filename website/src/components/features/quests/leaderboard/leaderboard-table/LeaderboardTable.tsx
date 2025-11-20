import { DataTable } from "@/components/ui/react/composite/data-table/DataTable";

import { useLeaderboardTable } from "./Hook";
import type { Locale } from "@/utils/i18n";
import { Input } from "@/components/ui/react/Input";

interface LeaderboardTableProps {
  locale: Locale;
}

const LeaderboardTable = ({ locale }: LeaderboardTableProps) => {
  const { handleChangeKeyword, getStatus, table, error, t } =
    useLeaderboardTable(locale);

  return (
    <>
      <div className="mb-4 flex flex-col gap-1">
        <label>Search your entry</label>

        <Input
          placeholder="your-referra-code-here"
          className="rounded-quantus h-9 max-w-72 border px-3"
          onChange={(e) => {
            const newKeyword = e.target.value;

            handleChangeKeyword(newKeyword);
          }}
        />
      </div>

      <DataTable
        table={table}
        fetch={{
          status: getStatus(),
          errorFallback: (
            <p className="text-red-500">Error: {error && error.message}</p>
          ),
        }}
        withControls
        t={t}
      />
    </>
  );
};

export default LeaderboardTable;
