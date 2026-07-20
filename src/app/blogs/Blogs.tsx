"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogCard from "@/components/BlogCard";
import { IBlog } from "@/interfaces/blog";
import { cn } from "@/lib/utils";
import { BookOpen, Search } from "lucide-react";

interface BlogsPageProps {
  posts: IBlog[];
  categories: string[];
}

const POSTS_PER_PAGE = 6;

export default function Blogs({ posts, categories }: BlogsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getCategoryName = (post: IBlog) =>
    post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

  const filtered = posts
    .filter((post) => {
      const category = getCategoryName(post);
      const matchSearch =
        post.title.rendered.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.rendered.toLowerCase().includes(search.toLowerCase());
      return (
        (selectedCategory === "All" || category === selectedCategory) &&
        matchSearch
      );
    })
    .sort((a, b) => {
      if (a.sticky && !b.sticky) return -1;
      if (!a.sticky && b.sticky) return 1;
      return 0;
    });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginatedPosts = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 blog-bg md:pt-44 md:pb-20">
        <div className="bg-grid-fade" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow mb-8" data-aos="fade-up">
              <BookOpen className="w-3.5 h-3.5" />
              Insights & Tutorials
            </div>
            <h1
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our <span className="text-gradient">Blogs</span>
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Insights, tutorials, and thought leadership on the latest in web
              development, mobile apps, and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="py-8 border-b border-border/60">
        <div
          className="container flex flex-col justify-between gap-4 px-4 md:flex-row md:items-center"
          data-aos="fade-up"
        >
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium capitalize transition-all duration-300",
                  selectedCategory === category
                    ? "border-primary bg-primary text-white shadow-md shadow-primary/25"
                    : "border-border/80 text-muted-foreground hover:border-primary/40 hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full max-w-sm mx-auto md:mx-0">
            <Search className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-4 top-1/2 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-11 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="container px-4">
          <h2
            className="mb-12 text-2xl font-bold tracking-tight text-center md:text-3xl"
            data-aos="fade-up"
          >
            {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post, index) => (
                <div
                  key={post.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                >
                  <BlogCard post={post} />
                </div>
              ))
            ) : (
              <div className="col-span-1 py-16 text-center md:col-span-2 lg:col-span-3">
                <p className="text-lg text-muted-foreground">
                  No posts found. Try a different search or category.
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mt-14">
              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  key={index + 1}
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(index + 1)}
                  className={cn(
                    "h-10 w-10 rounded-full p-0",
                    index + 1 === currentPage
                      ? "border-primary bg-primary text-white hover:bg-primary/90 hover:text-white"
                      : "border-border/80 text-muted-foreground hover:border-primary/40 hover:text-primary"
                  )}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
