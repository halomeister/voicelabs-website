import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Legal</span>
            <h1 className="text-3xl lg:text-5xl font-display tracking-tight text-gray-900 mb-3">Cookie Policy</h1>
            <p className="text-sm text-gray-400">Last updated: April 27, 2026</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">1. What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed text-sm">Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your experience.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="p-5 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-900">Essential Cookies</h3>
                    <span className="text-[10px] font-mono px-2 py-1 bg-[#7c3aed]/10 text-[#7c3aed] rounded-full">Always active</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">Required for the website to function properly. These enable core features like security and session management.</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-900">Analytics Cookies</h3>
                    <span className="text-[10px] font-mono px-2 py-1 bg-gray-100 text-gray-500 rounded-full">Optional</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">Help us understand how visitors interact with our website by collecting information anonymously.</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-900">Marketing Cookies</h3>
                    <span className="text-[10px] font-mono px-2 py-1 bg-gray-100 text-gray-500 rounded-full">Optional</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">3. How to Manage Cookies</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-1.5 shrink-0" /><span><strong className="text-gray-900">Cookie Banner:</strong> Use the consent banner to set your preferences.</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-1.5 shrink-0" /><span><strong className="text-gray-900">Browser Settings:</strong> Most browsers allow you to block or delete cookies.</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-1.5 shrink-0" /><span><strong className="text-gray-900">Opt-Out Links:</strong> Use tools like Google Analytics Opt-out Browser Add-on.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">4. Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed text-sm">Some cookies are placed by third-party services. We do not control these cookies. Each third party has its own privacy and cookie policies.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">5. Cookie Retention</h2>
              <p className="text-gray-600 leading-relaxed text-sm">Session cookies are deleted when you close your browser. Analytics cookies are retained for up to 2 years. Marketing cookies are retained for up to 1 year.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-gray-900 mb-3">6. Contact</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                If you have questions about our use of cookies, contact us at{" "}
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
