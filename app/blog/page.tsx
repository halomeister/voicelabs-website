import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { VoiceChatWidget } from "@/components/landing/voice-chat-widget";
import { CookieBanner } from "@/components/landing/cookie-banner";
import { BlogList } from "@/components/landing/blog-list";

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <div className="pt-32">
        <BlogList />
      </div>
      <FooterSection />
      <VoiceChatWidget />
      <CookieBanner />
    </main>
  );
}
