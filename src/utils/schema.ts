export const bootcampSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Vektorizer",
  description: "Professional bootcamps and courses for career advancement",
  url: "https://vektorizer.com/bootcamps",
  logo: "https://vektorizer.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
};

export const generateBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: breadcrumb.name,
    item: breadcrumb.url,
  })),
});

export const generateCourseSchema = (course: any) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: course.title,
  description: course.description,
  provider: {
    "@type": "EducationalOrganization",
    name: "Vektorizer",
    url: "https://vektorizer.com",
  },
  instructor: {
    "@type": "Person",
    name: course.instructor.name,
    description: course.instructor.title,
  },
  courseMode: "online",
  educationalLevel: "Professional",
  timeRequired: course.duration,
  offers: {
    "@type": "Offer",
    price: course.price?.replace(/[^\d]/g, "") || "0",
    priceCurrency: "PKR",
    availability: "https://schema.org/InStock",
  },
});
