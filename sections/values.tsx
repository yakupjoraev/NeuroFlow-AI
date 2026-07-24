import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
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
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-primary">
                  <Icon className="size-5" />
                </span>
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
