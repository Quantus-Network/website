import type { LeaderboardEntrant } from "@/api/client";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<LeaderboardEntrant>();

export const LEADERBOARD_COLUMNS = [
  columnHelper.display({
    id: "rank",
    header: "Rank",
    cell: ({ row: { index } }) => index + 1,
    enableSorting: false,
  }),
  columnHelper.accessor("quan_address", {
    id: "quan_address",
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
