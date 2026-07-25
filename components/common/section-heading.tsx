import type { ReactNode } from "react";
import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /**
   * Small uppercase label above the title. Rationed on purpose: at most one per
   * three sections across a page, so most sections pass nothing here.
   */
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
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center"
          ? "mx-auto max-w-3xl items-center text-center"
          : "max-w-3xl items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <p className="label-mono mb-6 text-primary">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal variant="blur">
        <h2 className="display-lg">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
