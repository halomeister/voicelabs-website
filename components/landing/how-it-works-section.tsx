"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Create your agent",
    description:
      "Give your agent a name, select its language and accent, and configure its personality — no coding or ML expertise required.",
    code: `import { VoiceLabs } from '@voicelabs/sdk'

const agent = VoiceLabs.agent({
  name: 'Sales Rep',
  voice: 'brian-en-us',
  language: 'English',
  model: 'gpt-4o'
})`,
  },
  {
    number: "02",
    title: "Train with your data",
    description:
      "Upload documents, scripts, and FAQs. Your agent learns your business instantly and handles conversations with context and accuracy.",
    code: `agent.train({
  knowledge: ['product-docs.pdf'],
  scripts: ['sales-pitch.md'],
  actions: [
    'book_meeting',
    'qualify_lead',
    'send_sms'
  ]
})`,
  },
  {
    number: "03",
    title: "Launch campaigns",
    description:
      "Upload your contact list, set a schedule, and let your agents make thousands of calls simultaneously. Monitor results in real-time.",
    code: `await agent.campaign({
  type: 'outbound',
  contacts: 'leads-q4.csv',
  schedule: {
    start: '2025-01-05',
    end: '2025-01-20'
  }
})
// 1,000+ calls launched`,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative bg-gray-50 py-20 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900">
            Three steps.
            <span className="text-gray-400"> Go live in minutes.</span>
          </h2>
        </div>

        {/* Stepper */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <button
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full whitespace-nowrap transition-all ${
                    activeStep === i
                      ? "bg-[#7c3aed] text-white"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-[#7c3aed]/30"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono ${
                      activeStep === i
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-sm font-medium">{step.title}</span>
                </button>
                {i < steps.length - 1 && (
                  <div className="w-8 md:w-12 h-px bg-gray-200 mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden max-w-2xl">
            <div
              className="h-full bg-[#7c3aed] rounded-full transition-all duration-300"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content card */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Description */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-xs font-mono text-[#7c3aed]">
                    {steps[activeStep].number}
                  </span>
                  <span className="text-sm font-mono text-[#7c3aed]">
                    Step {activeStep + 1} of {steps.length}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display text-gray-900 mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Right: Code */}
              <div className="bg-gray-900 p-8 md:p-12 flex items-center">
                <div className="w-full">
                  {/* Window dots */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <span className="ml-auto text-xs font-mono text-white/30">
                      workflow.ts
                    </span>
                  </div>

                  {/* Code */}
                  <pre className="font-mono text-[11px] sm:text-xs md:text-sm text-white/80 leading-relaxed overflow-x-auto">
                    {steps[activeStep].code.split("\n").map((line, lineIndex) => (
                      <div
                        key={`${activeStep}-${lineIndex}`}
                        className="animate-fade-in"
                        style={{ animationDelay: `${lineIndex * 60}ms` }}
                      >
                        <span className="text-white/20 select-none inline-block w-6 mr-3">
                          {lineIndex + 1}
                        </span>
                        {line}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(4px);
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
