"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";

const codeExamples = [
  { label: "Sales", code: `// SaaS Company — Outbound Sales\nconst campaign = agent.campaign({\n  type: 'outbound',\n  industry: 'SaaS',\n  language: 'English (US)',\n  goal: 'sell_subscription'\n})\n// Sold $997/year subscription` },
  { label: "Support", code: `// 24/7 Customer Support\nconst support = agent.deploy({\n  type: 'inbound',\n  languages: ['Hindi', 'English'],\n  industry: 'Technology',\n  available: '24/7'\n})\n// Handling 500+ calls/day` },
  { label: "Booking", code: `// Appointment Scheduling\nconst booking = agent.campaign({\n  type: 'outbound',\n  industry: 'Education',\n  language: 'English (SG)',\n  goal: 'book_appointment',\n  calendar: 'google'\n})\n// 60% fewer no-shows` },
  { label: "E-commerce", code: `// Order Confirmation & Upsell\nconst ecom = agent.campaign({\n  type: 'outbound',\n  industry: 'E-commerce',\n  language: 'English (UK)',\n  goal: 'confirm_order',\n  upsell: true\n})\n// +40% order confirmations` },
  { label: "HoReCa", code: `// Restaurant Reservations\nconst horeca = agent.deploy({\n  type: 'inbound',\n  industry: 'HoReCa',\n  language: 'English (US)',\n  goal: 'manage_reservations'\n})\n// 300+ reservations/day` },
];

const useCases = [
  { title: "Outbound Sales", description: "Cold call prospects and close deals at scale." },
  { title: "Customer Support", description: "24/7 AI-powered support in 30+ languages." },
  { title: "Lead Qualification", description: "Qualify and follow up with leads automatically." },
  { title: "Appointment Booking", description: "Schedule meetings and send calendar invites." },
  { title: "E-commerce", description: "Confirm orders and upsell with AI-powered calls." },
  { title: "HoReCa", description: "Handle reservations, orders, and guest inquiries." },
];

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
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="developers" ref={sectionRef} className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start min-w-0">
          {/* Left */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Use Cases</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 mb-4">
              See how teams
              <span className="text-gray-400"> drive growth.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Global teams are using VoiceLabs to automate calls, qualify leads, and boost customer satisfaction across every industry.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((uc, i) => (
                <div key={uc.title} className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${i * 50 + 200}ms` }}>
                  <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{uc.title}</h3>
                  <p className="text-xs text-gray-500">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code */}
          <div className={`min-w-0 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              {/* Tabs */}
              <div className="flex items-center border-b border-gray-100 overflow-x-auto scrollbar-hide">
                {codeExamples.map((example, idx) => (
                  <button
                    key={example.label}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-3 text-xs font-medium whitespace-nowrap transition-colors relative ${
                      activeTab === idx ? "text-[#7c3aed]" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {example.label}
                    {activeTab === idx && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7c3aed]" />}
                  </button>
                ))}
                <div className="flex-1" />
                <button onClick={handleCopy} className="px-3 py-3 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Copy">
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Code */}
              <div className="bg-gray-900 p-4 md:p-6 min-h-[220px] md:min-h-[240px] overflow-hidden">
                <pre className="font-mono text-[10px] sm:text-xs md:text-sm text-white/80 leading-relaxed overflow-x-auto">
                  {codeExamples[activeTab].code.split('\n').map((line, i) => (
                    <div key={`${activeTab}-${i}`}>
                      <span className="text-white/20 select-none inline-block w-5 mr-3">{i + 1}</span>
                      {line}
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
