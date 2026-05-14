"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setIsSubmitted(true);
    } catch {
      // silent fail
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return <p className="text-xs text-[#7c3aed] font-medium">✓ Subscribed! We&apos;ll keep you updated.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isLoading}
        className="flex-1 h-9 px-3 bg-white border border-gray-200 rounded-full text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#7c3aed] transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="h-9 px-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full text-xs font-medium transition-colors inline-flex items-center gap-1.5 disabled:opacity-50"
      >
        {isLoading ? "..." : "Subscribe"}
        {!isLoading && <ArrowRight className="w-3 h-3" />}
      </button>
    </form>
  );
}

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Use Cases", href: "#developers" },
    { name: "Industries", href: "/industries" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "#pricing" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Cookies Policy", href: "/cookies" },
    { name: "Data Security", href: "/gdpr" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "#", icon: "IG" },
  { name: "X", href: "#", icon: "𝕏" },
  { name: "LinkedIn", href: "#", icon: "in" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-[#faf8ff]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-1.5 mb-6">
              <span className="text-xl font-display tracking-tight text-gray-900">VoiceLabs</span>
              <span className="text-[10px] text-gray-400 font-mono mt-0.5">AI</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              AI Voice Calling Agents platform. Automate calls, qualify leads, and boost customer satisfaction — 24/7.
            </p>
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Newsletter</h3>
              <p className="text-xs text-gray-500 mb-3">Product updates and AI voice insights. No spam.</p>
              <NewsletterForm />
            </div>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors text-xs font-medium"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[#7c3aed] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-gray-400">© 2025 — VoiceLabs AI. All rights reserved.</p>
            <p className="text-xs text-gray-400">hello@voicelabs.ai</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
