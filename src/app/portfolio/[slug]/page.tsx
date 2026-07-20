import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/routes";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-16 portfolio-bg md:pt-44 md:pb-20">
        <div className="bg-grid-fade" />
        <div
          className="container relative px-4 mx-auto text-center"
          data-aos="fade-up"
        >
          <h1 className="inline-flex items-center justify-center gap-3 mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            {project.title}
            {project.website && (
              <Link
                href={project.website}
                target="_blank"
                aria-label={`Visit ${project.title} website`}
                className="flex items-center justify-center w-10 h-10 transition-all border rounded-full border-border/70 text-primary hover:bg-primary hover:text-white hover:border-primary"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            )}
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            {project.subtitle}
          </p>
          <div className="relative max-w-5xl mx-auto mt-12">
            <div className="glow-orb -top-10 left-1/2 h-48 w-96 -translate-x-1/2" />
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={1200}
              height={650}
              priority
              className="relative w-full border shadow-2xl rounded-3xl border-border/60"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div
            className="max-w-2xl mx-auto mb-16 text-center"
            data-aos="fade-up"
          >
            <div className="eyebrow mb-6">Core Modules</div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Inside the <span className="text-gradient">Build</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into the engine that powers this experience — modular,
              scalable, and beautifully crafted.
            </p>
          </div>

          {/* Modules */}
          <div
            className={cn(
              "mx-auto max-w-6xl",
              project.images
                ? "space-y-10 md:space-y-16"
                : "grid grid-cols-1 gap-8 md:grid-cols-2"
            )}
          >
            {project.modules.map((mod, i) => {
              const isEven = i % 2 === 0;
              const isMobile = mod.isImageMobile;

              const image = project.images && mod.image && (
                <div
                  className={cn(
                    "relative w-full overflow-hidden rounded-2xl",
                    isMobile
                      ? "md:h-[480px] h-72 bg-secondary/40"
                      : "h-auto border border-border/60 shadow-md"
                  )}
                  data-aos="zoom-in"
                >
                  <Image
                    src={mod.image}
                    alt={mod.title}
                    width={1200}
                    height={600}
                    className={cn(
                      "transition-transform duration-700 hover:scale-105",
                      isMobile ? "h-full w-full object-contain p-6" : "object-cover"
                    )}
                  />
                </div>
              );

              const content = (
                <div className="space-y-4" data-aos="fade-up">
                  <span className="eyebrow">Module {i + 1}</span>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {mod.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {mod.description}
                  </p>
                  {mod.points?.length > 0 && (
                    <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                      {mod.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full shrink-0 bg-primary/10 text-primary">
                            <Check className="w-3 h-3" />
                          </span>
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
                    className="p-8 rounded-3xl card-gradient"
                    data-aos="fade-up"
                    data-aos-delay={(i % 2) * 100}
                  >
                    {content}
                  </div>
                );
              }

              return (
                <div
                  key={i}
                  className={cn(
                    "grid grid-cols-1 items-center gap-10 rounded-3xl border border-border/60 bg-secondary/30 px-6 py-10 md:grid-cols-2 md:gap-16 md:px-10"
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
        </div>
      </section>

      {/* Tech Stack */}
      {project.tech?.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary/40">
          <div className="container px-4 text-center" data-aos="fade-up">
            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center max-w-4xl gap-3 mx-auto">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium transition-colors border rounded-full border-primary/25 bg-primary/5 text-foreground hover:border-primary/50 hover:bg-primary/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container px-4">
          <div
            className="cta-panel px-6 py-16 text-center md:px-16"
            data-aos="fade-up"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Have a similar idea?
            </h2>
            <p className="max-w-xl mx-auto mb-10 text-lg text-white/85">
              Let&apos;s bring it to life — beautifully and efficiently.
            </p>
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base font-semibold rounded-full bg-white text-primary hover:bg-white/90 group"
            >
              <Link href={ROUTES.CONTACT}>
                Contact Us
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
