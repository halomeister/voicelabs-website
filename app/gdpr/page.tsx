import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { VoiceChatWidget } from "@/components/landing/voice-chat-widget";
import { CookieBanner } from "@/components/landing/cookie-banner";

export default function GdprPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#7c3aed]" />
            <span className="text-sm font-mono text-gray-500 tracking-wider uppercase">
              Legal
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            GDPR & Data Protection
          </h1>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl">
            VoiceLabs AI is committed to protecting your personal data and complying with
            applicable data protection regulations worldwide.
          </p>

          <div className="prose-custom space-y-12">
            {/* GDPR Section */}
            <section>
              <h2 className="text-2xl font-display mb-4">EU General Data Protection Regulation (GDPR)</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                The GDPR is a comprehensive data protection law that applies to all organizations processing
                personal data of individuals in the European Union. VoiceLabs fully complies with GDPR requirements.
              </p>

              <h3 className="text-lg font-medium mt-8 mb-3">Your Rights Under GDPR</h3>
              <ul className="space-y-3 text-gray-500">
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-gray-900 mt-1">01</span>
                  <div>
                    <span className="text-gray-900 font-medium">Right of Access</span> — You can request a copy of all personal data we hold about you.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-gray-900 mt-1">02</span>
                  <div>
                    <span className="text-gray-900 font-medium">Right to Rectification</span> — You can request correction of inaccurate or incomplete data.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-gray-900 mt-1">03</span>
                  <div>
                    <span className="text-gray-900 font-medium">Right to Erasure</span> — You can request deletion of your personal data (&quot;right to be forgotten&quot;).
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-gray-900 mt-1">04</span>
                  <div>
                    <span className="text-gray-900 font-medium">Right to Restrict Processing</span> — You can request limitation of how we process your data.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-gray-900 mt-1">05</span>
                  <div>
                    <span className="text-gray-900 font-medium">Right to Data Portability</span> — You can receive your data in a structured, machine-readable format.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-gray-900 mt-1">06</span>
                  <div>
                    <span className="text-gray-900 font-medium">Right to Object</span> — You can object to processing based on legitimate interests or direct marketing.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-gray-900 mt-1">07</span>
                  <div>
                    <span className="text-gray-900 font-medium">Right Not to Be Subject to Automated Decisions</span> — You can request human review of automated decisions that significantly affect you.
                  </div>
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-8 mb-3">Legal Basis for Processing</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                We process personal data only when we have a valid legal basis:
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Consent</strong> — When you explicitly agree to data processing (e.g., marketing communications).</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Contract</strong> — When processing is necessary to fulfill our service agreement with you.</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Legitimate Interest</strong> — When processing is necessary for our legitimate business interests, balanced against your rights.</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Legal Obligation</strong> — When we are required by law to process certain data.</li>
              </ul>

              <h3 className="text-lg font-medium mt-8 mb-3">Data Protection Officer</h3>
              <p className="text-gray-500 leading-relaxed">
                Our Data Protection Officer can be reached at{" "}
                <a href="mailto:dpo@voicelabs.ai" className="text-gray-900 underline underline-offset-4 hover:text-gray-500 transition-colors">
                  dpo@voicelabs.ai
                </a>{" "}
                for any GDPR-related inquiries or to exercise your rights.
              </p>
            </section>

            {/* Data Transfers */}
            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-display mb-4">International Data Transfers</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                When we transfer personal data outside the European Economic Area (EEA), we ensure appropriate
                safeguards are in place:
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="pl-4 border-l-2 border-gray-200">Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li className="pl-4 border-l-2 border-gray-200">Adequacy decisions for countries with equivalent data protection standards</li>
                <li className="pl-4 border-l-2 border-gray-200">Binding Corporate Rules for intra-group transfers</li>
                <li className="pl-4 border-l-2 border-gray-200">EU-US Data Privacy Framework certification where applicable</li>
              </ul>
            </section>

            {/* ePrivacy */}
            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-display mb-4">ePrivacy Directive (EU)</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                In addition to GDPR, we comply with the ePrivacy Directive regarding electronic communications:
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="pl-4 border-l-2 border-gray-200">Cookies and tracking technologies require prior consent (except strictly necessary cookies)</li>
                <li className="pl-4 border-l-2 border-gray-200">Marketing communications are only sent with explicit opt-in consent</li>
                <li className="pl-4 border-l-2 border-gray-200">Call recordings are disclosed and consented to before processing</li>
              </ul>
            </section>

            {/* CCPA */}
            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-display mb-4">California Consumer Privacy Act (CCPA/CPRA)</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                For California residents, we provide additional rights under the CCPA and its amendment, the CPRA:
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Right to Know</strong> — What personal information we collect, use, and disclose</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Right to Delete</strong> — Request deletion of personal information</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Right to Opt-Out</strong> — Opt out of the sale or sharing of personal information</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Right to Correct</strong> — Request correction of inaccurate information</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Right to Limit Use</strong> — Limit use of sensitive personal information</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Non-Discrimination</strong> — We will not discriminate against you for exercising your rights</li>
              </ul>
              <p className="text-gray-500 leading-relaxed mt-4">
                We do not sell personal information. We do not use or disclose sensitive personal information
                for purposes other than those permitted by the CCPA.
              </p>
            </section>

            {/* UK GDPR */}
            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-display mb-4">UK Data Protection Act 2018 (UK GDPR)</h2>
              <p className="text-gray-500 leading-relaxed">
                Following Brexit, the UK has its own data protection framework that mirrors the EU GDPR.
                We comply with the UK GDPR and the Data Protection Act 2018 for all UK-based users.
                The same rights and protections listed under EU GDPR apply to UK residents. Our UK
                representative can be contacted at{" "}
                <a href="mailto:uk-privacy@voicelabs.ai" className="text-gray-900 underline underline-offset-4 hover:text-gray-500 transition-colors">
                  uk-privacy@voicelabs.ai
                </a>.
              </p>
            </section>

            {/* Brazil LGPD */}
            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-display mb-4">Brazil — Lei Geral de Proteção de Dados (LGPD)</h2>
              <p className="text-gray-500 leading-relaxed">
                For users in Brazil, we comply with the LGPD, which provides similar rights to the GDPR
                including access, correction, deletion, portability, and the right to information about
                data sharing with third parties. Our legal basis for processing includes consent,
                legitimate interest, and contractual necessity as defined under LGPD.
              </p>
            </section>

            {/* Canada PIPEDA */}
            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-display mb-4">Canada — PIPEDA</h2>
              <p className="text-gray-500 leading-relaxed">
                For Canadian users, we comply with the Personal Information Protection and Electronic
                Documents Act (PIPEDA). We obtain meaningful consent for data collection, limit collection
                to what is necessary, and provide access to personal information upon request. We also
                comply with Canada&apos;s Anti-Spam Legislation (CASL) for electronic communications.
              </p>
            </section>

            {/* Australia */}
            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-display mb-4">Australia — Privacy Act 1988</h2>
              <p className="text-gray-500 leading-relaxed">
                For Australian users, we comply with the Australian Privacy Principles (APPs) under the
                Privacy Act 1988. This includes transparency about data collection, providing access and
                correction rights, ensuring data quality, and implementing appropriate security measures.
              </p>
            </section>

            {/* Data Security */}
            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-display mb-4">Data Security Measures</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                We implement comprehensive technical and organizational measures to protect your data:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-xl">
                  <p className="text-sm font-medium mb-1">Encryption</p>
                  <p className="text-xs text-gray-500">AES-256 at rest, TLS 1.3 in transit</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl">
                  <p className="text-sm font-medium mb-1">Access Controls</p>
                  <p className="text-xs text-gray-500">Role-based access with MFA enforcement</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl">
                  <p className="text-sm font-medium mb-1">Audit Logging</p>
                  <p className="text-xs text-gray-500">Complete audit trail of all data access</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl">
                  <p className="text-sm font-medium mb-1">Data Minimization</p>
                  <p className="text-xs text-gray-500">We only collect what is strictly necessary</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl">
                  <p className="text-sm font-medium mb-1">Regular Assessments</p>
                  <p className="text-xs text-gray-500">Annual penetration testing and DPIA reviews</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl">
                  <p className="text-sm font-medium mb-1">Incident Response</p>
                  <p className="text-xs text-gray-500">72-hour breach notification as required by GDPR</p>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-display mb-4">Data Retention</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                We retain personal data only for as long as necessary to fulfill the purposes for which
                it was collected:
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Account data</strong> — Retained while your account is active, deleted within 30 days of account closure</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Call recordings</strong> — Retained for 90 days unless longer retention is configured by the customer</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Analytics data</strong> — Aggregated and anonymized after 12 months</li>
                <li className="pl-4 border-l-2 border-gray-200"><strong className="text-gray-900">Legal records</strong> — Retained as required by applicable law (typically 5-7 years)</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-display mb-4">Contact Us</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                For any questions about this policy or to exercise your data protection rights, contact us:
              </p>
              <div className="p-6 border border-gray-200 rounded-xl space-y-2 text-sm">
                <p><span className="text-gray-500">Email:</span>{" "}
                  <a href="mailto:privacy@voicelabs.ai" className="text-gray-900 underline underline-offset-4">privacy@voicelabs.ai</a>
                </p>
                <p><span className="text-gray-500">DPO:</span>{" "}
                  <a href="mailto:dpo@voicelabs.ai" className="text-gray-900 underline underline-offset-4">dpo@voicelabs.ai</a>
                </p>
                <p><span className="text-gray-500">Address:</span> VoiceLabs AI, San Francisco, CA, United States</p>
                <p><span className="text-gray-500">EU Representative:</span>{" "}
                  <a href="mailto:eu-rep@voicelabs.ai" className="text-gray-900 underline underline-offset-4">eu-rep@voicelabs.ai</a>
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-6">
                Last updated: May 2025. We may update this policy periodically. Material changes will be
                communicated via email or through our platform.
              </p>
            </section>
          </div>
        </div>
      </div>
      <FooterSection />
      <VoiceChatWidget />
      <CookieBanner />
    </main>
  );
}
