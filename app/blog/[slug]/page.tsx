import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/common/avatar";
import { NewsletterForm } from "@/components/common/newsletter-form";
import { JsonLd } from "@/components/common/json-ld";
import { blogPosts, formatDate, getPostBySlug } from "@/lib/blog";
import { articleSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return createMetadata({ title: "Article not found" });
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          date: post.date,
          author: post.author,
          slug: post.slug,
        })}
      />
      <article className="pb-8 pt-24 sm:pt-32">
        <Container className="max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft weight="bold" className="size-4" />
              Back to blog
            </Link>
          </Reveal>

          <Reveal className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="brand">{post.category}</Badge>
              <span className="label-mono text-muted">
                {formatDate(post.date)} · {post.readingTime}
              </span>
            </div>
          </Reveal>

          <Reveal variant="blur" className="mt-5">
            <h1 className="display-lg">{post.title}</h1>
          </Reveal>

          <Reveal className="mt-6 flex items-center gap-3 border-b border-border pb-8">
            <Avatar
              initials={post.author
                .split(" ")
                .map((part) => part[0])
                .join("")}
            />
            <span className="text-sm">
              <span className="font-medium">{post.author}</span>
              <span className="block text-muted">NeuroFlow AI</span>
            </span>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6">
            {post.content.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.03}>
                <p className="text-pretty text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <h2 className="display-md">
              Get the next one in your inbox
            </h2>
            <p className="mt-1 text-sm text-muted">
              One thoughtful email a month. No spam, unsubscribe anytime.
            </p>
            <NewsletterForm className="mt-5 max-w-md" />
          </div>
        </Container>
      </article>
    </>
  );
}
