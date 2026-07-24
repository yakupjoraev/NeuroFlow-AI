import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group surface-gradient relative flex flex-col overflow-hidden rounded-2xl border border-border transition-colors hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        featured && "lg:col-span-2 lg:flex-row",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "brand-gradient relative shrink-0 overflow-hidden",
          featured ? "h-48 lg:h-auto lg:w-2/5" : "h-40",
        )}
      >
        <div className="bg-dots absolute inset-0 opacity-30 mix-blend-overlay" />
        <span className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-wider text-white/90">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted">
          <span>{formatDate(post.date)}</span>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h3
          className={cn(
            "mt-3 font-semibold tracking-tight transition-colors group-hover:text-primary",
            featured ? "text-2xl" : "text-lg",
          )}
        >
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground">
          Read article
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
