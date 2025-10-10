import { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/routes";
import Link from "next/link";
import {
    // TEAM,
    TECHSTACK,
    VALUES
} from "@/data/about";

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
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 hero-gradient">
                <div className="container px-4 text-center">
                    <h1 className="mb-6 text-4xl font-bold md:text-6xl" data-aos="fade-up">
                        About <span className="text-gradient">Vektorizer</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="150">
                        We&apos;re a passionate team of developers, designers, and innovators
                        dedicated to building digital brilliance
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20">
                <div className="container grid items-center max-w-6xl gap-12 px-4 mx-auto lg:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
                        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                            At Vektorizer, we believe that technology should empower businesses
                            to reach their full potential. Our mission is to bridge the gap
                            between innovative technology and practical business solutions.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Though newly founded, we&apos;ve already helped businesses enhance their digital presence—bringing modern, scalable solutions to startups and growing ventures.
                        </p>
                    </div>
                    <div data-aos="fade-left">
                        <Image
                            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                            alt="Team collaboration"
                            width={600}
                            height={400}
                            className="shadow-2xl rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-secondary/30">
                <div className="container px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl" data-aos="fade-up">Our Core Values</h2>
                    <p className="max-w-2xl mx-auto mb-16 text-xl text-muted-foreground" data-aos="fade-up" data-aos-delay="150">
                        The principles that guide everything we do
                    </p>
                    <div className="grid gap-8 md:grid-cols-3">
                        {VALUES.map((value, i) => (
                            <Card
                                key={i}
                                data-aos="zoom-in-up"
                                data-aos-delay={i * 150}
                                className="p-8 text-center transition-all duration-300 card-gradient hover:scale-105 group"
                            >
                                <value.icon className="w-12 h-12 mx-auto mb-4 transition-transform duration-300 text-primary group-hover:scale-110" />
                                <h3 className="mb-4 text-2xl font-semibold">{value.title}</h3>
                                <p className="leading-relaxed text-muted-foreground">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Founders */}
            <section className="relative z-10 py-28 bg-background">
                <div className="container px-4 text-center">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-foreground" data-aos="fade-up">
                        Meet the Founders
                    </h2>
                    <p
                        className="max-w-2xl mx-auto mb-16 text-lg text-muted-foreground"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        The minds shaping Vektorizer’s vision, technology, and impact
                    </p>

                    {/* <div className="grid max-w-5xl grid-cols-1 gap-12 mx-auto md:grid-cols-2">
                        {TEAM.map((member, i) => (
                            <div
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                                className="relative group rounded-3xl p-8 shadow-xl transition-all duration-300 hover:scale-[1.025] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-800/30 via-emerald-800/20 to-background border border-border hover:border-primary/40 hover:shadow-[0_0_30px_-5px_theme(colors.primary.DEFAULT)]"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={1000}
                                        height={1000}
                                        className="object-cover w-40 h-40 mb-6 transition duration-300 rounded-full shadow-lg ring-4 ring-primary/30"
                                    />
                                    <h3 className="text-2xl font-semibold text-foreground">{member.name}</h3>
                                    <span className="inline-block px-4 py-1 mt-2 mb-4 text-sm font-medium tracking-wide text-white uppercase rounded-full shadow-md bg-primary/10 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:from-teal-600 group-hover:to-emerald-500">
                                        {member.role}
                                    </span>
                                    <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 bg-secondary/30">
                <div className="container px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl" data-aos="fade-up">
                        Our Tech Stack
                    </h2>
                    <p
                        className="max-w-2xl mx-auto mb-16 text-xl text-muted-foreground"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        We work with cutting-edge technologies to deliver the best solutions
                    </p>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
                        {TECHSTACK.map((tech, i) => (
                            <div
                                key={tech.name}
                                data-aos="zoom-in"
                                data-aos-delay={i * 100}
                                className="group p-5 transition-all duration-300 rounded-xl bg-card hover:bg-secondary/50 hover:scale-[1.05] shadow-sm hover:shadow-lg cursor-pointer"
                            >
                                <tech.icon className="mx-auto text-3xl transition-transform duration-300 text-primary group-hover:scale-110" />
                                <span className="block mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground sm:text-base">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container max-w-3xl px-4 mx-auto text-center" data-aos="fade-up">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Work Together?</h2>
                    <p className="mb-8 text-xl text-muted-foreground" data-aos="fade-up" data-aos-delay="150">
                        Let&apos;s discuss how we can help bring your vision to life
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row" data-aos="zoom-in-up" data-aos-delay="300">
                        <Button asChild size="lg" className="px-8 py-6 text-lg dark:text-white">
                            <Link href={ROUTES.CONTACT}>Get In Touch</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
                            <Link href={ROUTES.PORTFOLIO}>View Our Work</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
