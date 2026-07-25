import type { Metadata } from "next";
import { PageHero } from "@/sections/page-hero";
import { Pricing } from "@/sections/pricing";
import { Faq } from "@/sections/faq";
import { Cta } from "@/sections/cta";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for NeuroFlow AI. Start free forever, scale to unlimited runs, or talk to sales for enterprise security and SLAs.",
  path: "/pricing",
  keywords: ["pricing", "plans", "free tier", "enterprise"],
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pricing that grows with your automation"
        description="No seat taxes, no surprises. Pay for the runs you use and unlock more as your team scales."
      />
      <Pricing withHeading={false} />
      <Faq />
      <Cta />
    </>
  );
}
