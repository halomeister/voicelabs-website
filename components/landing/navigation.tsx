"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const navItems = [
  {
    name: "Product",
    dropdown: [
      { name: "Features", href: "#features" },
      { name: "Use Cases", href: "#developers" },
      { name: "Industries", href: "/industries" },
    ],
  },
  {
    name: "Company",
    dropdown: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "/contact" },
];

function DropdownMenu({
  items,
  isOpen,
  onClose,
}: {
  items: { name: string; href: string }[];
  isOpen: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50"
    >
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={onClose}
          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
            {navItems.map((item) =>
              "dropdown" in item && item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <DropdownMenu
                    items={item.dropdown}
                    isOpen={openDropdown === item.name}
                    onClose={() => setOpenDropdown(null)}
                  />
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
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
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
        <div className="flex flex-col h-full px-6 pt-20 pb-8 overflow-y-auto">
          {/* Close button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed top-5 right-5 z-50 p-2 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col gap-1 pt-4">
            {navItems.map((item, i) =>
              "dropdown" in item && item.dropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.name ? null : item.name)
                    }
                    className={`w-full flex items-center justify-between text-2xl font-display text-gray-900 py-3 transition-all duration-500 ${
                      isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : "0ms" }}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        mobileExpanded === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileExpanded === item.name ? "max-h-60 pb-2" : "max-h-0"
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block pl-4 py-2.5 text-lg text-gray-500 hover:text-[#7c3aed] transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-display text-gray-900 hover:text-[#7c3aed] py-3 transition-all duration-500 ${
                    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : "0ms" }}
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Bottom CTAs */}
          <div
            className={`flex flex-col gap-3 pt-6 border-t border-gray-100 transition-all duration-500 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
