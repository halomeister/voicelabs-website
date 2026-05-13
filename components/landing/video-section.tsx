"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

const trustedCompanies = [
  "TechStartup Inc",
  "ScaleUp Ventures",
  "ServiceFirst Ltd",
  "BrandCraft Studio",
  "Fashion Forward",
  "CustomSigns Pro",
  "PrintPerfect",
  "Ad Agency Plus",
];

export function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Purple gradient background */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 30%, #c4b5fd 60%, #a78bfa 100%)",
          }}
        />

        <div
          className={`relative max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Video container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#7c3aed]/80 to-[#a78bfa]/80 backdrop-blur-sm">
              {!isPlaying ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Decorative avatars */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2">
                    <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-300 to-purple-500" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                      <div className="w-3 h-3 flex gap-[2px] items-end">
                        <div className="w-[2px] h-2 bg-white rounded-full" />
                        <div className="w-[2px] h-3 bg-white rounded-full" />
                        <div className="w-[2px] h-1.5 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom left avatar */}
                  <div className="absolute bottom-8 left-12 md:left-16">
                    <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-500" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                      <div className="w-3 h-3 flex gap-[2px] items-end">
                        <div className="w-[2px] h-1.5 bg-white rounded-full" />
                        <div className="w-[2px] h-2.5 bg-white rounded-full" />
                        <div className="w-[2px] h-1 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom right avatar */}
                  <div className="absolute bottom-8 right-12 md:right-16">
                    <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-pink-500" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                      <div className="w-3 h-3 flex gap-[2px] items-end">
                        <div className="w-[2px] h-2 bg-white rounded-full" />
                        <div className="w-[2px] h-1 bg-white rounded-full" />
                        <div className="w-[2px] h-2.5 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Center text + play button */}
                  <div className="text-center">
                    <p className="text-white/90 text-lg md:text-2xl lg:text-3xl font-display mb-2 px-8">
                      the most human-sounding AI platform
                    </p>
                    <p className="text-white/70 text-base md:text-xl lg:text-2xl font-display">
                      for voice conversations
                    </p>
                  </div>

                  {/* Play button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
                    aria-label="Play demo video"
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-[#7c3aed] ml-1" fill="currentColor" />
                  </button>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#7c3aed]/90">
                  {/* Close button */}
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Close video"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>

                  {/* Video placeholder */}
                  <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-12">
                    <div className="flex items-center gap-1 h-20">
                      {[...Array(30)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-white/50 rounded-full"
                          style={{
                            height: `${20 + Math.random() * 60}%`,
                            animation: `pulse 1.${i % 5}s ease-in-out infinite alternate`,
                            animationDelay: `${i * 50}ms`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-display text-white mb-2">Demo video placeholder</p>
                      <p className="text-sm text-white/60">
                        Replace with your actual product demo video
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by section */}
      <div className="py-12 lg:py-16 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-center text-sm text-gray-400 font-mono uppercase tracking-wider mb-8">
            Trusted by 2,500+ businesses worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8 items-center justify-items-center">
            {trustedCompanies.map((company) => (
              <span
                key={company}
                className="text-sm font-display text-gray-300 hover:text-gray-500 transition-colors whitespace-nowrap"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
