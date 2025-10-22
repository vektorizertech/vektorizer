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
  "AI Integration",
  "E-commerce",
  "Health & Fitness",
  "Social Media",
  "Gaming",
  "Fleet Management",
];

// Original Vektorizer Projects
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
        "Drag-and-drop tool for trainers to craft periodized programs and meal plans tailored to each client's goals and schedule.",
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

// Portfolio Projects adapted to Vektorizer theme
const AI_DOCUMENT_ANALYSIS = {
  slug: "ai-document-analysis",
  title: "AI Document Analysis",
  subtitle:
    "A MERN stack web application powered by OpenAI GPT models that allows users to upload documents for AI-based analysis with interactive chat functionality and secure data storage.",
  thumbnail: "/images/projects/ai-document-analysis.png",
  website: "https://ai-document-analysis.vercel.app",
  featured: true,
  images: false,
  modules: [
    {
      title: "OpenAI Document Processing",
      isImageMobile: false,
      description:
        "Advanced document processing system powered by OpenAI GPT models that handles multiple file formats and provides AI-powered analysis with real-time feedback.",
      points: [
        "OpenAI GPT model integration for document analysis",
        "Support for PDF, DOC, TXT, and image file formats",
        "Real-time document processing and analysis",
        "AI-powered content extraction and summarization",
        "Secure file storage with encryption",
      ],
    },
    {
      title: "Interactive OpenAI Chat",
      isImageMobile: false,
      description:
        "Intelligent chat interface powered by OpenAI that allows users to ask follow-up questions about their documents and receive contextual AI responses.",
      points: [
        "OpenAI GPT-powered contextual responses",
        "Context-aware AI responses based on document content",
        "Chat history persistence across sessions",
        "Real-time message processing and delivery",
        "Smart suggestions and follow-up questions",
      ],
    },
    {
      title: "Analysis Results Dashboard",
      isImageMobile: false,
      description:
        "Comprehensive dashboard displaying OpenAI-powered analysis results, insights, and downloadable reports with visual data representation.",
      points: [
        "Visual representation of OpenAI analysis results",
        "Downloadable PDF and text reports",
        "Progress tracking and completion status",
        "Export functionality for further analysis",
      ],
    },
    {
      title: "User Management & Security",
      isImageMobile: false,
      description:
        "Robust user authentication and data security system ensuring privacy and secure access to personal documents.",
      points: [
        "Secure user registration and authentication",
        "Role-based access control",
        "Data encryption and privacy protection",
        "Session management and security tokens",
      ],
    },
  ],
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "OpenAI GPT",
    "RESTful APIs",
  ],
};

const SHAREPLAY = {
  slug: "shareplay",
  title: "SharePlay",
  subtitle:
    "A TikTok-style MERN stack platform for video sharing with social features, cloud storage integration, and comprehensive user engagement tools.",
  thumbnail: "/images/projects/shareplay.png",
  website: "https://shareplay.vercel.app",
  featured: true,
  images: false,
  modules: [
    {
      title: "Video Upload & Processing",
      isImageMobile: false,
      description:
        "Advanced video upload system with Azure Blob Storage integration, supporting multiple formats and real-time processing.",
      points: [
        "Azure Blob Storage for scalable video hosting",
        "Multiple video format support (MP4, MOV, AVI)",
        "Real-time video processing and optimization",
        "Progress tracking for large file uploads",
      ],
    },
    {
      title: "Social Features & Engagement",
      isImageMobile: false,
      description:
        "Comprehensive social media features including likes, comments, follows, and user interaction tracking.",
      points: [
        "Like, comment, and share functionality",
        "User follow system and feed management",
        "Real-time notifications for interactions",
        "Social analytics and engagement metrics",
      ],
    },
    {
      title: "Profile Management",
      isImageMobile: false,
      description:
        "Complete user profile system with customizable settings, profile pictures, and user statistics.",
      points: [
        "Customizable user profiles and avatars",
        "User statistics and activity tracking",
        "Privacy settings and account management",
        "Profile verification and badges",
      ],
    },
    {
      title: "Content Discovery",
      isImageMobile: false,
      description:
        "Intelligent content recommendation system that helps users discover relevant videos and creators.",
      points: [
        "AI-powered content recommendations",
        "Trending videos and hashtag system",
        "Search functionality with filters",
        "Personalized feed based on user preferences",
      ],
    },
  ],
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Azure Blob Storage",
    "Video Processing",
  ],
};

