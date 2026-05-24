"use client";

import { useState, useEffect } from "react";
import { Mic, X } from "lucide-react";

const ELEVENLABS_AGENT_ID = "agent_2901k1gyjz6sef9v3fdn4gjgkrv5";

export function VoiceChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for mobile menu toggle
  useEffect(() => {
    const handler = (e: Event) => {
      setIsMobileMenuOpen((e as CustomEvent).detail);
    };
    window.addEventListener("mobile-menu-toggle", handler);
    return () => window.removeEventListener("mobile-menu-toggle", handler);
  }, []);

  // Load ElevenLabs widget script
  useEffect(() => {
    if (!isOpen) return;

    const existingScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isOpen]);

  return (
    <div className={`transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full shadow-lg transition-all duration-300 group ${
          isOpen
            ? "bg-white border border-gray-200 text-gray-700"
            : "bg-[#7c3aed] text-white hover:bg-[#6d28d9]"
        }`}
        aria-label="Voice chat"
      >
        {isOpen ? (
          <X className="w-4 h-4" />
        ) : (
          <>
            <Mic className="w-4 h-4" />
            <span className="text-sm font-medium">Talk to AI</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
          </>
        )}
      </button>

      {/* ElevenLabs Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50">
          <elevenlabs-convai agent-id={ELEVENLABS_AGENT_ID}></elevenlabs-convai>
        </div>
      )}
    </div>
  );
}

// TypeScript declaration for the custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "agent-id": string },
        HTMLElement
      >;
    }
  }
}
