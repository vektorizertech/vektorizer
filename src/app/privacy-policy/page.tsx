import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { ROUTES } from "@/data/routes";
import Link from "next/link";
import type { Metadata } from "next";
import { COOKIE_POLICY, PRIVACY_POLICY, YOUR_RIGHTS } from "@/data/privacy_policy";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Read Vektorizer's Privacy Policy to understand how we collect, use, and protect your personal data when you use our services.",
    keywords: [
        "Vektorizer Privacy Policy",
        "data protection",
        "user privacy",
        "GDPR compliance",
        "cookie usage",
        "your data rights",
    ],
    openGraph: {
        title: "Privacy Policy",
        description: "Learn how Vektorizer handles your personal data and privacy in a secure and transparent way.",
        url: "https://www.vektorizer.com/privacy-policy",
        siteName: "Vektorizer",
        images: [
            {
                url: "/images/og-privacy.png",
                width: 1200,
                height: 630,
                alt: "Vektorizer Privacy Policy",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Vektorizer",
        description: "Understand how Vektorizer protects your data and ensures privacy.",
        images: ["/images/og-privacy.png"],
    },
    metadataBase: new URL("https://www.vektorizer.com"),
    alternates: {
        canonical: "/privacy-policy",
    },
};


const PrivacyPolicy = () => {

    return (
        <div className="min-h-screen pt-20 bg-gradient-to-br from-background via-secondary/30 to-background">
            {/* Header */}
            <section className="py-16">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12 text-center" data-aos="fade-up">
                            <div className="inline-flex items-center px-6 py-3 mb-6 text-sm font-semibold rounded-full bg-primary/10 text-primary dark:text-white">
                                🔒 Your Privacy Matters
                            </div>
                            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                                Privacy <span className="text-gradient">Policy</span>
                            </h1>
                            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                                We&apos;re committed to protecting your privacy and being transparent about how we handle your data.
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
                        <Card className="p-8 mb-12 card-gradient" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-start space-x-4">
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="mb-4 text-2xl font-bold">Welcome to Vektorizer&apos;s Privacy Policy</h2>
                                    <p className="leading-relaxed text-muted-foreground">
                                        At Vektorizer, we respect your privacy and are committed to protecting your personal data.
                                        This privacy policy explains how we collect, use, and safeguard your information when you
                                        visit our website or use our services. By using our services, you agree to the collection
                                        and use of information in accordance with this policy.
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
                            {PRIVACY_POLICY.map((section, index) => (
                                <Card
                                    key={index}
                                    className="p-8 card-gradient"
                                    data-aos="fade-up"
                                    data-aos-delay={`${index * 100}`}
                                >
                                    <div className="flex items-start space-x-6">
                                        <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-primary/80">
                                            <section.icon className="text-white h-7 w-7" />
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

            {/* Cookies Section */}
            <section className="py-16 bg-secondary/50" id="cookies">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8 card-gradient" data-aos="fade-up">
                            <h3 className="flex items-center mb-6 text-2xl font-bold">
                                <span className="mr-3">🍪</span>
                                Cookie Policy
                            </h3>
                            <div className="space-y-6 text-muted-foreground">
                                <p>
                                    We use cookies and similar tracking technologies to enhance your experience on our website.
                                    Cookies are small data files stored on your device that help us understand how you use our site.
                                </p>
                                <div className="grid gap-6 md:grid-cols-2">
                                    {COOKIE_POLICY.map((cookie, index) => (
                                        <div key={index} className="space-y-2">
                                            <h4 className="font-semibold text-foreground">{cookie.title}</h4>
                                            <p className="text-sm text-muted-foreground">{cookie.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Your Rights */}
            <section className="py-16">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8 card-gradient" data-aos="fade-up">
                            <h3 className="mb-6 text-2xl font-bold">Your Rights & Choices</h3>
                            <div className="grid gap-8 md:grid-cols-2">
                                {[YOUR_RIGHTS.slice(0, 3), YOUR_RIGHTS.slice(3)].map((column, columnIndex) => (
                                    <div key={columnIndex} className="space-y-4">
                                        {column.map((item, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-primary/20">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="mb-1 font-semibold">{item.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10" data-aos="zoom-in">
                <div className="container px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="mb-6 text-3xl font-bold">Questions About Your Privacy?</h3>
                        <p className="mb-8 text-lg text-muted-foreground">
                            We&apos;re here to help. Contact our privacy team with any questions or concerns.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button asChild className="px-8 rounded-full cta-button dark:text-white">
                                <Link href={ROUTES.CONTACT}>Contact Privacy Team</Link>
                            </Button>
                            <Button asChild variant="outline" className="px-8 rounded-full hover:bg-primary/5">
                                <Link href={ROUTES.TERMS_OF_SERVICE}>View Terms of Service</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
