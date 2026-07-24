"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { timeline } from "@/lib/content";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

export function HowItWorks() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const root = rootRef.current;
    const line = lineRef.current;
    if (!root || !line) return;

    let cleanup = () => {};

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top 65%",
              end: "bottom 75%",
              scrub: 0.6,
            },
          },
        );

        const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
        steps.forEach((step) => {
          gsap.fromTo(
            step,
            { opacity: 0.25, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      }, root);

      cleanup = () => ctx.revert();
    })();

    return () => cleanup();
  }, [reducedMotion]);

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From idea to running automation in{" "}
              <span className="text-gradient">four steps</span>
            </>
          }
          description="No implementation project. No consultants. Connect your stack and describe the outcome you want."
        />

        <div ref={rootRef} className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-[1.375rem] top-2 h-[calc(100%-1rem)] w-px bg-border md:left-1/2"
          >
            <div
              ref={lineRef}
              className="brand-gradient h-full w-full origin-top"
            />
          </div>

          <ol className="flex flex-col gap-10 md:gap-16">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const alignRight = index % 2 === 1;
              return (
                <li
                  key={item.step}
                  data-step
                  className="relative pl-16 md:grid md:grid-cols-2 md:items-center md:gap-10 md:pl-0"
                >
                  <span className="absolute left-0 top-0 z-10 inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-primary md:left-1/2 md:-translate-x-1/2">
                    <Icon className="size-5" />
                  </span>
                  <div
                    className={
                      alignRight
                        ? "md:col-start-2 md:pl-10"
                        : "md:col-start-1 md:pr-10 md:text-right"
                    }
                  >
                    <span className="font-mono text-xs uppercase tracking-wider text-muted">
                      Step {item.step}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
