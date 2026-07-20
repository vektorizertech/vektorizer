"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    CalendarCheck,
    Check,
    ChevronDown,
    Clock,
    Code,
    GraduationCap,
    MapPin,
    Monitor,
    Sparkles,
    UserRound,
    Users,
    Wrench,
    ArrowRight,
    BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/routes";
import { cn } from "@/lib/utils";

// Helper function to get icon component from string
const getIconComponent = (iconName?: string) => {
    switch (iconName) {
        case "Users":
            return Users;
        case "Code":
            return Code;
        case "Monitor":
            return Monitor;
        case "Calendar":
            return Calendar;
        case "Clock":
            return Clock;
        case "MapPin":
            return MapPin;
        default:
            return Monitor; // Default fallback
    }
};

interface Badge {
    text: string;
    icon?: string;
    color?: string;
}

interface Instructor {
    name: string;
    title: string;
    image: string;
    bio?: string;
    experience?: string;
    subtitle?: string;
    badges?: Badge[];
}

interface Subtopic {
    category?: string;
    items: string[];
}

interface Module {
    title: string;
    description?: string;
    subtopics?: Subtopic[];
    tags?: string[];
}

interface Tool {
    name: string;
    icon?: string;
}

interface BootcampComponentProps {
    title: string;
    description: string;
    duration: string;
    schedule: string;
    startDate: string;
    format: string;
    instructor: Instructor;
    modules?: Module[];
    tools?: Tool[];
    heroMessage?: string;
    certificationTitle?: string;
    instructorStats?: Array<{ value: string; label: string }>;
}

