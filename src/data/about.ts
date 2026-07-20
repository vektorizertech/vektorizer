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
    name: "Aamir Jabbar",
    role: "Founder, CEO & CTO",
    image: "/images/about/amir.png",
    initials: "AJ",
    bio: "Analytics Engineer & Technical Co-Founder building the bridge between raw data and strategic decisions. With over 10 years of experience in data engineering, business intelligence, and cloud technologies, Aamir leads the technology vision at Vektorizer. He specializes in architecting full-stack web solutions, designing ETL pipelines, and applying machine learning to solve real-world business problems.",
    credentials: [
      "Trainer at atomcamp",
      "Training Consultant, British Council",
      "DACUM Curriculum Designer, European Union",
    ],
  },
  {
    name: "Sahher Abbas",
    role: "Co-founder & Tech Trainer",
    image: "",
    initials: "SA",
    bio: "STEAM Instructor, Technology Trainer, and CANVA Educator committed to empowering learners through innovative, technology-driven learning experiences. With expertise in AI, programming, robotics, prompt engineering, and digital content creation, Sahher is passionate about creating engaging, interactive, and activity-based curriculum and courses.",
    credentials: [
      "STEAM Instructor",
      "CANVA Certified Educator",
      "AI & Robotics Trainer",
    ],
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
