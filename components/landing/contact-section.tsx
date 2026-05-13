"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Headphones,
  Handshake,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const messageTypes = [
  { value: "", label: "Select a topic" },
  { value: "general", label: "General Inquiry" },
  { value: "partnerships", label: "Partnerships" },
  { value: "press", label: "Press & Media" },
  { value: "investors", label: "Investors" },
  { value: "sales", label: "Sales & Demos" },
  { value: "support", label: "Technical Support" },
  { value: "careers", label: "Careers" },
];

const contactCards = [
  {
    icon: MessageSquare,
    title: "Talk to Sales",
    description: "Get a personalized demo and learn how VoiceLabs AI can transform your workflow.",
    cta: "Book a demo",
    href: "/demo",
  },
  {
    icon: Headphones,
    title: "Get Support",
    description: "Our team is here to help. Reach out for technical assistance or troubleshooting.",
    cta: "Open a ticket",
    href: "#",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Interested in partnering with us? Let's explore how we can grow together.",
    cta: "Become a partner",
    href: "#",
  },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@voicelabs.ai", href: "mailto:hello@voicelabs.ai" },
  { icon: Phone, label: "Phone", value: "+1 (555) 000-1234", href: "tel:+15550001234" },
  { icon: MapPin, label: "Office", value: "San Francisco, CA", href: "#" },
];

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Discord", href: "#" },
];

const faqs = [
  {
    question: "How quickly do you respond?",
    answer: "We typically respond within 24 hours on business days. Enterprise customers get priority support with a 4-hour SLA.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! You can start with our free tier — no credit card required. Upgrade anytime as your needs grow.",
  },
  {
    question: "Can I schedule a live demo?",
    answer: "Absolutely. Use the 'Book a demo' option above or fill out the form and mention you'd like a walkthrough.",
  },
  {
    question: "Where are you located?",
    answer: "Our headquarters are in San Francisco, CA. We also have team members across the US and Europe.",
  },
];

function FAQItem({ question, answer, index, isVisible }: { question: string; answer: string; index: number; isVisible: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b border-foreground/10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${600 + index * 100}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm font-medium group-hover:text-foreground/80 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    messageType: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-foreground" />
                <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
                  Contact
                </span>
              </div>
              <h2 className="text-3xl lg:text-6xl font-display tracking-tight mb-6 leading-[0.95]">
                Let&apos;s start a
                <br />
                conversation
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Whether you have a question, need a demo, or want to explore a partnership — we&apos;d love to hear from you.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square max-w-[400px] ml-auto">
                <AnimatedSphere />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards — Option 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactCards.map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              className={`group relative border border-foreground/10 rounded-2xl p-8 hover:border-foreground/30 transition-all duration-700 hover:bg-foreground/[0.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <card.icon className="w-6 h-6 mb-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <h3 className="text-lg font-medium mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all">
                {card.cta}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>

        {/* Main Content: Form + Sidebar — Option 1 & 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-2xl font-display tracking-tight mb-2">Send us a message</h3>
            <p className="text-sm text-muted-foreground mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full h-12 px-4 bg-transparent border border-foreground/15 rounded-xl text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full h-12 px-4 bg-transparent border border-foreground/15 rounded-xl text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-type" className="block text-sm font-medium mb-2">
                  Message Type
                </label>
                <div className="relative">
                  <select
                    id="contact-type"
                    value={formState.messageType}
                    onChange={(e) => setFormState({ ...formState, messageType: e.target.value })}
                    className="w-full h-12 px-4 bg-transparent border border-foreground/15 rounded-xl text-sm focus:outline-none focus:border-foreground/40 transition-colors appearance-none cursor-pointer"
                  >
                    {messageTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full h-12 px-4 bg-transparent border border-foreground/15 rounded-xl text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us more about your project or question..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border border-foreground/15 rounded-xl text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-12 text-sm group"
              >
                Send message
                <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </form>
          </div>

          {/* Sidebar: Info + FAQ — Option 1 & 2 */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {/* Contact Info */}
            <div className="mb-12">
              <h3 className="text-lg font-medium mb-6">Get in touch</h3>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl border border-foreground/10 flex items-center justify-center shrink-0 group-hover:border-foreground/30 transition-colors">
                      <item.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium group-hover:text-foreground/80 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h3 className="text-lg font-medium mb-4">Follow us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-sm border border-foreground/10 rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-lg font-medium mb-4">Frequently asked</h3>
              <div>
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                    index={i}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
