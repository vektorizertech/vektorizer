import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IBlog } from "@/interfaces/blog";
import { ROUTES } from "@/data/routes";

// Read time estimation
const estimateReadTime = (html: string): string => {
    const text = html.replace(/<[^>]*>/g, '');
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
};

const BlogCard = ({ post }: { post: IBlog }) => {
    const category =
        post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

    const tags =
        post._embedded?.["wp:term"]?.[1]?.map(tag => tag.name) || [];

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
        day: "numeric"
    });

    return (
        <Card className="overflow-hidden transition-all duration-500 card-gradient hover:scale-105 group animate-fade-up">
            <div className="relative overflow-hidden aspect-video">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
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
                        <span className="px-3 py-1 text-sm text-white rounded-full bg-gradient-to-r from-emerald-500 to-teal-600">
                            Featured
                        </span>
                    )}
                    <span className="px-3 py-1 text-sm text-white capitalize rounded-full bg-primary/90">
                        {category}
                    </span>
                </div>
            </div>

            <div className="flex flex-col h-full p-6">
                <div className="flex items-center mb-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{readTime}</span>
                </div>

                <h3
                    className="mb-3 text-xl font-semibold leading-tight transition-colors duration-300 group-hover:text-primary"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                <div
                    className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />

                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.slice(0, 3).map(tag => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                        {tags.length > 3 && (
                            <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                                +{tags.length - 3} more
                            </span>
                        )}
                    </div>
                )}

                <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`${ROUTES.BLOGS}/${post.slug}`}>Read More</Link>
                </Button>
            </div>
        </Card>
    );
};

export default BlogCard;
