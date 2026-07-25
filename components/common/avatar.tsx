import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "size-10 text-xs",
  md: "size-12 text-sm",
  lg: "size-14 text-sm",
} as const;

export function Avatar({ initials, className, size = "sm" }: AvatarProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-primary font-mono tracking-[0.08em] text-primary",
        sizeMap[size],
        className,
      )}
    >
      {initials}
    </span>
  );
}