const FITLY_AI = {
  slug: "fitly-ai",
  title: "Fitly AI",
  subtitle:
    "A comprehensive health and fitness assistant built on the MERN stack with Gemini AI-powered personalized recommendations and progress tracking.",
  thumbnail: "/images/projects/fitly-ai.png",
  website: "https://fitly-ai.vercel.app",
  featured: true,
  images: false,
  modules: [
    {
      title: "Gemini AI-Powered Workout Plans",
      isImageMobile: false,
      description:
        "Intelligent workout plan generation powered by Google's Gemini AI based on user inputs including weight, height, goals, and fitness level.",
      points: [
        "Gemini AI-powered personalized workout plan generation",
        "Exercise library with video demonstrations",
        "Progressive difficulty adjustment",
        "Goal-based plan customization",
      ],
    },
    {
      title: "Gemini AI Nutrition & Meal Planning",
      isImageMobile: false,
      description:
        "Comprehensive nutrition tracking and meal planning system with Gemini AI-powered recommendations and macro calculations.",
      points: [
        "Gemini AI-powered nutrition recommendations",
        "BMR and calorie calculation",
        "Macro and micronutrient tracking",
        "Meal plan generation and suggestions",
        "Food database integration",
      ],
    },
    {
      title: "Progress Dashboard",
      isImageMobile: false,
      description:
        "Interactive dashboard for tracking fitness progress, weight changes, and achievement milestones.",
      points: [
        "Visual progress charts and graphs",
        "Weight and measurement tracking",
        "Achievement badges and milestones",
        "Progress photo comparison",
      ],
    },
    {
      title: "Gemini AI ChatBot",
      isImageMobile: false,
      description:
        "AI-powered chatbot powered by Google's Gemini AI providing instant fitness advice, answering questions, and offering motivation.",
      points: [
        "Gemini AI-powered 24/7 fitness advice and support",
        "Natural language processing",
        "Contextual responses and suggestions",
        "Motivational messages and tips",
      ],
    },
  ],
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Gemini AI",
    "Health APIs",
  ],
};

const CODEPLAY = {
  slug: "codeplay",
  title: "CodePlay",
  subtitle:
    "A Wordle-inspired coding game built using the MERN stack with multiple difficulty levels, competitive features, and real-time leaderboards.",
  thumbnail: "/images/projects/codeplay.png",
  website: "https://codeplay.vercel.app",
  featured: true,
  images: false,
  modules: [
    {
      title: "Multi-Level Gameplay",
      isImageMobile: false,
      description:
        "Four distinct difficulty levels designed to challenge programmers of all skill levels with progressively complex coding puzzles.",
      points: [
        "Beginner, Intermediate, Advanced, and Expert levels",
        "Time-based challenges and constraints",
        "Dynamic difficulty adjustment",
        "Skill-based problem selection",
      ],
    },
    {
      title: "Competitive Features",
      isImageMobile: false,
      description:
        "Comprehensive competitive system with leaderboards, rankings, and tournament-style gameplay for enhanced engagement.",
      points: [
        "Real-time leaderboard updates",
        "Top 25 players showcase",
        "Achievement system and badges",
        "Weekly and monthly competitions",
      ],
    },
    {
      title: "User Dashboard",
      isImageMobile: false,
      description:
        "Personal dashboard tracking game history, statistics, achievements, and progress across different difficulty levels.",
      points: [
        "Comprehensive game history tracking",
        "Personal statistics and analytics",
        "Achievement progress tracking",
        "Performance trends and insights",
      ],
    },
    {
      title: "Real-Time Updates",
      isImageMobile: false,
      description:
        "Live updates system providing real-time game state synchronization and instant feedback for enhanced user experience.",
      points: [
        "Real-time game state synchronization",
        "Instant feedback and scoring",
        "Live multiplayer capabilities",
        "Push notifications for achievements",
      ],
    },
  ],
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Game Logic",
    "Real-time Updates",
  ],
};

