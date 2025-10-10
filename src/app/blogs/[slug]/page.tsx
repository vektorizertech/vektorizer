import { Metadata } from "next";
import BlogPost from "./BlogPost";
import { fetchBlogBySlug, fetchBlogForMeta, fetchBlogs } from "@/lib/fetchBlogs";

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const post = await fetchBlogForMeta(slug);

    if (!post) {
        return {
            title: "Post Not Found",
            description: "We couldn't find the blog post you're looking for.",
        };
    }

    const cleanTitle = post.title?.rendered?.replace(/<[^>]*>/g, "") ?? "Blog | Vektorizer";
    const cleanExcerpt = post.excerpt?.rendered?.replace(/<[^>]*>/g, "") ?? "";

    if (!post) {
        return {
            title: "Post Not Found",
            description: "We couldn't find the blog post you're looking for.",
        };
    }

    return {
        title: cleanTitle,
        description: cleanExcerpt.slice(0, 160),
        openGraph: {
            title: cleanTitle,
            description: cleanExcerpt.slice(0, 160),
            images: post.jetpack_featured_media_url ? [post.jetpack_featured_media_url] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title.rendered,
            description: post.excerpt?.rendered?.replace(/<[^>]*>/g, "").slice(0, 160),
            images: post.jetpack_featured_media_url ? [post.jetpack_featured_media_url] : [],
        },
    };
}

export default async function BlogPage({ params }: Props) {
    const { slug } = await params;

    const post = await fetchBlogBySlug(slug);
    if (!post) return null;

    const allPosts = await fetchBlogs();
    const index = allPosts.findIndex(p => p.id === post.id);
    const prevPost = index > 0 ? allPosts[index - 1] : null;
    const nextPost = index < allPosts.length - 1 ? allPosts[index + 1] : null;

    return <BlogPost post={post} prevPost={prevPost} nextPost={nextPost} />;
}
