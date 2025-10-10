import { FileCheck, AlertTriangle, Users, CreditCard } from "lucide-react";

export const TERMS_OF_SERVICES = [
  {
    icon: FileCheck,
    title: "Acceptance of Terms",
    content: [
      "By accessing and using Vektorizer's services, you accept and agree to be bound by these Terms of Service",
      "If you do not agree to these terms, please do not use our services",
      "We may update these terms from time to time, and continued use constitutes acceptance",
      "These terms apply to all visitors, users, and others who access our services",
    ],
  },
  {
    icon: Users,
    title: "Use of Services",
    content: [
      "Our services are intended for business and professional use",
      "You must provide accurate and complete information when using our services",
      "You are responsible for maintaining the confidentiality of your account",
      "You agree not to use our services for any unlawful or prohibited activities",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment & Billing",
    content: [
      "Payments are due according to the agreed payment schedule",
      "All fees are non-refundable unless otherwise specified in writing",
      "Late payments may result in project delays or suspension of services",
      "Clients are responsible for any bank fees or transaction costs",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Limitations & Liability",
    content: [
      "Our liability is limited to the amount paid for the specific service",
      "We are not responsible for indirect, incidental, or consequential damages",
      "Services are provided 'as is' without warranties of any kind",
      "Clients are responsible for backing up their own data and content",
    ],
  },
];

// @/data/project_terms.ts

export const PROJECT_TERMS = [
  {
    icon: "📋",
    title: "Project Scope",
    points: [
      "Scope is defined in the project proposal or contract",
      "Changes to scope require written approval",
      "Additional work will be billed separately",
      "Timeline adjustments may apply to scope changes",
    ],
  },
  {
    icon: "🔄",
    title: "Revisions & Feedback",
    points: [
      "Included revisions are specified per project",
      "Feedback should be provided within agreed timeframes",
      "Additional revisions beyond scope incur extra charges",
      "Final approval must be given in writing",
    ],
  },
  {
    icon: "📅",
    title: "Timelines & Delivery",
    points: [
      "Timelines are estimates based on project complexity",
      "Client delays may affect project delivery dates",
      "We'll communicate any potential delays promptly",
      "Final delivery requires complete payment",
    ],
  },
  {
    icon: "🔒",
    title: "Intellectual Property",
    points: [
      "Client owns the final delivered work upon full payment",
      "We retain rights to use work in our portfolio",
      "Third-party assets require proper licensing",
      "Custom code and designs transfer upon completion",
    ],
  },
];

export const SUPPORT_MAINTENANCE = [
  {
    icon: "🛠️",
    title: "Post-Launch Support",
    description:
      "30 days of complimentary support for bug fixes and minor adjustments",
  },
  {
    icon: "🔧",
    title: "Ongoing Maintenance",
    description:
      "Optional maintenance packages available for long-term support",
  },
  {
    icon: "🚨",
    title: "Emergency Support",
    description: "Priority support available for critical issues",
  },
];

export const TERMINATION_POLICIES = [
  {
    title: "Client Termination",
    content: [
      "Payment for completed work is required",
      "Work-in-progress may be billed at hourly rates",
      "Source files delivered upon full payment",
      "30-day notice preferred for ongoing projects",
    ],
  },
  {
    title: "Vektorizer Termination",
    content: [
      "May terminate for non-payment or breach of terms",
      "Completed work delivered upon payment",
      "Unused deposits may be refunded",
      "Professional handover of ongoing work",
    ],
  },
];
