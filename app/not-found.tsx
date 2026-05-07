"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowRight, Radio } from "lucide-react";

const glitchMessages = [
  "Hmm, our AI agent looked everywhere...",
  "Even voice agents can't find this page.",
  "This frequency doesn't exist.",
  "Signal lost. Page not found.",
  "Our agents are great at calls, not at finding missing pages.",
];

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setIsVisible(true);
    setMessageIndex(Math.floor(Math.random() * glitchMessages.length));
  }, []);

  // Typewriter effect
  useEffect(() => {
    const message = glitchMessages[messageIndex];
    let i = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      if (i <= message.length) {
        setDisplayedText(message.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6">
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full border border-foreground/5 transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{
                width: `${200 + i * 150}px`,
                height: `${200 + i * 150}px`,
                transitionDelay: `${300 + i * 150}ms`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-2xl">
          {/* 404 number */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Radio className="w-5 h-5 text-muted-foreground animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                Signal Lost
              </span>
            </div>
            <h1 className="text-[10rem] lg:text-[14rem] font-display leading-none tracking-tighter text-foreground/10">
              404
            </h1>
          </div>

          {/* Typewriter message */}
          <div
            className={`-mt-8 mb-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl lg:text-2xl font-display min-h-[2em]">
              {displayedText}
              <span className="inline-block w-0.5 h-5 bg-foreground ml-0.5 animate-pulse" />
            </p>
          </div>

          {/* Subtitle */}
          <p
            className={`text-muted-foreground mb-10 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            <br />
            Let&apos;s get you back on track.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors group"
            >
              Back to home
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors"
            >
              Contact support
            </a>
          </div>

          {/* Fun suggestion */}
          <p
            className={`mt-12 text-xs font-mono text-muted-foreground transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Or try talking to our{" "}
            <a href="/#" className="underline underline-offset-4 hover:text-foreground transition-colors">
              AI voice agent
            </a>{" "}
            — it&apos;s a better listener than this page.
          </p>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
