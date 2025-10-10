import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES } from "@/data/services";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/routes";
import Image from "next/image";

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

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
        <div className="min-h-screen pt-24 transition-colors duration-300 bg-background text-foreground">
            {/* Hero Section */}
            <section className="py-20 border-b bg-gradient-to-b from-background to-muted/10 border-border">
                <div
                    className="container max-w-3xl px-4 mx-auto text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h1 className="mb-4 text-5xl font-extrabold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                        {service.title}
                    </h1>
                    <p className="text-lg text-muted-foreground">{service.details.hero}</p>
                </div>
            </section>

            {/* Content Sections */}
            {service.details.content.map((section, idx) => (
                <section
                    key={idx}
                    className={`py-20 ${idx % 2 === 0 ? "bg-background" : "bg-muted/10"}`}
                    data-aos="fade-up"
                    data-aos-delay={idx * 150}
                >
                    <div className="container grid items-center max-w-6xl grid-cols-1 gap-10 px-4 mx-auto md:grid-cols-2">
                        <div className={`text-center md:text-left space-y-4 ${idx % 2 !== 0 ? "order-last" : ""}`}>
                            <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                                {section.heading}
                            </h3>
                            <p className="text-lg text-muted-foreground">{section.body}</p>
                        </div>
                        <Image
                            src={section.image}
                            alt={section.heading}
                            width={500}
                            height={300}
                            className="object-cover w-full h-auto rounded-lg shadow-lg"
                            data-aos="zoom-in"
                            data-aos-delay={idx * 100 + 50}
                        />
                    </div>
                </section>
            ))}

            {/* Tech Stack */}
            {service.details.tech && (
                <section className="py-20 bg-gradient-to-b from-muted/5 to-background">
                    <div className="container max-w-6xl px-4 mx-auto text-center">
                        <h3 className="mb-12 text-3xl font-bold" data-aos="fade-up">
                            Our Tech Stack
                        </h3>

                        <div className="flex flex-wrap justify-center gap-6">
                            {service.details.tech.map((tech, idx) => {
                                const Icon = tech.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="group flex flex-col items-center gap-3 p-4 transition border shadow-md rounded-xl border-border bg-background/50 backdrop-blur w-[calc(50%-1.5rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] max-w-[220px] flex-shrink-0 hover:bg-secondary/50 hover:scale-[1.05]"
                                        data-aos="zoom-in-up"
                                        data-aos-delay={idx * 50}
                                    >
                                        <Icon className="w-12 h-12 text-primary group-hover:scale-110" />
                                        <span className="text-base text-muted-foreground">{tech.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQs */}
            {service.details.faq && (
                <section className="py-20 border-t bg-background border-border">
                    <div className="container max-w-3xl px-4" data-aos="fade-up">
                        <h3 className="mb-6 text-3xl font-bold text-center">FAQs</h3>
                        <Accordion type="single" collapsible className="space-y-4">
                            {service.details.faq.map((faq, idx) => (
                                <AccordionItem key={idx} value={`faq-${idx}`}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            )}

            {/* CTA */}
            {service.details.cta && (
                <section className="py-24 text-center text-white bg-gradient-to-r from-primary to-secondary">
                    <div
                        className="container max-w-2xl px-4 mx-auto space-y-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3 className="text-4xl font-bold">{service.details.cta.heading}</h3>
                        <p className="text-lg">{service.details.cta.subheading}</p>
                        <Button asChild size="lg" className="transition rounded-full hover:scale-105 dark:text-white">
                            <Link href={ROUTES.CONTACT}>{service.details.cta.buttonText}</Link>
                        </Button>
                    </div>
                </section>
            )}
        </div>
    );
}