const SOOKUP = {
  slug: "sookup",
  title: "Sookup",
  subtitle:
    "A location-based marketplace mobile application built with React Native and Medusa.js, featuring Google Maps integration for enhanced user experience.",
  thumbnail: "/images/projects/sookup.png",
  website: "https://sookup-app.vercel.app",
  featured: true,
  images: false,
  modules: [
    {
      title: "Location-Based Marketplace",
      isImageMobile: true,
      description:
        "Innovative marketplace platform leveraging location services to connect buyers and sellers in their vicinity.",
      points: [
        "Real-time location tracking",
        "Proximity-based product discovery",
        "Location-based seller matching",
        "Geographic search and filtering",
      ],
    },
    {
      title: "E-commerce Platform",
      isImageMobile: true,
      description:
        "Comprehensive e-commerce functionality with product management, secure payments, and order processing.",
      points: [
        "Product listing and management",
        "Secure payment processing",
        "Order tracking and management",
        "Seller dashboard and analytics",
      ],
    },
    {
      title: "Cross-Platform Mobile App",
      isImageMobile: true,
      description:
        "Native mobile application built with React Native providing seamless experience across iOS and Android platforms.",
      points: [
        "Cross-platform mobile development",
        "Native performance and features",
        "Push notifications and alerts",
        "Offline capability and sync",
      ],
    },
    {
      title: "User Authentication & Management",
      isImageMobile: true,
      description:
        "Comprehensive user management system with authentication, profiles, and role-based access control.",
      points: [
        "Secure user authentication",
        "Profile management and customization",
        "Role-based access control",
        "User verification and trust system",
      ],
    },
  ],
  tech: [
    "React Native",
    "Medusa.js",
    "Google Maps API",
    "Location Services",
    "E-commerce Platform",
    "Real-time Updates",
    "Payment Integration",
    "User Authentication",
    "Push Notifications",
    "Cross-platform",
  ],
};

const TRINACRIA_DESIGNS = {
  slug: "trinacria-designs",
  title: "TRINACRIA DESIGNS",
  subtitle:
    "A comprehensive e-commerce website built as a Fiverr project featuring product customization, user reviews, admin panel, and secure payment processing.",
  thumbnail: "/images/projects/trinacria-designs.png",
  website: "https://trinacria-designs.vercel.app",
  featured: true,
  images: false,
  modules: [
    {
      title: "Product Customization System",
      isImageMobile: false,
      description:
        "Advanced product customization platform allowing customers to personalize products with various options and configurations.",
      points: [
        "Multiple customization options",
        "Real-time preview functionality",
        "Custom pricing calculation",
        "Design tool integration",
      ],
    },
    {
      title: "Shopping Cart & Checkout",
      isImageMobile: false,
      description:
        "Comprehensive shopping cart system with secure checkout process and multiple payment options.",
      points: [
        "Advanced shopping cart functionality",
        "Secure Stripe payment integration",
        "Multiple payment methods",
        "Order confirmation and tracking",
      ],
    },
    {
      title: "Review & Rating System",
      isImageMobile: false,
      description:
        "Comprehensive review system allowing customers to rate products and share their experiences.",
      points: [
        "Product rating and review system",
        "Customer feedback management",
        "Review moderation and approval",
        "Review analytics and insights",
      ],
    },
    {
      title: "Admin Dashboard",
      isImageMobile: false,
      description:
        "Comprehensive admin panel for managing orders, customizations, inventory, and customer relationships.",
      points: [
        "Order management and tracking",
        "Customization request handling",
        "Inventory management system",
        "Customer relationship management",
      ],
    },
  ],
  tech: [
    "Next.js",
    "Medusa.js",
    "Stripe",
    "Milesearch",
    "Product Customization",
    "Shopping Cart",
    "User Authentication",
    "Admin Dashboard",
    "Review System",
    "Payment Processing",
    "Responsive Design",
    "E-commerce Platform",
  ],
};

const RAW_PROJECTS = [
  BIMMER_TECH,
  EYESMARTY,
  OPTIMUS_HEALTH,
  AI_DOCUMENT_ANALYSIS,
  SHAREPLAY,
  FITLY_AI,
  CODEPLAY,
  SOOKUP,
  TRINACRIA_DESIGNS,
];

export const PROJECTS: IProject[] = RAW_PROJECTS.map(resolveProjectImages);
