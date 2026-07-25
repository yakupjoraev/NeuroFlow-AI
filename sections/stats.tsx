import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { AnimatedCounter } from "@/components/common/animated-counter";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="relative border-y border-border py-16 sm:py-20">
      <Container>
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className="border-border px-0 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="flex flex-col gap-3">
                <span className="font-mono text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  {stat.prefix}
                  <AnimatedCounter value={stat.value} />
                  <span className="text-primary">{stat.suffix}</span>
                </span>
                <span className="max-w-[18ch] text-sm leading-snug text-muted">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
        <p className="mt-12 text-xs text-muted">
          Illustrative platform figures.
        </p>
      </Container>
    </section>
  );
}
