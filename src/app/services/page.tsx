import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ROUTES } from "@/data/routes";
import Link from "next/link";
import { PROCESS, SERVICES } from "@/data/services";

// ✅ SEO Metadata
export const metadata: Metadata = {
    title: "Services",
    description: "Explore Vektorizer's comprehensive digital services including web development, AI integration, and more.",
    openGraph: {
        title: "Services",
        description: "Explore Vektorizer's comprehensive digital services including web development, AI integration, and more.",
        url: "https://www.vektorizer.com/services",
        siteName: "Vektorizer",
        images: [
            {
                url: "/images/og-services.png",
                width: 1200,
                height: 630,
                alt: "Vektorizer Services",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function Services() {
    return (
        <div className="min-h-screen pt-32 services-bg">
            {/* Hero Section */}
            <section className="py-20">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-bounce-subtle dark:text-white">
                            🚀 Our Services
                        </div>
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl" data-aos="fade-up">
                            Comprehensive <span className="text-gradient">Digital Solutions</span>
                        </h1>
                        <p className="max-w-3xl mx-auto mb-12 text-xl md:text-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
                            From web development to AI integration, we provide end-to-end solutions that drive your business forward.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container px-4">
                    <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
                        {SERVICES.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <Card
                                    key={index}
                                    data-aos={index % 2 === 0 ? "zoom-in-up" : "fade-left"}
                                    data-aos-delay={index * 100}
                                    data-aos-duration="800"
                                    className={cn(
                                        "card-gradient p-8 hover:scale-105 transition-all duration-500 group",
                                        index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "w-16 h-16 rounded-2xl bg-gradient-to-r flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12",
                                            service.color
                                        )}
                                    >
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                                        {service.title}
                                    </h3>

                                    <p className="mb-6 leading-relaxed text-muted-foreground">
                                        {service.description}
                                    </p>

                                    <ul className="mb-6 space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                                                <CheckCircle
                                                    className="w-4 h-4 text-green-500 animate-bounce-subtle"
                                                    style={{ animationDelay: `${featureIndex * 100}ms` }}
                                                />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="transition-all duration-300 group/btn shadow bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6"
                                    >
                                        <Link href={`${ROUTES.SERVICES}/${service.slug}`} className="flex items-center space-x-1">
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        </Link>
                                    </Button>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gradient-to-r from-teal-600/5 to-green-500/5">
                <div className="container px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="mb-6 text-3xl font-bold md:text-5xl animate-fade-up">
                                Our <span className="text-gradient">Process</span>
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                                We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {PROCESS.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="flip-up"
                                    data-aos-delay={index * 150}
                                    data-aos-duration="700"
                                    className={cn(
                                        "relative group",
                                    )}
                                >
                                    <div className="text-center">
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-xl font-bold text-white transition-transform duration-300 rounded-full bg-gradient-to-r from-teal-600 to-green-500 group-hover:scale-110">
                                            {item.step}
                                        </div>
                                        <h3 className="mb-4 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                                            {item.title}
                                        </h3>
                                        <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                                    </div>

                                    {index < PROCESS.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-600/30 to-transparent -translate-x-8" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="mb-6 text-3xl font-bold md:text-5xl" data-aos="fade-up">
                            Ready to Get <span className="text-gradient">Started?</span>
                        </h2>
                        <p className="mb-8 text-xl text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
                            Let&apos;s discuss your project and see how we can help bring your vision to life.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row" data-aos="zoom-in-up" data-aos-delay="400">
                            <Button asChild size="lg" className="rounded-full cta-button group">
                                <Link href={ROUTES.CONTACT} className="flex items-center space-x-2 dark:text-white">
                                    <span>Start Your Project</span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="transition-all duration-300 rounded-full hover:bg-secondary/80"
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
