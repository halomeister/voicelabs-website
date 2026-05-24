"use client";

import { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { VoiceChatWidget } from "@/components/landing/voice-chat-widget";
import { CookieBanner } from "@/components/landing/cookie-banner";
import { Send, Check, Calendar, Clock, Users, Sparkles, Shield, Zap } from "lucide-react";

const benefits = [
  { icon: Calendar, title: "30-min walkthrough", description: "Personalized demo tailored to your business needs" },
  { icon: Users, title: "Custom use case", description: "See how VoiceLabs fits your specific workflow" },
  { icon: Clock, title: "Quick setup", description: "Get up and running in minutes after the demo" },
  { icon: Sparkles, title: "Live Q&A", description: "Ask anything — our team is here to help" },
];

const stats = [
  { value: "2,500+", label: "Businesses trust us" },
  { value: "10M+", label: "Calls processed" },
  { value: "98%", label: "Customer satisfaction" },
];

const features = [
  { icon: Zap, text: "No credit card required" },
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Sparkles, text: "Free trial after demo" },
];

export default function DemoPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    preferredDate: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
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
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />

      <div ref={sectionRef} className="pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Book a demo</span>
            <h1 className="text-3xl lg:text-6xl font-display tracking-tight text-gray-900 mb-6 leading-[0.95]">
              See VoiceLabs
              <span className="text-gray-400"> in action</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get a personalized demo of the platform. We&apos;ll show you how to create AI voice agents, launch campaigns, and automate your calls.
            </p>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-display text-[#7c3aed] mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Benefits */}
            <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="text-xl font-display text-gray-900 mb-8">What you&apos;ll get</h2>

              <div className="space-y-6 mb-10">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/5 border border-[#7c3aed]/10 flex items-center justify-center shrink-0 group-hover:bg-[#7c3aed]/10 transition-colors">
                      <benefit.icon className="w-5 h-5 text-[#7c3aed]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{benefit.title}</h3>
                      <p className="text-sm text-gray-500">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features badges */}
              <div className="pt-8 border-t border-gray-100">
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      <feature.icon className="w-4 h-4 text-[#7c3aed]" />
                      <span className="text-sm text-gray-600">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className={`lg:col-span-3 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {!isSubmitted ? (
                <div className="border border-gray-200 rounded-2xl p-6 md:p-10">
                  <h2 className="text-xl font-display text-gray-900 mb-1">Request a demo</h2>
                  <p className="text-sm text-gray-500 mb-8">
                    Fill out the form and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="demo-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Name *
                        </label>
                        <input
                          id="demo-name"
                          type="text"
                          placeholder="Your name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#7c3aed] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="demo-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Work email *
                        </label>
                        <input
                          id="demo-email"
                          type="email"
                          placeholder="you@company.com"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#7c3aed] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="demo-company" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Company
                        </label>
                        <input
                          id="demo-company"
                          type="text"
                          placeholder="Company name"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#7c3aed] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="demo-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone
                        </label>
                        <input
                          id="demo-phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#7c3aed] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="demo-date" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Preferred date & time
                      </label>
                      <input
                        id="demo-date"
                        type="text"
                        placeholder="e.g. Next Tuesday at 2pm CET"
                        value={formState.preferredDate}
                        onChange={(e) => setFormState({ ...formState, preferredDate: e.target.value })}
                        className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#7c3aed] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        What are you looking to solve?
                      </label>
                      <textarea
                        id="demo-message"
                        rows={4}
                        placeholder="Tell us about your use case..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#7c3aed] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full text-sm font-medium transition-colors inline-flex items-center justify-center gap-2 group disabled:opacity-50"
                    >
                      {isLoading ? "Sending..." : "Request demo"}
                      {!isLoading && <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                    </button>

                    {error && (
                      <p className="text-sm text-red-500 text-center">{error}</p>
                    )}
                  </form>
                </div>
              ) : (
                <div className="border border-gray-200 rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                  <div className="w-16 h-16 rounded-full bg-[#7c3aed] flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-display text-gray-900 mb-3">Demo request sent!</h2>
                  <p className="text-gray-500 max-w-sm">
                    We&apos;ll get back to you within 24 hours to schedule your personalized demo. Check your email for a confirmation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
      <VoiceChatWidget />
      <CookieBanner />
    </main>
  );
}
