"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const teamMembers = [
  { name: "Alex Novak", role: "CEO & Co-founder", bio: "Previously led AI products at Google. 15 years in voice technology and NLP.", initials: "AN" },
  { name: "Elena Marchetti", role: "Head of AI Research", bio: "PhD in Computational Linguistics from MIT. Published 30+ papers on conversational AI.", initials: "EM" },
  { name: "Marcus Chen", role: "VP of Engineering", bio: "Former principal engineer at AWS. Built systems handling 10M+ concurrent connections.", initials: "MC" },
  { name: "Sarah Kim", role: "Head of Product", bio: "Ex-Stripe product lead. Obsessed with making complex technology feel simple.", initials: "SK" },
  { name: "David Okafor", role: "Head of Trust & Safety", bio: "Former trust lead at OpenAI. Specializes in responsible AI deployment at scale.", initials: "DO" },
  { name: "Aisha Patel", role: "Solutions Architect", bio: "10+ years building enterprise integrations. Connects VoiceLabs to everything.", initials: "AP" },
];

const milestones = [
  { year: "2022", event: "Founded in San Francisco with a mission to make voice AI accessible" },
  { year: "2023", event: "Launched v1.0 — first no-code AI voice agent platform" },
  { year: "2023", event: "Raised $12M Series A led by Sequoia Capital" },
  { year: "2024", event: "Reached 10,000+ enterprise deployments worldwide" },
  { year: "2024", event: "Opened European office in London" },
  { year: "2025", event: "Processing 50M+ voice interactions per month" },
];

const values = [
  { title: "Human-centered AI", description: "We build AI that augments people, not replaces them. Every feature starts with the question: does this make someone's work better?" },
  { title: "Radical transparency", description: "Our agents always identify as AI. Our pricing has no hidden fees. Our roadmap is public. Trust is earned through honesty." },
  { title: "Ship and iterate", description: "We'd rather put something real in your hands today than promise perfection tomorrow. Feedback loops beat planning cycles." },
  { title: "Enterprise without the friction", description: "Security, compliance, and scale shouldn't require a 6-month procurement process. We make enterprise-grade feel startup-fast." },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Hero Header */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">About Us</span>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-gray-900 leading-[1.1]">
              We&apos;re building the
              <br />
              <span className="text-[#7c3aed]">voice layer</span>
              <br />
              for AI
            </h2>
            <div className="flex flex-col justify-end">
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                VoiceLabs started with a simple observation: businesses spend billions on phone calls,
                but the technology behind them hasn&apos;t changed in decades. We&apos;re fixing that with
                AI agents that actually understand, respond, and act — in real time.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`mb-24 py-16 border-y border-gray-100 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-2xl lg:text-4xl font-display leading-snug text-gray-900 max-w-4xl">
            &ldquo;Every business deserves an AI team member that never sleeps,
            never forgets, and always puts the customer first.&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-sm font-medium text-[#7c3aed]">AN</div>
            <div>
              <p className="text-sm font-medium text-gray-900">Alex Novak</p>
              <p className="text-xs text-gray-500">CEO & Co-founder</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className={`mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-mono text-[#7c3aed] uppercase tracking-wider block mb-3">Our Values</span>
            <h3 className="text-2xl lg:text-3xl font-display text-gray-900">What drives us</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div key={value.title} className={`bg-gray-50 rounded-xl p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${300 + i * 100}ms` }}>
                <span className="text-xs font-mono text-[#7c3aed]">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="text-lg font-semibold text-gray-900 mt-3 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className={`mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-mono text-[#7c3aed] uppercase tracking-wider block mb-3">Our Journey</span>
            <h3 className="text-2xl lg:text-3xl font-display text-gray-900">Milestones</h3>
          </div>
          <div className="space-y-0">
            {milestones.map((milestone, i) => (
              <div key={`${milestone.year}-${i}`} className={`flex gap-6 md:gap-8 py-5 border-b border-gray-100 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${400 + i * 80}ms` }}>
                <span className="font-mono text-sm text-[#7c3aed] w-12 shrink-0 pt-0.5">{milestone.year}</span>
                <p className="text-sm lg:text-base text-gray-700">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className={`mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-mono text-[#7c3aed] uppercase tracking-wider block mb-3">The Team</span>
            <h3 className="text-2xl lg:text-3xl font-display text-gray-900">Meet the people behind VoiceLabs</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, i) => (
              <div key={member.name} className={`border border-gray-200 rounded-xl p-6 hover:border-[#7c3aed]/30 hover:shadow-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${500 + i * 80}ms` }}>
                <div className="w-12 h-12 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-sm font-medium text-[#7c3aed] mb-4">{member.initials}</div>
                <h4 className="text-base font-semibold text-gray-900 mb-0.5">{member.name}</h4>
                <p className="text-xs text-[#7c3aed] mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center py-16 border-t border-gray-100 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-2xl lg:text-3xl font-display text-gray-900 mb-3">Want to join us?</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm">
            We&apos;re always looking for talented people who want to shape the future of voice AI.
          </p>
          <a href="/careers" className="inline-flex items-center gap-2 px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full text-sm font-medium transition-colors group">
            View open positions
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
