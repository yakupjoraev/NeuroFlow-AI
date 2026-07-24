import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md";
}

export function IconBadge({ icon: Icon, className, size = "md" }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-border bg-surface text-primary",
        size === "md" ? "size-11" : "size-9",
        className,
      )}
    >
      <Icon className={size === "md" ? "size-5" : "size-4"} aria-hidden />
    </span>
  );
}
