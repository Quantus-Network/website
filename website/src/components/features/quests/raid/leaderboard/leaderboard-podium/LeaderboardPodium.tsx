import type { Locale } from "@/utils/i18n";
import { useWinnerPodium } from "./Hook";
import WinnerPodium from "./WinnerPodium";

interface LeaderboardPodiumProps {
  locale: Locale;
}

const LeaderboardPodium = ({ locale }: LeaderboardPodiumProps) => {
  const { data, error, status, t } = useWinnerPodium(locale);

  const firstRank = data?.data[0];
  const secondRank = data?.data[1];
  const thirdRank = data?.data[2];

  const isLoading = status === "loading";

  return (
    <div className="flex flex-wrap justify-center gap-12 py-10 xl:grid xl:grid-cols-3">
      {error && <p className="text-red-500">{error.message}</p>}

      <WinnerPodium
        rank={2}
        identity={secondRank?.raider.referral_code}
        impressions={secondRank?.total_impressions}
        isLoading={isLoading}
        t={t}
      />

      <WinnerPodium
        rank={1}
        identity={firstRank?.raider.referral_code}
        impressions={firstRank?.total_impressions}
        isLoading={isLoading}
        t={t}
      />

      <WinnerPodium
        rank={3}
        identity={thirdRank?.raider.referral_code}
        impressions={thirdRank?.total_impressions}
        isLoading={isLoading}
        t={t}
      />
    </div>
  );
};

export default LeaderboardPodium;
