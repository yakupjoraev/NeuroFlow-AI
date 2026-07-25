"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { bentoFeatures } from "@/lib/content";
import { frames } from "@/lib/media";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

const featureFrames = [
  frames.agentBuilder,
  frames.connectors,
  frames.sdk,
  frames.observability,
  frames.governance,
];

export function Features() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const root = rootRef.current;
    if (!root) return;

    let cleanup = () => {};

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]");
        // Each card recedes as the next one arrives, so the stack reads as one
        // continuous shot change rather than a list of panels.
        cards.forEach((card, index) => {
          if (index === cards.length - 1) return;
          gsap.to(card, {
            scale: 0.94,
            opacity: 0.4,
            ease: "none",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        });
      }, root);

      cleanup = () => ctx.revert();
    })();

    return () => cleanup();
  }, [reducedMotion]);

  return (
    <section id="features" className="relative pt-24 sm:pt-32 lg:pt-40">
      <Container>
        <SectionHeading
          eyebrow="The platform"
          title="One canvas for every agent, workflow, and tool"
          description="Build, run, and observe autonomous automations without stitching together five different products."
        />
      </Container>

      <div ref={rootRef} className="relative mt-16 lg:mt-24">
        {bentoFeatures.map((feature, index) => {
          const frame = featureFrames[index];
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              data-stack-card
              className="sticky top-16 h-[min(78vh,44rem)] origin-top will-change-transform"
            >
              <div className="relative h-full overflow-hidden border-t border-border bg-background">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/45" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent" />

                <div className="absolute inset-0 flex items-end">
                  <Container className="pb-12 lg:pb-16">
                    <Icon
                      weight="light"
                      aria-hidden
                      className="size-8 text-primary"
                    />
                    <h3 className="display-md mt-6 max-w-[22ch]">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-[46ch] leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </Container>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
