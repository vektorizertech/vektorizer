import React from "react";
import { notFound } from "next/navigation";
import BootcampComponent from "@/components/BootcampComponent";
import { COURSES } from "@/data/bootcamps";
import { generateCourseSchema, generateBreadcrumbSchema } from "@/utils/schema";

interface PageProps {
    params: Promise<{
        courseSlug: string;
    }>;
}

// Generate static params for all courses
export function generateStaticParams() {
    return COURSES.map((course) => ({
        courseSlug: encodeURIComponent(course.title.toLowerCase().replace(/\s+/g, '-')),
    }));
}

export default async function BootcampDetailPage({ params }: PageProps) {
    const { courseSlug } = await params;

    // Find the course by matching the slug
    const course = COURSES.find((c) => {
        const slug = c.title.toLowerCase().replace(/\s+/g, '-');
        return encodeURIComponent(slug) === courseSlug || slug === decodeURIComponent(courseSlug);
    });

    if (!course) {
        notFound();
    }

    const breadcrumbs = [
        { name: "Home", url: "https://vektorizer.com/" },
        { name: "Bootcamps", url: "https://vektorizer.com/bootcamps" },
        { name: course.title, url: `https://vektorizer.com/bootcamps/${courseSlug}` },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateCourseSchema(course)),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
                }}
            />
            <BootcampComponent {...course} />
        </>
    );
}