"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ essential: true, analytics: true, marketing: true }));
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ essential: true, analytics: false, marketing: false }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return (
    <button
      onClick={() => setIsVisible(true)}
      aria-label="Cookie preferences"
      className="fixed bottom-8 left-8 z-50 w-10 h-10 rounded-full bg-background border border-foreground/10 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
    >
      <Cookie className="w-4 h-4 text-muted-foreground" />
    </button>
  );

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 w-[380px] transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 pt-5 pb-0 flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <Cookie className="w-5 h-5 text-foreground/50" />
            <h3 className="text-sm font-medium">Cookie Preferences</h3>
          </div>
          <button
            onClick={handleEssentialOnly}
            className="text-muted-foreground hover:text-foreground transition-colors p-1 -m-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            We use cookies to enhance your browsing experience and analyze site traffic.{" "}
            <a href="/cookies" className="underline underline-offset-2 hover:text-foreground transition-colors">
              Learn more
            </a>
          </p>

          {/* Preferences panel */}
          {showPreferences && (
            <div className="space-y-3 mb-4 pt-3 border-t border-foreground/10">
              {[
                { key: "essential" as const, label: "Essential", desc: "Required for the site to function", locked: true },
                { key: "analytics" as const, label: "Analytics", desc: "Help us understand site usage", locked: false },
                { key: "marketing" as const, label: "Marketing", desc: "Personalized ads and content", locked: false },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      if (!item.locked) {
                        setPreferences((prev) => ({ ...prev, [item.key]: !prev[item.key] }));
                      }
                    }}
                    className={`relative w-10 h-5 rounded-full p-0.5 transition-colors ${
                      preferences[item.key] ? "bg-foreground" : "bg-foreground/15"
                    } ${item.locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                    aria-label={`Toggle ${item.label}`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full transition-transform duration-200 ${
                        preferences[item.key]
                          ? "translate-x-5 bg-background"
                          : "translate-x-0 bg-foreground/40"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="px-5 pb-5 flex items-center gap-2">
          <button
            onClick={() => setShowPreferences(!showPreferences)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
          >
            {showPreferences ? "Hide" : "Manage Preferences"}
          </button>
          <div className="flex-1" />
          {showPreferences ? (
            <Button
              size="sm"
              onClick={handleSavePreferences}
              className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-4 h-8 text-xs"
            >
              Save Preferences
            </Button>
          ) : (
            <>
              <Button
                size="sm"
                variant="outline"
                onClick={handleEssentialOnly}
                className="rounded-full px-4 h-8 text-xs border-foreground/15"
              >
                Essential Only
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-4 h-8 text-xs"
              >
                Accept All
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
