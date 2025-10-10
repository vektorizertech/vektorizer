"use client";
import React, { useRef } from "react";
import { Clock, Calendar, Users, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { COURSES } from "@/data/bootcamps";
import { ROUTES } from "@/data/routes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CourseCardsGrid = () => {
    const router = useRouter();
    const coursesRef = useRef(null);

    const handleEnrollClick = (courseTitle: string) => {
        router.push(`${ROUTES.BOOTCAMPS}/${encodeURIComponent(courseTitle)}`);
    };

    return (
        <div className="min-h-screen py-40 bg-background text-foreground">
            <div ref={coursesRef}>
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Professional Courses
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Advance your career with our industry-certified programs
                            designed by experts
                        </p>
                    </div>

                    {/* Course Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {COURSES.map((course, index) => (
                            <Card
                                key={course.title}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="bg-card text-white"
                            >
                                {/* Course Header with Gradient */}
                                <div className="bg-gradient-to-r from-primary to-primary/90 p-6 text-primary-foreground relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16 z-50"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -ml-12 -mb-12 z-50"></div>

                                    <div className="relative z-10">
                                        <p className="text-sm font-medium opacity-90 mb-2">
                                            {course.category}
                                        </p>
                                        <h3 className="text-xl font-bold mb-4 leading-tight">
                                            {course.title}
                                        </h3>

                                        {/* Instructor Info */}
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center overflow-hidden border-2 border-border">
                                                <Image
                                                    src={course.instructor.image}
                                                    alt={course.instructor.name}
                                                    width={48}
                                                    height={48}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                                <div
                                                    className="w-full h-full bg-muted flex items-center justify-center text-white font-bold text-sm rounded-full"
                                                    style={{ display: "none" }}
                                                >
                                                    {course.instructor.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm">
                                                    {course.instructor.name}
                                                </p>
                                                <p className="text-xs dark:text-muted-foreground ">
                                                    Course Instructor
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Course Details */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center text-muted-foreground">
                                        <Clock className="w-4 h-4 mr-2" />
                                        <span className="text-sm">{course.duration}</span>
                                    </div>
                                    <div className="flex items-center text-muted-foreground">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        <span className="text-sm">{course.days}</span>
                                    </div>
                                    <div className="flex items-center text-muted-foreground">
                                        <Users className="w-4 h-4 mr-2" />
                                        <span className="text-sm">{course.mode}</span>
                                    </div>
                                    <div className="flex items-center text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        <span className="text-sm">{course.starting}</span>
                                    </div>

                                    {/* Price and Enroll Button */}
                                    <div className="flex items-center justify-between pt-4">
                                        <div className="text-2xl font-bold">{course.price}</div>
                                        <Button
                                            className="px-6 py-3 text-white bg-primary hover:bg-primary/90 transition-colors"
                                            onClick={() => handleEnrollClick(course.title)}
                                        >
                                            Enroll Now
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="1200">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join thousands of students who have transformed their careers
                            with our expert-led courses
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCardsGrid;
