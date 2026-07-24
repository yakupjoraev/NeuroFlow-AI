import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { Badge } from "@/components/ui/badge";
import { IconBadge } from "@/components/common/icon-badge";
import { ContactForm } from "@/components/common/contact-form";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Talk to the NeuroFlow AI team about automating your workflows, enterprise security, or a custom deployment.",
  path: "/contact",
  keywords: ["contact", "sales", "demo", "support"],
});

const channels = [
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.email,
    description: "For sales, partnerships, and general questions.",
  },
  {
    icon: MessageSquare,
    label: "Talk to sales",
    value: "Book a 30-min demo",
    description: "See NeuroFlow mapped to your exact workflows.",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "San Francisco, CA",
    description: "Remote-first, with hubs in SF and Berlin.",
  },
];

export default function ContactPage() {
  return (
    <section className="pt-36 pb-8 sm:pt-44">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <Reveal>
              <Badge variant="brand">Contact</Badge>
            </Reveal>
            <Reveal variant="blur">
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                Let&apos;s automate the work that&apos;s{" "}
                <span className="text-gradient">holding you back</span>
              </h1>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted">
                Tell us about your team and the workflows you want to automate.
                We will get back to you within one business day.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-4">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <Reveal
                    key={channel.label}
                    delay={index * 0.06}
                    className="flex items-start gap-4"
                  >
                    <IconBadge icon={Icon} className="shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{channel.value}</p>
                      <p className="text-sm text-muted">
                        {channel.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
