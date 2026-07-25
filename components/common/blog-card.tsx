import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
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
        "group flex h-full flex-col p-8 transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:p-10",
        featured && "lg:min-h-[22rem]",
      )}
    >
      <div className="label-mono flex items-center gap-3 text-muted">
        <span className="text-primary">{post.category}</span>
        <span>{formatDate(post.date)}</span>
      </div>

      {/* The featured card splits headline and body across the full width so
          the wide cell does not sit half empty. */}
      <div
        className={cn(
          "mt-6 flex flex-1 flex-col",
          featured && "lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16",
        )}
      >
        <h3
          className={cn(
            "font-display font-bold tracking-[-0.03em] transition-colors group-hover:text-primary",
            featured ? "text-3xl sm:text-4xl lg:text-5xl" : "text-xl",
          )}
        >
          {post.title}
        </h3>

        <div className={cn("flex flex-1 flex-col", !featured && "mt-4")}>
          <p
            className={cn(
              "flex-1 leading-relaxed text-muted",
              featured ? "mt-4 max-w-[52ch] lg:mt-0" : "text-sm",
            )}
          >
            {post.excerpt}
          </p>

          <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
            Read article
            <ArrowUpRight
              weight="bold"
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
            <span className="sr-only">, {post.readingTime}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
