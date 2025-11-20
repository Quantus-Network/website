import type { LeaderboardEntrant } from "@/api/client";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<LeaderboardEntrant>();

export const LEADERBOARD_COLUMNS = [
  columnHelper.accessor("rank", {
    id: "rank",
    header: "quests.leaderboard.table.rank",
    cell: (props) => (
      <div className="flex justify-center font-bold sm:block">
        {props.getValue()}
      </div>
    ),
    enableSorting: false,
  }),
  columnHelper.accessor("address.referral_code", {
    id: "address",
    header: "quests.leaderboard.table.address",
    cell: (props) => props.getValue(),
    enableSorting: false,
  }),
  columnHelper.accessor("address.referrals_count", {
    id: "referrals_count",
    header: "quests.leaderboard.table.referrals",
    cell: (props) => (
      <div className="flex justify-center font-bold sm:block">
        {props.getValue()}
      </div>
    ),
    enableSorting: false,
  }),
];
