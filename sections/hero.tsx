"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/common/magnetic";
import { frames } from "@/lib/media";
import { easeOutExpo } from "@/lib/motion";

// Two lines by design: the reveal masks one line at a time, so the break is
// structural rather than decorative.
const lines = ["Automate the work", "that runs your business."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The frame drifts and dims as the page moves off it. Communicates that the
  // hero is a shot being left behind, not a sticky decoration.
  const frameY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const frameOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100dvh] items-end overflow-hidden pt-24"
    >
      <m.div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={reducedMotion ? undefined : { y: frameY, opacity: frameOpacity }}
      >
        <Image
          src={frames.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Scrim: keeps headline and CTA contrast well past AA over photography. */}
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      </m.div>

      <div className="mx-auto w-full max-w-[1400px] px-5 pb-20 sm:px-8 lg:pb-28">
        <h1 className="display-xl max-w-[16ch]">
          {lines.map((line, index) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <m.span
                className="block"
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + index * 0.12,
                  ease: easeOutExpo,
                }}
              >
                {line}
              </m.span>
            </span>
          ))}
        </h1>

        <m.p
          className="mt-8 max-w-[46ch] text-lg leading-relaxed text-muted sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: easeOutExpo }}
        >
          Reasoning agents that plan, execute, and improve your operations
          across every tool your team already uses.
        </m.p>

        <m.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: easeOutExpo }}
        >
          <Magnetic>
            <Button asChild size="lg">
              <Link href="/contact">
                Start automating
                <ArrowRight weight="bold" className="size-4" />
              </Link>
            </Button>
          </Magnetic>
          <Button asChild variant="secondary" size="lg">
            <Link href="/features">How it works</Link>
          </Button>
        </m.div>
      </div>
    </section>
  );
}
