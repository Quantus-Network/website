import { useWinnerPodium } from "./Hook";
import WinnerPodium from "./WinnerPodium";

const LeaderboardPodium = () => {
  const { data, error, status } = useWinnerPodium();

  const firstRank = data?.data[0];
  const secondRank = data?.data[1];
  const thirdRank = data?.data[2];

  return (
    <div className="flex flex-wrap justify-center gap-12 py-10 xl:grid xl:grid-cols-3">
      {error && <p className="text-red-500">{error.message}</p>}

      <WinnerPodium
        rank={2}
        identity={secondRank?.referral_code ?? "loading..."}
        referralCount={secondRank?.referrals_count ?? 0}
        isLoading={status === "loading"}
      />

      <WinnerPodium
        rank={1}
        identity={firstRank?.referral_code ?? "loading..."}
        referralCount={firstRank?.referrals_count ?? 0}
        isLoading={status === "loading"}
      />

      <WinnerPodium
        rank={3}
        identity={thirdRank?.referral_code ?? "loading..."}
        referralCount={thirdRank?.referrals_count ?? 0}
        isLoading={status === "loading"}
      />
    </div>
  );
};

export default LeaderboardPodium;
