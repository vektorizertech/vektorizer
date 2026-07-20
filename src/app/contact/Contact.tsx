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
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

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

  const contactCards = [
    { icon: Mail, title: "Email", value: EMAIL },
    { icon: Phone, title: "Phone", value: PHONE },
    { icon: MapPin, title: "Address", value: LOCATION },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 hero-gradient md:pt-44 md:pb-20">
        <div className="bg-grid-fade" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow mb-8" data-aos="fade-up">
              <MessageCircle className="w-3.5 h-3.5" />
              Let&apos;s Talk
            </div>
            <h1
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Ready to start your next project? Let&apos;s discuss how we can
              help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-8 mx-auto max-w-6xl lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card
                className="h-full p-8 rounded-3xl card-gradient md:p-10"
                data-aos="fade-up"
              >
                <h2 className="mb-2 text-2xl font-bold tracking-tight">
                  Send us a message
                </h2>
                <p className="mb-8 text-sm text-muted-foreground">
                  We typically respond within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="rounded-xl"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="rounded-xl"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="What's this about?"
                      className="rounded-xl"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your project..."
                      className="rounded-xl"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full cta-button group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-5 lg:col-span-2">
              {contactCards.map((item, index) => (
                <Card
                  key={item.title}
                  className="flex items-center gap-4 p-6 rounded-3xl card-gradient"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="icon-chip">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="mb-0.5 text-sm font-semibold tracking-widest uppercase text-muted-foreground">
                      {item.title}
                    </h3>
                    <p className="font-medium break-words text-foreground">
                      {item.value}
                    </p>
                  </div>
                </Card>
              ))}

              {/* Image Card */}
              <Card
                className="p-0 overflow-hidden rounded-3xl card-gradient"
                data-aos="fade-up"
                data-aos-delay="400"
              >
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
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-14 text-center" data-aos="fade-up">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Common questions about our services and process
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {FAQs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 60}
                  className="px-6 border rounded-2xl border-border/70 bg-card data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline md:text-lg">
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
  );
};

export default Contact;
