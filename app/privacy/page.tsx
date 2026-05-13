import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-gray-500">Last updated: April 27, 2026</p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display mb-4">1. Introduction</h2>
              <p className="text-gray-500 leading-relaxed">
                VoiceLabs AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">2. Information We Collect</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  <span><strong className="text-gray-900">Personal Information:</strong> Name, email address, phone number, company name, and billing information provided during registration.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  <span><strong className="text-gray-900">Usage Data:</strong> Information about how you interact with our platform, including call logs, agent configurations, and feature usage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  <span><strong className="text-gray-900">Voice Data:</strong> Call recordings and transcriptions processed through our AI voice agents, as configured by you.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  <span><strong className="text-gray-900">Technical Data:</strong> IP address, browser type, device information, and cookies.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  To provide, maintain, and improve our services
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  To process transactions and send related information
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  To train and improve our AI voice models (with anonymized data only)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  To send you technical notices, updates, and support messages
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  To comply with legal obligations
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">4. Data Sharing & Disclosure</h2>
              <p className="text-gray-500 leading-relaxed">
                We do not sell your personal information. We may share data with trusted third-party service providers who assist us in operating our platform (e.g., cloud hosting, payment processing, telephony providers). All third parties are contractually obligated to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">5. Data Retention</h2>
              <p className="text-gray-500 leading-relaxed">
                We retain your personal information for as long as your account is active or as needed to provide services. Call recordings are retained based on your account settings and can be deleted at any time. Upon account deletion, we remove your data within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">6. Security</h2>
              <p className="text-gray-500 leading-relaxed">
                We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, and regular security audits. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">7. Your Rights</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Access, correct, or delete your personal data
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Object to or restrict processing of your data
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Data portability
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900/30 mt-2 shrink-0" />
                  Withdraw consent at any time
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">8. Contact Us</h2>
              <p className="text-gray-500 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@voicelabs.ai" className="text-gray-900 underline underline-offset-4 hover:text-gray-900/80 transition-colors">
                  privacy@voicelabs.ai
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
