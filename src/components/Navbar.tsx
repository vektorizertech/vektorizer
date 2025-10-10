"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { ROUTES } from "@/data/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Services", path: ROUTES.SERVICES },
    { name: "Portfolio", path: ROUTES.PORTFOLIO },
    { name: "About", path: ROUTES.ABOUT },
    { name: "Testimonials", path: ROUTES.TESTIMONIALS },
    { name: "Blogs", path: ROUTES.BLOGS },
    // { name: "Bootcamps", path: ROUTES.BOOTCAMPS },
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
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

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
  }, [isOpen]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out",
      isScrolled ? "sm:py-2 px-0 sm:px-6" : "p-0"
    )}>
      <div className={cn(
        "mx-auto w-full transition-all duration-500 ease-out relative",
        isScrolled
          ? "max-w-5xl sm:rounded-full px-2 sm:px-8 py-2 shadow-2xl navbar-glass"
          : "max-w-full px-4 sm:px-10 py-3 sm:py-5"
      )}>

        <div className="flex items-center justify-between">
          <Link href={ROUTES.HOME} className="flex items-center space-x-3 group">
            <div className="group relative flex items-center space-x-0.5 overflow-hidden">
              {/* <Image
                src="/logo.png"
                alt="Vektorizer Logo"
                width={1000}
                height={1000}
                className={cn(
                  "h-10 w-auto transition-transform duration-500 block dark:hidden",
                  !isScrolled && "group-hover:animate-slide-rotate-slide will-change-transform"
                )}
              />
              <Image
                src="/logo-dark.png"
                alt="Vektorizer Logo"
                width={1000}
                height={1000}
                className={cn(
                  "h-10 w-auto transition-transform duration-500 hidden dark:block",
                  !isScrolled && "group-hover:animate-slide-rotate-slide will-change-transform"
                )}
              /> */}
              <span className="mt-2 text-2xl font-bold transition-opacity duration-500 sm:text-3xl dark:text-gradient">
                Vektorizer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-10 md:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "text-sm font-semibold transition-all duration-400 hover:text-primary dark:hover:text-white relative group animate-fade-up",
                  pathname === item.path
                    ? "text-primary dark:text-white"
                    : "text-muted-foreground hover:scale-105",
                  `animation-delay-${index * 100 + 200}`
                )}
              >
                {item.name}
                <span className="absolute left-0 w-0 h-1 transition-all rounded-full -bottom-2 bg-gradient-to-r from-teal-600 to-green-600 duration-400 group-hover:w-full" />
                <span className="absolute left-0 w-0 h-1 transition-all rounded-full opacity-50 -bottom-2 bg-gradient-to-r from-teal-600 to-green-600 blur-sm duration-400 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="items-center hidden space-x-4 md:flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-all rounded-full hover:bg-primary/10 duration-400 hover:scale-110 hover:rotate-12"
            >
              {isDark ? (
                <Sun className="w-5 h-5 transition-transform rotate-0 duration-400 hover:rotate-180" />
              ) : (
                <Moon className="w-5 h-5 transition-transform rotate-0 duration-400 hover:-rotate-12" />
              )}
            </Button>
            <Button asChild className="relative px-6 overflow-hidden rounded-full cta-button hover:scale-100 group">
              <Link href={ROUTES.CONTACT} className="relative z-10 flex items-center space-x-1 dark:text-white">
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-400 group-hover:translate-x-1 group-hover:scale-110" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-all duration-300 rounded-full hover:bg-primary/10"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <button
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={cn(
                "bg-current w-7 h-0.5 rounded-full transition-all duration-400",
                isOpen && "rotate-45 translate-y-2.5"
              )} />
              <span className={cn(
                "bg-current w-7 h-0.5 rounded-full transition-all duration-400",
                isOpen && "opacity-0 scale-0"
              )} />
              <span className={cn(
                "bg-current w-7 h-0.5 rounded-full transition-all duration-400",
                isOpen && "-rotate-45 -translate-y-2.5"
              )} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="p-6 mt-4 space-y-6 border shadow-xl md:hidden rounded-2xl bg-background/90 backdrop-blur border-border/30 animate-fade-in-down">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-1 text-lg font-semibold transition-all duration-400 hover:text-primary hover:translate-x-3 animate-slide-in-left",
                  pathname === item.path ? "text-primary" : "text-muted-foreground",
                  `animation-delay-${index * 100 + 100}`
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full mt-6 font-semibold text-white transition rounded-full shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:scale-105"
            >
              <Link href={ROUTES.CONTACT}>Contact Us</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
