import { IBlog } from "@/interfaces/blog";

export async function fetchBlogs(): Promise<IBlog[]> {
    try {
        const res = await fetch(
            "https://public-api.wordpress.com/wp/v2/sites/vektorizer.wordpress.com/posts?per_page=100&_embed"
            , { next: { revalidate: 300 } }
        );
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("WordPress fetch failed:", err);
        return [];
    }
}

export async function fetchBlogForMeta(slug: string): Promise<IBlog | null> {
    const res = await fetch(
        `https://public-api.wordpress.com/wp/v2/sites/vektorizer.wordpress.com/posts?slug=${slug}&_embed`,
        { cache: "no-store" }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data[0] ?? null;
}

export async function fetchBlogBySlug(slug: string): Promise<IBlog | null> {
    const res = await fetch(
        `https://public-api.wordpress.com/wp/v2/sites/vektorizer.wordpress.com/posts?slug=${slug}&_embed`,
        { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;

    const data = await res.json();
    return data[0] ?? null;
}