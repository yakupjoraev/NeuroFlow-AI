import { Hero } from "@/sections/hero";
import { LogoCloud } from "@/sections/logo-cloud";
import { Features } from "@/sections/features";
import { Stats } from "@/sections/stats";
import { UseCases } from "@/sections/use-cases";
import { HowItWorks } from "@/sections/how-it-works";
import { Testimonials } from "@/sections/testimonials";
import { Pricing } from "@/sections/pricing";
import { Faq } from "@/sections/faq";
import { Cta } from "@/sections/cta";
import { JsonLd } from "@/components/common/json-ld";
import { faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <Hero />
      <LogoCloud />
      <Features />
      <Stats />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
