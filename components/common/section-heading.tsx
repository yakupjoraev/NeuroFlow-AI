import type { ReactNode } from "react";
import { Reveal } from "@/components/common/reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "mx-auto max-w-2xl items-center text-center"
          : "max-w-2xl items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Badge variant="brand">{eyebrow}</Badge>
        </Reveal>
      ) : null}
      <Reveal variant="blur">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.05}>
          <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
