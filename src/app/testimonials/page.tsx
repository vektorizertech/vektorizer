import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Quote, MessageSquareHeart } from "lucide-react";
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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-16 testimonials-bg md:pt-44 md:pb-20">
        <div className="bg-grid-fade" />
        <div className="container relative px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="eyebrow mb-8" data-aos="fade-up">
              <MessageSquareHeart className="w-3.5 h-3.5" />
              Client Success Stories
            </div>
            <h1
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              What Our <span className="text-gradient">Clients Say</span>
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Don&apos;t just take our word for it. Here&apos;s what our amazing
              clients have to say about working with Vektorizer.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14">
        <div className="container px-4">
          <div className="grid max-w-4xl grid-cols-2 gap-8 mx-auto md:grid-cols-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <div className="mb-2 text-3xl font-bold tracking-tight md:text-4xl text-gradient">
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
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className="flex flex-col p-8 rounded-3xl card-gradient"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-primary fill-primary"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                <blockquote className="flex-1 mb-6 leading-relaxed text-muted-foreground">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-border/60">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="object-cover w-12 h-12 rounded-full ring-2 ring-primary/25"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                    <div className="mt-0.5 text-xs font-medium text-primary">
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
      <section className="py-20 md:py-28">
        <div className="container px-4">
          <div
            className="cta-panel px-6 py-16 text-center md:px-16 md:py-20"
            data-aos="zoom-in-up"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
              Ready to Join Our Success Stories?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-white/85 md:text-xl">
              Let&apos;s discuss how we can help bring your vision to life and
              create your own success story.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-full bg-white text-primary hover:bg-white/90 group"
              >
                <Link
                  href={ROUTES.CONTACT}
                  className="flex items-center gap-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
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
