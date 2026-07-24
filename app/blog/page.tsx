import type { Metadata } from "next";
import { PageHero } from "@/sections/page-hero";
import { Section } from "@/components/common/section";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { BlogCard } from "@/components/common/blog-card";
import { Cta } from "@/sections/cta";
import { blogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Perspectives, playbooks, and engineering deep dives on autonomous workflows, AI agents, and the future of operations.",
  path: "/blog",
  keywords: ["blog", "AI agents", "automation playbook"],
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Field notes on{" "}
            <span className="text-gradient">autonomous work</span>
          </>
        }
        description="Perspectives, playbooks, and engineering deep dives from the team building the operating system for autonomous work."
      />
      <Section className="pt-8">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal className="lg:col-span-2">
              <BlogCard post={featured} featured />
            </Reveal>
            {rest.map((post, index) => (
              <Reveal
                key={post.slug}
                className="h-full"
                delay={(index % 2) * 0.06}
              >
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Cta />
    </>
  );
}
