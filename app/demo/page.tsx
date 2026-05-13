"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Send, Check, Calendar, Clock, Users } from "lucide-react";

const benefits = [
  { icon: Calendar, text: "30-minute personalized walkthrough" },
  { icon: Users, text: "See how VoiceLabs fits your use case" },
  { icon: Clock, text: "Get up and running in minutes after" },
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
      <div className="pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-gray-500 mb-6">
                <span className="w-8 h-px bg-[#7c3aed]/30" />
                Book a demo
              </span>
              <h1 className="text-3xl lg:text-6xl font-display tracking-tight mb-6 leading-[0.95]">
                See VoiceLabs
                <br />
                <span className="text-gray-500">in action</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
                Get a personalized demo of the platform. We&apos;ll show you how to create AI voice agents, launch campaigns, and automate your calls.
              </p>

              {/* Benefits */}
              <div className="space-y-5 mb-10">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-5 h-5 text-gray-500" />
                    </div>
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Trusted by 2,500+ businesses</p>
                <div className="flex gap-6">
                  {["TechStartup Inc", "ScaleUp Ventures", "ServiceFirst"].map((company) => (
                    <span key={company} className="text-sm font-display text-gray-900/30">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {!isSubmitted ? (
                <div className="border border-gray-200 rounded-2xl p-6 md:p-10">
                  <h2 className="text-xl font-display mb-2">Request a demo</h2>
                  <p className="text-sm text-gray-500 mb-8">
                    Fill out the form and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="demo-name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <input
                          id="demo-name"
                          type="text"
                          placeholder="Your name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full h-12 px-4 bg-transparent border border-gray-900/15 rounded-xl text-sm placeholder:text-gray-500/50 focus:outline-none focus:border-gray-900/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="demo-email" className="block text-sm font-medium mb-2">
                          Work email *
                        </label>
                        <input
                          id="demo-email"
                          type="email"
                          placeholder="you@company.com"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full h-12 px-4 bg-transparent border border-gray-900/15 rounded-xl text-sm placeholder:text-gray-500/50 focus:outline-none focus:border-gray-900/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="demo-company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <input
                          id="demo-company"
                          type="text"
                          placeholder="Company name"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full h-12 px-4 bg-transparent border border-gray-900/15 rounded-xl text-sm placeholder:text-gray-500/50 focus:outline-none focus:border-gray-900/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="demo-phone" className="block text-sm font-medium mb-2">
                          Phone
                        </label>
                        <input
                          id="demo-phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full h-12 px-4 bg-transparent border border-gray-900/15 rounded-xl text-sm placeholder:text-gray-500/50 focus:outline-none focus:border-gray-900/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="demo-date" className="block text-sm font-medium mb-2">
                        Preferred date & time
                      </label>
                      <input
                        id="demo-date"
                        type="text"
                        placeholder="e.g. Next Tuesday at 2pm CET"
                        value={formState.preferredDate}
                        onChange={(e) => setFormState({ ...formState, preferredDate: e.target.value })}
                        className="w-full h-12 px-4 bg-transparent border border-gray-900/15 rounded-xl text-sm placeholder:text-gray-500/50 focus:outline-none focus:border-gray-900/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-message" className="block text-sm font-medium mb-2">
                        What are you looking to solve?
                      </label>
                      <textarea
                        id="demo-message"
                        rows={3}
                        placeholder="Tell us about your use case..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent border border-gray-900/15 rounded-xl text-sm placeholder:text-gray-500/50 focus:outline-none focus:border-gray-900/40 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 bg-gray-900 hover:bg-gray-900/90 text-background rounded-full text-sm font-medium transition-colors inline-flex items-center justify-center gap-2 group disabled:opacity-50"
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
                  <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-background" />
                  </div>
                  <h2 className="text-2xl font-display mb-3">Demo request sent!</h2>
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
    </main>
  );
}
