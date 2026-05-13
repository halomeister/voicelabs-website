"use client";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { VoiceChatWidget } from "@/components/landing/voice-chat-widget";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    company: "TechStartup Inc",
    industry: "SaaS",
    title: "How TechStartup Inc 10x'd their outbound sales pipeline with AI voice agents",
    description: "TechStartup Inc replaced their manual cold-calling team with VoiceLabs AI agents, reaching 10x more prospects while reducing cost per acquisition by 73%.",
    metrics: [
      { value: "10x", label: "More prospects reached" },
      { value: "73%", label: "Lower CAC" },
      { value: "3 days", label: "Time to deploy" },
    ],
  },
  {
    company: "ServiceFirst Ltd",
    industry: "Customer Support",
    title: "ServiceFirst cut support costs by 60% while improving CSAT scores",
    description: "By deploying VoiceLabs inbound agents for tier-1 support, ServiceFirst handles 500+ daily calls autonomously with higher customer satisfaction than human agents.",
    metrics: [
      { value: "60%", label: "Cost reduction" },
      { value: "500+", label: "Calls/day automated" },
      { value: "94%", label: "CSAT score" },
    ],
  },
  {
    company: "ScaleUp Ventures",
    industry: "Lead Qualification",
    title: "ScaleUp Ventures qualified 3x more leads without hiring additional SDRs",
    description: "VoiceLabs AI agents call every inbound lead within 60 seconds, qualify them against custom criteria, and book meetings directly into the sales team's calendar.",
    metrics: [
      { value: "3x", label: "More qualified leads" },
      { value: "<60s", label: "Response time" },
      { value: "ROI", label: "In first month" },
    ],
  },
  {
    company: "Fashion Forward",
    industry: "E-commerce",
    title: "Fashion Forward increased order confirmations by 40% with AI follow-up calls",
    description: "Automated outbound calls to confirm orders and offer upsells resulted in significantly higher confirmation rates and average order values.",
    metrics: [
      { value: "40%", label: "More confirmations" },
      { value: "25%", label: "Higher AOV" },
      { value: "24/7", label: "Always active" },
    ],
  },
  {
    company: "HealthBook Clinics",
    industry: "Healthcare",
    title: "HealthBook reduced no-shows by 60% with automated appointment reminders",
    description: "AI voice agents call patients 24h before appointments, confirm attendance, and reschedule when needed — freeing up staff and reducing revenue loss from no-shows.",
    metrics: [
      { value: "60%", label: "Fewer no-shows" },
      { value: "15hrs", label: "Staff time saved/week" },
      { value: "30+", label: "Languages supported" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Case Studies</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 mb-4">
              Real results from
              <span className="text-gray-400"> real businesses</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              See how companies across industries are using VoiceLabs AI voice agents to automate calls, reduce costs, and grow revenue.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <div
                key={study.company}
                className="border border-gray-200 rounded-2xl p-8 hover:border-[#7c3aed]/30 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#7c3aed]/10 text-[#7c3aed] text-xs font-medium rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                  {study.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-6 pt-4 border-t border-gray-100">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-xl font-display text-[#7c3aed]">{metric.value}</div>
                      <div className="text-[11px] text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-4">Want results like these?</p>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-medium rounded-full transition-colors group"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
      <FooterSection />
      <VoiceChatWidget />
    </main>
  );
}
