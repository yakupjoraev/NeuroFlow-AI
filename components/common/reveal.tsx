"use client";

import type { ReactNode } from "react";
import { m, type Variants } from "framer-motion";
import { blurReveal, fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealVariant = "fade-up" | "blur";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  as?: "div" | "li" | "span";
}

const variantMap: Record<RevealVariant, Variants> = {
  "fade-up": fadeUp,
  blur: blurReveal,
};

export function Reveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = m[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
