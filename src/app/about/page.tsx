import { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/routes";
import Link from "next/link";
import { ArrowRight, Heart, Layers, Users } from "lucide-react";
import { TEAM, TECHSTACK, VALUES } from "@/data/about";
import { STATS } from "@/data/stats";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vektorizer – our mission, values, and the talented team behind our digital success. Discover how we build innovative, scalable software solutions.",
  openGraph: {
    title: "About Vektorizer",
    description:
      "Meet the team and values that drive Vektorizer's success in delivering cutting-edge digital products.",
    url: "https://vektorizer.com/about",
    siteName: "Vektorizer",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Vektorizer Team",
      },
    ],
    type: "website",
  },
};

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 about-bg md:pt-44 md:pb-24">
        <div className="bg-grid-fade" />
        <div className="container relative px-4 text-center">
          <div className="eyebrow mb-8" data-aos="fade-up">
            <Users className="w-3.5 h-3.5" />
            Who We Are
          </div>
          <h1
            className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About <span className="text-gradient">Vektorizer</span>
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We&apos;re a passionate team of developers, designers, and
            innovators dedicated to building digital brilliance
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="container grid items-center max-w-6xl gap-12 px-4 mx-auto lg:grid-cols-2 lg:gap-16">
          <div data-aos="fade-up">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Our Mission
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              At Vektorizer, we believe that technology should empower
              businesses to reach their full potential. Our mission is to bridge
              the gap between innovative technology and practical business
              solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Though newly founded, we&apos;ve already helped businesses enhance
              their digital presence—bringing modern, scalable solutions to
              startups and growing ventures.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {STATS.slice(0, 2).map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 border rounded-2xl border-border/70 bg-secondary/40"
                >
                  <div className="text-3xl font-bold tracking-tight text-gradient">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative" data-aos="fade-up" data-aos-delay="150">
            <div className="glow-orb -top-8 -right-8 h-48 w-48" />
            <Image
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
              alt="Team collaboration"
              width={600}
              height={400}
              className="relative w-full shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container px-4">
          <div
            className="max-w-3xl mx-auto mb-16 text-center"
            data-aos="fade-up"
          >
            <div className="eyebrow mb-6">
              <Users className="w-3.5 h-3.5" />
              Meet the Founders
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              The People Behind Vektorizer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Vektorizer was founded by Aamir Jabbar and Sahher Abbas — two
              passionate technologists with a shared vision of making data and
              tech skills accessible to everyone. Together, they lead a team
              dedicated to building data-driven products and job-ready talent.
            </p>
          </div>
          <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
            {TEAM.map((member, i) => (
              <Card
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="flex flex-col p-8 rounded-3xl card-gradient"
              >
                <div className="flex items-center gap-5 mb-6">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover w-24 h-24 border rounded-2xl border-border/70"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-24 h-24 text-2xl font-bold text-white rounded-2xl bg-gradient-to-br from-primary to-primary/60">
                      {member.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {member.credentials.map((credential) => (
                    <span
                      key={credential}
                      className="px-3 py-1 text-xs font-medium border rounded-full border-border/70 bg-secondary/60 text-muted-foreground"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="container px-4">
          <div
            className="max-w-2xl mx-auto mb-16 text-center"
            data-aos="fade-up"
          >
            <div className="eyebrow mb-6">
              <Heart className="w-3.5 h-3.5" />
              Our Core Values
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              What Guides Us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <Card
                key={value.title}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="p-8 text-center rounded-3xl card-gradient group"
              >
                <div className="icon-chip mx-auto mb-6 group-hover:bg-primary group-hover:text-white">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28">
        <div className="container px-4">
          <div
            className="max-w-2xl mx-auto mb-16 text-center"
            data-aos="fade-up"
          >
            <div className="eyebrow mb-6">
              <Layers className="w-3.5 h-3.5" />
              Our Tech Stack
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Technologies We Master
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              We work with cutting-edge technologies to deliver the best
              solutions
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {TECHSTACK.map((tech, i) => (
              <div
                key={tech.name}
                data-aos="zoom-in"
                data-aos-delay={(i % 6) * 60}
                className="p-6 text-center transition-all duration-300 border group rounded-2xl border-border/70 bg-card hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <tech.icon className="mx-auto text-3xl transition-transform duration-300 text-primary group-hover:scale-110" />
                <span className="block mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
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
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-white/85 md:text-xl">
              Let&apos;s discuss how we can help bring your vision to life
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-full bg-white text-primary hover:bg-white/90 group"
              >
                <Link href={ROUTES.CONTACT}>
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
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
};

export default About;
