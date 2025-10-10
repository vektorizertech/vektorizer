"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 p-4 rounded-full",
        "bg-gradient-to-br from-emerald-600/80 to-teal-600/80 text-white",
        "backdrop-blur-xl border border-white/20 shadow-xl",
        "hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
      )}
    >
      <ArrowUp className="h-6 w-6 transition-transform duration-300" />
    </button>
  );
};

export default FloatingScrollButton;
