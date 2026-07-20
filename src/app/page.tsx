import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  LayoutGrid,
  Sparkles,
  Zap,
} from "lucide-react";
import { ROUTES } from "@/data/routes";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import Image from "next/image";
import { SERVICES_PREVIEW } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { STATS } from "@/data/stats";
import { fetchBlogs } from "@/lib/fetchBlogs";

export const metadata: Metadata = {
  description:
    "Explore Vektorizer's digital solutions in web development, mobile apps, blockchain, and AI. Trusted by global clients.",
  keywords:
    "Web development, mobile apps, AI integration, blockchain, Pakistan software house",
  openGraph: {
    title: "Vektorizer | Building Digital Brilliance",
    description:
      "Explore our services and insights to build your next big idea.",
    url: "https://vektorizer.com",
    siteName: "Vektorizer",
    images: [
      {
        url: "https://vektorizer.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vektorizer Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vektorizer | Building Digital Brilliance",
    description:
      "Explore our services and insights to build your next big idea.",
    images: ["https://vektorizer.com/og-image.jpg"],
  },
};

export default async function Home() {
  const blogs = await fetchBlogs();

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Vektorizer",
            url: "https://vektorizer.com",
            logo: "https://vektorizer.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/vektorizer",
              "https://github.com/vektorizer",
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 hero-gradient md:pt-48 md:pb-28">
        <div className="bg-grid-fade" />
        <div className="glow-orb -top-20 left-1/2 h-72 w-72 -translate-x-1/2" />

        <div className="container relative max-w-5xl px-4 mx-auto text-center">
          <div className="eyebrow mb-8 animate-fade-up">
            <Sparkles className="w-3.5 h-3.5" />
            Welcome to the Future of Development
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up animation-delay-100">
            Building Digital <span className="text-gradient">Brilliance</span>
          </h1>
          <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-muted-foreground animate-fade-up animation-delay-200">
            We craft exceptional digital experiences through innovative web
            development, mobile applications, and cutting-edge technology
            solutions that transform businesses.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row animate-fade-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="w-full px-8 py-6 text-base rounded-full sm:w-auto cta-button group"
            >
              <Link href={ROUTES.CONTACT}>
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full px-8 py-6 text-base rounded-full sm:w-auto border-border/80 hover:border-primary/40 hover:bg-primary/5"
            >
              <Link href={ROUTES.PORTFOLIO}>View Our Work</Link>
            </Button>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 max-w-3xl gap-6 mx-auto mt-16 md:grid-cols-4 animate-fade-up animation-delay-500">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold tracking-tight md:text-4xl text-gradient">
                  {stat.number}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container px-4">
          <div
            className="max-w-2xl mx-auto mb-16 text-center"
            data-aos="fade-up"
          >
            <div className="eyebrow mb-6">
              <Zap className="w-3.5 h-3.5" />
              Our Expertise
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_PREVIEW.map((service, i) => (
              <Card
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="p-8 rounded-3xl card-gradient group"
              >
                <div className="icon-chip mb-6 group-hover:bg-primary group-hover:text-white">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-14 text-center" data-aos="fade-up">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 rounded-full border-border/80 hover:border-primary/40 hover:bg-primary/5 group"
            >
              <Link href={ROUTES.SERVICES}>
                View All Services
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 md:py-28">
        <div className="container px-4">
          <div
            className="max-w-2xl mx-auto mb-16 text-center"
            data-aos="fade-up"
          >
            <div className="eyebrow mb-6">
              <LayoutGrid className="w-3.5 h-3.5" />
              Our Work
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Showcasing our latest work and innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PROJECTS.filter((project) => project.featured)
              .slice(0, 3)
              .map((project, i) => (
                <Card
                  key={project.slug}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                  className="overflow-hidden rounded-3xl card-gradient group"
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
                  <div className="p-7">
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
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-full border border-border/80 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-border/80 text-muted-foreground">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
          <div className="mt-14 text-center" data-aos="fade-up">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 rounded-full border-border/80 hover:border-primary/40 hover:bg-primary/5 group"
            >
              <Link href={ROUTES.PORTFOLIO}>
                View Full Portfolio
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container px-4">
          <div
            className="max-w-2xl mx-auto mb-16 text-center"
            data-aos="fade-up"
          >
            <div className="eyebrow mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              Latest Insights
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              From Our Blog
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Stay updated with the latest trends, tutorials, and insights from
              our team
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogs
              .filter((post) => post.sticky)
              .map((post, index) => (
                <div
                  key={post.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <BlogCard post={post} />
                </div>
              ))}
          </div>
          <div className="mt-14 text-center" data-aos="fade-up">
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
              Ready to Build Something Amazing?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-white/85 md:text-xl">
              Let&apos;s discuss your project and turn your ideas into reality
              with our expert team
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-full bg-white text-primary hover:bg-white/90 group"
              >
                <Link href={ROUTES.CONTACT}>
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={ROUTES.ABOUT}>Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
