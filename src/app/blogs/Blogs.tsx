"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogCard from "@/components/BlogCard";
import { IBlog } from "@/interfaces/blog";
import { cn } from "@/lib/utils";

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
        .filter(post => {
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
    const paginatedPosts = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 hero-gradient">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl" data-aos="fade-in">
                            Our <span className="text-gradient">Blogs</span>
                        </h1>
                        <p className="max-w-3xl mx-auto mb-8 text-xl md:text-2xl text-muted-foreground">
                            Insights, tutorials, and thought leadership on the latest in web
                            development, mobile apps, and emerging technologies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories & Search */}
            <section className="py-12 border-b border-border/40">
                <div className="container flex flex-col justify-between gap-4 px-4 md:flex-row md:items-center" data-aos="zoom-in">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(category => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setCurrentPage(1);
                                }}
                                className={cn(
                                    "capitalize text-black dark:text-white",
                                    selectedCategory === category ? " bg-primary text-primary-foreground" : ""
                                )}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                    <Input
                        placeholder="Search articles..."
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="max-w-sm"
                    />
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 bg-secondary/30">
                <div className="container px-4">
                    <h2 className="mb-12 text-2xl font-bold text-center md:text-3xl" data-aos="fade-up">
                        {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
                    </h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {paginatedPosts.length > 0 ?
                            paginatedPosts.map((post, index) => (
                                <div
                                    key={post.id}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <BlogCard post={post} />
                                </div>
                            )) :
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">
                                <p className="text-lg text-muted-foreground">No posts found.</p>
                            </div>
                        }
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex flex-wrap justify-center gap-2 mt-12">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <Button
                                    key={index + 1}
                                    variant={index + 1 === currentPage ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={cn(
                                        "text-black dark:text-white",
                                        index + 1 === currentPage ? "bg-primary text-primary-foreground" : ""
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
};