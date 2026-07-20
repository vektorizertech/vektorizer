"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { ROUTES } from "@/data/routes";
import { EMAIL, LOCATION, PHONE, SOCIAL_LINKS } from "@/data/social";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: SERVICES.map((service) => ({
        name: service.title,
        href: `/services/${service.slug}`,
      })),
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: ROUTES.ABOUT },
        { name: "Portfolio", href: ROUTES.PORTFOLIO },
        { name: "Testimonials", href: ROUTES.TESTIMONIALS },
        { name: "Blog", href: ROUTES.BLOGS },
        { name: "Contact", href: ROUTES.CONTACT },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: ROUTES.PRIVACY_POLICY },
        { name: "Terms of Service", href: ROUTES.TERMS_OF_SERVICE },
        { name: "Cookie Policy", href: ROUTES.COOKIE_POLICY },
      ],
    },
  ];

  const contactItems = [
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, label: PHONE, href: `tel:${PHONE.replace(/[^+\d]/g, "")}` },
    {
      icon: MapPin,
      label: LOCATION,
      href: `https://www.google.com/maps/search/${encodeURIComponent(LOCATION)}`,
      external: true,
    },
  ];

  return (
    <footer className="relative border-t border-border/60 bg-background">
      {/* Primary hairline accent along the top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href={ROUTES.HOME}
              className="inline-flex items-center gap-2.5 mb-6 group"
            >
              <Image
                src="/images/logo/logo.svg"
                alt="Vektorizer Logo"
                width={100}
                height={100}
                className="w-auto h-10 transition-transform duration-500 group-hover:-rotate-6"
              />
              <span className="text-xl font-bold tracking-tight">
                Vektorizer
              </span>
            </Link>

            <p className="max-w-md mb-8 leading-relaxed text-muted-foreground">
              Building digital brilliance through innovative solutions. We
              transform ideas into exceptional digital experiences that drive
              growth and success.
            </p>

            {/* Contact Info */}
            <ul className="mb-8 space-y-3">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-3 transition-colors duration-300 text-muted-foreground hover:text-primary group"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <item.icon className="w-4 h-4" />
                    </span>
                    <span className="text-sm">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full border-border/60 text-muted-foreground hover:border-primary/40 hover:bg-primary hover:text-white hover:-translate-y-0.5"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-5 text-sm font-semibold tracking-widest uppercase text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm transition-colors duration-300 text-muted-foreground hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-16 border-t border-border/60 md:flex-row">
          <p className="text-sm text-center text-muted-foreground md:text-left">
            © {currentYear} Vektorizer. All rights reserved.
          </p>
          <div className="items-center hidden gap-6 text-sm text-muted-foreground md:flex">
            <Link
              href={ROUTES.PRIVACY_POLICY}
              className="transition-colors duration-300 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href={ROUTES.TERMS_OF_SERVICE}
              className="transition-colors duration-300 hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
