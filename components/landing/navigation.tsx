"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Use Cases", href: "#developers" },
  { name: "Industries", href: "/industries" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("mobile-menu-toggle", { detail: isMobileMenuOpen }));
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-12 h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1.5">
            <span className="text-xl lg:text-2xl font-display tracking-tight text-gray-900">VoiceLabs</span>
            <span className="text-[10px] lg:text-xs text-gray-400 font-mono mt-1">AI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://voicelabs-app.vercel.app/login"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Log in
            </a>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-medium rounded-full transition-colors group"
            >
              Book a Demo
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-6 pt-24 pb-12">
          {/* Close button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed top-5 right-5 z-50 p-2 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-display text-gray-900 hover:text-[#7c3aed] py-3 transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div
            className={`flex flex-col gap-3 pt-6 border-t border-gray-100 transition-all duration-500 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <a
              href="/demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 h-14 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full text-base font-medium transition-colors"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://voicelabs-app.vercel.app/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center h-14 border border-gray-200 text-gray-700 rounded-full text-base font-medium hover:bg-gray-50 transition-colors"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