const BootcampComponent: React.FC<BootcampComponentProps> = ({
    title,
    description,
    duration,
    schedule,
    startDate,
    format,
    instructor,
    modules = [],
    tools = [],
    heroMessage,
    certificationTitle,
    instructorStats = [],
}) => {
    const [expandedModule, setExpandedModule] = useState<number | null>(null);

    const toggleModule = (index: number) => {
        setExpandedModule(expandedModule === index ? null : index);
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const scaleIn = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, ease: "easeOut" },
    };

    // Title with the last word highlighted in the brand gradient
    const titleWords = title.trim().split(" ");
    const titleLead = titleWords.slice(0, -1).join(" ");
    const titleAccent = titleWords[titleWords.length - 1];

    // Some course entries ship a placeholder image path that doesn't resolve
    const hasInstructorImage =
        !!instructor.image && !instructor.image.startsWith("/api/placeholder");
    const instructorInitials = instructor.name
        .split(" ")
        .map((n) => n[0])
        .join("");

    const heroFacts = [
        { icon: Clock, label: "Duration", value: duration },
        { icon: Calendar, label: "Schedule", value: schedule },
        { icon: CalendarCheck, label: "Starts", value: startDate },
        { icon: MapPin, label: "Format", value: format },
    ];

    // Modules without any expandable detail render as static rows
    const moduleHasDetails = (m: Module) =>
        !!m.description || (m.subtopics?.length ?? 0) > 0 || (m.tags?.length ?? 0) > 0;

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 hero-gradient md:pt-44 md:pb-24">
                <div className="bg-grid-fade" />
                <div className="glow-orb -top-16 right-[15%] h-64 w-64" />

                <div className="container relative px-4 mx-auto">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <motion.div
                            className="space-y-7"
                            initial="initial"
                            animate="animate"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp}>
                                <div className="eyebrow">
                                    <GraduationCap className="w-3.5 h-3.5" />
                                    Professional Bootcamp
                                </div>
                            </motion.div>

                            <motion.h1
                                className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
                                variants={fadeInUp}
                            >
                                {titleLead}{" "}
                                <span className="text-gradient">{titleAccent}</span>
                            </motion.h1>

                            <motion.p
                                className="text-lg leading-relaxed text-muted-foreground"
                                variants={fadeInUp}
                            >
                                {description}
                            </motion.p>

                            {heroMessage && (
                                <motion.div
                                    className="flex items-start gap-3 p-4 border rounded-2xl border-primary/20 bg-primary/5"
                                    variants={fadeInUp}
                                >
                                    <Sparkles className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                                    <p className="text-sm font-medium leading-relaxed md:text-base">
                                        {heroMessage}
                                    </p>
                                </motion.div>
                            )}

                            <motion.div
                                className="grid grid-cols-2 gap-3"
                                variants={staggerContainer}
                            >
                                {heroFacts.map((fact) => (
                                    <motion.div
                                        key={fact.label}
                                        className="flex items-center gap-3 p-4 border rounded-2xl border-border/70 bg-card/70 backdrop-blur-sm"
                                        variants={scaleIn}
                                    >
                                        <span className="icon-chip w-10 h-10 rounded-xl">
                                            <fact.icon className="w-4 h-4" />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
                                                {fact.label}
                                            </span>
                                            <span className="block text-sm font-semibold truncate">
                                                {fact.value}
                                            </span>
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                className="flex flex-col gap-4 pt-2 sm:flex-row"
                                variants={fadeInUp}
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="px-8 py-6 text-base rounded-full cta-button group"
                                >
                                    <Link href={ROUTES.CONTACT}>
                                        Reserve Your Seat
                                        <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                {modules.length > 0 && (
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="px-8 py-6 text-base rounded-full border-border/80 hover:border-primary/40 hover:bg-primary/5"
                                    >
                                        <a href="#curriculum">View Curriculum</a>
                                    </Button>
                                )}
                            </motion.div>
                        </motion.div>

                        {/* Certification / Instructor card */}
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className="relative w-full max-w-sm">
                                <div className="glow-orb -bottom-8 -left-8 h-48 w-48" />
                                <div className="relative p-8 rounded-3xl card-gradient">
                                    {certificationTitle && (
                                        <div className="mb-6 text-center">
                                            <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                                                Become a certified
                                            </p>
                                            <h3 className="text-2xl font-bold tracking-tight text-gradient">
                                                {certificationTitle}
                                            </h3>
                                        </div>
                                    )}

                                    {instructor.name && (
                                        <div className="mb-6">
                                            <div className="relative w-full h-64 mb-5 overflow-hidden rounded-2xl bg-secondary/60">
                                                {hasInstructorImage ? (
                                                    <Image
                                                        src={instructor.image}
                                                        alt={instructor.name}
                                                        fill
                                                        sizes="(max-width: 640px) 100vw, 384px"
                                                        className="object-cover object-top"
                                                    />
                                                ) : (
                                                    <div className="flex items-center justify-center w-full h-full text-6xl font-bold text-primary bg-primary/10">
                                                        {instructorInitials}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="text-center">
                                                <p className="text-lg font-bold tracking-tight">
                                                    {instructor.name}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {instructor.subtitle || "Industry Expert"}
                                                </p>
                                            </div>

                                            {instructor.badges && instructor.badges.length > 0 && (
                                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                                    {instructor.badges.map((badge, index) => {
                                                        const BadgeIcon = getIconComponent(badge.icon);
                                                        return (
                                                            <span
                                                                key={index}
                                                                className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:text-foreground"
                                                            >
                                                                {badge.icon && (
                                                                    <BadgeIcon className="w-3 h-3" />
                                                                )}
                                                                {badge.text}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <Button
                                        asChild
                                        className="w-full py-3 font-semibold rounded-full cta-button"
                                    >
                                        <Link
                                            href={ROUTES.CONTACT}
                                            className="flex items-center justify-center gap-2"
                                        >
                                            <Users className="w-5 h-5" />
                                            <span>Reserve Your Seat</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What You'll Learn Section */}
            {modules.length > 0 && (
                <section id="curriculum" className="py-20 md:py-28 scroll-mt-24">
                    <div className="container px-4 mx-auto">
                        <motion.div
                            className="max-w-2xl mx-auto mb-14 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="eyebrow mb-6">
                                <BookOpen className="w-3.5 h-3.5" />
                                Curriculum
                            </div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                                What You&apos;ll Learn
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Master key skills with hands-on projects and real-world
                                scenarios
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto space-y-3">
                            {modules.map((module, index) => {
                                const expandable = moduleHasDetails(module);
                                const isOpen = expandedModule === index;

                                return (
                                    <motion.div
                                        key={index}
                                        className={cn(
                                            "overflow-hidden rounded-2xl border border-border/70 bg-card transition-all",
                                            isOpen
                                                ? "border-primary/30 shadow-lg shadow-primary/5"
                                                : "hover:border-primary/30"
                                        )}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
                                        viewport={{ once: true }}
                                    >
                                        <button
                                            onClick={() => expandable && toggleModule(index)}
                                            className={cn(
                                                "flex w-full items-center justify-between gap-4 p-5 text-left transition-colors md:p-6",
                                                expandable
                                                    ? "hover:bg-secondary/40"
                                                    : "cursor-default"
                                            )}
                                            aria-expanded={expandable ? isOpen : undefined}
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center justify-center w-9 h-9 text-sm font-bold rounded-full shrink-0 bg-primary/10 text-primary">
                                                    {index + 1}
                                                </span>
                                                <span className="font-semibold">
                                                    {module.title}
                                                </span>
                                            </div>
                                            {expandable && (
                                                <ChevronDown
                                                    className={cn(
                                                        "w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300",
                                                        isOpen && "rotate-180 text-primary"
                                                    )}
                                                />
                                            )}
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && expandable && (
                                                <motion.div
                                                    className="border-t border-border/60"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="p-5 md:p-6 md:pl-[4.75rem] bg-secondary/30">
                                                        {module.description && (
                                                            <p className="mb-4 text-muted-foreground">
                                                                {module.description}
                                                            </p>
                                                        )}
                                                        {module.subtopics && (
                                                            <div className="space-y-5">
                                                                {module.subtopics.map(
                                                                    (subtopic, subtopicIndex) => (
                                                                        <div key={subtopicIndex}>
                                                                            {subtopic.category && (
                                                                                <h5 className="mb-3 font-semibold">
                                                                                    {subtopic.category}
                                                                                </h5>
                                                                            )}
                                                                            <ul className="space-y-2.5">
                                                                                {subtopic.items.map(
                                                                                    (item, itemIndex) => (
                                                                                        <li
                                                                                            key={itemIndex}
                                                                                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                                                                                        >
                                                                                            <span className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full shrink-0 bg-primary/10 text-primary">
                                                                                                <Check className="w-3 h-3" />
                                                                                            </span>
                                                                                            {item}
                                                                                        </li>
                                                                                    )
                                                                                )}
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        )}
                                                        {module.tags && (
                                                            <div className="flex flex-wrap gap-2 mt-5">
                                                                {module.tags.map((tag, tagIndex) => (
                                                                    <span
                                                                        key={tagIndex}
                                                                        className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary dark:text-foreground"
                                                                    >
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Tools Section */}
            {tools.length > 0 && (
                <section className="py-20 md:py-28 bg-secondary/40">
                    <div className="container px-4 mx-auto">
                        <motion.div
                            className="max-w-2xl mx-auto mb-14 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="eyebrow mb-6">
                                <Wrench className="w-3.5 h-3.5" />
                                Toolkit
                            </div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                                Technologies & Tools You&apos;ll Master
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Industry-standard tools used by top professionals
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid max-w-5xl grid-cols-2 gap-4 mx-auto sm:grid-cols-3 lg:grid-cols-5"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            {tools.map((tool, index) => {
                                const IconComponent = getIconComponent(tool.icon);
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-center justify-center gap-2 p-6 transition-all duration-300 border group rounded-2xl border-border/70 bg-card hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                                        variants={scaleIn}
                                    >
                                        <IconComponent className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                                        <span className="text-sm font-semibold text-center text-muted-foreground group-hover:text-foreground">
                                            {tool.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Meet Your Instructor Section */}
            {instructor.name && (instructor.bio || instructor.experience) && (
                <section className="py-20 md:py-28">
                    <div className="container px-4 mx-auto">
                        <motion.div
                            className="max-w-2xl mx-auto mb-14 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="eyebrow mb-6">
                                <UserRound className="w-3.5 h-3.5" />
                                Your Mentor
                            </div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                                Meet Your Instructor
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Learn from an industry expert with real-world experience
                            </p>
                        </motion.div>

                        <div className="max-w-5xl mx-auto">
                            <motion.div
                                className="mb-10 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="mb-2 text-2xl font-bold tracking-tight">
                                    {instructor.name}
                                </h3>
                                <p className="max-w-2xl mx-auto font-medium text-muted-foreground">
                                    {instructor.title}
                                </p>
                            </motion.div>

                            <motion.div
                                className="grid gap-6 md:grid-cols-2 items-stretch"
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                            >
                                {instructor.bio && (
                                    <motion.div
                                        className="flex flex-col h-full p-8 rounded-3xl card-gradient"
                                        variants={fadeInUp}
                                    >
                                        <h4 className="flex items-center mb-4 text-xl font-semibold">
                                            <span className="w-1.5 h-7 mr-3 rounded-full bg-primary" />
                                            Professional Background
                                        </h4>
                                        <p className="flex-1 leading-relaxed text-muted-foreground">
                                            {instructor.bio}
                                        </p>
                                    </motion.div>
                                )}
                                {instructor.experience && (
                                    <motion.div
                                        className="flex flex-col h-full p-8 rounded-3xl card-gradient"
                                        variants={fadeInUp}
                                    >
                                        <h4 className="flex items-center mb-4 text-xl font-semibold">
                                            <span className="w-1.5 h-7 mr-3 rounded-full bg-primary" />
                                            Teaching Excellence
                                        </h4>
                                        <p className="flex-1 leading-relaxed text-muted-foreground">
                                            {instructor.experience}
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>

                            {instructorStats.length > 0 && (
                                <motion.div
                                    className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-4"
                                    variants={staggerContainer}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                >
                                    {instructorStats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            className="p-6 text-center border rounded-2xl border-border/70 bg-secondary/40"
                                            variants={scaleIn}
                                        >
                                            <div className="mb-1 text-3xl font-bold tracking-tight text-gradient">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm font-medium text-muted-foreground">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="py-20 md:py-28">
                <div className="container px-4">
                    <motion.div
                        className="cta-panel px-6 py-16 text-center md:px-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                            Ready to Become a {title}?
                        </h2>
                        <p className="max-w-2xl mx-auto mb-10 text-lg text-white/85">
                            Cohort starts {startDate} · {format}. Seats are limited —
                            secure yours today.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="px-8 py-6 text-base font-semibold rounded-full bg-white text-primary hover:bg-white/90 group"
                        >
                            <Link href={ROUTES.CONTACT}>
                                Reserve Your Seat
                                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default BootcampComponent;
