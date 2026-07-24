"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { testimonials } from "@/lib/content";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const reducedMotion = usePrefersReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    reducedMotion
      ? []
      : [Autoplay({ delay: 4500, stopOnInteraction: true })],
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Loved by operators"
            title={
              <>
                The teams behind the{" "}
                <span className="text-gradient">numbers</span>
              </>
            }
          />
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => emblaApi?.scrollPrev()}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground transition-colors hover:bg-surface-2"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => emblaApi?.scrollNext()}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground transition-colors hover:bg-surface-2"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="surface-gradient flex min-w-0 shrink-0 grow-0 basis-[88%] flex-col rounded-2xl border border-border p-7 sm:basis-[46%] lg:basis-[31%]"
              >
                <Quote className="size-7 text-primary/50" aria-hidden />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="brand-gradient inline-flex size-10 items-center justify-center rounded-full text-sm font-semibold text-white">
                    {testimonial.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium">
                      {testimonial.author}
                    </span>
                    <span className="text-xs text-muted">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
          {snaps.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === selected}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === selected
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-border-strong hover:bg-muted",
              )}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
