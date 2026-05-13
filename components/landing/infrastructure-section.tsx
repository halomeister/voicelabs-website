"use client";

import { useEffect, useState, useRef } from "react";

const locations = [
  { city: "San Francisco", region: "US West", latency: "12ms" },
  { city: "New York", region: "US East", latency: "18ms" },
  { city: "London", region: "Europe", latency: "24ms" },
  { city: "Tokyo", region: "Asia Pacific", latency: "32ms" },
  { city: "Sydney", region: "Oceania", latency: "45ms" },
  { city: "São Paulo", region: "South America", latency: "38ms" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Infrastructure</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 mb-6">
              Powerful voice
              <span className="text-gray-400"> connectivity.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              AI agents that connect with customers globally through reliable, high-quality voice interactions — powered by premium call infrastructure with sub-500ms latency across 100+ countries.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-display text-[#7c3aed] mb-1">100+</div>
                <div className="text-sm text-gray-500">Countries</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display text-[#7c3aed] mb-1">99.99%</div>
                <div className="text-sm text-gray-500">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display text-[#7c3aed] mb-1">&lt;500ms</div>
                <div className="text-sm text-gray-500">Call latency</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Edge Network</span>
                <span className="flex items-center gap-2 text-xs text-green-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  All operational
                </span>
              </div>
              <div>
                {locations.map((location, index) => (
                  <div
                    key={location.city}
                    className={`px-5 py-4 border-b border-gray-50 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeLocation === index ? "bg-[#7c3aed]/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full transition-colors ${activeLocation === index ? "bg-[#7c3aed]" : "bg-gray-200"}`} />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{location.city}</div>
                        <div className="text-xs text-gray-400">{location.region}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-gray-500">{location.latency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
