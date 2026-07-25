import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pb-20 pt-32">
      <Container className="flex flex-col items-start">
        <p className="font-mono text-7xl font-medium tracking-[-0.04em] text-primary sm:text-8xl">
          404
        </p>
        <h1 className="display-lg mt-8 max-w-[20ch]">
          This page took a different path
        </h1>
        <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted">
          The page you are looking for was moved, renamed, or never existed. Let
          us route you back to somewhere useful.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/">
            <ArrowLeft weight="bold" className="size-4" />
            Back to home
          </Link>
        </Button>
      </Container>
    </section>
  );
}
