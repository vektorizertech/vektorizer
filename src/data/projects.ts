import { resolveProjectImages } from "@/lib/image";

interface IProjectModule {
  title: string;
  image?: string;
  isImageMobile?: boolean;
  description: string;
  points: string[];
}

export interface IProject {
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  website: string;
  featured: boolean;
  images?: boolean;
  modules: IProjectModule[];
  tech: string[];
}

export const CATEGORIES = [
  "All",
  "Web Development",
  "Mobile App",
  "Blockchain",
  "AI Integration",
];

const BIMMER_TECH = {
  slug: "bimmer-tech",
  title: "Bimmer Tech",
  subtitle:
    "An advanced eCommerce platform offering high-end accessories for BMW and Tesla enthusiasts, delivering a seamless and responsive user experience",
  thumbnail: "thumbnail.png",
  website: "https://www.bimmer-tech.net/",
  featured: true,
  images: true,
  modules: [
    {
      title: "Product Catalog & Navigation",
      image: "catalog.png",
      isImageMobile: false,
      description:
        "A robust and visually appealing product catalog built for intuitive browsing, filtering, and selection tailored to car model and preferences.",
      points: [
        "Dynamic filtering by car model, category, and product type",
        "Responsive design with fast-loading product previews",
        "Smart search with auto-suggestions",
        "Integration of detailed product pages with specs and images",
      ],
    },
    {
      title: "Shopping Cart System",
      image: "cart.png",
      isImageMobile: false,
      description:
        "A centralized cart system using Vuex for consistent and efficient cart updates across pages and sessions",
      points: [
        "Real-time cart synchronization across the site",
        "Persistent cart memory for logged-in users",
        "Quantity update and product removal without page reload",
        "Mini-cart preview on every page",
      ],
    },
    {
      title: "Secure Checkout Integration",
      image: "checkout.png",
      isImageMobile: false,
      description:
        "Streamlined and secure payment experience with PayPal integration and order summary module",
      points: [
        "PayPal gateway for quick, secure transactions",
        "Multi-step checkout with progress tracking",
        "Order review and promo code support",
        "Email confirmation and receipt automation",
      ],
    },
    {
      title: "Performance & Optimization",
      image: "performance.png",
      isImageMobile: false,
      description:
        "Engineered for speed and scalability, the platform ensures quick load times and high responsiveness under load.",
      points: [
        "Lazy-loading of images and components",
        "Code-splitting for performance optimization",
        "Mobile-first responsive UI",
        "Server-side rendering support with Laravel backend",
      ],
    },
    {
      title: "User Account & Order Management",
      image: "account.png",
      isImageMobile: false,
      description:
        "A user-friendly profile area to track purchases, manage addresses, and view order history.",
      points: [
        "Secure user login and profile access",
        "Order tracking and history details",
        "Saved payment methods and addresses",
        "Support ticket integration for after-sales service",
      ],
    },
  ],
  tech: ["Vue.js", "Vuetify", "PHP", "Laravel", "Vuex", "PayPal API"],
};

