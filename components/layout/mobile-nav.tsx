"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site";
import { megaMenu } from "@/lib/content";
import { easeOutExpo } from "@/lib/motion";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const menuLinks = megaMenu.flatMap((group) => group.items);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground"
      >
        <Menu className="size-4" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
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
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface/60"
              >
                <X className="size-4" />
              </button>
            </div>

            <motion.nav
              aria-label="Mobile"
              className="flex flex-1 flex-col gap-2 overflow-y-auto px-5 pb-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {navItems.map((item) => (
                <motion.div
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
                    href={item.href}
                    className="block border-b border-border py-4 text-2xl font-medium tracking-tight"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-6 grid grid-cols-2 gap-3">
                {menuLinks.map((menuItem) => (
                  <Link
                    key={menuItem.label}
                    href={menuItem.href}
                    className="flex flex-col gap-2 rounded-xl border border-border bg-surface/50 p-4"
                  >
                    <menuItem.icon className="size-4 text-primary" />
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
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
