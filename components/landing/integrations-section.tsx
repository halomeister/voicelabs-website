"use client";

import { useEffect, useState, useRef } from "react";

const categories = [
  {
    title: "AI/ML",
    items: ["OpenAI", "Anthropic", "Deepgram", "Google Cloud AI"],
  },
  {
    title: "Voice AI",
    items: ["ElevenLabs"],
  },
  {
    title: "Telephony",
    items: ["Twilio", "Plivo", "Vonage", "Telnyx"],
  },
  {
    title: "CRM",
    items: ["HubSpot", "Salesforce", "Zoho CRM", "Pipedrive"],
  },
  {
    title: "Calendar",
    items: ["Google Calendar", "Microsoft Outlook", "Apple Calendar", "Calendly", "Cal.com"],
  },
  {
    title: "Communication",
    items: ["Slack", "Microsoft Teams", "WhatsApp Business", "Discord"],
  },
  {
    title: "Automation",
    items: ["Zapier", "Make", "n8n"],
  },
  {
    title: "Support",
    items: ["Zendesk", "Intercom", "Freshdesk"],
  },
  {
    title: "Payments",
    items: ["Stripe"],
  },
  {
    title: "Analytics",
    items: ["Google Analytics", "Segment"],
  },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="integrations" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Integrations
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-3xl lg:text-6xl font-display tracking-tight mb-6">
            Connect to your
            <br />
            favorite tools.
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Upgrade your VoiceLabs experience with integrations to the tools you already use.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-12">
          {categories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${catIndex * 80}ms` }}
            >
              <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-3 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group cursor-default"
                  >
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                      {item}
                    </span>
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
