import Image from "next/image";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { useCases } from "@/lib/content";
import { frames } from "@/lib/media";
import { cn } from "@/lib/utils";

// Four use cases, four cells. The grid is shaped around the content, not padded
// out to a tidy rectangle.
const cellClasses = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-3",
];

const cellFrames = [frames.operations, null, frames.support, null];

export function UseCases() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Built for the teams that keep the business moving"
          description="Every department has repetitive, high-volume work. NeuroFlow gives each of them a tireless operator."
        />

        <div className="mt-16 grid gap-px bg-border lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const frame = cellFrames[index];
            const isWide = index === 3;

            return (
              <Reveal
                key={useCase.title}
                delay={index * 0.06}
                className={cn("relative bg-background", cellClasses[index])}
              >
                <div
                  className={cn(
                    "relative flex h-full flex-col justify-end overflow-hidden p-8 lg:p-10",
                    frame ? "min-h-[22rem] lg:min-h-[26rem]" : "min-h-[16rem]",
                    isWide && "bg-surface",
                  )}
                >
                  {frame ? (
                    <>
                      <Image
                        src={frame.src}
                        alt={frame.alt}
                        fill
                        sizes="(min-width: 1024px) 66vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-background/45" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent" />
                    </>
                  ) : null}

                  <div className="relative">
                    <Icon
                      weight="light"
                      aria-hidden
                      className="size-7 text-primary"
                    />
                    <h3 className="display-md mt-6">{useCase.title}</h3>
                    <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-muted">
                      {useCase.description}
                    </p>
                    <p className="mt-8 font-mono text-3xl font-medium tracking-[-0.03em] text-primary">
                      {useCase.metric}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {useCase.metricLabel}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-muted">Illustrative figures.</p>
      </Container>
    </Section>
  );
}
