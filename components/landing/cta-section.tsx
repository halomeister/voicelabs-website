"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`,
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/20 rounded-full mb-8">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>

                <h2 className="text-3xl lg:text-7xl font-display tracking-tight mb-6 lg:mb-8 leading-[0.95]">
                  Be the first to
                  <br />
                  <span className="text-stroke">try it</span>
                </h2>

                <p className="text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed max-w-xl">
                  We&apos;re building the next generation of AI voice agents.
                  Join the waitlist and get early access when we launch.
                </p>

                {/* Email signup form */}
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="max-w-lg">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isLoading}
                          className="w-full h-14 pl-12 pr-4 bg-transparent border border-foreground/20 rounded-full text-base placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/50 transition-colors disabled:opacity-50"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="h-14 px-8 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors inline-flex items-center justify-center gap-2 group whitespace-nowrap disabled:opacity-50"
                      >
                        {isLoading ? "Joining..." : "Join waitlist"}
                        {!isLoading && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                      </button>
                    </div>
                    {error && (
                      <p className="text-sm text-red-500 mt-3">{error}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-4 font-mono">
                      No spam · Unsubscribe anytime · Be first in line
                    </p>
                  </form>
                ) : (
                  <div className="max-w-lg">
                    <div className="flex items-center gap-3 p-6 border border-foreground/20 rounded-2xl bg-foreground/[0.02]">
                      <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-background" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">You&apos;re on the list!</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          We&apos;ll notify you at <span className="font-mono">{email}</span> when we launch.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
