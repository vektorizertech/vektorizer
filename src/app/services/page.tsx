import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { ROUTES } from "@/data/routes";
import Link from "next/link";
import { PROCESS, SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Vektorizer's comprehensive digital services including web development, AI integration, and more.",
  openGraph: {
    title: "Services",
    description:
      "Explore Vektorizer's comprehensive digital services including web development, AI integration, and more.",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 services-bg md:pt-44 md:pb-20">
        <div className="bg-grid-fade" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow mb-8" data-aos="fade-up">
              <Zap className="w-3.5 h-3.5" />
              Our Services
            </div>
            <h1
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Comprehensive{" "}
              <span className="text-gradient">Digital Solutions</span>
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              From web development to AI integration, we provide end-to-end
              solutions that drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
            {SERVICES.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.slug}
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                  className="flex flex-col p-8 rounded-3xl card-gradient group"
                >
                  <div
                    className={`flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
                  >
                    <IconComponent className="text-white w-7 h-7" />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mb-8 space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-auto rounded-full border-border/80 hover:border-primary/40 hover:bg-primary/5 hover:text-primary group/btn"
                  >
                    <Link
                      href={`${ROUTES.SERVICES}/${service.slug}`}
                      className="flex items-center gap-1.5"
                    >
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
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="max-w-2xl mx-auto mb-16 text-center"
              data-aos="fade-up"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                Our <span className="text-gradient">Process</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                We follow a proven methodology to ensure your project is
                delivered on time, within budget, and exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((item, index) => (
                <div
                  key={item.step}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="relative text-center group"
                >
                  <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-6">
                    <div className="absolute inset-0 transition-transform duration-300 rounded-full cta-button group-hover:scale-110" />
                    <span className="relative text-xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  {index < PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-gradient-to-r from-primary/40 to-transparent" />
                  )}
                </div>
              ))}
            </div>
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
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-white/85 md:text-xl">
              Let&apos;s discuss your project and see how we can help bring your
              vision to life.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-full bg-white text-primary hover:bg-white/90 group"
              >
                <Link href={ROUTES.CONTACT} className="flex items-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
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
