import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-36 pb-20">
      <Container className="flex flex-col items-center text-center">
        <p className="brand-gradient bg-clip-text font-mono text-7xl font-semibold tracking-tight text-transparent sm:text-8xl">
          404
        </p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          This page took a different path
        </h1>
        <p className="mt-4 max-w-md text-pretty text-muted">
          The page you are looking for was moved, renamed, or never existed. Let
          us route you back to somewhere useful.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </Button>
      </Container>
    </section>
  );
}
