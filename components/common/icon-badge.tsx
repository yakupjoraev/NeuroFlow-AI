import type { Icon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: Icon;
  className?: string;
  size?: "sm" | "md";
}

export function IconBadge({ icon: Icon, className, size = "md" }: IconBadgeProps) {
  return (
    <Icon
      aria-hidden
      weight="light"
      className={cn("text-primary", size === "md" ? "size-7" : "size-5", className)}
    />
  );
}
