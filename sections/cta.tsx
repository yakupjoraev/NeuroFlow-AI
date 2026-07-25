import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/common/magnetic";
import { frames } from "@/lib/media";

export function Cta() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={frames.cta.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <Container className="pb-20 pt-32 lg:pb-28">
        <Reveal variant="blur">
          <h2 className="display-lg max-w-[20ch]">
            Give your team back its best hours
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted">
            Join thousands of teams running their operations on autopilot. Start
            free, scale when you are ready.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic>
              <Button asChild size="lg">
                <Link href="/contact">
                  Start automating
                  <ArrowRight weight="bold" className="size-4" />
                </Link>
              </Button>
            </Magnetic>
            <Button asChild variant="secondary" size="lg">
              <Link href="/pricing">Compare plans</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
