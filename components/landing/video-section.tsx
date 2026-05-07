"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

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
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
            See it in action
          </span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-4">
            Watch how it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            See VoiceLabs AI handle a real customer call — from greeting to resolution — in under two minutes.
          </p>
        </div>

        {/* Video Player */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative aspect-video bg-foreground/[0.03] border border-foreground/10 rounded-2xl overflow-hidden group">
            {/* Video placeholder / thumbnail */}
            {!isPlaying ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Decorative waveform lines */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-px bg-foreground mx-4 rounded-full"
                      style={{
                        height: `${20 + Math.sin(i * 1.2) * 30 + 30}%`,
                        opacity: 0.3 + (i % 3) * 0.2,
                      }}
                    />
                  ))}
                </div>

                {/* Play button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-foreground text-background flex items-center justify-center transition-transform duration-500 hover:scale-110 group-hover:scale-105"
                  aria-label="Play demo video"
                >
                  <Play className="w-8 h-8 lg:w-10 lg:h-10 ml-1" fill="currentColor" />
                </button>

                {/* Duration badge */}
                <span className="relative z-10 mt-6 text-sm text-muted-foreground font-mono">
                  1:47
                </span>

                {/* Corner labels */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-mono text-muted-foreground">DEMO</span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="text-xs font-mono text-muted-foreground">
                    VoiceLabs AI — Product Demo
                  </span>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/[0.02]">
                {/* Close button */}
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Simulated video player */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-12">
                  {/* Animated waveform to simulate a voice call */}
                  <div className="flex items-center gap-1 h-24">
                    {[...Array(40)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-foreground/40 rounded-full"
                        style={{
                          height: `${20 + Math.random() * 60}%`,
                          animation: `pulse 1.${i % 5}s ease-in-out infinite alternate`,
                          animationDelay: `${i * 50}ms`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-lg font-display mb-2">Demo video placeholder</p>
                    <p className="text-sm text-muted-foreground">
                      Replace this with your actual product demo video embed
                    </p>
                  </div>

                  {/* Simulated progress bar */}
                  <div className="w-full max-w-lg">
                    <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-foreground/60 rounded-full"
                        style={{
                          width: "35%",
                          animation: "grow 107s linear forwards",
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs font-mono text-muted-foreground">
                      <span>0:37</span>
                      <span>1:47</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
