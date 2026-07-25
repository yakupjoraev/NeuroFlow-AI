"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { pricing } from "@/lib/content";
import { cn } from "@/lib/utils";

interface PricingProps {
  withHeading?: boolean;
}

export function Pricing({ withHeading = true }: PricingProps) {
  const [yearly, setYearly] = useState(true);

  return (
    <Section id="pricing" className="border-t border-border">
      <Container>
        {withHeading ? (
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing that scales with you"
            description="Start free. Upgrade when your automation footprint grows. Cancel anytime."
          />
        ) : null}

        <div className="mt-12 flex items-center gap-4">
          <span
            className={cn(
              "text-sm transition-colors",
              yearly ? "text-muted" : "text-foreground",
            )}
          >
            Monthly
          </span>
          <Switch
            checked={yearly}
            onCheckedChange={setYearly}
            aria-label="Toggle yearly billing"
          />
          <span
            className={cn(
              "flex items-center gap-3 text-sm transition-colors",
              yearly ? "text-foreground" : "text-muted",
            )}
          >
            Yearly
            <Badge variant="brand">Save 20%</Badge>
          </span>
        </div>

        {/* Hairline columns, no elevation. The highlighted tier is marked by an
            accent rule and a filled button, not by a shadow. */}
        <div className="mt-12 grid border-t border-border lg:grid-cols-3">
          {pricing.map((tier, index) => {
            const price = yearly ? tier.yearly : tier.monthly;
            const isCustom = price < 0;

            return (
              <Reveal key={tier.name} className="h-full" delay={index * 0.08}>
                <div
                  className={cn(
                    "flex h-full flex-col border-b border-border px-0 py-10 lg:border-b-0 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0",
                    tier.highlighted && "relative",
                  )}
                >
                  {tier.highlighted ? (
                    <span
                      aria-hidden
                      className="absolute -top-px left-0 h-px w-full bg-primary lg:left-8 lg:w-[calc(100%-2rem)]"
                    />
                  ) : null}

                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="display-md">{tier.name}</h3>
                    {tier.highlighted ? (
                      <span className="label-mono text-primary">
                        Most popular
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 min-h-12 max-w-[34ch] text-sm leading-relaxed text-muted">
                    {tier.tagline}
                  </p>

                  <div className="mt-8 flex items-baseline gap-1.5">
                    {isCustom ? (
                      <span className="font-mono text-4xl font-medium tracking-[-0.03em]">
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="font-mono text-4xl font-medium tabular-nums tracking-[-0.03em]">
                          ${price}
                        </span>
                        <span className="text-sm text-muted">/ mo</span>
                      </>
                    )}
                  </div>

                  <Button
                    asChild
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>

                  <ul className="mt-10 flex flex-col gap-3.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check
                          weight="bold"
                          aria-hidden
                          className="mt-0.5 size-3.5 shrink-0 text-primary"
                        />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
