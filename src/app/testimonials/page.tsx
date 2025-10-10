import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star, ArrowRight } from "lucide-react";
import { ROUTES } from "@/data/routes";
import { TESTIMONIALS } from "@/data/testimonials";
import { STATS } from "@/data/stats";

export const metadata: Metadata = {
    title: "Client Testimonials",
    description:
        "See what our satisfied clients have to say about working with Vektorizer. Read their stories and reviews of our web, mobile, and blockchain solutions.",
    openGraph: {
        title: "Client Testimonials",
        description:
            "Read real success stories from clients who trusted Vektorizer to build their digital products.",
        url: "https://vektorizer.com/testimonials",
        siteName: "Vektorizer",
        type: "website",
        images: [
            {
                url: "/og/testimonials.png",
                width: 1200,
                height: 630,
                alt: "Vektorizer Client Testimonials",
            },
        ],
    },
};

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen pt-32 testimonials-bg">
            {/* Hero */}
            <section className="py-20 text-center">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-bounce-subtle dark:text-white" data-aos="zoom-in">
                            ⭐ Client Success Stories
                        </div>
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl" data-aos="fade-up">
                            What Our <span className="text-gradient">Clients Say</span>
                        </h1>
                        <p className="max-w-3xl mx-auto mb-12 text-xl md:text-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
                            Don&apos;t just take our word for it. Here&apos;s what our amazing
                            clients have to say about working with Vektorizer.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16">
                <div className="container px-4">
                    <div className="grid max-w-4xl grid-cols-2 gap-8 mx-auto md:grid-cols-4">
                        {STATS.map((stat, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="text-center group"
                            >
                                <div className="mb-2 text-3xl font-bold transition-transform duration-300 md:text-4xl text-gradient group-hover:scale-110">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="container px-4">
                    <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <Card
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className={cn(
                                    "card-gradient p-8 hover:scale-105 transition-all duration-300",
                                )}
                            >
                                <div className="flex items-center mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star
                                            key={i}
                                            data-aos="zoom-in"
                                            data-aos-delay={i * 100}
                                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                        />
                                    ))}
                                </div>

                                <blockquote className="mb-6 italic leading-relaxed text-muted-foreground">
                                    &quot;{testimonial.quote}&quot;
                                </blockquote>

                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={50}
                                        height={50}
                                        className="object-cover w-12 h-12 transition-all duration-300 rounded-full ring-2 ring-primary/20 hover:ring-primary/40"
                                    />
                                    <div>
                                        <div className="font-semibold">{testimonial.name}</div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonial.role} at {testimonial.company}
                                        </div>
                                        <div className="mt-1 text-xs font-medium text-primary">
                                            {testimonial.project}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-teal-600/10 to-green-500/10">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="mb-6 text-3xl font-bold md:text-5xl" data-aos="fade-up">
                            Ready to Join Our <span className="text-gradient">Success Stories?</span>
                        </h2>
                        <p className="mb-8 text-xl text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
                            Let&apos;s discuss how we can help bring your vision to life and
                            create your own success story.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row" data-aos="zoom-in-up" data-aos-delay="400">
                            <Button asChild size="lg" className="rounded-full cta-button group">
                                <Link
                                    href={ROUTES.CONTACT}
                                    className="flex items-center space-x-2 dark:text-white"
                                >
                                    <span>Start Your Project</span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="transition-all duration-300 rounded-full hover:bg-secondary/80"
                            >
                                <Link href={ROUTES.PORTFOLIO}>View Our Work</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
