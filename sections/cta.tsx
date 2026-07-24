import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/common/magnetic";

export function Cta() {
  return (
    <Section className="pb-8">
      <Container>
        <Reveal variant="blur">
          <div className="relative overflow-hidden rounded-3xl border border-border px-6 py-16 text-center sm:px-12 sm:py-20">
            <div aria-hidden className="absolute inset-0 -z-10">
              <div className="bg-grid absolute inset-0 mask-radial opacity-60" />
              <div className="aurora-via absolute left-1/2 top-full size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]" />
            </div>
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Give your team back its{" "}
              <span className="text-gradient">best hours</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted sm:text-lg">
              Join thousands of teams running their operations on autopilot.
              Start free, scale when you are ready.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start for free
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Button asChild variant="secondary" size="lg">
                <Link href="/pricing">Compare plans</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
