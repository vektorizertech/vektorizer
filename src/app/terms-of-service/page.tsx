import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Target } from "lucide-react";
import { ROUTES } from "@/data/routes";
import Link from "next/link";
import type { Metadata } from "next";
import { PROJECT_TERMS, SUPPORT_MAINTENANCE, TERMINATION_POLICIES, TERMS_OF_SERVICES } from "@/data/terms_of_services";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Review Vektorizer's Terms of Service to understand the legal agreements, project policies, and service expectations when working with us.",
    keywords: [
        "Vektorizer Terms of Service",
        "service agreement",
        "freelance contract",
        "project policy",
        "termination terms",
        "support and maintenance",
        "Vektorizer legal"
    ],
    metadataBase: new URL("https://www.vektorizer.com"),
    alternates: {
        canonical: "/terms-of-service",
    },
    openGraph: {
        title: "Terms of Service",
        description:
            "Read our Terms of Service to understand the legal agreements, responsibilities, and service conditions when engaging with Vektorizer.",
        url: "https://www.vektorizer.com/terms-of-service",
        siteName: "Vektorizer",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/images/og-terms.png",
                width: 1200,
                height: 630,
                alt: "Vektorizer Terms of Service",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | Vektorizer",
        description:
            "Understand Vektorizer's project terms, support policies, and legal service agreements.",
        images: ["/images/og-terms.png"],
    },
};

const TermsOfService = () => {

    return (
        <div className="min-h-screen">
            {/* Header */}
            <section className="relative pt-36 pb-12 hero-gradient md:pt-44 md:pb-16">
                <div className="bg-grid-fade" />
                <div className="container relative px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center" data-aos="fade-up">
                            <div className="eyebrow mb-8">
                                <Scale className="w-3.5 h-3.5" />
                                Legal Terms
                            </div>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                                Terms of <span className="text-gradient">Service</span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                                Please read these terms carefully before using our services. They establish the foundation of our professional relationship.
                            </p>
                            <div className="mt-6 text-sm text-muted-foreground">
                                Last updated: December 15, 2023
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-12">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8 mb-12 rounded-3xl card-gradient" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-start space-x-4">
                                <div className="icon-chip">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="mb-4 text-2xl font-bold">Agreement Overview</h2>
                                    <p className="leading-relaxed text-muted-foreground">
                                        These Terms of Service (&quot;Terms&quot;) govern your use of Vektorizer&apos;s services, including our website,
                                        development services, and any related services we provide. By engaging with our services,
                                        you enter into a legally binding agreement with Vektorizer. These terms protect both parties
                                        and ensure a clear understanding of our mutual responsibilities.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Main Sections */}
            <section className="py-16">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-8">
                            {TERMS_OF_SERVICES.map((section, index) => (
                                <Card
                                    key={index}
                                    className="p-8 rounded-3xl card-gradient"
                                    data-aos="fade-up"
                                    data-aos-delay={`${index * 100}`}
                                >
                                    <div className="flex items-start space-x-6">
                                        <div className="icon-chip w-14 h-14">
                                            <section.icon className="h-7 w-7" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-6 text-2xl font-bold">{section.title}</h3>
                                            <ul className="space-y-4">
                                                {section.content.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="flex items-start space-x-3">
                                                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                                                        <span className="leading-relaxed text-muted-foreground">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Terms */}
            <section className="py-16 bg-secondary/50">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8 rounded-3xl card-gradient" data-aos="fade-up">
                            <h3 className="flex items-center gap-3 mb-6 text-2xl font-bold">
                                <span className="icon-chip w-10 h-10 rounded-xl">
                                    <Target className="w-5 h-5" />
                                </span>
                                Project-Specific Terms
                            </h3>
                            <div className="grid gap-8 md:grid-cols-2">
                                {[0, 1].map(col => (
                                    <div key={col} className="space-y-6">
                                        {PROJECT_TERMS.filter((_, i) => i % 2 === col).map((term, index) => (
                                            <div key={index}>
                                                <h4 className="mb-3 text-lg font-semibold">
                                                    {term.icon} {term.title}
                                                </h4>
                                                <ul className="space-y-2 text-muted-foreground">
                                                    {term.points.map((point, idx) => (
                                                        <li key={idx} className="flex items-start space-x-2">
                                                            <span className="mt-2 block w-2 h-2 shrink-0 rounded-full bg-primary" />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Support & Maintenance */}
            <section className="py-16">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8 rounded-3xl card-gradient" data-aos="fade-up">
                            <h3 className="mb-6 text-2xl font-bold">Support & Maintenance</h3>
                            <div className="grid gap-6 md:grid-cols-3">
                                {SUPPORT_MAINTENANCE.map((item, index) => (
                                    <div key={index} className="p-6 text-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5">
                                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20">
                                            <span className="text-2xl">{item.icon}</span>
                                        </div>
                                        <h4 className="mb-2 font-semibold">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Termination */}
            <section className="py-16 bg-secondary/50">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8 rounded-3xl card-gradient" data-aos="fade-up">
                            <h3 className="mb-6 text-2xl font-bold">Termination of Services</h3>
                            <div className="space-y-6 text-muted-foreground">
                                <p>
                                    Either party may terminate the service agreement with written notice. However, certain conditions apply:
                                </p>
                                <div className="grid gap-8 md:grid-cols-2">
                                    {TERMINATION_POLICIES.map((section, index) => (
                                        <div key={index}>
                                            <h4 className="mb-3 font-semibold text-foreground">{section.title}</h4>
                                            <ul className="space-y-4 text-sm">
                                                {section.content.map((point, i) => (
                                                    <li key={i} className="flex items-start space-x-2">
                                                        <span className="mt-1.5 block w-2 h-2 shrink-0 rounded-full bg-primary" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10" data-aos="zoom-in">
                <div className="container px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="mb-6 text-3xl font-bold">Questions About These Terms?</h3>
                        <p className="mb-8 text-lg text-muted-foreground">
                            We&apos;re happy to clarify any aspects of our terms of service. Contact us for more information.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button asChild className="px-8 rounded-full cta-button dark:text-white">
                                <Link href={ROUTES.CONTACT}>Get in Touch</Link>
                            </Button>
                            <Button asChild variant="outline" className="px-8 rounded-full hover:bg-primary/5">
                                <Link href={ROUTES.PRIVACY_POLICY}>View Privacy Policy</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;
