import type { ReactNode } from "react";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-16 pt-24 sm:pt-32">
      <Container className="flex flex-col items-start">
        <Reveal>
          <p className="label-mono mb-8 text-primary">{eyebrow}</p>
        </Reveal>
        <Reveal variant="blur">
          <h1 className="display-xl max-w-[18ch]">{title}</h1>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted sm:text-xl">
            {description}
          </p>
        </Reveal>
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}
