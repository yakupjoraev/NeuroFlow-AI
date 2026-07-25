"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Avatar } from "@/components/common/avatar";
import { testimonials } from "@/lib/content";
import { easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [selected, setSelected] = useState(0);
  const active = testimonials[selected];

  return (
    <Section className="border-t border-border">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <figure className="flex flex-col justify-between">
            <AnimatePresence mode="wait" initial={false}>
              <m.blockquote
                key={active.author}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: easeOutExpo }}
                className="font-display max-w-[54ch] text-2xl font-medium leading-[1.25] tracking-[-0.02em] sm:text-3xl"
              >
                {active.quote}
              </m.blockquote>
            </AnimatePresence>

            <figcaption className="mt-12 flex items-center gap-4">
              <Avatar initials={active.initials} />
              <span className="flex flex-col">
                <span className="text-sm font-medium">{active.author}</span>
                <span className="text-sm text-muted">
                  {active.role}, {active.company}
                </span>
              </span>
            </figcaption>
          </figure>

          {/* The company list doubles as the control. Reading the names is the
              social proof; clicking one swaps the quote. */}
          <ul className="flex flex-col border-t border-border">
            {testimonials.map((testimonial, index) => (
              <li key={testimonial.author}>
                <button
                  type="button"
                  onClick={() => setSelected(index)}
                  aria-pressed={index === selected}
                  className={cn(
                    "group flex w-full items-baseline justify-between gap-4 border-b border-border py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    index === selected
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  <span className="font-display text-lg font-bold tracking-[-0.03em]">
                    {testimonial.company}
                  </span>
                  <span className="text-xs">{testimonial.role}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
