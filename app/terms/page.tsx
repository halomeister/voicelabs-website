import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#7c3aed]" />
              <span className="text-sm font-mono text-gray-500 tracking-wider uppercase">
                Legal
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-500">Last updated: April 27, 2026</p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-500 leading-relaxed">
                By accessing or using VoiceLabs AI (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service. These terms apply to all users, including visitors, registered users, and paying customers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">2. Description of Service</h2>
              <p className="text-gray-500 leading-relaxed">
                VoiceLabs AI provides an AI-powered voice agent platform that enables businesses to create, deploy, and manage automated voice agents for inbound and outbound calling, lead qualification, appointment scheduling, and customer support. The Service includes web-based tools, APIs, integrations, and related documentation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">3. Account Registration</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                To use certain features of the Service, you must create an account. You agree to:
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Provide accurate, current, and complete information
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Maintain the security of your account credentials
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Accept responsibility for all activities under your account
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Notify us immediately of any unauthorized use
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">4. Acceptable Use</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Make calls that violate applicable telemarketing or do-not-call regulations
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Engage in fraudulent, deceptive, or misleading activities
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Harass, threaten, or abuse any person through automated calls
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Violate any applicable local, state, national, or international law
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Attempt to reverse-engineer, decompile, or disassemble the Service
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">5. Pricing & Payments</h2>
              <p className="text-gray-500 leading-relaxed">
                Paid plans are billed monthly or annually as selected. All fees are non-refundable except as required by law or as specified in our 14-day money-back guarantee for new subscriptions. We reserve the right to modify pricing with 30 days&apos; notice. Usage-based charges (credits) are deducted in real-time and are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">6. Intellectual Property</h2>
              <p className="text-gray-500 leading-relaxed">
                The Service, including its design, features, code, and documentation, is owned by VoiceLabs AI and protected by intellectual property laws. You retain ownership of your data, content, and agent configurations. By using the Service, you grant us a limited license to process your data solely to provide the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">7. Service Availability</h2>
              <p className="text-gray-500 leading-relaxed">
                We strive to maintain 99.99% uptime but do not guarantee uninterrupted access. We may perform scheduled maintenance with advance notice. We are not liable for any downtime, data loss, or service interruptions caused by factors beyond our reasonable control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-500 leading-relaxed">
                To the maximum extent permitted by law, VoiceLabs AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">9. Termination</h2>
              <p className="text-gray-500 leading-relaxed">
                Either party may terminate the agreement at any time. We may suspend or terminate your account if you violate these terms. Upon termination, your right to use the Service ceases immediately. We will retain your data for 30 days after termination, after which it will be permanently deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">10. Changes to Terms</h2>
              <p className="text-gray-500 leading-relaxed">
                We may update these Terms from time to time. We will notify you of material changes via email or through the Service. Continued use of the Service after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">11. Contact</h2>
              <p className="text-gray-500 leading-relaxed">
                For questions about these Terms, contact us at{" "}
                <a href="mailto:legal@voicelabs.ai" className="text-gray-900 underline underline-offset-4 hover:text-gray-900/80 transition-colors">
                  legal@voicelabs.ai
                </a>
                {" "}or visit our{" "}
                <a href="/contact" className="text-gray-900 underline underline-offset-4 hover:text-gray-900/80 transition-colors">
                  Contact page
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
