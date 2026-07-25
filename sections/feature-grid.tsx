import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { IconBadge } from "@/components/common/icon-badge";
import { featureHighlights } from "@/lib/content";

export function FeatureGrid() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Everything an autonomous team needs"
          description="A complete platform for building, running, and governing AI agents in production."
        />
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {featureHighlights.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal
                key={feature.title}
                delay={(index % 3) * 0.06}
                className="bg-background p-8 transition-colors hover:bg-surface lg:p-10"
              >
                <IconBadge icon={Icon} size="sm" />
                <h3 className="font-display mt-6 text-xl font-bold tracking-[-0.025em]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
