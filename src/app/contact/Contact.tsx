"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/data/faqs";
import { EMAIL, LOCATION, PHONE } from "@/data/social";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const { toast } = useToast();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast({
                    title: "Message sent!",
                    description: "We'll get back to you within 24 hours.",
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                toast({
                    title: "Something went wrong!",
                    description: "Please try again later.",
                    variant: "destructive",
                });
            }
        } catch (err) {
            toast({
                title: "Unexpected error!",
                description: "Please check your internet connection or try again.",
                variant: "destructive",
            });
            console.error("Error sending message:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="py-20 hero-gradient">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto text-center" data-aos="fade-in">
                            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                                Get In <span className="text-gradient">Touch</span>
                            </h1>
                            <p className="max-w-3xl mx-auto mb-8 text-xl md:text-2xl text-muted-foreground">
                                Ready to start your next project? Let&apos;s discuss how we can help bring your vision to life.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Form + Info */}
                <section className="py-20">
                    <div className="container px-4">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
                            {/* Contact Form */}
                            <div className="lg:col-span-2">
                                <Card className="h-full p-8 card-gradient" data-aos="zoom-in" data-aos-delay="100">
                                    <h2 className="mb-6 text-2xl font-bold">Send us a message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div>
                                                <Label htmlFor="name">Name</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="mt-1"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    className="mt-1"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                required
                                                className="mt-1"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                rows={6}
                                                required
                                                className="mt-1"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full dark:text-white"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? "Sending..." : "Send Message"}
                                        </Button>
                                    </form>
                                </Card>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-6 lg:col-span-2">
                                <Card className="p-6 card-gradient" data-aos="zoom-in" data-aos-delay={200 + 0 * 100}>
                                    <h3 className="mb-2 font-semibold">Email</h3>
                                    <p className="text-muted-foreground">{EMAIL}</p>
                                </Card>
                                <Card className="p-6 card-gradient" data-aos="zoom-in" data-aos-delay={200 + 1 * 100}>
                                    <h3 className="mb-2 font-semibold">Phone</h3>
                                    <p className="text-muted-foreground">{PHONE}</p>
                                </Card>
                                <Card className="p-6 card-gradient" data-aos="zoom-in" data-aos-delay={200 + 2 * 100}>
                                    <h3 className="mb-2 font-semibold">Address</h3>
                                    <p className="text-muted-foreground">
                                        {LOCATION.split(",").map((line, index) => (
                                            <span key={index}>
                                                {line.trim()}
                                                {index < LOCATION.split(",").length - 1 && <br />}
                                            </span>
                                        ))}
                                    </p>
                                </Card>

                                {/* Image Card */}
                                <Card className="p-0 overflow-hidden card-gradient" data-aos="fade-up" data-aos-delay="600">
                                    <div className="relative aspect-video">
                                        <Image
                                            src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=400&fit=crop"
                                            alt="Office location"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 800px"
                                            priority
                                        />
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-secondary/30">
                    <div className="container px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-16 text-center" data-aos="fade-up">
                                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
                                <p className="text-xl text-muted-foreground">
                                    Common questions about our services and process
                                </p>
                            </div>
                            <Accordion type="single" collapsible className="space-y-4">
                                {FAQs.map((faq, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        value={`faq-${idx}`}
                                        data-aos="fade-up"
                                        data-aos-delay={idx * 100}
                                    >
                                        <AccordionTrigger className="text-lg font-semibold">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
