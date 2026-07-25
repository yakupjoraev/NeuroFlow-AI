import type { Metadata } from "next";
import { PageHero } from "@/sections/page-hero";
import { Values } from "@/sections/values";
import { Team } from "@/sections/team";
import { Stats } from "@/sections/stats";
import { Cta } from "@/sections/cta";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "NeuroFlow AI is on a mission to give teams their best hours back by making autonomous work trustworthy, explainable, and fast.",
  path: "/about",
  keywords: ["about", "company", "mission", "team"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We are giving teams back their best hours"
        description="NeuroFlow started with a simple frustration: the most talented teams spend their days on coordination, not craft. We build the autonomous layer that takes the busywork off their plate."
      />
      <Stats />
      <Values />
      <Team />
      <Cta />
    </>
  );
}
