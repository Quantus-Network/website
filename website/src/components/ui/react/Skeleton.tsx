import { applyStyles } from "@/utils/apply-styles";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={applyStyles("animate-pulse rounded-md bg-white/50", className)}
      {...props}
    />
  );
}

export { Skeleton };
