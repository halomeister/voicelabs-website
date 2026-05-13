"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out AI calling",
    price: { monthly: 0, annual: 0 },
    features: ["2 AI Agents", "3 Campaigns", "Max 10 contacts", "Own phone numbers", "Choose your LLM", "50 included credits"],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing businesses with advanced needs",
    price: { monthly: 49, annual: 39 },
    features: ["25 AI Agents", "50 Campaigns", "Max 1,000 contacts", "25 Flow Automations", "25 Knowledge Bases", "10 Phone Numbers", "500 included credits", "Priority support"],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale call operations",
    price: { monthly: null, annual: null },
    features: ["Everything in Pro", "Unlimited agents", "Unlimited campaigns", "Dedicated account manager", "Custom integrations", "SLA guarantee", "On-premise option", "Custom contracts"],
    cta: "Contact sales",
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative bg-white py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 mb-4">
            Simple, transparent
            <span className="text-gray-400"> pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Start free, upgrade when you&apos;re ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm ${!isAnnual ? "text-gray-900" : "text-gray-400"}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-12 h-6 bg-[#7c3aed]/20 rounded-full p-0.5 transition-colors"
          >
            <div className={`w-5 h-5 bg-[#7c3aed] rounded-full transition-transform ${isAnnual ? "translate-x-6" : "translate-x-0"}`} />
          </button>
          <span className={`text-sm ${isAnnual ? "text-gray-900" : "text-gray-400"}`}>Annual</span>
          {isAnnual && <span className="px-2 py-1 bg-[#7c3aed] text-white text-xs rounded-full font-medium">Save 17%</span>}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white border rounded-2xl p-8 flex flex-col ${
                plan.popular ? "border-[#7c3aed] shadow-lg shadow-[#7c3aed]/10" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-[#7c3aed] text-white text-xs font-medium rounded-full">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-display text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
              </div>
              <div className="mb-6">
                {plan.price.monthly !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display text-gray-900">${isAnnual ? plan.price.annual : plan.price.monthly}</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                ) : (
                  <span className="text-3xl font-display text-gray-900">Custom</span>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#7c3aed] mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/demo"
                className={`w-full py-3 flex items-center justify-center gap-2 text-sm font-medium rounded-full transition-all group ${
                  plan.popular
                    ? "bg-[#7c3aed] text-white hover:bg-[#6d28d9]"
                    : "border border-gray-200 text-gray-700 hover:border-[#7c3aed] hover:text-[#7c3aed]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">
          All plans include 14-day money-back guarantee. No credit card required for free plan.
        </p>
      </div>
    </section>
  );
}
