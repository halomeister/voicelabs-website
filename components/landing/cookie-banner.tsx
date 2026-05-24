"use client";

import { useState, useEffect } from "react";
import { Cookie, X, Shield } from "lucide-react";

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
      className="fixed bottom-8 left-8 z-50 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:scale-110 hover:border-[#7c3aed]/30 transition-all"
    >
      <Cookie className="w-4 h-4 text-[#7c3aed]" />
    </button>
  );

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 pt-5 pb-0 flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#7c3aed]/5 border border-[#7c3aed]/10 flex items-center justify-center">
              <Cookie className="w-4 h-4 text-[#7c3aed]" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Cookie Preferences</h3>
              <p className="text-[11px] text-gray-400">Manage your privacy</p>
            </div>
          </div>
          <button
            onClick={handleEssentialOnly}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 -m-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4">
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            We use cookies to enhance your browsing experience and analyze site traffic.{" "}
            <a href="/cookies" className="text-[#7c3aed] hover:text-[#6d28d9] transition-colors font-medium">
              Learn more
            </a>
          </p>

          {/* Preferences panel */}
          {showPreferences && (
            <div className="space-y-3 mb-4 pt-4 border-t border-gray-100">
              {[
                { key: "essential" as const, label: "Essential", desc: "Required for the site to function", locked: true },
                { key: "analytics" as const, label: "Analytics", desc: "Help us understand site usage", locked: false },
                { key: "marketing" as const, label: "Marketing", desc: "Personalized ads and content", locked: false },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between py-1">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      if (!item.locked) {
                        setPreferences((prev) => ({ ...prev, [item.key]: !prev[item.key] }));
                      }
                    }}
                    className={`relative w-11 h-6 rounded-full p-0.5 transition-colors duration-200 ${
                      preferences[item.key] ? "bg-[#7c3aed]" : "bg-gray-200"
                    } ${item.locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                    aria-label={`Toggle ${item.label}`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                        preferences[item.key] ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Privacy note */}
          {!showPreferences && (
            <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-1">
              <Shield className="w-3 h-3" />
              <span>Your data is never sold to third parties</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="px-5 pb-5 flex items-center gap-2">
          <button
            onClick={() => setShowPreferences(!showPreferences)}
            className="text-xs text-gray-500 hover:text-[#7c3aed] transition-colors font-medium"
          >
            {showPreferences ? "← Back" : "Customize"}
          </button>
          <div className="flex-1" />
          {showPreferences ? (
            <button
              onClick={handleSavePreferences}
              className="h-9 px-5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full text-xs font-medium transition-colors"
            >
              Save Preferences
            </button>
          ) : (
            <>
              <button
                onClick={handleEssentialOnly}
                className="h-9 px-4 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 rounded-full text-xs font-medium transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAcceptAll}
                className="h-9 px-5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full text-xs font-medium transition-colors"
              >
                Accept All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
