import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES } from "@/data/services";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/routes";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title}`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 services-bg md:pt-44 md:pb-20">
        <div className="bg-grid-fade" />
        <div
          className="container relative max-w-3xl px-4 mx-auto text-center"
          data-aos="fade-up"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">{service.title}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {service.details.hero}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      {service.details.content.map((section, idx) => (
        <section
          key={idx}
          className={`py-16 md:py-24 ${idx % 2 === 0 ? "bg-background" : "bg-secondary/40"}`}
        >
          <div className="container grid items-center max-w-6xl grid-cols-1 gap-10 px-4 mx-auto md:grid-cols-2 md:gap-16">
            <div
              className={`space-y-4 text-center md:text-left ${idx % 2 !== 0 ? "md:order-last" : ""}`}
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                {section.heading}
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </div>
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="glow-orb -bottom-6 -right-6 h-40 w-40" />
              <Image
                src={section.image}
                alt={section.heading}
                width={500}
                height={300}
                className="relative object-cover w-full h-auto shadow-xl rounded-3xl"
              />
            </div>
          </div>
        </section>
      ))}

      {/* Tech Stack */}
      {service.details.tech && (
        <section className="py-20 md:py-28">
          <div className="container max-w-6xl px-4 mx-auto text-center">
            <h3
              className="mb-12 text-3xl font-bold tracking-tight md:text-4xl"
              data-aos="fade-up"
            >
              Our Tech Stack
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {service.details.tech.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={idx}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 w-[calc(50%-1rem)] sm:w-[calc(33.33%-1rem)] md:w-[calc(25%-1rem)] max-w-[200px] shrink-0"
                    data-aos="zoom-in"
                    data-aos-delay={(idx % 4) * 60}
                  >
                    <Icon className="w-10 h-10 transition-transform duration-300 text-primary group-hover:scale-110" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                      {tech.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.details.faq && (
        <section className="py-20 border-t md:py-28 bg-secondary/40 border-border/60">
          <div className="container max-w-3xl px-4" data-aos="fade-up">
            <h3 className="mb-10 text-3xl font-bold tracking-tight text-center md:text-4xl">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="space-y-3">
              {service.details.faq.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="px-6 border rounded-2xl border-border/70 bg-card data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* CTA */}
      {service.details.cta && (
        <section className="py-20 md:py-28">
          <div className="container px-4">
            <div
              className="cta-panel px-6 py-16 text-center md:px-16 md:py-20"
              data-aos="zoom-in-up"
            >
              <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                {service.details.cta.heading}
              </h3>
              <p className="max-w-2xl mx-auto mb-10 text-lg text-white/85">
                {service.details.cta.subheading}
              </p>
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-full bg-white text-primary hover:bg-white/90 group"
              >
                <Link href={ROUTES.CONTACT}>
                  {service.details.cta.buttonText}
                  <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
