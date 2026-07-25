import type { Metadata } from "next";
import { Envelope, MapPin, Chat } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
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
    icon: Envelope,
    label: "Email us",
    value: siteConfig.email,
    description: "For sales, partnerships, and general questions.",
  },
  {
    icon: Chat,
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
    <section className="pb-8 pt-24 sm:pt-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <Reveal>
              <p className="label-mono mb-8 text-primary">Contact</p>
            </Reveal>
            <Reveal variant="blur">
              <h1 className="display-lg max-w-[18ch]">
                Let&apos;s automate the work that&apos;s holding you back
              </h1>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-muted">
                Tell us about your team and the workflows you want to automate.
                We will get back to you within one business day.
              </p>
            </Reveal>

            <div className="mt-12 flex flex-col gap-8">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <Reveal
                    key={channel.label}
                    delay={index * 0.06}
                    className="flex items-start gap-5"
                  >
                    <IconBadge icon={Icon} size="sm" className="mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">{channel.value}</p>
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
