import { resolveServiceImages } from "@/lib/image";
import {
  Code,
  Smartphone,
  Blocks,
  Brain,
  Palette,
  Webcam,
  FileText,
  LucideImage,
  Server,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiSolana,
  SiEthereum,
  SiNodedotjs,
  SiNestjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiDigitalocean,
  SiVercel,
  SiDocker,
  SiAwsorganizations,
  SiFlutter,
  SiFirebase,
  SiRedux,
  SiGraphql,
  SiRust,
  SiOpenai,
  SiElevenlabs,
  SiLangchain,
  SiAdobexd,
  SiFigma,
} from "react-icons/si";

export interface IService {
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
  details: {
    hero: string;
    content: { heading: string; body: string; image: string }[];
    tech?: {
      label: string;
      icon: React.ComponentType<{ className?: string }>;
    }[];
    faq?: { question: string; answer: string }[];
    cta: {
      heading: string;
      subheading?: string;
      buttonText: string;
    };
  };
}

export const SERVICES_PREVIEW = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Modern, scalable web applications using cutting-edge technologies",
  },
  {
    icon: Webcam,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile solutions for iOS and Android",
  },
  {
    icon: FileText,
    title: "Blockchain & Web3",
    description: "Decentralized applications and smart contract development",
  },
  {
    icon: LucideImage,
    title: "AI Integration",
    description: "Intelligent features powered by machine learning and AI",
  },
];

const WEB_DEVELOPMENT = {
  slug: "web-development",
  icon: Code,
  title: "Web Development",
  description:
    "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
  features: [
    "Responsive Design",
    "Performance Optimization",
    "SEO Ready",
    "Cloud Deployment",
  ],
  color: "from-blue-500 to-cyan-500",
  details: {
    hero: "Craft blazing-fast web apps tailored for your business needs.",
    content: [
      {
        heading: "Modern Tech Stack",
        body: "We build using React, Next.js, Tailwind CSS, Node.js, PostgreSQL, and deploy via Vercel, AWS, or Docker.",
        image: "tech-stack.png",
      },
      {
        heading: "SEO & Performance",
        body: "We ensure SEO optimization and performance scoring 90+ on Lighthouse audits for speed and accessibility.",
        image: "seo.png",
      },
      {
        heading: "Full-Stack Development",
        body: "Our team handles both frontend and backend development, ensuring seamless integration and performance.",
        image: "fullstack.png",
      },
      {
        heading: "Deployment & Support",
        body: "We deploy your applications on your preferred infrastructure, whether it's AWS, DigitalOcean, or Vercel, and provide ongoing support.",
        image: "deployment.png",
      },
    ],
    tech: [
      { label: "React", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Node.js", icon: SiNodedotjs },
      { label: "NestJS", icon: SiNestjs },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "MongoDB", icon: SiMongodb },
      { label: "TypeScript", icon: SiTypescript },
      { label: "AWS", icon: SiAwsorganizations },
      { label: "DigitalOcean", icon: SiDigitalocean },
      { label: "Vercel", icon: SiVercel },
      { label: "Docker", icon: SiDocker },
    ],
    faq: [
      {
        question: "Do you build both frontend and backend?",
        answer:
          "Yes, we provide full-stack development using modern frameworks like Next.js, NestJS, and PostgreSQL.",
      },
      {
        question: "Can I deploy on my own server?",
        answer:
          "Absolutely. We offer deployment options on your preferred infrastructure like AWS, DigitalOcean, or Vercel.",
      },
      {
        question: "How do you ensure performance?",
        answer:
          "We follow best practices for performance optimization, including code splitting, lazy loading, and server-side rendering.",
      },
      {
        question: "What about SEO?",
        answer:
          "All our web applications are built with SEO in mind, ensuring they rank well on search engines.",
      },
    ],
    cta: {
      heading: "Let’s build your next web app together!",
      subheading: "Schedule a free consultation to discuss your vision.",
      buttonText: "Start Your Project",
    },
  },
};

