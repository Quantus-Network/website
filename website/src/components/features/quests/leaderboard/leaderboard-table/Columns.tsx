import type { LeaderboardEntrant } from "@/api/client";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<LeaderboardEntrant>();

export const LEADERBOARD_COLUMNS = [
  columnHelper.display({
    id: "rank",
    header: "Rank",
    cell: ({ table: { getState }, row: { index } }) => {
      const {
        pagination: { pageIndex, pageSize },
      } = getState();

      // We use 4 becasue the top 3 are displayed in on podiums
      const indexOffset = pageIndex === 0 ? 4 : 1;
      const effectiveIndex = pageIndex * pageSize + (index + indexOffset);

      return effectiveIndex;
    },
    enableSorting: false,
  }),
  columnHelper.accessor("referral_code", {
    id: "address",
    header: "Address",
    cell: (props) => props.getValue(),
    enableSorting: false,
  }),
  columnHelper.accessor("referrals_count", {
    id: "referrals_count",
    header: "Referrals",
    cell: (props) => props.getValue(),
    enableSorting: false,
  }),
];
