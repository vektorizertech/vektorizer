"use client";
import React from "react";
import { Clock, Users, CheckCircle, GraduationCap, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { COURSES } from "@/data/bootcamps";
import { ROUTES } from "@/data/routes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { bootcampSchema, generateBreadcrumbSchema } from "@/utils/schema";

const CourseCardsGrid = () => {
  const router = useRouter();

  const breadcrumbs = [
    { name: "Home", url: "https://vektorizer.com/" },
    { name: "Bootcamps", url: "https://vektorizer.com/bootcamps" },
  ];

  const handleEnrollClick = (courseTitle: string) => {
    const slug = courseTitle.toLowerCase().replace(/\s+/g, "-");
    router.push(`${ROUTES.BOOTCAMPS}/${encodeURIComponent(slug)}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bootcampSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      {/* Hero */}
      <section className="relative pt-36 pb-16 hero-gradient md:pt-44 md:pb-20">
        <div className="bg-grid-fade" />
        <div className="container relative px-4 text-center">
          <div className="eyebrow mb-8" data-aos="fade-up">
            <GraduationCap className="w-3.5 h-3.5" />
            Learn With Us
          </div>
          <h1
            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Professional <span className="text-gradient">Courses</span>
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Advance your career with our industry-certified programs designed by
            experts
          </p>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, index) => (
              <Card
                key={course.title}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className="flex flex-col overflow-hidden rounded-3xl card-gradient"
              >
                {/* Course Header with Gradient */}
                <div className="relative p-6 overflow-hidden text-white cta-panel !rounded-none !shadow-none">
                  <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 rounded-full bg-white/10" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 rounded-full bg-white/10" />

                  <div className="relative z-10">
                    <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-white/80">
                      {course.category}
                    </p>
                    <h3 className="mb-5 text-xl font-bold leading-tight">
                      {course.title}
                    </h3>

                    {/* Instructor Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 overflow-hidden border-2 rounded-full border-white/40">
                        <Image
                          src={course.instructor.image}
                          alt={course.instructor.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">
                          {course.instructor.name}
                        </p>
                        <p className="text-xs text-white/75">
                          Course Instructor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="flex flex-col flex-1 p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {course.duration}
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      {course.mode}
                    </li>
                    {course.starting && (
                      <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {course.starting}
                      </li>
                    )}
                  </ul>

                  {/* Price and Enroll Button */}
                  {course.pricing ? (
                    <div className="pt-6 mt-auto space-y-4">
                      <div className="space-y-2.5">
                        {course.pricing.map((tier) => (
                          <div key={tier.label}>
                            <div className="flex items-baseline gap-2">
                              <span className="text-xl font-bold tracking-tight">
                                {tier.price}
                              </span>
                              <span className="text-sm line-through text-muted-foreground">
                                {tier.originalPrice}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {tier.label}
                              {tier.note ? ` · ${tier.note}` : ""}
                            </p>
                          </div>
                        ))}
                      </div>
                      <Button
                        className="w-full rounded-full cta-button group"
                        onClick={() => handleEnrollClick(course.title)}
                      >
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between pt-6 mt-auto">
                      <div className="text-2xl font-bold tracking-tight">
                        {course.price}
                      </div>
                      <Button
                        className="px-6 rounded-full cta-button group"
                        onClick={() => handleEnrollClick(course.title)}
                      >
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center" data-aos="fade-up">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Join thousands of students who have transformed their careers with
              our expert-led courses
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCardsGrid;
