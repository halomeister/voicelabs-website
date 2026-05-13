"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const words = ["sell", "support", "qualify", "convert"];

const stats = [
  { value: "5X", label: "Productivity Boost" },
  { value: "100X", label: "Scalability" },
  { value: "24/7", label: "Autonomous Calling" },
  { value: "<500ms", label: "Voice Latency" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Headline */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-display leading-[1.1] tracking-tight text-gray-900">
              AI Voice Agents
              <br />
              that{" "}
              <span className="relative inline-block text-[#7c3aed]">
                <span key={wordIndex} className="inline-flex">
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
          </div>

          {/* Right: Description + CTAs */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Voice AI Agents that drive revenue by handling outbound sales, inbound support,
              and appointment booking — 24/7, in 30+ languages, without writing a single line of code.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-medium rounded-full transition-colors group"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 lg:mt-24 pt-10 border-t border-gray-100 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl lg:text-5xl font-display text-[#7c3aed] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
