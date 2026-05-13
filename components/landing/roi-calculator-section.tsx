"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export function RoiCalculatorSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [callsPerMonth, setCallsPerMonth] = useState(5000);
  const [avgHandleTime, setAvgHandleTime] = useState(6);
  const [costPerAgent, setCostPerAgent] = useState(25);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const totalHoursPerMonth = (callsPerMonth * avgHandleTime) / 60;
  const humanAgentsNeeded = Math.ceil(totalHoursPerMonth / 160);
  const currentMonthlyCost = humanAgentsNeeded * costPerAgent * 160;
  const aiHandledCalls = Math.round(callsPerMonth * 0.73);
  const humanHandledCalls = callsPerMonth - aiHandledCalls;
  const aiCost = aiHandledCalls * avgHandleTime * 0.08;
  const remainingHumanAgents = Math.ceil((humanHandledCalls * avgHandleTime) / 60 / 160);
  const remainingHumanCost = remainingHumanAgents * costPerAgent * 160;
  const totalAiCost = aiCost + remainingHumanCost;
  const monthlySavings = Math.max(0, currentMonthlyCost - totalAiCost);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = currentMonthlyCost > 0 ? Math.round((monthlySavings / currentMonthlyCost) * 100) : 0;
  const hoursFreed = Math.round((aiHandledCalls * avgHandleTime) / 60);

  const formatCurrency = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value.toFixed(0)}`;
  };

  return (
    <section ref={sectionRef} id="roi-calculator" className="relative bg-gray-50 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">ROI Calculator</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 mb-4">
            See how much you
            <span className="text-gray-400"> could save</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl">Adjust the sliders to match your current call operations.</p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Sliders */}
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-3"><label className="text-sm font-medium text-gray-700">Monthly call volume</label><span className="text-sm font-mono text-gray-500">{callsPerMonth.toLocaleString()} calls</span></div>
              <input type="range" min={500} max={100000} step={500} value={callsPerMonth} onChange={(e) => setCallsPerMonth(Number(e.target.value))} className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#7c3aed] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#7c3aed] [&::-webkit-slider-thumb]:cursor-pointer" />
            </div>
            <div>
              <div className="flex justify-between mb-3"><label className="text-sm font-medium text-gray-700">Avg. call duration</label><span className="text-sm font-mono text-gray-500">{avgHandleTime} min</span></div>
              <input type="range" min={1} max={20} step={1} value={avgHandleTime} onChange={(e) => setAvgHandleTime(Number(e.target.value))} className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#7c3aed] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#7c3aed] [&::-webkit-slider-thumb]:cursor-pointer" />
            </div>
            <div>
              <div className="flex justify-between mb-3"><label className="text-sm font-medium text-gray-700">Agent cost per hour</label><span className="text-sm font-mono text-gray-500">${costPerAgent}/hr</span></div>
              <input type="range" min={10} max={75} step={1} value={costPerAgent} onChange={(e) => setCostPerAgent(Number(e.target.value))} className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#7c3aed] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#7c3aed] [&::-webkit-slider-thumb]:cursor-pointer" />
            </div>
            <p className="text-xs text-gray-400 pt-4 border-t border-gray-200">Based on 73% AI resolution rate, $0.08/min AI cost, and 160 work hours per agent per month.</p>
          </div>

          {/* Results */}
          <div className="space-y-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">Estimated Annual Savings</span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl md:text-5xl font-display text-[#7c3aed]">{formatCurrency(annualSavings)}</span>
                <span className="text-gray-400 text-sm">/year</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium">{savingsPercent}% cost reduction</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <DollarSign className="w-5 h-5 text-gray-400 mb-2" />
                <span className="block text-xl font-display text-gray-900">{formatCurrency(monthlySavings)}</span>
                <span className="text-xs text-gray-500">Monthly savings</span>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <Clock className="w-5 h-5 text-gray-400 mb-2" />
                <span className="block text-xl font-display text-gray-900">{hoursFreed.toLocaleString()}h</span>
                <span className="text-xs text-gray-500">Hours freed / month</span>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <Users className="w-5 h-5 text-gray-400 mb-2" />
                <span className="block text-xl font-display text-gray-900">{aiHandledCalls.toLocaleString()}</span>
                <span className="text-xs text-gray-500">AI-handled calls / mo</span>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <TrendingUp className="w-5 h-5 text-gray-400 mb-2" />
                <span className="block text-xl font-display text-gray-900">{humanAgentsNeeded - remainingHumanAgents}</span>
                <span className="text-xs text-gray-500">Fewer agents needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
