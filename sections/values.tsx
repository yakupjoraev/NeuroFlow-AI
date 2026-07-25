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
        <SectionHeading title="Principles that shape the product" />
        <div className="mt-16 grid gap-y-12 sm:grid-cols-2 sm:gap-x-16">
          {companyValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal
                key={value.title}
                delay={(index % 2) * 0.08}
                className="flex flex-col"
              >
                <IconBadge icon={Icon} />
                <h3 className="display-md mt-6">{value.title}</h3>
                <p className="mt-3 max-w-[44ch] leading-relaxed text-muted">
                  {value.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
