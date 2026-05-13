"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";

const codeExamples = [
  {
    label: "Sales",
    code: `// SaaS Company — Outbound Sales
const campaign = agent.campaign({
  type: 'outbound',
  industry: 'SaaS',
  language: 'English (US)',
  goal: 'sell_subscription'
})
// Sold $997/year subscription`,
  },
  {
    label: "Support",
    code: `// 24/7 Customer Support
const support = agent.deploy({
  type: 'inbound',
  languages: ['Hindi', 'English'],
  industry: 'Technology',
  available: '24/7'
})
// Handling 500+ calls/day`,
  },
  {
    label: "Booking",
    code: `// Appointment Scheduling
const booking = agent.campaign({
  type: 'outbound',
  industry: 'Education',
  language: 'English (SG)',
  goal: 'book_appointment',
  calendar: 'google'
})
// 60% fewer no-shows`,
  },
  {
    label: "E-commerce",
    code: `// Order Confirmation & Upsell
const ecom = agent.campaign({
  type: 'outbound',
  industry: 'E-commerce',
  language: 'English (UK)',
  goal: 'confirm_order',
  upsell: true
})
// +40% order confirmations`,
  },
  {
    label: "HoReCa",
    code: `// Restaurant Reservations & Orders
const horeca = agent.deploy({
  type: 'inbound',
  industry: 'HoReCa',
  language: 'English (US)',
  goal: 'manage_reservations',
  actions: ['book_table',
    'take_order']
})
// 300+ reservations/day`,
  },
];

const features = [
  { 
    title: "Outbound Sales", 
    description: "Cold call prospects and close deals at scale."
  },
  { 
    title: "Customer Support", 
    description: "24/7 AI-powered support in 30+ languages."
  },
  { 
    title: "Lead Qualification", 
    description: "Qualify and follow up with leads automatically."
  },
  { 
    title: "Appointment Booking", 
    description: "Schedule meetings and send calendar invites."
  },
  { 
    title: "E-commerce", 
    description: "Confirm orders and upsell with AI-powered calls."
  },
  { 
    title: "HoReCa", 
    description: "Handle reservations, orders, and guest inquiries."
  },
];

const codeAnimationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateX(-8px);
    animation: devLineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .dev-code-char {
    opacity: 0;
    filter: blur(8px);
    animation: devCharReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  return (
    <section id="developers" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: codeAnimationStyles }} />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Use cases
            </span>
            <h2 className="text-3xl lg:text-6xl font-display tracking-tight mb-6 lg:mb-8">
              See how teams
              <br />
              <span className="text-muted-foreground">drive growth.</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed">
              Global teams are using VoiceLabs to automate calls, qualify leads, 
              and boost customer satisfaction across every industry.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Code block */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 min-w-0 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border border-foreground/10 overflow-hidden rounded-sm">
              {/* Tabs */}
              <div className="flex items-center border-b border-foreground/10 overflow-x-auto scrollbar-hide">
                {codeExamples.map((example, idx) => (
                  <button
                    key={example.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-mono transition-colors relative whitespace-nowrap flex-shrink-0 ${
                      activeTab === idx
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {example.label}
                    {activeTab === idx && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
                    )}
                  </button>
                ))}
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-3 md:py-4 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              {/* Code content */}
              <div className="p-4 md:p-8 font-mono text-[10px] sm:text-xs md:text-sm bg-foreground/[0.01] min-h-[200px] md:min-h-[220px] overflow-hidden">
                <pre className="text-foreground/80 overflow-x-auto">
                  {codeExamples[activeTab].code.split('\n').map((line, lineIndex) => (
                    <div 
                      key={`${activeTab}-${lineIndex}`} 
                      className="leading-relaxed md:leading-loose dev-code-line whitespace-pre"
                      style={{ animationDelay: `${lineIndex * 80}ms` }}
                    >
                      <span className="inline-flex">
                        {line.split('').map((char, charIndex) => (
                          <span
                            key={`${activeTab}-${lineIndex}-${charIndex}`}
                            className="dev-code-char"
                            style={{
                              animationDelay: `${lineIndex * 80 + charIndex * 15}ms`,
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>
            
            {/* Links */}
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a href="#" className="text-foreground hover:underline underline-offset-4">
                View all use cases
              </a>
              <span className="text-foreground/20">|</span>
              <a href="/demo" className="text-muted-foreground hover:text-foreground">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
