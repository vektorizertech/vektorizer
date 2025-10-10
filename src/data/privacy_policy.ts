import { Shield, Eye, Lock, Users } from "lucide-react";

export const PRIVACY_POLICY = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Personal information you provide (name, email, phone number)",
      "Technical data (IP address, browser type, device information)",
      "Usage data (pages visited, time spent, interactions)",
      "Cookies and similar tracking technologies",
    ],
  },
  {
    icon: Shield,
    title: "How We Use Your Information",
    content: [
      "Provide and improve our services",
      "Communicate with you about projects and updates",
      "Analyze usage patterns to enhance user experience",
      "Send marketing communications (with your consent)",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "Industry-standard encryption for data transmission",
      "Secure servers with regular security updates",
      "Limited access to personal data on need-to-know basis",
      "Regular security audits and vulnerability assessments",
    ],
  },
  {
    icon: Users,
    title: "Data Sharing",
    content: [
      "We do not sell your personal information to third parties",
      "Trusted service providers who assist in our operations",
      "Legal requirements or to protect our rights",
      "Business transfers (with notification to users)",
    ],
  },
];

export const COOKIE_POLICY = [
  {
    title: "Essential Cookies",
    description:
      "Required for basic website functionality and cannot be disabled.",
  },
  {
    title: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website.",
  },
  {
    title: "Marketing Cookies",
    description:
      "Used to deliver relevant advertisements and track campaign effectiveness.",
  },
  {
    title: "Preference Cookies",
    description:
      "Remember your settings and preferences for a personalized experience.",
  },
];


export const YOUR_RIGHTS = [
  {
    title: "Access Your Data",
    description: "Request a copy of the personal data we hold about you.",
  },
  {
    title: "Correct Your Data",
    description: "Update or correct any inaccurate information.",
  },
  {
    title: "Delete Your Data",
    description: "Request deletion of your personal information.",
  },
  {
    title: "Opt-Out of Marketing",
    description: "Unsubscribe from marketing communications at any time.",
  },
  {
    title: "Data Portability",
    description: "Export your data in a machine-readable format.",
  },
  {
    title: "Object to Processing",
    description: "Object to certain types of data processing.",
  },
]