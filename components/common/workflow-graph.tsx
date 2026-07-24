"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Database,
  GitBranch,
  Inbox,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { easeOutExpo } from "@/lib/motion";

const nodes = [
  { id: "trigger", x: 60, y: 90, label: "Trigger", icon: Inbox },
  { id: "agent", x: 210, y: 150, label: "Agent", icon: Bot },
  { id: "data", x: 60, y: 220, label: "Enrich", icon: Database },
  { id: "branch", x: 360, y: 80, label: "Route", icon: GitBranch },
  { id: "guard", x: 360, y: 220, label: "Approve", icon: ShieldCheck },
  { id: "action", x: 500, y: 150, label: "Execute", icon: Send },
];

const edges = [
  "M60 90 C 130 90, 150 150, 210 150",
  "M60 220 C 130 220, 150 150, 210 150",
  "M210 150 C 280 150, 300 80, 360 80",
  "M210 150 C 280 150, 300 220, 360 220",
  "M360 80 C 430 80, 450 150, 500 150",
  "M360 220 C 430 220, 450 150, 500 150",
];

export function WorkflowGraph() {
  const { x, y } = useMousePosition();
  const reducedMotion = usePrefersReducedMotion();

  const parallaxX = reducedMotion
    ? 0
    : (x / (typeof window !== "undefined" ? window.innerWidth : 1) - 0.5) * 16;
  const parallaxY = reducedMotion
    ? 0
    : (y / (typeof window !== "undefined" ? window.innerHeight : 1) - 0.5) * 16;

  return (
    <motion.div
      className="relative w-full"
      animate={{ x: parallaxX, y: parallaxY }}
      transition={{ type: "spring", stiffness: 40, damping: 20 }}
    >
      <svg
        viewBox="0 0 560 300"
        className="w-full"
        role="img"
        aria-label="A NeuroFlow automation graph connecting a trigger, an agent, enrichment, routing, approval, and execution steps."
      >
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="560" y2="0">
            <stop offset="0" stopColor="var(--brand-from)" />
            <stop offset="0.5" stopColor="var(--brand-via)" />
            <stop offset="1" stopColor="var(--brand-to)" />
          </linearGradient>
        </defs>

        {edges.map((d, index) => (
          <g key={d}>
            <path
              d={d}
              fill="none"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
            />
            <motion.path
              d={d}
              fill="none"
              stroke="url(#edge)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="6 200"
              initial={{ strokeDashoffset: 206 }}
              animate={
                reducedMotion ? undefined : { strokeDashoffset: [206, 0] }
              }
              transition={{
                duration: 2.6,
                delay: index * 0.25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>
        ))}

        {nodes.map((node, index) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, ease: easeOutExpo }}
          >
            <rect
              x={node.x - 26}
              y={node.y - 20}
              width="52"
              height="40"
              rx="12"
              fill="var(--surface)"
              stroke="var(--border-strong)"
              strokeWidth="1"
            />
            {node.id === "agent" ? (
              <motion.rect
                x={node.x - 26}
                y={node.y - 20}
                width="52"
                height="40"
                rx="12"
                fill="none"
                stroke="url(#edge)"
                strokeWidth="1.6"
                animate={
                  reducedMotion ? undefined : { opacity: [0.4, 1, 0.4] }
                }
                transition={{ duration: 2.4, repeat: Infinity }}
              />
            ) : null}
          </motion.g>
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.id}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-primary"
              style={
                {
                  left: `${(node.x / 560) * 100}%`,
                  top: `${(node.y / 300) * 100}%`,
                } as React.CSSProperties
              }
            >
              <Icon className="size-4" aria-hidden />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