const EYESMARTY = {
  slug: "eyesmarty",
  title: "EyeSmarty",
  subtitle:
    "An intelligent time-tracking and productivity insights platform designed for modern remote and hybrid teams to boost efficiency without micromanagement",
  thumbnail: "thumbnail.png",
  website: "https://www.eyesmarty.com",
  featured: true,
  images: false,
  modules: [
    {
      title: "Smart Time Tracking",
      isImageMobile: false,
      description:
        "Automatically logs employee work hours, app usage, and screen activity in real-time to provide a transparent and hands-off productivity record.",
      points: [
        "Automated tracking of active time across apps and websites",
        "Optional timed screenshots for visual accountability",
        "Idle-time detection and alerts",
        "Seamless activity logging without interrupting workflow",
      ],
    },
    {
      title: "Productivity Dashboards",
      isImageMobile: false,
      description:
        "Interactive dashboards turn usage data into meaningful insights like focus scores and billable breakdowns for managers and team members alike.",
      points: [
        "Focus vs. idle time analysis with visual charts",
        "Billable vs. non-billable time reports",
        "User and team-level performance metrics",
        "Custom time ranges and filters",
      ],
    },
    {
      title: "Privacy & Security",
      isImageMobile: false,
      description:
        "Built with privacy-first principles, EyeSmarty ensures data is encrypted, access is controlled, and employee trust is maintained.",
      points: [
        "End-to-end encryption of data",
        "Granular permission settings for roles and teams",
        "Screenshot blurring and opt-in tracking options",
        "GDPR-compliant data handling practices",
      ],
    },
    {
      title: "Payroll & Tool Integration",
      isImageMobile: false,
      description:
        "Integrates with key workplace tools and provides one-click data exports to streamline billing, reporting, and project status updates.",
      points: [
        "One-click exports for payroll and invoices",
        "Integration with Slack, Jira, Asana, and others",
        "Automatic timesheet generation",
        "Notifications and summaries within team channels",
      ],
    },
    {
      title: "User Management & Roles",
      isImageMobile: false,
      description:
        "Manage teams efficiently with role-based access, team grouping, and individual activity tracking for accountability and clarity.",
      points: [
        "Admin, manager, and user roles with custom permissions",
        "Team-wise grouping and activity breakdown",
        "Attendance and login tracking",
        "Easy onboarding and user invitations",
      ],
    },
  ],
  tech: ["Vue.js", "PHP", "Laravel"],
};

const OPTIMUS_HEALTH = {
  slug: "optimus-health",
  title: "Optimus Health",
  subtitle:
    "A web + mobile platform that connects personal trainers with their clients, enabling seamless tracking of workouts, nutrition, goals, and progress for data-driven results.",
  thumbnail: "thumbnail.png",
  website: "https://www.myoptimushealth.com/",
  featured: true,
  images: true,
  modules: [
    {
      title: "Workout Tracking & Logging",
      image: "tracking.png",
      isImageMobile: true,
      description:
        "Allows clients to record every exercise, set, and rep while giving trainers real-time insight into adherence and performance.",
      points: [
        "Quick-add templates for common routines",
        "Automatic volume, intensity, and PR calculations",
        "Offline logging that syncs when re-connected",
        "Instant trainer notifications on completed sessions",
      ],
    },
    {
      title: "Nutrition Diary",
      image: "nutrition.png",
      isImageMobile: true,
      description:
        "An integrated food journal that captures daily intake and compares it against personalized macro & calorie targets.",
      points: [
        "Searchable USDA food database with barcode scan",
        "Macro split visualizations (protein, carbs, fat)",
        "Meal-by-meal compliance scoring",
        "Trainer comments on logged meals for feedback",
      ],
    },
    {
      title: "Custom Plan Builder",
      image: "custom-plan-builder.png",
      isImageMobile: true,
      description:
        "Drag-and-drop tool for trainers to craft periodized programs and meal plans tailored to each client’s goals and schedule.",
      points: [
        "Exercise library with video demos and regressions",
        "Auto-progression rules (e.g., add weight weekly)",
        "Nutrition presets for bulking, cutting, or maintenance",
        "One-click assignment to multiple clients",
      ],
    },
    {
      title: "Client Dashboard & Analytics",
      image: "dashboard.png",
      isImageMobile: true,
      description:
        "Interactive dashboard where clients visualize trends while trainers spot plateaus early and adjust programs proactively.",
      points: [
        "Weight, body-fat, and measurement graphs over time",
        "Goal completion rings and streak counters",
        "Weekly progress snapshots emailed to both parties",
        "Exportable PDF reports for health professionals",
      ],
    },
    {
      title: "Trainer Management Console",
      image: "coach.png",
      isImageMobile: true,
      description:
        "Central hub for coaches to oversee their roster, schedule check-ins, and manage billing—all from a single screen.",
      points: [
        "Client list with status indicators (on track / needs attention)",
        "Integrated video or chat check-in scheduling",
        "Secure payment tracking and invoicing",
        "Role-based access for assistant coaches or dietitians",
      ],
    },
  ],
  tech: ["Vue.js", "Vuetify", "PHP", "Laravel"],
};

const RAW_PROJECTS = [BIMMER_TECH, EYESMARTY, OPTIMUS_HEALTH];

export const PROJECTS: IProject[] = RAW_PROJECTS.map(resolveProjectImages);
