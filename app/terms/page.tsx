import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Legal</span>
            <h1 className="text-3xl lg:text-5xl font-display tracking-tight text-gray-900 mb-3">Terms of Service</h1>
            <p className="text-sm text-gray-400">Last updated: April 27, 2026</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed text-sm">By accessing or using VoiceLabs AI (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">2. Description of Service</h2>
              <p className="text-gray-600 leading-relaxed text-sm">VoiceLabs AI provides an AI-powered voice agent platform that enables businesses to create, deploy, and manage automated voice agents for inbound and outbound calling, lead qualification, appointment scheduling, and customer support.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">3. Account Registration</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Provide accurate, current, and complete information</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Maintain the security of your account credentials</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Accept responsibility for all activities under your account</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">4. Acceptable Use</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">You agree not to use the Service to:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Make calls that violate applicable telemarketing or do-not-call regulations</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Engage in fraudulent, deceptive, or misleading activities</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Harass, threaten, or abuse any person through automated calls</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Violate any applicable local, state, national, or international law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">5. Pricing & Payments</h2>
              <p className="text-gray-600 leading-relaxed text-sm">Paid plans are billed monthly or annually as selected. All fees are non-refundable except as required by law or as specified in our 14-day money-back guarantee. We reserve the right to modify pricing with 30 days&apos; notice.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">6. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed text-sm">The Service is owned by VoiceLabs AI and protected by intellectual property laws. You retain ownership of your data, content, and agent configurations.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">7. Service Availability</h2>
              <p className="text-gray-600 leading-relaxed text-sm">We strive to maintain 99.99% uptime but do not guarantee uninterrupted access. We are not liable for any downtime caused by factors beyond our reasonable control.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed text-sm">To the maximum extent permitted by law, VoiceLabs AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">9. Termination</h2>
              <p className="text-gray-600 leading-relaxed text-sm">Either party may terminate the agreement at any time. We will retain your data for 30 days after termination, after which it will be permanently deleted.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">10. Contact</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                For questions about these Terms, contact us at{" "}
                <a href="mailto:legal@voicelabs.ai" className="text-[#7c3aed] hover:underline">legal@voicelabs.ai</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
