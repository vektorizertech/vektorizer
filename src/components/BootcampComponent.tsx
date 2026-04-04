"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    Clock,
    Users,
    MapPin,
    Plus,
    Minus,
    Code,
    Monitor,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
        initial: { opacity: 0, y: 60 },
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
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, ease: "easeOut" },
    };

    return (
        <div className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        animate={{
                            rotate: [45, 50, 45],
                            x: [0, 10, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Code className="absolute top-20 left-10 w-32 h-32" />
                    </motion.div>
                    <motion.div
                        animate={{
                            rotate: [-12, -8, -12],
                            x: [0, -10, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Monitor className="absolute bottom-20 right-10 w-24 h-24" />
                    </motion.div>
                </div>
                <div className="container mx-auto px-6 py-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="space-y-8"
                            initial="initial"
                            animate="animate"
                            variants={staggerContainer}
                        >
                            <motion.h1
                                className="text-4xl lg:text-5xl font-bold leading-tight"
                                variants={fadeInUp}
                            >
                                {title}
                            </motion.h1>
                            <motion.p
                                className="text-primary-foreground/80 text-lg leading-relaxed"
                                variants={fadeInUp}
                            >
                                {description}
                            </motion.p>
                            {heroMessage && (
                                <motion.div
                                    className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-border/20"
                                    variants={fadeInUp}
                                >
                                    <h3 className="text-xl font-semibold mb-6 text-center">
                                        {heroMessage}
                                    </h3>
                                    <motion.div
                                        className="grid grid-cols-2 gap-4"
                                        variants={staggerContainer}
                                    >
                                        <motion.div
                                            className="flex items-center space-x-3 bg-background/10 rounded-lg p-3 border border-border/20"
                                            variants={scaleIn}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Calendar className="w-5 h-5 text-primary-foreground/70" />
                                            <span className="text-sm font-medium">{duration}</span>
                                        </motion.div>
                                        <motion.div
                                            className="flex items-center space-x-3 bg-background/10 rounded-lg p-3 border border-border/20"
                                            variants={scaleIn}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Clock className="w-5 h-5 text-primary-foreground/70" />
                                            <span className="text-sm font-medium">{schedule}</span>
                                        </motion.div>
                                        <motion.div
                                            className="flex items-center space-x-3 bg-background/10 rounded-lg p-3 border border-border/20"
                                            variants={scaleIn}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Calendar className="w-5 h-5 text-primary-foreground/70" />
                                            <span className="text-sm font-medium">{startDate}</span>
                                        </motion.div>
                                        <motion.div
                                            className="flex items-center space-x-3 bg-background/10 rounded-lg p-3 border border-border/20"
                                            variants={scaleIn}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <MapPin className="w-5 h-5 text-primary-foreground/70" />
                                            <span className="text-sm font-medium">{format}</span>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.div>
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.div
                                className="bg-card rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-border"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {certificationTitle && (
                                    <div className="text-center mb-6">
                                        <p className="text-muted-foreground text-sm font-medium mb-2">
                                            BECOME A CERTIFIED
                                        </p>
                                        <h3 className="text-2xl font-bold text-foreground">
                                            {certificationTitle}
                                        </h3>
                                    </div>
                                )}
                                {instructor.name && (
                                    <div className="relative mb-6">
                                        <motion.div
                                            className="w-full h-64 relative rounded-2xl overflow-hidden"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src={instructor.image || "/api/placeholder/200/250"}
                                                alt={instructor.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                        <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                                            <div className="font-bold text-lg">
                                                {instructor.name.split(" ")[0]}
                                            </div>
                                            <div className="font-bold text-lg">
                                                {instructor.name.split(" ")[1] || ""}
                                            </div>
                                            <div className="text-xs opacity-80">
                                                {instructor.subtitle || "Industry Expert"}
                                            </div>
                                        </div>
                                        {instructor.badges && instructor.badges.length > 0 && (
                                            <div className="absolute bottom-4 right-4 flex flex-col space-y-1">
                                                {instructor.badges.map((badge, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs flex items-center"
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        {badge.icon && (() => {
                                                            const IconComponent = getIconComponent(badge.icon);
                                                            return <IconComponent className="w-3 h-3 mr-1" />;
                                                        })()}
                                                        {badge.text}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button className="w-full py-3 font-semibold flex items-center justify-center space-x-2">
                                        <Users className="w-5 h-5" />
                                        <span>RESERVE YOUR SEAT</span>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* What You'll Learn Section */}
            {modules.length > 0 && (
                <motion.div
                    className="container mx-auto px-6 py-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            What You&apos;ll Learn
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Master key skills with hands-on projects and real-world scenarios
                        </p>
                    </motion.div>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {modules.map((module, index) => (
                            <motion.div
                                key={index}
                                className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    onClick={() => toggleModule(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                                    whileHover={{ backgroundColor: "hsl(var(--muted) / 0.5)" }}
                                >
                                    <div className="flex items-center space-x-4">
                                        <motion.div
                                            className="bg-muted text-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {index + 1}
                                        </motion.div>
                                        <span className="font-medium text-foreground">
                                            {module.title}
                                        </span>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedModule === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {expandedModule === index ? (
                                            <Minus className="w-5 h-5 text-muted-foreground" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-muted-foreground" />
                                        )}
                                    </motion.div>
                                </motion.button>
                                <AnimatePresence>
                                    {expandedModule === index && (
                                        <motion.div
                                            className="px-6 pb-6 bg-muted/30 border-t border-border"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="ml-12">
                                                {module.description && (
                                                    <p className="text-muted-foreground mb-4">
                                                        {module.description}
                                                    </p>
                                                )}
                                                {module.subtopics && (
                                                    <div className="space-y-3">
                                                        {module.subtopics.map((subtopic, subtopicIndex) => (
                                                            <motion.div
                                                                key={subtopicIndex}
                                                                className="ml-4"
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: subtopicIndex * 0.1 }}
                                                            >
                                                                {subtopic.category && (
                                                                    <h5 className="font-semibold text-foreground mb-2">
                                                                        {subtopic.category}
                                                                    </h5>
                                                                )}
                                                                <ul className="space-y-1 ml-4">
                                                                    {subtopic.items.map((item, itemIndex) => (
                                                                        <motion.li
                                                                            key={itemIndex}
                                                                            className="text-sm text-muted-foreground flex items-start"
                                                                            initial={{ opacity: 0, x: -10 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{
                                                                                delay:
                                                                                    subtopicIndex * 0.1 +
                                                                                    itemIndex * 0.05,
                                                                            }}
                                                                        >
                                                                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                                            {item}
                                                                        </motion.li>
                                                                    ))}
                                                                </ul>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                )}
                                                {module.tags && (
                                                    <motion.div
                                                        className="flex flex-wrap gap-2 mt-4"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.3 }}
                                                    >
                                                        {module.tags.map((tag, tagIndex) => (
                                                            <motion.span
                                                                key={tagIndex}
                                                                className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium"
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: tagIndex * 0.05 }}
                                                                whileHover={{ scale: 1.05 }}
                                                            >
                                                                {tag}
                                                            </motion.span>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Tools Section */}
            {tools.length > 0 && (
                <motion.div
                    className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-4">
                                Technologies & Tools You&apos;ll Master
                            </h2>
                            <p className="text-primary-foreground/80">
                                Industry-standard tools used by top professionals
                            </p>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-background/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center h-24 hover:bg-background/20 transition-all duration-300 border border-border/20 group"
                                    variants={scaleIn}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "rgba(255,255,255,0.2)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {(() => {
                                        const IconComponent = getIconComponent(tool.icon);
                                        return <IconComponent className="w-8 h-8 mb-2 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors" />;
                                    })()}
                                    <span className="text-sm font-semibold text-center">
                                        {tool.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {/* Meet Your Instructor Section */}
            {instructor.name && (instructor.bio || instructor.experience) && (
                <motion.div
                    className="container mx-auto px-6 py-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Meet Your Instructor
                        </h2>
                        <p className="text-muted-foreground">
                            Learn from an industry expert with real-world experience
                        </p>
                    </motion.div>
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="text-center mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                {instructor.name}
                            </h3>
                            <p className="text-muted-foreground font-medium text-lg">
                                {instructor.title}
                            </p>
                        </motion.div>
                        <motion.div
                            className="grid md:grid-cols-2 gap-12 items-stretch"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            {instructor.bio && (
                                <motion.div
                                    className="bg-card rounded-2xl p-8 shadow-lg border border-border h-full flex flex-col"
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                                        <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary/70 rounded-full mr-3"></div>
                                        Professional Background
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed flex-1">
                                        {instructor.bio}
                                    </p>
                                </motion.div>
                            )}
                            {instructor.experience && (
                                <motion.div
                                    className="bg-card rounded-2xl p-8 shadow-lg border border-border h-full flex flex-col"
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                                        <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary/70 rounded-full mr-3"></div>
                                        Teaching Excellence
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed flex-1">
                                        {instructor.experience}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                        {instructorStats.length > 0 && (
                            <motion.div
                                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                            >
                                {instructorStats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center bg-muted/50 rounded-xl p-6"
                                        variants={scaleIn}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <motion.div
                                            className="text-3xl font-bold text-foreground mb-2"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            {stat.value}
                                        </motion.div>
                                        <div className="text-muted-foreground font-medium">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default BootcampComponent;