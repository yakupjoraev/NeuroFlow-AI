"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Avatar } from "@/components/common/avatar";
import { IconButton } from "@/components/ui/icon-button";
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
            <IconButton
              aria-label="Previous testimonial"
              onClick={() => emblaApi?.scrollPrev()}
              className="size-11"
            >
              <ArrowLeft />
            </IconButton>
            <IconButton
              aria-label="Next testimonial"
              onClick={() => emblaApi?.scrollNext()}
              className="size-11"
            >
              <ArrowRight />
            </IconButton>
          </div>
        </div>

        <div
          className="mt-12 overflow-hidden"
          ref={emblaRef}
          role="group"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <div className="flex gap-4">
            {testimonials.map((testimonial, index) => (
              <figure
                key={testimonial.author}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${testimonials.length}`}
                className="surface-gradient flex min-w-0 shrink-0 grow-0 basis-[88%] flex-col rounded-2xl border border-border p-7 sm:basis-[46%] lg:basis-[31%]"
              >
                <Quote className="size-7 text-primary/50" aria-hidden />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <Avatar initials={testimonial.initials} />
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

        <div
          className="mt-8 flex justify-center gap-2"
          aria-label="Testimonial navigation"
        >
          {snaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === selected ? "true" : undefined}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                index === selected
                  ? "w-6 bg-primary"
                  : "w-2.5 bg-border-strong hover:bg-muted",
              )}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
