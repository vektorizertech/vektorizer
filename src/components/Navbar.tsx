"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Moon, Sun, ChevronDown } from "lucide-react";
import { ROUTES } from "@/data/routes";
import { COURSES } from "@/data/bootcamps";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBootcampOpen, setIsBootcampOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Services", path: ROUTES.SERVICES },
    { name: "Portfolio", path: ROUTES.PORTFOLIO },
    { name: "About", path: ROUTES.ABOUT },
    { name: "Testimonials", path: ROUTES.TESTIMONIALS },
    { name: "Blogs", path: ROUTES.BLOGS },
  ];

  const bootcampOptions = [
    { name: "All Bootcamps", path: ROUTES.BOOTCAMPS },
    ...COURSES.map((course) => ({
      name: course.title,
      path: `${ROUTES.BOOTCAMPS}/${encodeURIComponent(course.title.toLowerCase().replace(/\s+/g, "-"))}`,
    })),
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    // Close bootcamp dropdown when mobile menu closes
    if (!isOpen) {
      setIsBootcampOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    // Close bootcamp dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isBootcampOpen &&
        !(event.target as Element).closest(".bootcamp-dropdown")
      ) {
        setIsBootcampOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isBootcampOpen]);

  const linkUnderline = (
    <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out",
        isScrolled ? "sm:py-2 px-0 sm:px-6" : "p-0"
      )}
    >
      <div
        className={cn(
          "mx-auto w-full transition-all duration-500 ease-out relative",
          isScrolled
            ? "max-w-5xl sm:rounded-full px-3 sm:px-6 py-2 shadow-xl navbar-glass"
            : "max-w-full px-4 sm:px-10 py-3 sm:py-5"
        )}
      >
        <div className="flex items-center justify-between">
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-2.5 group"
            aria-label="Vektorizer home"
          >
            <Image
              src="/images/logo/logo.svg"
              alt="Vektorizer Logo"
              width={100}
              height={100}
              className={cn(
                "h-9 w-auto transition-transform duration-500",
                !isScrolled &&
                  "group-hover:animate-slide-rotate-slide will-change-transform"
              )}
            />
            <span
              className={cn(
                "text-base font-bold tracking-tight transition-all duration-500 sm:text-xl",
                isScrolled && "sm:opacity-0 sm:scale-90 sm:-translate-x-2"
              )}
            >
              Vektorizer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "relative group text-sm font-semibold transition-colors duration-300 hover:text-foreground",
                  pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",
                    pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}

            {/* Bootcamps Dropdown */}
            <div
              className="relative group bootcamp-dropdown"
              onMouseEnter={() => setIsBootcampOpen(true)}
              onMouseLeave={() => setIsBootcampOpen(false)}
            >
              <button
                className={cn(
                  "relative group flex items-center gap-1 text-sm font-semibold transition-colors duration-300 hover:text-foreground",
                  pathname.startsWith(ROUTES.BOOTCAMPS)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                aria-expanded={isBootcampOpen}
              >
                <span>Bootcamps</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isBootcampOpen && "rotate-180"
                  )}
                />
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",
                    pathname.startsWith(ROUTES.BOOTCAMPS)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              {isBootcampOpen && (
                <div className="absolute left-0 z-50 mt-3 border shadow-2xl top-full w-80 rounded-2xl border-border/60 bg-popover/95 backdrop-blur-xl animate-fade-in-down">
                  <div className="p-3 overflow-y-auto max-h-96 custom-scrollbar">
                    <div className="grid gap-1">
                      {bootcampOptions.map((option, index) => (
                        <Link
                          key={option.name}
                          href={option.path}
                          className={cn(
                            "block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-primary/10 hover:text-primary",
                            pathname === option.path
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground",
                            index === 0 &&
                              "mb-1 border-b border-border/60 pb-3 rounded-b-none"
                          )}
                        >
                          {option.name}
                        </Link>
                      ))}
                    </div>
                    {bootcampOptions.length > 8 && (
                      <div className="flex justify-center mt-2 opacity-50">
                        <ChevronDown className="w-4 h-4 animate-bounce" />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="items-center hidden gap-3 md:flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full transition-colors hover:bg-primary/10"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            <Button
              asChild
              className="relative px-6 overflow-hidden rounded-full cta-button group"
            >
              <Link
                href={ROUTES.CONTACT}
                className="relative z-10 flex items-center gap-1.5"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full transition-colors hover:bg-primary/10"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            <button
              className="flex flex-col justify-center items-center w-9 h-9 space-y-1.5"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "bg-current w-6 h-0.5 rounded-full transition-all duration-300",
                  isOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "bg-current w-6 h-0.5 rounded-full transition-all duration-300",
                  isOpen && "opacity-0 scale-0"
                )}
              />
              <span
                className={cn(
                  "bg-current w-6 h-0.5 rounded-full transition-all duration-300",
                  isOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="p-6 mt-4 space-y-5 border shadow-xl md:hidden rounded-2xl border-border/60 bg-background/95 backdrop-blur-xl animate-fade-in-down">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-1 text-lg font-semibold transition-colors duration-300 hover:text-primary animate-slide-in-left",
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground",
                  `animation-delay-${index * 100 + 100}`
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Bootcamps Section */}
            <div className="space-y-3">
              <button
                onClick={() => setIsBootcampOpen(!isBootcampOpen)}
                className={cn(
                  "flex items-center justify-between w-full py-1 text-lg font-semibold transition-colors duration-300 hover:text-primary animate-slide-in-left animation-delay-600",
                  pathname.startsWith(ROUTES.BOOTCAMPS)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                aria-expanded={isBootcampOpen}
              >
                <span>Bootcamps</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    isBootcampOpen && "rotate-180"
                  )}
                />
              </button>

              {isBootcampOpen && (
                <div className="pl-4 space-y-1 border-l-2 border-primary/20 animate-fade-in-down">
                  {bootcampOptions.map((option) => (
                    <Link
                      key={option.name}
                      href={option.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block py-2 text-base font-medium transition-colors duration-300 hover:text-primary",
                        pathname === option.path
                          ? "text-primary"
                          : "text-muted-foreground/80"
                      )}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Button
              asChild
              className="w-full mt-4 font-semibold rounded-full cta-button"
            >
              <Link href={ROUTES.CONTACT} onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
