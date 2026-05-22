import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { VoiceChatWidget } from "@/components/landing/voice-chat-widget";

const roadmapItems = [
  {
    quarter: "Q1 2025",
    items: [
      { title: "No-code agent builder", description: "Visual drag-and-drop interface to create voice agents without writing code.", status: "shipped" },
      { title: "Multi-language support (30+)", description: "Deploy agents that speak and understand 30+ languages with native accents.", status: "shipped" },
      { title: "Outbound campaign manager", description: "Upload contact lists, set schedules, and launch thousands of calls simultaneously.", status: "shipped" },
      { title: "CRM integrations (HubSpot, Salesforce)", description: "Sync call data, leads, and outcomes directly to your CRM.", status: "shipped" },
    ],
  },
  {
    quarter: "Q2 2025",
    items: [
      { title: "Real-time call analytics dashboard", description: "Live monitoring of active calls with sentiment analysis and conversion tracking.", status: "shipped" },
      { title: "WhatsApp & SMS follow-ups", description: "Automatically send messages during or after calls based on conversation outcomes.", status: "shipped" },
      { title: "Custom voice cloning", description: "Clone your brand voice or create unique agent voices for consistency.", status: "in-progress" },
      { title: "A/B testing for call scripts", description: "Test different prompts, voices, and flows to optimize conversion rates.", status: "in-progress" },
    ],
  },
  {
    quarter: "Q3 2025",
    items: [
      { title: "Inbound IVR replacement", description: "Replace traditional IVR menus with intelligent AI agents that understand natural language.", status: "in-progress" },
      { title: "Team collaboration & roles", description: "Invite team members with role-based permissions and shared agent libraries.", status: "planned" },
      { title: "Zapier & Make integrations", description: "Connect VoiceLabs to 5,000+ apps through automation platforms.", status: "planned" },
      { title: "Call recording & transcription export", description: "Download recordings and transcripts in bulk for compliance and training.", status: "planned" },
    ],
  },
  {
    quarter: "Q4 2025",
    items: [
      { title: "Enterprise SSO & SAML", description: "Single sign-on support for enterprise customers with SAML 2.0 and OIDC.", status: "planned" },
      { title: "On-premise deployment option", description: "Deploy VoiceLabs in your own infrastructure for maximum data control.", status: "planned" },
      { title: "Advanced RAG knowledge base", description: "Upload entire knowledge bases and let agents answer from your documentation.", status: "planned" },
      { title: "Predictive dialer", description: "AI-optimized dialing that predicts the best time to reach each contact.", status: "planned" },
    ],
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    shipped: "bg-green-50 text-green-700 border-green-200",
    "in-progress": "bg-[#7c3aed]/10 text-[#7c3aed] border-[#7c3aed]/20",
    planned: "bg-gray-50 text-gray-500 border-gray-200",
  };
  const labels = {
    shipped: "Shipped ✓",
    "in-progress": "In Progress",
    planned: "Planned",
  };
  return (
    <span className={`px-2.5 py-1 text-[10px] font-medium rounded-full border ${styles[status as keyof typeof styles]}`}>
      {labels[status as keyof typeof labels]}
    </span>
  );
}

export default function RoadmapPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Roadmap</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 mb-4">
              What we&apos;re building
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              A transparent look at what we&apos;ve shipped, what we&apos;re working on, and what&apos;s coming next.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-12">
            <StatusBadge status="shipped" />
            <StatusBadge status="in-progress" />
            <StatusBadge status="planned" />
          </div>

          {/* Timeline */}
          <div className="space-y-0">
            {roadmapItems.map((quarter, qi) => (
              <div key={quarter.quarter} className="relative">
                {/* Quarter label */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#7c3aed] shrink-0" />
                  <h2 className="text-lg font-display text-gray-900">{quarter.quarter}</h2>
                </div>

                {/* Items */}
                <div className={`ml-1.5 pl-8 border-l-2 ${qi < roadmapItems.length - 1 ? "border-gray-200 pb-12" : "border-transparent pb-0"}`}>
                  <div className="space-y-3">
                    {quarter.items.map((item) => (
                      <div
                        key={item.title}
                        className="border border-gray-200 rounded-xl p-5 hover:border-[#7c3aed]/30 hover:shadow-sm transition-all"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                          </div>
                          <div className="shrink-0">
                            <StatusBadge status={item.status} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl text-center">
            <h3 className="text-lg font-display text-gray-900 mb-2">Have a feature request?</h3>
            <p className="text-sm text-gray-500 mb-4">
              We build VoiceLabs around real business needs. Tell us what you need.
            </p>
            <a href="/contact" className="text-sm text-[#7c3aed] font-medium hover:underline">
              Submit a request →
            </a>
          </div>
        </div>
      </div>
      <FooterSection />
      <VoiceChatWidget />
    </main>
  );
}
