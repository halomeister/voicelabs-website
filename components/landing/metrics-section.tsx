"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-display text-[#7c3aed]">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

const metrics = [
  { value: 1000000, suffix: "+", prefix: "", label: "Calls launched per minute" },
  { value: 73, suffix: "%", prefix: "", label: "Cost reduction on hiring sales reps" },
  { value: 30, suffix: "+", prefix: "", label: "Languages supported" },
  { value: 2500, suffix: "+", prefix: "", label: "Businesses trust VoiceLabs" },
];

export function MetricsSection() {
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
    <section id="studio" ref={sectionRef} className="relative bg-gray-50 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Live metrics</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900">
            Unparalleled
            <span className="text-gray-400"> performance.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter end={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              <div className="mt-3 text-sm text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
