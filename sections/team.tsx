import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { TiltCard } from "@/components/common/tilt-card";
import { Avatar } from "@/components/common/avatar";
import { team } from "@/lib/content";

export function Team() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="The team"
          title="Builders obsessed with useful autonomy"
          description="A small, senior team from the companies that defined modern developer tools and applied AI."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal
              key={member.name}
              className="h-full"
              delay={(index % 3) * 0.06}
            >
              <TiltCard className="surface-gradient flex h-full items-center gap-4 rounded-2xl border border-border p-6">
                <Avatar
                  initials={member.initials}
                  size="lg"
                  className="relative z-10"
                />
                <div className="relative z-10">
                  <p className="font-medium tracking-tight">{member.name}</p>
                  <p className="text-sm text-muted">{member.role}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
