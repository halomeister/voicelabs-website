import { Navigation } from "@/components/landing/navigation";
import { ContactSection } from "@/components/landing/contact-section";
import { FooterSection } from "@/components/landing/footer-section";
import { VoiceChatWidget } from "@/components/landing/voice-chat-widget";
import { CookieBanner } from "@/components/landing/cookie-banner";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="pt-32">
        <ContactSection />
      </div>
      <FooterSection />
      <VoiceChatWidget />
      <CookieBanner />
    </main>
  );
}
