"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, Calendar, Tag, ArrowLeft, ArrowRight, Ghost, Share2 } from "lucide-react";
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
    const shareUrl = window.location.href;

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center animate-fade-in">
                <Ghost className="w-16 h-16 mb-4 text-muted" />
                <h2 className="mb-2 text-2xl font-bold">Post Not Found</h2>
                <p className="max-w-md mb-6 text-muted-foreground">
                    We couldn&apos;t find the blog post you&apos;re looking for. It might have been removed or the URL may be incorrect.
                </p>
                <Button asChild variant="default">
                    <Link href={ROUTES.BLOGS}>Back to Blog</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Breadcrumb */}
            <section className="py-8 border-b border-border/40">
                <div className="container px-4">
                    <nav className="text-sm text-muted-foreground">
                        <Link href={ROUTES.BLOGS} className="transition-colors hover:text-primary">Blogs</Link>
                        <span className="mx-2">/</span>
                        <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </nav>
                </div>
            </section>

            {/* Article Header */}
            <section className="py-12">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            {post.categories?.length > 0 && post._embedded?.["wp:term"]?.[0] && (
                                post._embedded["wp:term"][0].map((cat: { id: number; name: string }) => (
                                    <span
                                        key={cat.id}
                                        className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:text-white"
                                    >
                                        <Tag className="w-4 h-4" /> {cat.name}
                                    </span>
                                ))
                            )}
                        </div>
                        <h1 className="mb-6 text-3xl font-bold md:text-5xl" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

                        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border/40">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            {post.jetpack_featured_media_url && (
                <section className="py-8">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto">
                            <Image
                                src={post.jetpack_featured_media_url}
                                alt={post.title.rendered.replace(/(<([^>]+)>)/gi, "")}
                                width={1200}
                                height={700}
                                className="w-full h-auto shadow-2xl rounded-2xl"
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
                            className="prose prose-lg prose-slate dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        />
                    </div>
                </div>
            </section>

            {/* Tags */}
            {post.tags?.length > 0 && post._embedded?.["wp:term"]?.[1] && (
                <section className="py-8">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap gap-2">
                                {post._embedded["wp:term"][1].map((tag: { id: number; name: string }) => (
                                    <span
                                        key={tag.id}
                                        className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Share Section */}
            <section className="py-12">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h3 className="flex items-center gap-2 mb-2 font-semibold"><Share2 className="w-4 h-4" /> Share this article</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href={`https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title.rendered)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline" size="sm">X</Button>
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline" size="sm">LinkedIn</Button>
                                    </a>
                                    <a
                                        href={`https://wa.me/?text=${encodeURIComponent(post.title.rendered + " " + shareUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline" size="sm">WhatsApp</Button>
                                    </a>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="flex items-center gap-2"
                            >
                                <ArrowUp className="w-4 h-4" />
                                Back to top
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next/Previous Posts */}
            <section className="py-16 border-t border-border/40">
                <div className="container px-4">
                    <div className="flex flex-col flex-wrap justify-between max-w-4xl gap-4 mx-auto sm:flex-row">
                        {prevPost && (
                            <Button
                                asChild
                                variant="outline"
                                className="w-full py-6 text-left whitespace-normal sm:w-auto md:py-0"
                            >
                                <Link href={`${ROUTES.BLOGS}/${prevPost.slug}`}>
                                    <ArrowLeft className="w-4 h-4" />
                                    <span className="hidden md:block">
                                        Previous:
                                    </span>
                                    <span dangerouslySetInnerHTML={{ __html: prevPost.title.rendered }} />
                                </Link>
                            </Button>
                        )}
                        {nextPost && (
                            <Button
                                asChild
                                variant="outline"
                                className="w-full py-6 text-left whitespace-normal sm:ml-auto sm:w-auto md:py-0"
                            >
                                <Link href={`${ROUTES.BLOGS}/${nextPost.slug}`}>
                                    <span className="hidden md:block">
                                        Next:
                                    </span>
                                    <span dangerouslySetInnerHTML={{ __html: nextPost.title.rendered }} />
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </section>

            {/* View All Articles */}
            <section className="py-20 bg-secondary/30">
                <div className="container px-4">
                    <div className="text-center">
                        <Button asChild variant="outline" size="lg">
                            <Link href={ROUTES.BLOGS}>View All Articles</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;