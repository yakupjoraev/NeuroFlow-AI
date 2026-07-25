import { BrandMark } from "@/components/common/brand-mark";
import { logos } from "@/lib/content";

export function LogoCloud() {
  const track = [...logos, ...logos];

  return (
    <section
      className="border-y border-border py-10"
      aria-label="Trusted by leading teams"
    >
      <div className="mask-fade-x relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-20 hover:[animation-play-state:paused]">
          {track.map((logo, index) => (
            <span
              key={`${logo.name}-${index}`}
              className="select-none text-muted transition-colors hover:text-foreground"
              aria-hidden={index >= logos.length}
            >
              <BrandMark name={logo.name} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
