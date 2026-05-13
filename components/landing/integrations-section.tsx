"use client";

import { useEffect, useState, useRef } from "react";

const categories = [
  { title: "AI/ML", items: ["OpenAI", "Anthropic", "Deepgram", "Google Cloud AI"] },
  { title: "Voice AI", items: ["ElevenLabs", "Vapi"] },
  { title: "Telephony", items: ["Twilio", "Plivo", "Vonage", "Telnyx"] },
  { title: "CRM", items: ["HubSpot", "Salesforce", "Zoho CRM", "Pipedrive"] },
  { title: "Calendar", items: ["Google Calendar", "Microsoft Outlook", "Calendly", "Cal.com"] },
  { title: "Communication", items: ["Slack", "Microsoft Teams", "WhatsApp Business", "Discord"] },
  { title: "Automation", items: ["Zapier", "Make", "n8n"] },
  { title: "Support", items: ["Zendesk", "Intercom", "Freshdesk"] },
  { title: "Payments", items: ["Stripe"] },
  { title: "Analytics", items: ["Google Analytics", "Segment"] },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="integrations" ref={sectionRef} className="relative bg-white py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`text-center max-w-3xl mx-auto mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Integrations</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 mb-4">
            Connect to your
            <span className="text-gray-400"> favorite tools.</span>
          </h2>
          <p className="text-lg text-gray-600">
            Upgrade your VoiceLabs experience with integrations to the tools you already use.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
          {categories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${catIndex * 60}ms` }}
            >
              <h3 className="text-xs font-mono text-[#7c3aed] mb-3 uppercase tracking-wider">{category.title}</h3>
              <div className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-lg hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 transition-all text-sm text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
