"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
    <section className="relative bg-white py-20 lg:py-32">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7c3aed]/10 rounded-full mb-6">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-[#7c3aed] uppercase tracking-wider">Coming Soon</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 mb-4">
          Be the first to
          <span className="text-[#7c3aed]"> try it</span>
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
          We&apos;re building the next generation of AI voice agents. Join the waitlist and get early access when we launch.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-full h-12 pl-11 pr-4 bg-white border border-gray-200 rounded-full text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#7c3aed] transition-colors disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="h-12 px-6 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full text-sm font-medium transition-colors inline-flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isLoading ? "Joining..." : "Join waitlist"}
                {!isLoading && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
              </button>
            </div>
            {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
            <p className="text-xs text-gray-400 mt-4">No spam · Unsubscribe anytime · Be first in line</p>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-3 p-5 bg-[#7c3aed]/5 border border-[#7c3aed]/20 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-[#7c3aed] flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-medium text-sm text-gray-900">You&apos;re on the list!</p>
                <p className="text-xs text-gray-500 mt-0.5">We&apos;ll notify you at <span className="font-mono">{email}</span> when we launch.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
