import type { RaidLeaderboardEntrant } from "@/api/client";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<RaidLeaderboardEntrant>();

export const LEADERBOARD_COLUMNS = [
  columnHelper.accessor("rank", {
    id: "rank",
    header: "quests.raid.leaderboard.table.rank",
    cell: (props) => (
      <div className="flex justify-center font-bold sm:block">
        {props.getValue()}
      </div>
    ),
    enableSorting: false,
  }),
  columnHelper.accessor("raider.referral_code", {
    id: "address",
    header: "quests.raid.leaderboard.table.address",
    cell: (props) => props.getValue(),
    enableSorting: false,
  }),
  columnHelper.accessor("total_impressions", {
    id: "impressions",
    header: "quests.raid.leaderboard.table.impressions",
    cell: (props) => (
      <div className="flex justify-center font-bold sm:block">
        {props.getValue()}
      </div>
    ),
    enableSorting: false,
  }),
];
