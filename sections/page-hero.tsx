import type { ReactNode } from "react";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { Badge } from "@/components/ui/badge";

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
    <section className="relative overflow-hidden pt-36 pb-8 sm:pt-44">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <Badge variant="brand">{eyebrow}</Badge>
        </Reveal>
        <Reveal variant="blur">
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
        {children ? <div className="mt-9">{children}</div> : null}
      </Container>
    </section>
  );
}
