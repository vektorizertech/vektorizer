import { Metadata } from "next";
import Contact from "./Contact";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Vektorizer for your digital solutions. We are here to help you with your next project.",
    openGraph: {
        title: "Contact Us",
        description: "Get in touch with Vektorizer for your digital solutions.",
        url: "https://www.vektorizer.com/contact",
        siteName: "Vektorizer",
        images: [
            {
                url: "/images/og-contact.png",
                width: 1200,
                height: 630,
                alt: "Vektorizer Contact",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function ContactPage() {
    return <Contact />;
}
