"use client";

import { ArrowRight } from "lucide-react";

const footerLinks = {
  "Use Cases": [
    { name: "Sales", href: "#developers" },
    { name: "Customer Support", href: "#developers" },
    { name: "Appointment Booking", href: "#developers" },
    { name: "E-commerce", href: "#developers" },
    { name: "HoReCa", href: "#developers" },
  ],
  Company: [
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "About VoiceLabs", href: "/about" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "#", icon: "IG" },
  { name: "X", href: "#", icon: "𝕏" },
  { name: "LinkedIn", href: "#", icon: "in" },
];

export function FooterSection() {
  return (
    <footer className="relative">
      {/* CTA Banner */}
      <div className="bg-gradient-to-b from-white to-[#f5f0ff]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display tracking-tight text-gray-900 max-w-xl">
              <span className="text-[#7c3aed]">Ready to outperform</span> your best caller
              and every other voice AI vendor?
            </h2>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-medium rounded-full transition-colors group shrink-0 self-start md:self-center"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#faf8ff]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Brand */}
            <div className="md:col-span-1 lg:col-span-2">
              <a href="/" className="inline-flex items-center gap-1.5 mb-6">
                <span className="text-xl font-display tracking-tight text-gray-900">VoiceLabs</span>
                <span className="text-[10px] text-gray-400 font-mono mt-0.5">AI</span>
              </a>
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Contact info */}
              <div>
                <p className="text-sm text-gray-600 mb-1">hello@voicelabs.ai</p>
                <p className="text-xs text-gray-400">
                  VoiceLabs AI · San Francisco, CA
                </p>
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
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#faf8ff] border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-gray-400">© 2025 — VoiceLabs AI. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-200">·</span>
              <a href="/terms" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                Terms & Conditions
              </a>
              <span className="text-gray-200">·</span>
              <a href="/gdpr" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                Data Security & Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