const MOBILE_APPS = {
  slug: "mobile-apps",
  icon: Smartphone,
  title: "Mobile Apps",
  description:
    "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
  features: [
    "Cross-Platform",
    "Native Performance",
    "App Store Optimization",
    "Push Notifications",
  ],
  color: "from-green-500 to-emerald-500",
  details: {
    hero: "Reach your users on mobile with high-performance apps.",
    content: [
      {
        heading: "Cross-Platform Solutions",
        body: "We develop using React Native and Flutter for a single codebase across iOS and Android.",
        image: "cross-platform.png",
      },
      {
        heading: "App Store Ready",
        body: "Our apps are optimized for app stores with best practices in UI/UX and performance.",
        image: "app-store.png",
      },
      {
        heading: "Real-Time Features",
        body: "Implement real-time features like chat, notifications, and live updates using Firebase and GraphQL.",
        image: "realtime-features.png",
      },
      {
        heading: "Ongoing Support",
        body: "We provide maintenance and updates to keep your app running smoothly post-launch.",
        image: "support.png",
      },
    ],
    tech: [
      { label: "React Native", icon: SiReact },
      { label: "Flutter", icon: SiFlutter },
      { label: "Firebase", icon: SiFirebase },
      { label: "Redux", icon: SiRedux },
      { label: "GraphQL", icon: SiGraphql },
    ],
    faq: [
      {
        question: "What platforms do you support?",
        answer:
          "We build apps for both iOS and Android using React Native and Flutter.",
      },
      {
        question: "Can you help with app store submission?",
        answer:
          "Yes, we provide full support for app store submission and optimization.",
      },
      {
        question: "Do you offer post-launch support?",
        answer:
          "Absolutely. We provide ongoing maintenance and updates to ensure your app remains functional and up-to-date.",
      },
      {
        question: "Can you integrate real-time features?",
        answer:
          "Yes, we can implement real-time features like chat and notifications using Firebase and GraphQL.",
      },
    ],
    cta: {
      heading: "Ready to launch your mobile app?",
      subheading: "Contact us for a free consultation and quote.",
      buttonText: "Get Started",
    },
  },
};

const BLOCKCHAIN_WEB3 = {
  slug: "blockchain-web3",
  icon: Blocks,
  title: "Blockchain & Web3",
  description:
    "Decentralized applications, smart contracts, and blockchain integration services.",
  features: [
    "Smart Contracts",
    "DeFi Solutions",
    "NFT Platforms",
    "Web3 Integration",
  ],
  color: "from-emerald-500 to-violet-500",
  details: {
    hero: "Empower your business with blockchain technology.",
    content: [
      {
        heading: "Smart Contracts",
        body: "We develop secure and efficient smart contracts on Ethereum, Solana, and other blockchains.",
        image: "smart-contract.png",
      },
      {
        heading: "Web3 Integration",
        body: "Integrate Web3 features like wallets, token standards, and decentralized storage into your applications.",
        image: "web3.png",
      },
      {
        heading: "DeFi Solutions",
        body: "We build decentralized finance applications, including lending platforms, DEXs, and yield farming solutions.",
        image: "defi.png",
      },
      {
        heading: "Blockchain Consulting",
        body: "Our experts provide consulting services to help you navigate the blockchain landscape and choose the right solutions.",
        image: "blockchain.png",
      },
    ],
    tech: [
      { label: "SPL", icon: Blocks },
      { label: "Solana", icon: SiSolana },
      { label: "RUST Smart Contracts", icon: SiRust },
      { label: "Ethereum", icon: SiEthereum },
      { label: "Anchor", icon: Server },
    ],
    faq: [
      {
        question: "What blockchain platforms do you support?",
        answer:
          "We specialize in Ethereum, Solana, and other major blockchains for smart contract development.",
      },
      {
        question: "Can you help with token creation?",
        answer:
          "Yes, we can create custom tokens and integrate them into your applications.",
      },
      {
        question: "What is your approach to security in blockchain projects?",
        answer:
          "We follow best practices for security audits, testing, and code reviews to ensure your smart contracts are secure and reliable.",
      },
      {
        question: "Do you offer blockchain consulting services?",
        answer:
          "Yes, our team provides consulting to help you understand blockchain technology and how it can benefit your business.",
      },
    ],
    cta: {
      heading: "Transform your business with blockchain solutions.",
      subheading: "Contact us to explore how we can help you innovate.",
      buttonText: "Schedule a Consultation",
    },
  },
};

