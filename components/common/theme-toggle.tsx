"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground transition-colors hover:bg-surface-2",
        className,
      )}
    >
      {mounted ? (
        <AnimatePresence mode="wait" initial={false}>
          <m.span
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="absolute inline-flex"
          >
            {isDark ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </m.span>
        </AnimatePresence>
      ) : (
        <Sun className="size-4 opacity-0" />
      )}
    </button>
  );
}
