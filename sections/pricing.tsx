"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
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
    <Section id="pricing">
      <Container>
        {withHeading ? (
          <SectionHeading
            eyebrow="Pricing"
            title={
              <>
                Simple pricing that{" "}
                <span className="text-gradient">scales with you</span>
              </>
            }
            description="Start free. Upgrade when your automation footprint grows. Cancel anytime."
          />
        ) : null}

        <div className="mt-10 flex items-center justify-center gap-4">
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
              "flex items-center gap-2 text-sm transition-colors",
              yearly ? "text-foreground" : "text-muted",
            )}
          >
            Yearly
            <Badge variant="brand">Save 20%</Badge>
          </span>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricing.map((tier, index) => {
            const price = yearly ? tier.yearly : tier.monthly;
            const isCustom = price < 0;
            return (
              <Reveal key={tier.name} className="h-full" delay={index * 0.08}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border p-7",
                    tier.highlighted
                      ? "border-primary/40 bg-surface shadow-[0_20px_60px_-20px_var(--glow)]"
                      : "border-border surface-gradient",
                  )}
                >
                  {tier.highlighted ? (
                    <span className="absolute -top-3 left-7">
                      <Badge variant="brand">Most popular</Badge>
                    </span>
                  ) : null}
                  <h3 className="text-lg font-semibold tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="mt-2 min-h-10 text-sm text-muted">
                    {tier.tagline}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    {isCustom ? (
                      <span className="text-4xl font-semibold tracking-tight">
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="text-4xl font-semibold tracking-tight tabular-nums">
                          ${price}
                        </span>
                        <span className="text-sm text-muted">/ mo</span>
                      </>
                    )}
                  </div>
                  <Button
                    asChild
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="mt-6 w-full"
                  >
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
                  <ul className="mt-7 flex flex-col gap-3 border-t border-border pt-6">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
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
