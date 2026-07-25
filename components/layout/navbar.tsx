"use client";

import Link from "next/link";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 24;
    setScrolled((current) => (current === next ? current : next));
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "border-b border-border bg-background/92 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/contact">
              Start automating
              <ArrowRight weight="bold" className="size-4" />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
