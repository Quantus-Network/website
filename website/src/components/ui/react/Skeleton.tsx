import { applyStyles } from "@/utils/apply-styles";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <span
      className={applyStyles(
        "inline-block animate-pulse rounded-md bg-white/50",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
