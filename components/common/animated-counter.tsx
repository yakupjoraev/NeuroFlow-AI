"use client";

import { useEffect, useRef } from "react";
import { animate, m, useInView, useMotionValue, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
}

export function AnimatedCounter({
  value,
  duration = 1.6,
  decimals,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reducedMotion = usePrefersReducedMotion();

  const fractionDigits = decimals ?? (Number.isInteger(value) ? 0 : 1);

  // Counting happens on a motion value so the React tree never re-renders
  // once per frame.
  const count = useMotionValue(0);
  const text = useTransform(count, (latest) =>
    latest.toLocaleString("en-US", {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }),
  );

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reducedMotion, value, duration, count]);

  return (
    <m.span ref={ref} className="tabular-nums">
      {text}
    </m.span>
  );
}
