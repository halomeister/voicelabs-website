"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Check, ChevronDown } from "lucide-react";

const messageTypes = [
  { value: "", label: "Select a topic" },
  { value: "general", label: "General Inquiry" },
  { value: "partnerships", label: "Partnerships" },
  { value: "press", label: "Press & Media" },
  { value: "sales", label: "Sales & Demos" },
  { value: "support", label: "Technical Support" },
  { value: "careers", label: "Careers" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@voicelabs.ai", href: "mailto:hello@voicelabs.ai" },
  { icon: Phone, label: "Phone", value: "+1 (555) 000-1234", href: "tel:+15550001234" },
  { icon: MapPin, label: "Office", value: "San Francisco, CA", href: "#" },
];

const faqs = [
  { question: "How quickly do you respond?", answer: "We typically respond within 24 hours on business days. Enterprise customers get priority support with a 4-hour SLA." },
  { question: "Do you offer a free trial?", answer: "Yes! You can start with our free tier — no credit card required. Upgrade anytime as your needs grow." },
  { question: "Can I schedule a live demo?", answer: "Absolutely. Visit our demo page or fill out the form and mention you'd like a walkthrough." },
  { question: "Where are you located?", answer: "Our headquarters are in San Francisco, CA. We also have team members across the US and Europe." },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-4 text-left group">
        <span className="text-sm font-medium text-gray-900 group-hover:text-[#7c3aed] transition-colors">{question}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}>
        <p className="text-sm text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", messageType: "", subject: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative bg-white py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Contact</span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-gray-900 mb-4">
            Let&apos;s start a
            <span className="text-gray-400"> conversation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl">
            Whether you have a question, need a demo, or want to explore a partnership — we&apos;d love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {!isSubmitted ? (
              <div className="border border-gray-200 rounded-2xl p-6 md:p-10">
                <h3 className="text-xl font-display text-gray-900 mb-1">Send us a message</h3>
                <p className="text-sm text-gray-500 mb-8">We&apos;ll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                      <input type="text" placeholder="Your name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7c3aed] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                      <input type="email" placeholder="you@company.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7c3aed] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Topic</label>
                    <div className="relative">
                      <select value={formState.messageType} onChange={(e) => setFormState({ ...formState, messageType: e.target.value })} className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7c3aed] transition-colors appearance-none cursor-pointer">
                        {messageTypes.map((type) => (<option key={type.value} value={type.value}>{type.label}</option>))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                    <input type="text" placeholder="How can we help?" value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7c3aed] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea rows={4} placeholder="Tell us more..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7c3aed] transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full h-12 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full text-sm font-medium transition-colors inline-flex items-center justify-center gap-2 group">
                    Send message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-[#7c3aed] flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display text-gray-900 mb-3">Message sent!</h3>
                <p className="text-gray-500 max-w-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Contact Info */}
            <div className="mb-10">
              <h3 className="text-base font-semibold text-gray-900 mb-5">Get in touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a key={item.label} href={item.href} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#7c3aed]/30 transition-colors">
                      <item.icon className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <p className="text-sm font-medium text-gray-700 group-hover:text-[#7c3aed] transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Frequently asked</h3>
              <div>
                {faqs.map((faq) => (
                  <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
