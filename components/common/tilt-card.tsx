"use client";

import { useRef, type ReactNode } from "react";
import {
  m,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useInteractiveMotion } from "@/hooks/use-interactive-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
}

export function TiltCard({ children, className, max = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useInteractiveMotion();

  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(340px circle at ${glowX}% ${glowY}%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)`;

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * max * 2);
    rotateY.set((px - 0.5) * max * 2);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <m.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY }}
      className={cn("group relative [transform-style:preserve-3d]", className)}
    >
      <m.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </m.div>
  );
}
