import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { IconBadge } from "@/components/common/icon-badge";
import { companyValues } from "@/lib/content";

export function Values() {
  return (
    <Section>
      <Container>
        <SectionHeading
          align="left"
          eyebrow="What we believe"
          title="Principles that shape the product"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {companyValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal
                key={value.title}
                delay={(index % 2) * 0.08}
                className="surface-gradient flex gap-5 rounded-2xl border border-border p-7"
              >
                <IconBadge icon={Icon} className="shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
