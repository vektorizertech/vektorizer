import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/data/routes";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import Image from "next/image";
// import { CLIENTS } from "@/data/clients";
import { SERVICES_PREVIEW } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { fetchBlogs } from "@/lib/fetchBlogs";

export const metadata: Metadata = {
  description: "Explore Vektorizer's digital solutions in web development, mobile apps, blockchain, and AI. Trusted by global clients.",
  keywords: "web development, mobile apps, AI integration, blockchain, Pakistan software house",
  openGraph: {
    title: "Vektorizer | Building Digital Brilliance",
    description: "Explore our services and insights to build your next big idea.",
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
    description: "Explore our services and insights to build your next big idea.",
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
              "https://github.com/vektorizer"
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="py-20 hero-gradient md:py-32" data-aos="fade-up" data-aos-duration="1000">
        <div className="container max-w-5xl px-4 mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-semibold rounded-full bg-primary/10 text-primary animate-bounce-subtle dark:text-white">
            🚀 Welcome to the Future of Development
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-snug sm:text-5xl md:text-6xl lg:text-8xl">
            Building Digital <span className="text-gradient">Brilliance</span>
          </h1>
          <p className="max-w-4xl mx-auto mb-12 text-xl leading-relaxed md:text-2xl text-muted-foreground animate-fade-up animation-delay-200">
            We craft exceptional digital experiences through innovative web development,
            mobile applications, and cutting-edge technology solutions that transform businesses.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row animate-fade-up animation-delay-400">
            <Button asChild size="lg" className="w-full px-10 py-6 text-lg rounded-full sm:w-auto cta-button group dark:text-white">
              <Link href={ROUTES.CONTACT}>
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full px-10 py-6 text-lg rounded-full sm:w-auto hover:bg-primary/5">
              <Link href={ROUTES.PORTFOLIO}>View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-secondary">
        <div className="container px-4">
          <div className="mb-20 text-center" data-aos="fade-up" data-aos-duration="1000">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm rounded-full bg-primary/10 text-primary dark:text-white">
              ⚡ Our Expertise
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Our Services</h2>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES_PREVIEW.map((service, i) => (
              <Card
                key={i}
                data-aos={i % 2 === 0 ? "zoom-in-up" : "flip-left"}
                data-aos-delay={i * 100}
                data-aos-duration="800"
                className={cn("card-gradient p-8 hover:scale-105 transition-all duration-500 group")}
              >
                <service.icon className="w-12 h-12 mb-6 transition-all duration-500 text-primary group-hover:scale-110 group-hover:rotate-12" />
                <h3 className="mb-3 text-xl font-semibold group-hover:text-primary">{service.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="px-8 rounded-full hover:bg-primary/5">
              <Link href={ROUTES.SERVICES}>View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="container px-4">
          <div className="mb-20 text-center animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm rounded-full bg-primary/10 text-primary dark:text-white">
              🎨 Our Work
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Featured Projects</h2>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">Showcasing our latest work and innovative solutions</p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {PROJECTS.
              filter(project => project.featured)
              .slice(0, 3)
              .map((project, i) => (
                <Card
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  data-aos-duration="800"
                  className="overflow-hidden transition-all duration-500 card-gradient group hover:scale-105"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={1200}
                      height={600}
                      className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-8">
                    <Link href={`${ROUTES.PORTFOLIO}/${project.slug}`} className="mb-3 text-xl font-semibold group-hover:text-primary">
                      {project.title}
                    </Link>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {project.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded bg-secondary/50 text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded bg-secondary/50 text-muted-foreground">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="px-8 rounded-full hover:bg-primary/5">
              <Link href={ROUTES.PORTFOLIO}>View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-secondary">
        <div className="container px-4">
          <div className="mb-20 text-center" data-aos="fade-up" data-aos-duration="1000">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm rounded-full bg-primary/10 text-primary dark:text-white">
              📚 Latest Insights
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">From Our Blog</h2>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
              Stay updated with the latest trends, tutorials, and insights from our team
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {blogs
              .filter(post => post.sticky)
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
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="px-8 rounded-full hover:bg-primary/5">
              <Link href={ROUTES.BLOGS}>View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients */}
      {/* <section className="py-24">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Trusted by Leading Companies</h2>
          <p className="mb-12 text-muted-foreground">Join the ranks of successful businesses we&apos;ve helped grow</p>
          <div className="grid items-center grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {CLIENTS.map((client, i) => (
              <div
                key={i}
                data-aos="flip-up"
                data-aos-delay={i * 100}
                data-aos-duration="800"
              >
                <div className="flex items-center justify-center h-20 transition-all duration-500 cursor-pointer bg-gradient-to-r from-secondary to-secondary/50 rounded-2xl group hover:from-primary/10 hover:to-primary/5">
                  <span className="font-semibold text-muted-foreground group-hover:text-primary">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-24 hero-gradient" data-aos="zoom-in-up" data-aos-duration="1000">
        <div className="container px-4 text-center">
          <h2 className="mb-8 text-4xl font-bold md:text-5xl">Ready to Build Something Amazing? 🚀</h2>
          <p className="max-w-2xl mx-auto mb-12 text-xl text-muted-foreground">
            Let&apos;s discuss your project and turn your ideas into reality with our expert team
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Button asChild size="lg" className="px-10 py-6 text-lg rounded-full cta-button group dark:text-white" data-aos="fade-up" data-aos-delay="300" >
              <Link href={ROUTES.CONTACT}>
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-10 py-6 text-lg rounded-full hover:bg-primary/5" data-aos="fade-up" data-aos-delay="500">
              <Link href={ROUTES.ABOUT}>Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
