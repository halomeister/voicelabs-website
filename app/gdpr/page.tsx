import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function GdprPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Legal</span>
            <h1 className="text-3xl lg:text-5xl font-display tracking-tight text-gray-900 mb-3">GDPR & Data Security</h1>
            <p className="text-sm text-gray-400">Last updated: May 2025</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">Your Rights Under GDPR</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">The GDPR applies to all organizations processing personal data of individuals in the EU. VoiceLabs fully complies with GDPR requirements.</p>
              <div className="space-y-3">
                {[
                  { num: "01", title: "Right of Access", desc: "Request a copy of all personal data we hold about you." },
                  { num: "02", title: "Right to Rectification", desc: "Request correction of inaccurate or incomplete data." },
                  { num: "03", title: "Right to Erasure", desc: "Request deletion of your personal data." },
                  { num: "04", title: "Right to Restrict Processing", desc: "Request limitation of how we process your data." },
                  { num: "05", title: "Right to Data Portability", desc: "Receive your data in a structured, machine-readable format." },
                  { num: "06", title: "Right to Object", desc: "Object to processing based on legitimate interests." },
                ].map((right) => (
                  <div key={right.num} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <span className="text-xs font-mono text-[#7c3aed] mt-0.5">{right.num}</span>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">{right.title}</span>
                      <p className="text-xs text-gray-500 mt-0.5">{right.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">Legal Basis for Processing</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="pl-4 border-l-2 border-[#7c3aed]/30"><strong className="text-gray-900">Consent</strong> — When you explicitly agree to data processing.</li>
                <li className="pl-4 border-l-2 border-[#7c3aed]/30"><strong className="text-gray-900">Contract</strong> — When processing is necessary to fulfill our service agreement.</li>
                <li className="pl-4 border-l-2 border-[#7c3aed]/30"><strong className="text-gray-900">Legitimate Interest</strong> — When processing is necessary for our business interests.</li>
                <li className="pl-4 border-l-2 border-[#7c3aed]/30"><strong className="text-gray-900">Legal Obligation</strong> — When we are required by law to process data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">Data Security Measures</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: "Encryption", desc: "AES-256 at rest, TLS 1.3 in transit" },
                  { title: "Access Controls", desc: "Role-based access with MFA enforcement" },
                  { title: "Audit Logging", desc: "Complete audit trail of all data access" },
                  { title: "Data Minimization", desc: "We only collect what is strictly necessary" },
                  { title: "Regular Assessments", desc: "Annual penetration testing and DPIA reviews" },
                  { title: "Incident Response", desc: "72-hour breach notification as required" },
                ].map((item) => (
                  <div key={item.title} className="p-4 border border-gray-200 rounded-xl">
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">When we transfer personal data outside the EEA, we ensure appropriate safeguards:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="pl-4 border-l-2 border-gray-200">Standard Contractual Clauses (SCCs)</li>
                <li className="pl-4 border-l-2 border-gray-200">Adequacy decisions for countries with equivalent protection</li>
                <li className="pl-4 border-l-2 border-gray-200">EU-US Data Privacy Framework certification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">Data Retention</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Account data</strong> — Deleted within 30 days of account closure</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Call recordings</strong> — Retained for 90 days unless configured otherwise</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Analytics data</strong> — Aggregated and anonymized after 12 months</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Legal records</strong> — Retained as required by law (5-7 years)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">Contact</h2>
              <div className="p-5 bg-gray-50 rounded-xl space-y-2 text-sm">
                <p><span className="text-gray-500">Email:</span> <a href="mailto:privacy@voicelabs.ai" className="text-[#7c3aed] hover:underline">privacy@voicelabs.ai</a></p>
                <p><span className="text-gray-500">DPO:</span> <a href="mailto:dpo@voicelabs.ai" className="text-[#7c3aed] hover:underline">dpo@voicelabs.ai</a></p>
                <p><span className="text-gray-500">Address:</span> <span className="text-gray-700">VoiceLabs AI, San Francisco, CA</span></p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
