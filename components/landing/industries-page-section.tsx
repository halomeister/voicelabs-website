"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { industries } from "@/lib/industries-data";

export function IndustriesPageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gray-900" />
            <span className="text-sm font-mono text-gray-500 tracking-wider uppercase">
              Industries
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <h1 className="text-4xl lg:text-6xl font-display tracking-tight leading-[0.95]">
              AI voice agents
              <br />
              for <span className="text-[#7c3aed]">every</span>
              <br />
              industry
            </h1>
            <div className="flex flex-col justify-end">
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                From healthcare to hospitality, VoiceLabs powers voice automation
                across 15+ industries. Find your use case and see how AI agents
                can transform your customer operations.
              </p>
            </div>
          </div>
        </div>

        {/* Industry count bar */}
        <div
          className={`flex items-center gap-4 mb-16 pb-8 border-b border-gray-200 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-5xl font-display">{industries.length}</span>
          <span className="text-gray-500 text-sm">
            industries served
            <span className="block font-mono text-xs mt-0.5">AND GROWING</span>
          </span>
        </div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            const isActive = activeIndustry === industry.slug;

            return (
              <div
                key={industry.slug}
                className={`group relative border border-gray-200 rounded-2xl overflow-hidden transition-all duration-700 cursor-pointer ${
                  isActive
                    ? "border-gray-300 bg-gray-50"
                    : "hover:border-gray-900/20 hover:bg-gray-900/[0.01]"
                } ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + (i % 6) * 80}ms` }}
                onClick={() =>
                  setActiveIndustry(isActive ? null : industry.slug)
                }
              >
                {/* Header */}
                <div className="p-8 pb-0">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center group-hover:border-gray-900/20 transition-colors">
                      <Icon className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors" />
                    </div>
                    <span className="font-mono text-xs text-gray-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-display mb-1">{industry.name}</h3>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                    {industry.tagline}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {industry.description}
                  </p>
                </div>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isActive ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    {/* Use cases */}
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-3">
                        Key Use Cases
                      </span>
                      <ul className="space-y-2">
                        {industry.useCases.map((uc) => (
                          <li
                            key={uc}
                            className="flex items-start gap-2 text-sm text-gray-500"
                          >
                            <Check className="w-3.5 h-3.5 text-gray-900 mt-0.5 shrink-0" />
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stat */}
                    <div className="mt-5 pt-4 border-t border-gray-200 flex items-baseline gap-3">
                      <span className="text-2xl font-display">
                        {industry.stats.value}
                      </span>
                      <span className="text-xs text-gray-500">
                        {industry.stats.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="px-8 py-4 border-t border-gray-900/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {isActive ? "Click to collapse" : "Click to explore"}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                      isActive ? "rotate-90" : "group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 pt-16 border-t border-gray-200 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-display mb-4">
            Don&apos;t see your industry?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            VoiceLabs adapts to any business that handles phone calls. Let&apos;s
            talk about your specific use case.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-background rounded-full text-sm font-medium hover:bg-gray-900/90 transition-colors group"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
