import { Container } from "@/components/common/container";
import { logos } from "@/lib/content";

export function LogoCloud() {
  const track = [...logos, ...logos];

  return (
    <section className="py-14" aria-label="Trusted by leading teams">
      <Container>
        <p className="text-center font-mono text-xs uppercase tracking-wider text-muted">
          Trusted by teams automating millions of tasks
        </p>
        <div className="mask-fade-x relative mt-8 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-16 hover:[animation-play-state:paused]">
            {track.map((logo, index) => (
              <span
                key={`${logo.name}-${index}`}
                className="select-none text-xl font-semibold tracking-tight text-muted/70 transition-colors hover:text-foreground"
                aria-hidden={index >= logos.length}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
