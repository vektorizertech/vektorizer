"use client";

// import { Button } from "@/components/ui/button";
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

  return (
    <footer className="border-t bg-gradient-to-br from-secondary via-background to-secondary border-border/40">
      <div className="container px-6 py-8 md:px-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href={ROUTES.HOME}
              className="flex items-center mb-6 space-x-3 group"
            >
              <div className="group relative flex items-center space-x-0.5 overflow-hidden">
                <Image
                  src="/images/logo/logo.svg"
                  alt="Vektorizer Logo"
                  width={100}
                  height={100}
                  className="h-10 w-auto transition-transform duration-500 hidden dark:block"
                />
                <span className="text-base font-bold transition-opacity duration-500 sm:text-xl  dark:text-gradient">
                  Vektorizer
                </span>
              </div>
            </Link>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Building digital brilliance through innovative solutions. We
              transform ideas into exceptional digital experiences that drive
              growth and success. 🚀
            </p>

            {/* Contact Info */}
            <div className="mb-8 space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center space-x-3 transition-colors duration-300 text-muted-foreground hover:text-primary"
              >
                <Mail className="w-5 h-5" />
                <span>{EMAIL}</span>
              </a>

              <a
                href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
                className="flex items-center space-x-3 transition-colors duration-300 text-muted-foreground hover:text-primary"
              >
                <Phone className="w-5 h-5" />
                <span>{PHONE}</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(LOCATION)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 transition-colors duration-300 text-muted-foreground hover:text-primary"
              >
                <MapPin className="w-5 h-5" />
                <span>{LOCATION}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 transition-all rounded-full bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary hover:to-primary/80 duration-400 hover:scale-110 hover:-translate-y-1 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 transition-colors duration-300 text-primary dark:text-white group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="mb-6 text-lg font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="inline-block transition-all duration-300 text-muted-foreground hover:text-primary hover:translate-x-1"
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
        <div className="flex flex-col items-center justify-between pt-8 mt-16 space-y-4 border-t border-border/40 md:flex-row md:space-y-0">
          <p className="text-center text-muted-foreground md:text-left">
            © {currentYear} Vektorizer. All rights reserved.
          </p>
          <div className="items-center hidden space-x-6 text-sm text-muted-foreground md:flex">
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
