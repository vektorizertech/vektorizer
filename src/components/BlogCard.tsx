import { Card } from "./ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IBlog } from "@/interfaces/blog";
import { ROUTES } from "@/data/routes";

// Read time estimation
const estimateReadTime = (html: string): string => {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

const BlogCard = ({ post }: { post: IBlog }) => {
  const category =
    post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

  const tags = post._embedded?.["wp:term"]?.[1]?.map((tag) => tag.name) || [];

  const readTime = estimateReadTime(post.content.rendered);

  // Image fallback
  const featuredImage = post.jetpack_featured_media_url;
  const fallbackImage = (() => {
    const match = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  })();
  const imageSrc = featuredImage || fallbackImage || "";

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-3xl card-gradient group">
      <Link
        href={`${ROUTES.BLOGS}/${post.slug}`}
        className="relative block overflow-hidden aspect-video"
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={post.title.rendered.replace(/<[^>]+>/g, "")}
            width={800}
            height={450}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={post.sticky}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-sm bg-muted text-muted-foreground">
            No Image Available
          </div>
        )}

        <div className="absolute flex flex-wrap gap-2 top-4 left-4">
          {post.sticky && (
            <span className="px-3 py-1 text-xs font-semibold text-white rounded-full cta-button">
              Featured
            </span>
          )}
          <span className="px-3 py-1 text-xs font-semibold text-white capitalize rounded-full bg-foreground/60 backdrop-blur-sm">
            {category}
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {date}
          </span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {readTime}
          </span>
        </div>

        <Link href={`${ROUTES.BLOGS}/${post.slug}`}>
          <h3
            className="mb-3 text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-primary"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </Link>

        <div
          className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs rounded-full border border-border/80 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-border/80 text-muted-foreground">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}

        <Link
          href={`${ROUTES.BLOGS}/${post.slug}`}
          className="inline-flex items-center gap-1.5 mt-auto text-sm font-semibold text-primary transition-all group/link"
        >
          Read Article
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
};

export default BlogCard;
