"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { navItems } from "@/lib/site";
import { megaMenu } from "@/lib/content";
import { easeOutExpo } from "@/lib/motion";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    const focusTimer = window.setTimeout(
      () => firstLinkRef.current?.focus(),
      60,
    );
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
      trigger?.focus();
    };
  }, [open]);

  const menuLinks = megaMenu.flatMap((group) => group.items);

  return (
    <div className="md:hidden">
      <IconButton
        ref={triggerRef}
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>

      <AnimatePresence>
        {open ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col bg-background/95 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-semibold tracking-tight">NeuroFlow</span>
              <IconButton aria-label="Close menu" onClick={() => setOpen(false)}>
                <X />
              </IconButton>
            </div>

            <m.nav
              aria-label="Mobile"
              className="flex flex-1 flex-col gap-2 overflow-y-auto px-5 pb-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {navItems.map((item, index) => (
                <m.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { ease: easeOutExpo },
                    },
                  }}
                >
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    className="block border-b border-border py-4 text-2xl font-medium tracking-tight"
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}

              <div className="mt-6 grid grid-cols-2 gap-3">
                {menuLinks.map((menuItem) => (
                  <Link
                    key={menuItem.label}
                    href={menuItem.href}
                    className="flex flex-col gap-2 rounded-xl border border-border bg-surface/50 p-4"
                  >
                    <menuItem.icon className="size-4 text-primary" aria-hidden />
                    <span className="text-sm font-medium">
                      {menuItem.label}
                    </span>
                  </Link>
                ))}
              </div>

              <Button asChild size="lg" className="mt-8 w-full">
                <Link href="/contact">
                  Get started
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </m.nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
