import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface SeoInput {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords = [],
}: SeoInput = {}): Metadata {
  const resolvedTitle = title
    ? `${title} — ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: resolvedTitle,
    description,
    keywords: [
      "AI workflow automation",
      "AI agents",
      "business process automation",
      "autonomous agents",
      "no-code automation",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: resolvedTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
    },
  };
}
