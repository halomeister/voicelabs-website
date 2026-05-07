"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, X, Phone } from "lucide-react";

function VoiceWaveform({ active }: { active: boolean }) {
  return (
    <div className="flex items-center justify-center gap-[3px] h-10">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-foreground/70 transition-all duration-150"
          style={{
            height: active ? undefined : "4px",
            animation: active
              ? `waveBar ${0.8 + (i % 5) * 0.15}s ease-in-out ${i * 0.05}s infinite alternate`
              : "none",
          }}
        />
      ))}
    </div>
  );
}

const demoMessages = [
  { role: "agent" as const, text: "Hi! I'm the VoiceLabs AI assistant. How can I help you today?" },
  { role: "user" as const, text: "I'd like to learn more about your voice agents." },
  { role: "agent" as const, text: "Our AI voice agents handle inbound and outbound calls 24/7. They can qualify leads, book meetings, and provide support in 30+ languages." },
  { role: "user" as const, text: "Can I try a free demo?" },
  { role: "agent" as const, text: "Absolutely! You can start with our free plan — 2 AI agents, 50 credits, no credit card required. Want me to help you get started?" },
];

export function VoiceChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<typeof demoMessages>([]);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const demoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Listen for mobile menu toggle
  useEffect(() => {
    const handler = (e: Event) => {
      setIsMobileMenuOpen((e as CustomEvent).detail);
    };
    window.addEventListener("mobile-menu-toggle", handler);
    return () => window.removeEventListener("mobile-menu-toggle", handler);
  }, []);

  // Call duration timer
  useEffect(() => {
    if (isConnected) {
      timerRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setCallDuration(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isConnected]);

  // Demo conversation auto-play
  useEffect(() => {
    if (isConnected && currentDemo < demoMessages.length) {
      const delay = currentDemo === 0 ? 1000 : 2500;
      demoRef.current = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, demoMessages[currentDemo]]);
        if (demoMessages[currentDemo].role === "user") {
          setIsListening(true);
          setTimeout(() => setIsListening(false), 1200);
        }
        setCurrentDemo((prev) => prev + 1);
      }, delay);
    }
    return () => {
      if (demoRef.current) clearTimeout(demoRef.current);
    };
  }, [isConnected, currentDemo]);

  // Auto-scroll messages
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  const handleConnect = () => {
    setIsConnected(true);
    setVisibleMessages([]);
    setCurrentDemo(0);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setIsListening(false);
    setVisibleMessages([]);
    setCurrentDemo(0);
  };

  const handleClose = () => {
    handleDisconnect();
    setIsOpen(false);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className={`transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full shadow-lg transition-all duration-300 group ${
          isOpen
            ? "bg-foreground/10 backdrop-blur-xl border border-foreground/20 text-foreground"
            : "bg-foreground text-background hover:bg-foreground/90"
        }`}
        aria-label="Voice chat"
      >
        {isOpen ? (
          <X className="w-4 h-4" />
        ) : (
          <>
            <Mic className="w-4 h-4" />
            <span className="text-sm font-medium">Voice Chat</span>
            {/* Pulse indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
          </>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-20 right-6 z-50 w-[360px] transition-all duration-500 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col" style={{ height: "480px" }}>
          {/* Header */}
          <div className="px-5 py-4 border-b border-foreground/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                <Mic className="w-4 h-4 text-foreground/60" />
              </div>
              <div>
                <div className="text-sm font-medium">VoiceLabs AI</div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${isConnected ? "bg-green-500" : "bg-foreground/20"}`} />
                  {isConnected ? `Connected · ${formatTime(callDuration)}` : "Ready to connect"}
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground/50 px-2 py-1 border border-foreground/5 rounded">
              🇺🇸 EN
            </span>
          </div>

          {/* Messages area */}
          <div ref={messagesRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {!isConnected && visibleMessages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-foreground/30" />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Start a voice conversation</p>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
                    Click the button below to connect with our AI voice assistant.
                  </p>
                </div>
              </div>
            )}

            {visibleMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-foreground text-background rounded-br-md"
                      : "bg-foreground/5 border border-foreground/10 text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isConnected && isListening && (
              <div className="flex justify-end">
                <div className="bg-foreground/5 border border-foreground/10 rounded-2xl rounded-br-md px-4 py-3">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Waveform + Controls */}
          <div className="border-t border-foreground/10 px-5 py-4 shrink-0">
            {isConnected && (
              <div className="mb-4">
                <VoiceWaveform active={isConnected && !isListening && currentDemo < demoMessages.length} />
              </div>
            )}

            <div className="flex items-center justify-center gap-3">
              {!isConnected ? (
                <button
                  onClick={handleConnect}
                  className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors group"
                >
                  <Phone className="w-4 h-4 group-hover:animate-pulse" />
                  Start conversation
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setIsListening(!isListening)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isListening
                        ? "bg-foreground text-background scale-110"
                        : "bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10"
                    }`}
                    aria-label={isListening ? "Mute" : "Unmute"}
                  >
                    {isListening ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                  </button>

                  <button
                    onClick={handleDisconnect}
                    className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 hover:bg-red-500/20 transition-colors"
                    aria-label="End call"
                  >
                    <Phone className="w-5 h-5 rotate-[135deg]" />
                  </button>
                </>
              )}
            </div>

            <p className="text-[10px] text-center text-muted-foreground/40 mt-3">
              Powered by VoiceLabs AI
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes waveBar {
          0% { height: 4px; }
          100% { height: 32px; }
        }
        .animate-in {
          animation: msgIn 0.3s ease-out;
        }
        @keyframes msgIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
