import { Navigation } from "@/components/landing/navigation";
import { AboutSection } from "@/components/landing/about-section";
import { FooterSection } from "@/components/landing/footer-section";
import { VoiceChatWidget } from "@/components/landing/voice-chat-widget";
import { CookieBanner } from "@/components/landing/cookie-banner";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="pt-32">
        <AboutSection />
      </div>
      <FooterSection />
      <VoiceChatWidget />
      <CookieBanner />
    </main>
  );
}
