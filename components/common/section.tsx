import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("relative py-24 sm:py-32 lg:py-40", className)}
      {...props}
    >
      {children}
    </section>
  );
}
