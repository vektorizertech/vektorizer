import { Users, Code, ArrowUp } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiSolana,
  SiDocker,
  SiFirebase,
  SiTailwindcss,
  SiWebrtc,
  SiFfmpeg,
  SiSolidity,
  SiAwsorganizations
} from "react-icons/si";

export const VALUES = [
  {
    icon: Code,
    title: "Innovation",
    description:
      "We stay at the forefront of technology, continuously exploring new tools and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in working closely with our clients, fostering open communication and partnership throughout every project.",
  },
  {
    icon: ArrowUp,
    title: "Excellence",
    description:
      "We're committed to delivering exceptional quality in every line of code, every design, and every client interaction.",
  },
];

export const TEAM = [
  {
    name: "Amir Jabbar",
    role: "Co Founder",
    image: "/images/about/amir.png",
    bio: "Business Data Analyst with global experience in strategy, analytics, and professional training across top organizations.",
  },
];

export const TECHSTACK = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Solana", icon: SiSolana },
  { name: "Solidity", icon: SiSolidity },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: SiAwsorganizations },
  { name: "FFmpeg", icon: SiFfmpeg },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Firebase", icon: SiFirebase },
  { name: "WebRTC", icon: SiWebrtc },
];
