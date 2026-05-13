"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { quote: "VoiceLabs has revolutionized our customer service workflow. Converting manual calls to AI used to take hours. Now it takes 30 seconds.", author: "Jennifer Kim", role: "Marketing Manager", company: "TechStartup Inc", metric: "10x faster onboarding" },
  { quote: "Enterprise AI calling requires perfect agents, and VoiceLabs delivers every time. No more manual training. Crisp conversations and perfect handling.", author: "Tom Williams", role: "Sales Director", company: "CustomSigns Pro", metric: "80% higher conversion" },
  { quote: "Our call center needed automation for outbound campaigns. VoiceLabs understands our needs perfectly. Clean, professional results every time.", author: "Lisa Rodriguez", role: "Brand Manager", company: "Fashion Forward", metric: "10+ hours saved weekly" },
  { quote: "VoiceLabs saved our team from constantly training agents on scripts. Perfect call quality every time, from leads to closings.", author: "Mike Johnson", role: "Operations Lead", company: "ScaleUp Ventures", metric: "ROI in first month" },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[activeIndex];

  return (
    <section className="relative bg-gray-50 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-8">What people say</span>

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display text-gray-900 leading-snug mb-10 transition-opacity duration-300">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed] font-display text-lg">
              {t.author.charAt(0)}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">{t.author}</p>
              <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
            </div>
          </div>

          <div className="inline-block px-4 py-2 bg-[#7c3aed]/10 rounded-full text-sm text-[#7c3aed] font-medium mb-10">
            {t.metric}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === activeIndex ? "w-8 bg-[#7c3aed]" : "w-2 bg-gray-300"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
