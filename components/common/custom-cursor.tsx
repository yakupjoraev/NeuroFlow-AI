"use client";

import { useEffect, useRef, useState } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";
import { useInteractiveMotion } from "@/hooks/use-interactive-motion";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea";

export function CustomCursor() {
  const enabled = useInteractiveMotion();
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const activeRef = useRef(false);
  const visibleRef = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
      const target = event.target as HTMLElement;
      const isActive = Boolean(target.closest(INTERACTIVE_SELECTOR));
      if (isActive !== activeRef.current) {
        activeRef.current = isActive;
        setActive(isActive);
      }
    };
    const leave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <m.div
        className="absolute size-2 rounded-full bg-primary"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0, scale: active ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <m.div
        className="absolute size-9 rounded-full border border-primary/60"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: active ? 1.5 : 1,
          borderColor: active
            ? "color-mix(in oklab, var(--primary) 90%, transparent)"
            : "color-mix(in oklab, var(--primary) 45%, transparent)",
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
