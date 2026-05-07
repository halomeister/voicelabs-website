"use client";

import { useEffect, useRef, useState } from "react";
import { industries } from "@/lib/industries-data";
import { ArrowRight } from "lucide-react";

export function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false);
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
            <div className="w-8 h-px bg-foreground" />
            <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
              Industries
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight leading-[0.95]">
              AI voice agents
              <br />
              for <span className="text-stroke">every</span>
              <br />
              industry
            </h2>
            <div className="flex flex-col justify-end">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                From healthcare to hospitality, VoiceLabs powers voice automation
                across 15+ industries. Find your sector and see how AI agents
                transform your customer operations.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <a
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className={`group relative border border-foreground/10 rounded-2xl p-8 hover:border-foreground/30 transition-all duration-700 hover:bg-foreground/[0.02] hover-lift ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <industry.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-medium mb-1 group-hover:text-foreground/80 transition-colors">
                {industry.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{industry.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                {industry.description}
              </p>

              {/* Stats preview */}
              <div className="flex gap-4 mb-6 pt-4 border-t border-foreground/5">
                {industry.stats.slice(0, 2).map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-base font-display">{stat.value}</span>
                    <span className="text-[10px] text-muted-foreground leading-tight block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-foreground group-hover:gap-2.5 transition-all">
                Learn more
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
