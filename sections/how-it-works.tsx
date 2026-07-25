"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/common/reveal";
import { timeline } from "@/lib/content";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

export function HowItWorks() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    let cleanup = () => {};

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Horizontal pan only above lg. Below that the steps are a plain vertical
      // list and no scroll hijacking happens at all.
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const distance = () => track.scrollWidth - window.innerWidth;
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        return () => tween.kill();
      });

      cleanup = () => mm.revert();
    })();

    return () => cleanup();
  }, [reducedMotion]);

  return (
    // The heading travels inside the track, so pinning starts on the heading
    // itself and the pan never begins mid-panel.
    <div ref={wrapRef} className="relative overflow-hidden border-t border-border">
      <div
        ref={trackRef}
        className="flex flex-col gap-16 px-5 py-24 sm:px-8 sm:py-32 lg:h-[100dvh] lg:w-max lg:flex-row lg:items-center lg:gap-0 lg:px-0 lg:py-0"
      >
        <div className="flex flex-col justify-center lg:h-[62vh] lg:w-[44vw] lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))] lg:pr-16 xl:w-[38vw]">
          <Reveal variant="blur">
            <h2 className="display-lg max-w-[20ch]">
              From idea to running automation in four steps
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-muted">
              No implementation project. No consultants. Connect your stack and
              describe the outcome you want.
            </p>
          </Reveal>
        </div>

        {timeline.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.step}
              className="flex flex-col justify-center border-border lg:h-[62vh] lg:w-[34vw] lg:border-l lg:px-14 xl:w-[28vw]"
            >
              <Icon weight="light" aria-hidden className="size-8 text-primary" />
              <h3 className="display-md mt-8 max-w-[18ch]">{item.title}</h3>
              <p className="mt-5 max-w-[40ch] leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
