import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { TiltCard } from "@/components/common/tilt-card";
import { IconBadge } from "@/components/common/icon-badge";
import { bentoFeatures } from "@/lib/content";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  large?: boolean;
}

function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
  large = false,
}: FeatureCardProps) {
  return (
    <TiltCard
      className={cn(
        "surface-gradient h-full rounded-2xl border border-border p-6 sm:p-7",
        className,
      )}
    >
      <div className="relative z-10 flex h-full flex-col">
        <IconBadge icon={Icon} />
        <h3
          className={cn(
            "mt-5 font-semibold tracking-tight",
            large ? "text-2xl" : "text-lg",
          )}
        >
          {title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          {description}
        </p>
        {large ? (
          <div className="mt-auto pt-8">
            <div className="bg-dots h-32 w-full rounded-xl border border-border mask-fade-y" />
          </div>
        ) : null}
      </div>
    </TiltCard>
  );
}

export function Features() {
  const [big, wideA, wideB, midA, midB] = bentoFeatures;

  return (
    <Section id="features">
      <Container>
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              One canvas for every <span className="text-gradient">agent</span>,
              workflow, and tool
            </>
          }
          description="Build, run, and observe autonomous automations without stitching together five different products."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal className="h-full lg:col-span-2 lg:row-span-2">
            <FeatureCard {...big} large />
          </Reveal>
          <Reveal className="h-full" delay={0.05}>
            <FeatureCard {...wideA} />
          </Reveal>
          <Reveal className="h-full" delay={0.1}>
            <FeatureCard {...wideB} />
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Reveal className="h-full">
            <FeatureCard {...midA} />
          </Reveal>
          <Reveal className="h-full" delay={0.05}>
            <FeatureCard {...midB} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
