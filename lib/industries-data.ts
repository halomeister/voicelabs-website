import {
  UtensilsCrossed,
  ShoppingCart,
  Briefcase,
  Store,
  Landmark,
  HeartPulse,
  Building2,
  Shield,
  Home,
  Plane,
  Car,
  GraduationCap,
  Truck,
  Wifi,
  Building,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  useCases: string[];
  stats: { value: string; label: string };
}

export const industries: Industry[] = [
  {
    slug: "horeca",
    name: "HoReCa",
    icon: UtensilsCrossed,
    tagline: "Hotels, Restaurants & Catering",
    description:
      "Automate reservation calls, handle menu inquiries, manage booking changes, and follow up with guests — all without putting anyone on hold.",
    useCases: [
      "Reservation booking & modifications",
      "Menu and availability inquiries",
      "Guest feedback collection",
      "Event and catering coordination",
    ],
    stats: { value: "40%", label: "reduction in missed reservations" },
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: ShoppingCart,
    tagline: "Online Retail & Marketplaces",
    description:
      "Handle order status calls, process returns, answer product questions, and recover abandoned carts with proactive outbound calls.",
    useCases: [
      "Order tracking & status updates",
      "Returns and refund processing",
      "Product recommendations via voice",
      "Abandoned cart recovery calls",
    ],
    stats: { value: "3.5x", label: "increase in cart recovery rate" },
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Briefcase,
    tagline: "Consulting, Legal & Accounting",
    description:
      "Qualify inbound leads, schedule consultations, handle intake calls, and follow up with prospects — so your team focuses on billable work.",
    useCases: [
      "Client intake and qualification",
      "Appointment scheduling",
      "Follow-up and reminder calls",
      "After-hours inquiry handling",
    ],
    stats: { value: "60%", label: "faster lead response time" },
  },
  {
    slug: "retail",
    name: "Retail",
    icon: Store,
    tagline: "Brick & Mortar and Omnichannel",
    description:
      "Answer store hours and stock questions, handle click-and-collect coordination, and run promotional outreach campaigns at scale.",
    useCases: [
      "Store information & hours",
      "Stock availability checks",
      "Click-and-collect coordination",
      "Loyalty program outreach",
    ],
    stats: { value: "55%", label: "of calls resolved without staff" },
  },
  {
    slug: "fintech",
    name: "Fintech",
    icon: Landmark,
    tagline: "Financial Technology & Payments",
    description:
      "Automate account verification calls, handle transaction disputes, onboard new users, and provide 24/7 support for payment issues.",
    useCases: [
      "Account verification & KYC calls",
      "Transaction dispute handling",
      "User onboarding walkthroughs",
      "Payment failure notifications",
    ],
    stats: { value: "73%", label: "of support calls automated" },
  },
  {
    slug: "medical",
    name: "Medical & Healthcare",
    icon: HeartPulse,
    tagline: "Clinics, Hospitals & Telehealth",
    description:
      "Schedule and confirm appointments, handle prescription refill requests, send post-visit follow-ups, and triage non-emergency inquiries.",
    useCases: [
      "Appointment scheduling & reminders",
      "Prescription refill requests",
      "Post-visit follow-up calls",
      "Non-emergency triage routing",
    ],
    stats: { value: "35%", label: "reduction in no-show rates" },
  },
  {
    slug: "banking",
    name: "Banking",
    icon: Building2,
    tagline: "Retail & Commercial Banking",
    description:
      "Handle balance inquiries, process routine transactions, manage card activations, and provide loan application status updates around the clock.",
    useCases: [
      "Account balance & transaction inquiries",
      "Card activation & PIN resets",
      "Loan application status updates",
      "Fraud alert verification calls",
    ],
    stats: { value: "24/7", label: "customer service availability" },
  },
  {
    slug: "insurance",
    name: "Insurance",
    icon: Shield,
    tagline: "Life, Health, Auto & Property",
    description:
      "Streamline claims intake, answer policy questions, automate renewal reminders, and handle first notice of loss calls efficiently.",
    useCases: [
      "Claims intake & status updates",
      "Policy information inquiries",
      "Renewal and payment reminders",
      "First notice of loss (FNOL) calls",
    ],
    stats: { value: "50%", label: "faster claims intake processing" },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Home,
    tagline: "Residential & Commercial Property",
    description:
      "Qualify buyer and renter leads instantly, schedule property viewings, answer listing questions, and follow up with prospects automatically.",
    useCases: [
      "Lead qualification & scoring",
      "Property viewing scheduling",
      "Listing inquiry responses",
      "Open house follow-up calls",
    ],
    stats: { value: "100x", label: "faster lead response vs. manual" },
  },
  {
    slug: "travel",
    name: "Travel & Hospitality",
    icon: Plane,
    tagline: "Airlines, Agencies & Tour Operators",
    description:
      "Manage booking changes, handle cancellations, provide itinerary support, and assist travelers across every time zone — day and night.",
    useCases: [
      "Booking modifications & cancellations",
      "Itinerary and travel info support",
      "Loyalty program inquiries",
      "Emergency travel assistance",
    ],
    stats: { value: "45%", label: "reduction in call wait times" },
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: Car,
    tagline: "Dealerships, Service & Parts",
    description:
      "Book service appointments, schedule test drives, handle parts inquiries, and follow up with leads — keeping your showroom focused on selling.",
    useCases: [
      "Service appointment booking",
      "Test drive scheduling",
      "Parts availability inquiries",
      "Post-purchase follow-up calls",
    ],
    stats: { value: "28%", label: "more test drives booked" },
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    tagline: "Universities, Schools & EdTech",
    description:
      "Handle enrollment inquiries, follow up with prospective students, manage admissions calls during peak season, and support current students.",
    useCases: [
      "Enrollment & admissions inquiries",
      "Prospective student follow-ups",
      "Financial aid information",
      "Campus event registration",
    ],
    stats: { value: "67%", label: "of inquiries handled automatically" },
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    tagline: "Shipping, Freight & Delivery",
    description:
      "Automate delivery status calls, coordinate dispatch, handle carrier communication, and manage exception notifications at scale.",
    useCases: [
      "Delivery status & tracking calls",
      "Dispatch coordination",
      "Carrier and driver communication",
      "Exception and delay notifications",
    ],
    stats: { value: "80%", label: "of status calls fully automated" },
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    icon: Wifi,
    tagline: "Mobile, Internet & Cable",
    description:
      "Triage technical support, handle plan changes, process account inquiries, and reduce churn with proactive retention calls.",
    useCases: [
      "Technical support triage",
      "Plan upgrades & changes",
      "Billing and account inquiries",
      "Proactive retention outreach",
    ],
    stats: { value: "38%", label: "reduction in churn rate" },
  },
  {
    slug: "government",
    name: "Government & Public Sector",
    icon: Building,
    tagline: "Federal, State & Municipal Services",
    description:
      "Handle citizen service inquiries, schedule appointments for government offices, provide information hotlines, and manage high-volume seasonal demand.",
    useCases: [
      "Citizen service inquiries",
      "Appointment scheduling for offices",
      "Public information hotlines",
      "Emergency notification outreach",
    ],
    stats: { value: "70%", label: "reduction in call queue backlog" },
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((ind) => ind.slug === slug);
}
