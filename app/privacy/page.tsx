import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Legal</span>
            <h1 className="text-3xl lg:text-5xl font-display tracking-tight text-gray-900 mb-3">Privacy Policy</h1>
            <p className="text-sm text-gray-400">Last updated: April 27, 2026</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                VoiceLabs AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">We may collect the following types of information:</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-1.5 shrink-0" /><span><strong className="text-gray-900">Personal Information:</strong> Name, email address, phone number, company name, and billing information.</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-1.5 shrink-0" /><span><strong className="text-gray-900">Usage Data:</strong> Information about how you interact with our platform, including call logs and feature usage.</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-1.5 shrink-0" /><span><strong className="text-gray-900">Voice Data:</strong> Call recordings and transcriptions processed through our AI voice agents.</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-1.5 shrink-0" /><span><strong className="text-gray-900">Technical Data:</strong> IP address, browser type, device information, and cookies.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">3. How We Use Your Information</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />To provide, maintain, and improve our services</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />To process transactions and send related information</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />To train and improve our AI voice models (with anonymized data only)</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />To send you technical notices, updates, and support messages</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">4. Data Sharing & Disclosure</h2>
              <p className="text-gray-600 leading-relaxed text-sm">We do not sell your personal information. We may share data with trusted third-party service providers who assist us in operating our platform. All third parties are contractually obligated to protect your data.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">5. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed text-sm">We retain your personal information for as long as your account is active or as needed to provide services. Upon account deletion, we remove your data within 30 days.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">6. Security</h2>
              <p className="text-gray-600 leading-relaxed text-sm">We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, and regular security audits.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">7. Your Rights</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Access, correct, or delete your personal data</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Object to or restrict processing of your data</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Data portability</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">8. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@voicelabs.ai" className="text-[#7c3aed] hover:underline">privacy@voicelabs.ai</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
