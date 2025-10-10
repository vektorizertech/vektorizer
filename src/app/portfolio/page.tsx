import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/routes";
import { PROJECTS } from "@/data/projects";
import { STATS } from "@/data/stats";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Explore Vektorizer's diverse portfolio of cutting-edge digital projects, from mobile apps to AI systems.",
    openGraph: {
        title: "Portfolio",
        description: "Explore Vektorizer's diverse portfolio of cutting-edge digital projects.",
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
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 hero-gradient">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl" data-aos="fade-up" data-aos-delay="100">
                            Our <span className="text-gradient">Portfolio</span>
                        </h1>
                        <p className="max-w-3xl mx-auto mb-8 text-xl md:text-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
                            Explore our latest projects and see how we&apos;ve helped businesses transform their digital presence
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="container px-4">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {PROJECTS.map((project, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden transition-all duration-300 card-gradient hover:scale-[1.02] group p-0"
                                data-aos={index % 2 === 0 ? "fade-up" : "zoom-in-up"}
                                data-aos-delay={index * 150}
                            >
                                <div className="w-full">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        width={1200}
                                        height={600}
                                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        priority={index < 3}
                                    />
                                </div>

                                <div className="p-6">
                                    <Link
                                        href={`${ROUTES.PORTFOLIO}/${project.slug}`}
                                        className="mb-2 text-xl font-semibold inline-block"
                                    >
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

                                    <Link href={`${ROUTES.PORTFOLIO}/${project.slug}`}>
                                        <Button variant="outline" size="sm" className="w-full">
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-secondary/30">
                <div className="container px-4">
                    <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
                        {STATS.map((stat, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                                <div className="mb-2 text-4xl font-bold md:text-5xl text-primary">{stat.number}</div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container px-4">
                    <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl" data-aos="fade-up" data-aos-delay="100">Have a Project in Mind?</h2>
                        <p className="mb-8 text-xl text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
                            Let&apos;s collaborate and create something extraordinary together
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row" data-aos="zoom-in-up" data-aos-delay="300">
                            <Button asChild size="lg" className="px-8 py-6 text-lg dark:text-white">
                                <Link href={ROUTES.CONTACT}>Start Your Project</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
                                <Link href={ROUTES.SERVICES}>View Services</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
