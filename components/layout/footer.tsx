import Link from "next/link";
import { Logo } from "@/components/common/logo";
import { NewsletterForm } from "@/components/common/newsletter-form";
import { Container } from "@/components/common/container";
import { footerNav, siteConfig, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              The operating system for autonomous work. Automate the busywork,
              keep the judgment.
            </p>
            <div>
              <p className="mb-3 text-sm font-medium">Stay in the loop</p>
              <NewsletterForm className="max-w-sm" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((column) => (
              <div key={column.label}>
                <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                  {column.label}
                </p>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-muted transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
