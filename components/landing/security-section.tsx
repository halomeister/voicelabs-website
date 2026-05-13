"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const features = [
  { icon: Shield, title: "Voice Customization", description: "Customize speaking rate, speed, and patience level for natural conversations." },
  { icon: Lock, title: "Sentiment Analysis", description: "Enhance customer experience with advanced sentiment analysis and voice management." },
  { icon: Eye, title: "Smart Diarization", description: "Handle interruptions gracefully and detect conversation endings automatically." },
  { icon: FileCheck, title: "Real-time Bookings", description: "Determine availability and schedule appointments instantly during calls." },
];

const badges = ["Autopilot Calls", "30+ Languages", "Smart Routing", "RAG Knowledge", "Flow Builder"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="security" ref={sectionRef} className="relative bg-gray-50 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Technology</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 mb-6">
              Exceptional
              <span className="text-gray-400"> technology.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Put your calls on autopilot. Send SMS, emails, calendar invites automatically while your AI agents handle conversations with human-like precision.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, i) => (
                <span
                  key={badge}
                  className={`px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 50 + 200}ms` }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-white border border-gray-100 rounded-xl p-5 hover:border-[#7c3aed]/30 hover:shadow-sm transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#7c3aed]/10 flex items-center justify-center shrink-0 group-hover:bg-[#7c3aed] transition-colors">
                    <feature.icon className="w-5 h-5 text-[#7c3aed] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
