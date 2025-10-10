import Blogs from "./Blogs";
import { IBlog } from "@/interfaces/blog";
import { Metadata } from "next";
import { fetchBlogs } from "@/lib/fetchBlogs";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Latest insights, tutorials, and technology updates by Vektorizer.",
};

export default async function BlogsPage() {
  const posts: IBlog[] = await fetchBlogs();

  const categories = Array.from(
    new Set(
      posts.flatMap(post =>
        post._embedded?.["wp:term"]?.[0]?.map(term => term.name) || []
      )
    )
  );
  categories.unshift("All");

  return <Blogs posts={posts} categories={categories} />;
}
