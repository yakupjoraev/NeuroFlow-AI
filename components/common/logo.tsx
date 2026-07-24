import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

interface LogoProps {
  className?: string;
  withWordmark?: boolean;
}

export function Logo({ className, withWordmark = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <span className="relative inline-flex size-8 items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden
          className="size-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[18deg]"
        >
          <defs>
            <linearGradient id="nf-logo" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0" stopColor="var(--brand-from)" />
              <stop offset="0.5" stopColor="var(--brand-via)" />
              <stop offset="1" stopColor="var(--brand-to)" />
            </linearGradient>
          </defs>
          <path
            d="M16 2 4 9v14l12 7 12-7V9L16 2Z"
            stroke="url(#nf-logo)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="16" r="3" fill="url(#nf-logo)" />
          <path
            d="M16 6v7m0 6v7M8.5 11.5 13 14m6 4 4.5 2.5M23.5 11.5 19 14m-6 4-4.5 2.5"
            stroke="url(#nf-logo)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {withWordmark ? (
        <span className="text-[0.95rem] font-semibold tracking-tight">
          NeuroFlow
        </span>
      ) : null}
    </Link>
  );
}