const AI_INTEGRATION = {
  slug: "ai-integration",
  icon: Brain,
  title: "AI Integration",
  description:
    "Artificial intelligence and machine learning solutions to automate and enhance your business processes.",
  features: [
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Automation",
  ],
  color: "from-orange-500 to-red-500",
  details: {
    hero: "Leverage AI to transform your business operations.",
    content: [
      {
        heading: "AI Integration",
        body: "We integrate powerful AI models like GPT, Whisper, and ElevenLabs into your products to enable intelligent features like chat, voice, and automation.",
        image: "ai-integration.png",
      },
      {
        heading: "Voice & Chat Assistants",
        body: "Build voice-enabled AI assistants for customer support, onboarding, and task automation using cutting-edge speech and language APIs.",
        image: "assisstant.png",
      },
      {
        heading: "AI-Powered Automation",
        body: "Enhance productivity by automating repetitive workflows, content generation, and intelligent insights using state-of-the-art AI APIs.",
        image: "automation.png",
      },
      {
        heading: "AI Strategy & Consulting",
        body: "We help startups and businesses identify where AI can deliver real value—without unnecessary hype—through practical, product-focused consulting.",
        image: "ai-consultation.png",
      },
    ],
    tech: [
      { label: "OpenAI", icon: SiOpenai },
      { label: "ElevenLabs", icon: SiElevenlabs },
      { label: "LangChain", icon: SiLangchain },
    ],
    faq: [
      {
        question: "What AI services do you offer?",
        answer:
          "We provide machine learning, natural language processing, and computer vision solutions tailored to your needs.",
      },
      {
        question: "Can you integrate AI into existing applications?",
        answer:
          "Yes, we can enhance your existing applications with AI capabilities for better performance and user experience.",
      },
      {
        question: "How do you ensure data privacy in AI projects?",
        answer:
          "We follow strict data privacy protocols and ensure compliance with regulations like GDPR when handling sensitive data.",
      },
      {
        question: "Do you provide AI consulting services?",
        answer:
          "Yes, our team offers AI consulting to help you understand how AI can benefit your business and guide you through the implementation process.",
      },
    ],
    cta: {
      heading: "Unlock the power of AI for your business.",
      subheading: "Contact us to discuss your AI integration needs.",
      buttonText: "Get in Touch",
    },
  },
};

const UI_UX_DESIGN = {
  slug: "ui-ux-design",
  icon: Palette,
  title: "UI/UX Design",
  description:
    "User-centered design that creates intuitive and engaging digital experiences.",
  features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  color: "from-pink-500 to-rose-500",
  details: {
    hero: "Design that delights users and drives engagement.",
    content: [
      {
        heading: "User-Centered Design",
        body: "We conduct user research to inform design decisions, ensuring your product meets user needs.",
        image: "design.png",
      },
      {
        heading: "Prototyping & Testing",
        body: "Create interactive prototypes and conduct usability testing to refine the user experience before development.",
        image: "prototype-test.png",
      },
      {
        heading: "Design Systems",
        body: "We build scalable design systems to ensure consistency across your products and streamline the design process.",
        image: "design-system.png",
      },
      {
        heading: "Collaboration & Feedback",
        body: "We work closely with your team to gather feedback and iterate on designs, ensuring alignment with your vision.",
        image: "collaboration.png",
      },
    ],
    tech: [
      { label: "Figma", icon: SiFigma },
      { label: "Adobe XD", icon: SiAdobexd },
    ],
    faq: [
      {
        question: "Do you provide user research services?",
        answer:
          "Yes, we conduct user research to understand your audience and inform design decisions.",
      },
      {
        question: "Can you create design systems?",
        answer:
          "Absolutely. We build scalable design systems to ensure consistency across your products.",
      },
      {
        question: "What tools do you use for design?",
        answer: "We primarily use Figma and Adobe XD for UI/UX design.",
      },
      {
        question: "How do you handle feedback during the design process?",
        answer:
          "We encourage collaboration and regular feedback sessions to ensure the design aligns with your vision.",
      },
    ],
    cta: {
      heading: "Let’s create a stunning user experience together.",
      subheading: "Contact us to discuss your design needs.",
      buttonText: "Get in Touch",
    },
  },
};

const RAW_SERVICES = [
  WEB_DEVELOPMENT,
  MOBILE_APPS,
  BLOCKCHAIN_WEB3,
  AI_INTEGRATION,
  UI_UX_DESIGN,
];

export const SERVICES: IService[] = RAW_SERVICES.map(resolveServiceImages);

export const PROCESS = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and technical requirements.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "Our team creates wireframes, mockups, and interactive prototypes for your approval.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We build your solution using best practices, with continuous testing and quality assurance.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy your project and provide ongoing maintenance and support as needed.",
  },
];
