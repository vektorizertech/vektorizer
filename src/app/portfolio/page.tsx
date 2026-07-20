import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, LayoutGrid } from "lucide-react";
import { ROUTES } from "@/data/routes";
import { PROJECTS } from "@/data/projects";
import { STATS } from "@/data/stats";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Vektorizer's diverse portfolio of cutting-edge digital projects, from mobile apps to AI systems.",
  openGraph: {
    title: "Portfolio",
    description:
      "Explore Vektorizer's diverse portfolio of cutting-edge digital projects.",
    url: "https://www.vektorizer.com/portfolio",
    siteName: "Vektorizer",
    images: [
      {
        url: "/images/og-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Vektorizer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 portfolio-bg md:pt-44 md:pb-20">
        <div className="bg-grid-fade" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow mb-8" data-aos="fade-up">
              <LayoutGrid className="w-3.5 h-3.5" />
              Selected Work
            </div>
            <h1
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Explore our latest projects and see how we&apos;ve helped
              businesses transform their digital presence
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <Card
                key={project.slug}
                className="flex flex-col overflow-hidden rounded-3xl card-gradient group"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <Link
                  href={`${ROUTES.PORTFOLIO}/${project.slug}`}
                  className="block"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={1200}
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-background/80 to-transparent group-hover:opacity-100" />
                  </div>
                </Link>

                <div className="flex flex-col flex-1 p-7">
                  <Link
                    href={`${ROUTES.PORTFOLIO}/${project.slug}`}
                    className="flex items-start justify-between gap-2 mb-2 group/title"
                  >
                    <span className="text-xl font-semibold transition-colors group-hover/title:text-primary">
                      {project.title}
                    </span>
                    <ArrowUpRight className="w-5 h-5 mt-1 transition-all shrink-0 text-muted-foreground opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary" />
                  </Link>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-full border border-border/80 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-border/80 text-muted-foreground">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full mt-auto rounded-full border-border/80 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                  >
                    <Link href={`${ROUTES.PORTFOLIO}/${project.slug}`}>
                      View Case Study
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container px-4">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {STATS.map((stat, index) => (
              <div key={stat.label} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="mb-2 text-4xl font-bold tracking-tight md:text-5xl text-gradient">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4">
          <div
            className="cta-panel px-6 py-16 text-center md:px-16 md:py-20"
            data-aos="zoom-in-up"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Have a Project in Mind?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-white/85 md:text-xl">
              Let&apos;s collaborate and create something extraordinary together
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-full bg-white text-primary hover:bg-white/90 group"
              >
                <Link href={ROUTES.CONTACT}>
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={ROUTES.SERVICES}>View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
