"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Human-like Voice Agents",
    description:
      "Create AI agents with natural speech, custom accents, and personality. Train them instantly with your data — no coding or ML expertise required.",
    visual: "voice",
  },
  {
    title: "Inbound & Outbound Calls",
    description:
      "Handle outbound sales calls, answer inbound support queries, and schedule appointments around the clock. Upload contacts, set a schedule, and go.",
    visual: "calls",
  },
  {
    title: "Omnichannel Engagement",
    description:
      "Connected journeys across Call, WhatsApp, SMS, and Email where every channel knows what happened on the last — no repetition, no lost context.",
    visual: "omnichannel",
  },
  {
    title: "Quality Monitoring",
    description:
      "AI + human quality audits across 23 parameters, so we catch what's breaking before it hits your numbers. Real-time scoring on every call.",
    visual: "quality",
  },
  {
    title: "ROI Optimizer",
    description:
      "Run controlled experiments on voice, prompt, channel sequence, and call timing, and compound the gains instead of guessing what worked.",
    visual: "roi",
  },
];

const tabs = features.map((f) => f.title);

function FeatureVisual({ type }: { type: string }) {
  switch (type) {
    case "voice":
      return (
        <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 to-[#a78bfa]/20" />
          <div className="relative flex items-center gap-1 h-16">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-[#7c3aed]/60 rounded-full"
                style={{
                  height: `${20 + Math.sin(i * 0.8) * 30 + 20}%`,
                  animation: `pulse ${1.2 + (i % 4) * 0.2}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 60}ms`,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white rounded-lg shadow-sm text-xs text-gray-600 font-medium">
            Optimized Call
          </div>
        </div>
      );
    case "calls":
      return (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#7c3aed]/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#7c3aed]/40" />
              </div>
              <div className="w-12 h-[2px] bg-[#7c3aed]/30" />
              <div className="w-10 h-10 rounded-full bg-[#7c3aed]/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#7c3aed]/40" />
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="px-2 py-1 bg-white rounded text-[10px] text-gray-500 shadow-sm">IN</span>
              <span className="px-2 py-1 bg-[#7c3aed] rounded text-[10px] text-white shadow-sm">OUT</span>
            </div>
          </div>
        </div>
      );
    case "omnichannel":
      return (
        <div className="w-full h-full bg-gradient-to-br from-violet-50 to-pink-100 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="flex items-center gap-3">
            {["📞", "💬", "✉️", "📱"].map((emoji, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-lg"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
      );
    case "quality":
      return (
        <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full border-4 border-[#7c3aed]/30 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl font-display text-[#7c3aed]">94%</span>
            </div>
            <div className="flex gap-3 mt-3">
              <div className="text-center">
                <div className="text-sm font-display text-gray-700">12,340</div>
                <div className="text-[10px] text-gray-400">Passed</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-display text-gray-700">740</div>
                <div className="text-[10px] text-gray-400">Flagged</div>
              </div>
            </div>
          </div>
        </div>
      );
    case "roi":
      return (
        <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="space-y-2 px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gray-500">A</span>
              <div className="flex-1 h-2 bg-[#7c3aed]/20 rounded-full overflow-hidden">
                <div className="h-full w-[62%] bg-[#7c3aed]/60 rounded-full" />
              </div>
              <span className="text-xs font-mono text-gray-600">12.4%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gray-500">B</span>
              <div className="flex-1 h-2 bg-[#7c3aed]/20 rounded-full overflow-hidden">
                <div className="h-full w-[81%] bg-[#7c3aed] rounded-full" />
              </div>
              <span className="text-xs font-mono text-gray-600">18.1%</span>
            </div>
          </div>
        </div>
      );
    default:
      return <div className="w-full h-full bg-gray-100 rounded-xl" />;
  }
}

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollCards = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="features" ref={sectionRef} className="relative bg-white py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 max-w-2xl">
            The Complete Voice AI Stack
            <br />
            <span className="text-gray-400">for Your Business</span>
          </h2>
        </div>

        {/* Tabs */}
        <div
          className={`mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-2">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  activeTab === i
                    ? "bg-[#7c3aed] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {i > 0 && (
                  <span className="hidden sm:inline-block w-4 h-px bg-current opacity-30 -ml-2 mr-0" />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards carousel */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          >
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`flex-shrink-0 w-[280px] md:w-[300px] snap-start transition-all duration-300 ${
                  activeTab === i ? "ring-2 ring-[#7c3aed]/30 rounded-2xl" : ""
                }`}
                onClick={() => setActiveTab(i)}
              >
                {/* Visual */}
                <div className="h-48 md:h-56 mb-4 cursor-pointer">
                  <FeatureVisual type={feature.visual} />
                </div>

                {/* Content */}
                <div className="px-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => scrollCards("left")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCards("right")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
