import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { AnimatedCounter } from "@/components/common/animated-counter";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <Section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-border surface-gradient">
          <dl className="grid grid-cols-2 divide-y divide-border sm:divide-y-0 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.08}
                className="flex flex-col gap-2 border-border p-8 sm:border-l first:border-l-0 lg:p-10"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  {stat.prefix}
                  <AnimatedCounter value={stat.value} />
                  <span className="text-gradient">{stat.suffix}</span>
                </dd>
                <p className="text-sm text-muted">{stat.label}</p>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
