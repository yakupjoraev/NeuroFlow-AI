"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
}

export function TiltCard({ children, className, max = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rx: 0, ry: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const finePointer = useMediaQuery("(pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = finePointer && !reducedMotion;

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTransform({ rx: (0.5 - py) * max * 2, ry: (px - 0.5) * max * 2 });
    setGlow({ x: px * 100, y: py * 100 });
  };

  const reset = () => {
    setTransform({ rx: 0, ry: 0 });
    setGlow({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      animate={{ rotateX: transform.rx, rotateY: transform.ry }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className={cn("group relative [transform-style:preserve-3d]", className)}
    >
      <div
        aria-hidden
        className="spotlight pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={
          {
            "--spot-x": `${glow.x}%`,
            "--spot-y": `${glow.y}%`,
          } as React.CSSProperties
        }
      />
      {children}
    </motion.div>
  );
}
