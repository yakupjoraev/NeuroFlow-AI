export const siteConfig = {
  name: "NeuroFlow AI",
  shortName: "NeuroFlow",
  url: "https://neuroflow.ai",
  tagline: "The operating system for autonomous work",
  description:
    "NeuroFlow AI is the workflow automation platform where AI agents plan, execute, and improve your operations across every tool your team already uses.",
  email: "hello@neuroflow.ai",
  twitter: "@neuroflowai",
  locale: "en_US",
} as const;

export const navItems = [
  { label: "Product", href: "/features", hasMenu: true },
  { label: "Pricing", href: "/pricing", hasMenu: false },
  { label: "About", href: "/about", hasMenu: false },
  { label: "Blog", href: "/blog", hasMenu: false },
  { label: "Contact", href: "/contact", hasMenu: false },
] as const;

export const footerNav = [
  {
    label: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/blog" },
      { label: "Integrations", href: "/features" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Documentation", href: "/features" },
      { label: "API reference", href: "/features" },
      { label: "Status", href: "/" },
      { label: "Security", href: "/" },
    ],
  },
  {
    label: "Legal",
    links: [
      { label: "Privacy", href: "/" },
      { label: "Terms", href: "/" },
      { label: "DPA", href: "/" },
      { label: "Cookies", href: "/" },
    ],
  },
] as const;

export const socialLinks = [
  { label: "X (Twitter)", href: "https://x.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
] as const;
