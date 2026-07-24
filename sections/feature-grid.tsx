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
          eyebrow="Capabilities"
          title="Everything an autonomous team needs"
          description="A complete platform for building, running, and governing AI agents in production."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {featureHighlights.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal
                key={feature.title}
                delay={(index % 3) * 0.06}
                className="group bg-background p-8 transition-colors hover:bg-surface"
              >
                <IconBadge
                  icon={Icon}
                  className="transition-colors group-hover:border-primary/40"
                />
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
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
