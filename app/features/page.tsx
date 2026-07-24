import type { Metadata } from "next";
import { PageHero } from "@/sections/page-hero";
import { Features } from "@/sections/features";
import { FeatureGrid } from "@/sections/feature-grid";
import { HowItWorks } from "@/sections/how-it-works";
import { Stats } from "@/sections/stats";
import { Cta } from "@/sections/cta";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Features",
  description:
    "Build, run, and observe autonomous AI agents on one platform. Visual builder, 300+ integrations, typed SDK, and enterprise governance.",
  path: "/features",
  keywords: ["agent builder", "workflow engine", "AI integrations"],
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title={
          <>
            The platform for <span className="text-gradient">autonomous</span>{" "}
            operations
          </>
        }
        description="From a visual canvas to a typed SDK, NeuroFlow gives every team the tools to automate real work and keep full control."
      />
      <Features />
      <FeatureGrid />
      <HowItWorks />
      <Stats />
      <Cta />
    </>
  );
}
