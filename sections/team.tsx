import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Avatar } from "@/components/common/avatar";
import { team } from "@/lib/content";

export function Team() {
  return (
    <Section className="border-t border-border">
      <Container>
        <SectionHeading
          title="Builders obsessed with useful autonomy"
          description="A small, senior team from the companies that defined modern developer tools and applied AI."
        />
        <ul className="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal
              key={member.name}
              as="li"
              delay={(index % 3) * 0.06}
              className="flex items-center gap-4 border-b border-border py-6 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <Avatar initials={member.initials} size="lg" />
              <div>
                <p className="font-display text-lg font-bold tracking-[-0.03em]">
                  {member.name}
                </p>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
