import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/routes";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title}`,
        description: project.subtitle,
        openGraph: {
            title: `${project.title}`,
            description: project.subtitle,
            images: [
                {
                    url: project.thumbnail,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} | Vektorizer Portfolio`,
            description: project.subtitle,
            images: [project.thumbnail],
        },
    };
}


export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);
    if (!project) return notFound();

    return (
        <div className="min-h-screen px-4 pt-32 pb-32 space-y-8 md:container md:space-y-24">

            {/* Title & Website */}
            <div className="space-y-6 text-center" data-aos="fade-down">
                <h1 className="inline-flex items-center justify-center gap-2 text-4xl font-bold tracking-tight md:text-5xl">
                    {project.title}
                    {project.website && (
                        <Link href={project.website} target="_blank">
                            <ArrowUpRight className="w-6 h-6 transition text-primary hover:scale-110" />
                        </Link>
                    )}
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                    {project.subtitle}
                </p>
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={1200}
                    height={650}
                    priority
                    className="mx-auto mt-10 border shadow-md rounded-xl"
                    data-aos="zoom-in"
                />
            </div>

            {/* Core Modules Heading */}
            <div className="relative py-12 space-y-8 text-center md:py-8" data-aos="fade-up">
                {/* Decorative gradient ring behind heading */}
                <div className="absolute inset-0 flex items-start justify-center pointer-events-none -z-10">
                    <div className="rounded-full w-72 h-72 md:w-64 md:h-64 bg-gradient-to-br from-emerald-400/30 via-teal-500/20 to-green-400/30 blur-2xl animate-float" />
                </div>

                {/* Main heading with gradient text and highlight ring */}
                <div className="relative inline-block">
                    <h2 className="text-4xl font-extrabold tracking-tight text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 animate-text-glow drop-shadow-md">
                        🚀 Core Modules
                    </h2>
                </div>

                {/* Subtitle with icon and smooth typography */}
                <p className="flex items-center justify-center max-w-xl gap-2 mx-auto text-sm text-muted-foreground md:text-base">
                    <span>A glimpse into the engine that powers this experience — modular, scalable, and beautifully crafted.</span>
                </p>
            </div>

            {/* Modules */}
            <div
                className={cn(
                    project.images ?
                        "space-y-10 md:space-y-20" : 
                        "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 space-y-0"
                )}
            >
                {project.modules.map((mod, i) => {
                    const isEven = i % 2 === 0;
                    const isMobile = mod.isImageMobile;

                    const image = project.images && mod.image && (
                        <div
                            className={cn(
                                "relative w-full overflow-hidden rounded-xl transition-all duration-500",
                                isMobile ? "md:h-[480px] h-72" : "h-auto border shadow-md"
                            )}
                            data-aos="zoom-in"
                        >
                            <Image
                                src={mod.image}
                                alt={mod.title}
                                width={1200}
                                height={600}
                                className={cn(
                                    "transition duration-500 hover:scale-105",
                                    isMobile ? "h-full object-contain p-6" : "object-cover"
                                )}
                            />
                        </div>
                    );

                    const content = (
                        <div className="space-y-4" data-aos="fade-up">
                            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase rounded-full shadow bg-gradient-to-r from-emerald-500 to-teal-600">
                                Module {i + 1}
                            </span>
                            <h3 className="text-2xl font-semibold">{mod.title}</h3>
                            <p className="text-muted-foreground">{mod.description}</p>
                            {mod.points?.length > 0 && (
                                <ul className="pl-5 mt-4 space-y-2 text-sm list-disc text-muted-foreground">
                                    {mod.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start space-x-2">
                                            <span className="mt-1.5 block w-2.5 h-2.5 transform rotate-45 bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    );

                    if (!project.images) {
                        return (
                            <div
                                key={i}
                                className="px-6 py-10 space-y-4 transition shadow-sm bg-muted/40 rounded-xl hover:shadow-md"
                            >
                                {content}
                            </div>
                        );
                    }

                    return (
                        <div
                            key={i}
                            className={cn(
                                "grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20 px-6 py-8 md:px-8 rounded-2xl transition-all duration-300",
                                isEven
                                    ? "bg-muted/30"
                                    : "bg-gradient-to-br from-secondary/30 via-muted/20 to-background"
                            )}
                        >
                            {isEven ? (
                                <>
                                    {content}
                                    {image}
                                </>
                            ) : (
                                <>
                                    {image}
                                    {content}
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Tech Stack */}
            {project.tech?.length > 0 && (
                <div className="space-y-8 text-center" data-aos="fade-up">
                    <h2 className="text-2xl font-bold">🛠️ Tech Stack</h2>
                    <div className="flex flex-wrap justify-center max-w-4xl gap-4 mx-auto">
                        {project.tech.map((tech, i) => (
                            <div
                                key={i}
                                className="px-4 py-2 text-sm font-medium text-white transition-transform duration-300 rounded-full shadow-md bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:scale-105"
                                data-aos="zoom-in"
                                data-aos-delay={i * 100}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* CTA */}
            <div
                className="pt-20 mt-20 text-center border-t border-border"
                data-aos="fade-up"
            >
                <h2 className="mb-4 text-2xl font-bold">Have a similar idea?</h2>
                <p className="mb-6 text-muted-foreground">
                    Let’s bring it to life — beautifully and efficiently.
                </p>
                <Button
                    asChild
                    className="justify-center px-6 py-3 rounded-full cta-button dark:text-white"
                >
                    <Link href={ROUTES.CONTACT}>
                        Contact Us
                    </Link>
                </Button>
            </div>
        </div>
    );
}
