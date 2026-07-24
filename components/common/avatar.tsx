import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "size-10 text-sm",
  md: "size-12 text-base",
  lg: "size-14 text-base",
} as const;

export function Avatar({ initials, className, size = "sm" }: AvatarProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "brand-gradient inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white",
        sizeMap[size],
        className,
      )}
    >
      {initials}
    </span>
  );
}
