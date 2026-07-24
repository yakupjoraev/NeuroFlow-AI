import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { TiltCard } from "@/components/common/tilt-card";
import { IconBadge } from "@/components/common/icon-badge";
import { useCases } from "@/lib/content";

export function UseCases() {
  return (
    <Section>
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Use cases"
          title={
            <>
              Built for the teams that keep the{" "}
              <span className="text-gradient">business moving</span>
            </>
          }
          description="Every department has repetitive, high-volume work. NeuroFlow gives each of them a tireless operator."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Reveal key={useCase.title} className="h-full" delay={index * 0.06}>
                <TiltCard className="surface-gradient flex h-full flex-col rounded-2xl border border-border p-6">
                  <div className="relative z-10 flex h-full flex-col">
                    <IconBadge icon={Icon} />
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">
                      {useCase.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {useCase.description}
                    </p>
                    <div className="mt-auto pt-6">
                      <p className="text-2xl font-semibold tracking-tight text-gradient">
                        {useCase.metric}
                      </p>
                      <p className="text-xs text-muted">
                        {useCase.metricLabel}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
