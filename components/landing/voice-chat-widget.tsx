"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, X, Phone } from "lucide-react";
import Vapi from "@vapi-ai/web";

const VAPI_PUBLIC_KEY = "9c7f5219-676b-4894-a13f-f5752199c0db";
const VAPI_ASSISTANT_ID = "2c9e42c3-3692-489a-b15c-6ceda8483433";

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

interface Message {
  role: "agent" | "user";
  text: string;
}

export function VoiceChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const vapiRef = useRef<Vapi | null>(null);

  // Initialize Vapi
  useEffect(() => {
    const vapi = new Vapi(VAPI_PUBLIC_KEY);
    vapiRef.current = vapi;

    vapi.on("call-start", () => {
      setIsConnected(true);
      setIsLoading(false);
    });

    vapi.on("call-end", () => {
      setIsConnected(false);
      setIsLoading(false);
      setIsSpeaking(false);
    });

    vapi.on("speech-start", () => {
      setIsSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setIsSpeaking(false);
    });

    vapi.on("message", (msg) => {
      if (msg.type === "transcript" && msg.transcriptType === "final") {
        setMessages((prev) => [
          ...prev,
          { role: msg.role === "assistant" ? "agent" : "user", text: msg.transcript },
        ]);
      }
    });

    vapi.on("error", (error) => {
      console.error("Vapi error:", error);
      setIsLoading(false);
    });

    return () => {
      vapi.stop();
    };
  }, []);

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

  // Auto-scroll messages
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleConnect = async () => {
    if (!vapiRef.current) return;
    setIsLoading(true);
    setMessages([]);
    try {
      await vapiRef.current.start(VAPI_ASSISTANT_ID);
    } catch (error) {
      console.error("Failed to start call:", error);
      setIsLoading(false);
    }
  };

  const handleDisconnect = () => {
    if (!vapiRef.current) return;
    vapiRef.current.stop();
    setIsConnected(false);
    setIsSpeaking(false);
  };

  const handleToggleMute = () => {
    if (!vapiRef.current) return;
    const newMuted = !isMuted;
    vapiRef.current.setMuted(newMuted);
    setIsMuted(newMuted);
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
            <span className="text-sm font-medium">Talk to AI</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
          </>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-20 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] transition-all duration-500 origin-bottom-right ${
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
                  {isConnected ? `Connected · ${formatTime(callDuration)}` : isLoading ? "Connecting..." : "Ready to connect"}
                </div>
              </div>
            </div>
            <button onClick={handleClose} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages area */}
          <div ref={messagesRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {!isConnected && !isLoading && messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-foreground/30" />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Talk to VoiceLabs AI</p>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
                    Ask about features, pricing, use cases, or anything about our platform.
                  </p>
                </div>
              </div>
            )}

            {isLoading && messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center animate-pulse">
                  <Phone className="w-7 h-7 text-foreground/30" />
                </div>
                <p className="text-sm text-muted-foreground">Connecting...</p>
              </div>
            )}

            {messages.map((msg, i) => (
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
          </div>

          {/* Waveform + Controls */}
          <div className="border-t border-foreground/10 px-5 py-4 shrink-0">
            {isConnected && (
              <div className="mb-4">
                <VoiceWaveform active={isSpeaking} />
              </div>
            )}

            <div className="flex items-center justify-center gap-3">
              {!isConnected && !isLoading ? (
                <button
                  onClick={handleConnect}
                  className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors group"
                >
                  <Phone className="w-4 h-4 group-hover:animate-pulse" />
                  Start conversation
                </button>
              ) : isLoading ? (
                <button
                  disabled
                  className="flex items-center gap-2 px-6 py-3 bg-foreground/50 text-background rounded-full text-sm font-medium cursor-not-allowed"
                >
                  <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  Connecting...
                </button>
              ) : (
                <>
                  <button
                    onClick={handleToggleMute}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      !isMuted
                        ? "bg-foreground text-background scale-110"
                        : "bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10"
                    }`}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {!isMuted ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
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
