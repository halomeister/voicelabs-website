import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <div className="pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-foreground" />
              <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
                Legal
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">Last updated: April 27, 2026</p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences, understand how you use the site, and improve your overall experience. VoiceLabs AI uses cookies and similar technologies across our platform and website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">2. Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div className="p-6 border border-foreground/10 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium">Essential Cookies</h3>
                    <span className="text-xs font-mono px-2 py-1 bg-foreground/5 rounded">Always active</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Required for the website to function properly. These cookies enable core features like security, session management, and accessibility. They cannot be disabled.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs font-mono px-2 py-1 border border-foreground/10 rounded">session_id</span>
                    <span className="text-xs font-mono px-2 py-1 border border-foreground/10 rounded">csrf_token</span>
                    <span className="text-xs font-mono px-2 py-1 border border-foreground/10 rounded">cookie-consent</span>
                  </div>
                </div>

                <div className="p-6 border border-foreground/10 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium">Analytics Cookies</h3>
                    <span className="text-xs font-mono px-2 py-1 bg-foreground/5 rounded">Optional</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve our platform and user experience.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs font-mono px-2 py-1 border border-foreground/10 rounded">_ga</span>
                    <span className="text-xs font-mono px-2 py-1 border border-foreground/10 rounded">_ga_*</span>
                    <span className="text-xs font-mono px-2 py-1 border border-foreground/10 rounded">_vercel_insights</span>
                  </div>
                </div>

                <div className="p-6 border border-foreground/10 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium">Marketing Cookies</h3>
                    <span className="text-xs font-mono px-2 py-1 bg-foreground/5 rounded">Optional</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Used to track visitors across websites to display relevant advertisements. These cookies help us measure the effectiveness of our marketing campaigns.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs font-mono px-2 py-1 border border-foreground/10 rounded">_fbp</span>
                    <span className="text-xs font-mono px-2 py-1 border border-foreground/10 rounded">_gcl_au</span>
                    <span className="text-xs font-mono px-2 py-1 border border-foreground/10 rounded">li_sugr</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">3. How to Manage Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can manage your cookie preferences in several ways:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 shrink-0" />
                  <span><strong className="text-foreground">Cookie Banner:</strong> Use the cookie consent banner that appears when you first visit our site to set your preferences.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 shrink-0" />
                  <span><strong className="text-foreground">Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings menu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 shrink-0" />
                  <span><strong className="text-foreground">Opt-Out Links:</strong> For third-party analytics, you can use tools like Google Analytics Opt-out Browser Add-on.</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please note that disabling certain cookies may affect the functionality of our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third parties include analytics providers (Google Analytics, Vercel Analytics), advertising platforms, and social media services. Each third party has its own privacy and cookie policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">5. Cookie Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. Analytics cookies are typically retained for up to 2 years. Marketing cookies are retained for up to 1 year.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">6. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">7. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies, contact us at{" "}
                <a href="mailto:privacy@voicelabs.ai" className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors">
                  privacy@voicelabs.ai
                </a>
                {" "}or visit our{" "}
                <a href="/contact" className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors">
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
