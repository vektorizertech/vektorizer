"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  Calendar,
  Tag,
  ArrowLeft,
  ArrowRight,
  Ghost,
  Share2,
} from "lucide-react";
import { ROUTES } from "@/data/routes";
import { IBlog } from "@/interfaces/blog";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: IBlog;
  prevPost: IBlog | null;
  nextPost: IBlog | null;
};

const BlogPost = ({ post, prevPost, nextPost }: Props) => {
  // window is unavailable during SSR; resolve the share URL after mount.
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <Ghost className="w-16 h-16 mb-4 text-muted-foreground" />
        <h2 className="mb-2 text-2xl font-bold">Post Not Found</h2>
        <p className="max-w-md mb-6 text-muted-foreground">
          We couldn&apos;t find the blog post you&apos;re looking for. It might
          have been removed or the URL may be incorrect.
        </p>
        <Button asChild className="rounded-full cta-button">
          <Link href={ROUTES.BLOGS}>Back to Blog</Link>
        </Button>
      </div>
    );
  }

  const shareLinks = [
    {
      name: "X",
      href: `https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title.rendered)}`,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(post.title.rendered + " " + shareUrl)}`,
    },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border/60">
        <div className="container px-4">
          <nav className="text-sm text-muted-foreground">
            <Link
              href={ROUTES.BLOGS}
              className="transition-colors hover:text-primary"
            >
              Blogs
            </Link>
            <span className="mx-2 text-border">/</span>
            <span
              className="text-foreground/80"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="pt-12 pb-8">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {post.categories?.length > 0 &&
                post._embedded?.["wp:term"]?.[0] &&
                post._embedded["wp:term"][0].map(
                  (cat: { id: number; name: string }) => (
                    <span
                      key={cat.id}
                      className="flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:text-foreground"
                    >
                      <Tag className="w-3.5 h-3.5" /> {cat.name}
                    </span>
                  )
                )}
            </div>
            <h1
              className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-border/60">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.jetpack_featured_media_url && (
        <section className="py-6">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <Image
                src={post.jetpack_featured_media_url}
                alt={post.title.rendered.replace(/(<([^>]+)>)/gi, "")}
                width={1200}
                height={700}
                className="w-full h-auto border shadow-xl rounded-3xl border-border/60"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-a:text-primary prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </section>

      {/* Tags */}
      {post.tags?.length > 0 && post._embedded?.["wp:term"]?.[1] && (
        <section className="py-4">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2">
                {post._embedded["wp:term"][1].map(
                  (tag: { id: number; name: string }) => (
                    <span
                      key={tag.id}
                      className="px-3 py-1 text-sm border rounded-full border-border/80 text-muted-foreground"
                    >
                      {tag.name}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Share Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-6 p-6 border rounded-3xl border-border/60 bg-secondary/40">
              <div>
                <h3 className="flex items-center gap-2 mb-3 font-semibold">
                  <Share2 className="w-4 h-4 text-primary" /> Share this article
                </h3>
                <div className="flex gap-3">
                  {shareLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-border/80 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      >
                        {link.name}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="flex items-center gap-2 rounded-full border-border/80 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                <ArrowUp className="w-4 h-4" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Next/Previous Posts */}
      <section className="py-12 border-t border-border/60">
        <div className="container px-4">
          <div className="grid max-w-4xl gap-4 mx-auto sm:grid-cols-2">
            {prevPost ? (
              <Link
                href={`${ROUTES.BLOGS}/${prevPost.slug}`}
                className="flex flex-col gap-2 p-6 transition-all border group rounded-2xl border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  Previous
                </span>
                <span
                  className="font-semibold leading-snug transition-colors group-hover:text-primary"
                  dangerouslySetInnerHTML={{ __html: prevPost.title.rendered }}
                />
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
            {nextPost && (
              <Link
                href={`${ROUTES.BLOGS}/${nextPost.slug}`}
                className="flex flex-col items-end gap-2 p-6 text-right transition-all border group rounded-2xl border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Next
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span
                  className="font-semibold leading-snug transition-colors group-hover:text-primary"
                  dangerouslySetInnerHTML={{ __html: nextPost.title.rendered }}
                />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* View All Articles */}
      <section className="py-16 bg-secondary/40">
        <div className="container px-4 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 rounded-full border-border/80 hover:border-primary/40 hover:bg-primary/5 group"
          >
            <Link href={ROUTES.BLOGS}>
              View All Articles
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
