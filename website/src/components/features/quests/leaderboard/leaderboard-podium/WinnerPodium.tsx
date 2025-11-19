import { Skeleton } from "@/components/ui/react/Skeleton";
import { applyStyles } from "@/utils/apply-styles";
import type { TranslationKey, TranslationParams } from "@/utils/i18n";

interface WinnerPodiumProps {
  rank: 1 | 2 | 3;
  identity: string;
  referralCount: number;
  isLoading: boolean;
  t: (key: TranslationKey, params?: TranslationParams) => any;
}

const prizeMap = {
  1: 300,
  2: 150,
  3: 50,
};

const WinnerPodium = ({
  identity,
  rank,
  referralCount,
  isLoading,
  t,
}: WinnerPodiumProps) => {
  return (
    <div
      className={applyStyles(
        "flex w-[271px] flex-col items-center",
        rank === 1 && "order-1 xl:order-2 xl:-translate-y-10",
        rank === 2 && "order-2 xl:order-1 xl:-translate-y-5",
        rank === 3 && "order-3",
      )}
    >
      <div className="max-h-[128px] max-w-[160px]">
        {rank == 1 && (
          <img
            className="size-full translate-x-[calc(21px/2)]"
            src="/quests/cat-first-rank.webp"
            alt="Gold cat icon with a half-skull face showing 1st place"
          />
        )}
        {rank == 2 && (
          <img
            className="size-full translate-x-[calc(35.5px/2)]"
            src="/quests/cat-second-rank.webp"
            alt="Silver cat icon with a half-skull face showing 2nd place"
          />
        )}
        {rank == 3 && (
          <img
            className="size-full translate-x-[calc(21.5px/2)]"
            src="/quests/cat-third-rank.webp"
            alt="Bronze cat icon with a half-skull face showing 3rd place"
          />
        )}
      </div>

      {isLoading ? (
        <Skeleton className="mt-3 h-6 w-full" />
      ) : (
        <p className="font-large-body-bold mt-3 text-center">{identity}</p>
      )}

      <div className="relative -z-[1] mt-4 w-full perspective-[100px]">
        <div className="bg-quests-podium-side absolute -top-[25px] left-2 h-[33px] w-[255px] rotate-x-[22deg]"></div>

        <div className="bg-quests-podium-front flex h-[185px] w-full flex-col">
          <div className="my-3 flex items-center justify-center">
            <p className="font-large-body-bold">
              {isLoading ? (
                <Skeleton className="me-2 h-4 w-52" />
              ) : (
                `${referralCount} ${t("quests.leaderboard.referrals")}`
              )}
            </p>
          </div>

          <div
            className={applyStyles(
              "mx-auto h-px w-[calc(100%-2rem)]",
              "bg-[#FFFFFF12]",
            )}
          ></div>

          <div
            className={applyStyles(
              "mt-4 flex items-center justify-center",
              rank === 1 && "text-quantus-yellow",
              rank === 2 && "text-quantus-pink",
              rank === 3 && "text-quantus-aqua",
            )}
          >
            <p className="font-small-title">
              ${prizeMap[rank]}
              <span className="font-body"> USDC</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerPodium;
