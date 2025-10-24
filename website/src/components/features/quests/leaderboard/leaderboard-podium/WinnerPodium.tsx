import { Skeleton } from "@/components/ui/react/Skeleton";
import { applyStyles } from "@/utils/apply-styles";

interface WinnerPodiumProps {
  rank: 1 | 2 | 3;
  identity: string;
  referralCount: number;
  isLoading: boolean;
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
}: WinnerPodiumProps) => {
  return (
    <div
      className={applyStyles(
        "flex w-[271px] flex-col items-center",
        rank === 1 && "-translate-y-10",
        rank === 2 && "-translate-y-5",
      )}
    >
      <div className="size-[110px] overflow-hidden rounded-full">
        <div
          className={applyStyles(
            "font-medium-title-mobile flex size-full items-center justify-center",
            rank === 1 && "bg-quests-first-rank",
            rank === 2 && "bg-quests-second-rank",
            rank === 3 && "bg-quests-third-rank",
          )}
        >
          <p>{rank}</p>
        </div>
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
                <Skeleton className="me-2 h-4 w-20" />
              ) : (
                referralCount
              )}{" "}
              Referrals
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
              rank === 3 && "text-quantus-purple",
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
