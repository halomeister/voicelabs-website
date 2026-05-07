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
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Calculations
  const totalMinutesPerMonth = callsPerMonth * avgHandleTime;
  const totalHoursPerMonth = totalMinutesPerMonth / 60;
  const humanAgentsNeeded = Math.ceil(totalHoursPerMonth / 160); // 160 work hours/month
  const currentMonthlyCost = humanAgentsNeeded * costPerAgent * 160;
  const aiResolutionRate = 0.73;
  const aiCostPerMinute = 0.08;
  const aiHandledCalls = Math.round(callsPerMonth * aiResolutionRate);
  const humanHandledCalls = callsPerMonth - aiHandledCalls;
  const aiCost = aiHandledCalls * avgHandleTime * aiCostPerMinute;
  const remainingHumanHours = (humanHandledCalls * avgHandleTime) / 60;
  const remainingHumanAgents = Math.ceil(remainingHumanHours / 160);
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
    <section
      ref={sectionRef}
      id="roi-calculator"
      className="relative py-32 lg:py-40 border-t border-foreground/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`max-w-3xl mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            ROI Calculator
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6">
            See how much you
            <br />
            <span className="text-stroke">could save</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Adjust the sliders to match your current call operations and see the potential impact of AI voice agents.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-16 lg:gap-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Sliders */}
          <div className="space-y-10">
            {/* Calls per month */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium">Monthly call volume</label>
                <span className="font-mono text-sm text-muted-foreground">
                  {callsPerMonth.toLocaleString()} calls
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={100000}
                step={500}
                value={callsPerMonth}
                onChange={(e) => setCallsPerMonth(Number(e.target.value))}
                className="w-full h-1 bg-foreground/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                <span>500</span>
                <span>100K</span>
              </div>
            </div>

            {/* Average handle time */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium">Avg. call duration</label>
                <span className="font-mono text-sm text-muted-foreground">
                  {avgHandleTime} min
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                step={1}
                value={avgHandleTime}
                onChange={(e) => setAvgHandleTime(Number(e.target.value))}
                className="w-full h-1 bg-foreground/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                <span>1 min</span>
                <span>20 min</span>
              </div>
            </div>

            {/* Cost per agent hour */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium">Agent cost per hour</label>
                <span className="font-mono text-sm text-muted-foreground">
                  ${costPerAgent}/hr
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={75}
                step={1}
                value={costPerAgent}
                onChange={(e) => setCostPerAgent(Number(e.target.value))}
                className="w-full h-1 bg-foreground/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                <span>$10</span>
                <span>$75</span>
              </div>
            </div>

            {/* Assumptions note */}
            <div className="pt-6 border-t border-foreground/10">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Based on 73% AI resolution rate, $0.08/min AI cost, and 160 work hours per agent per month.
                Actual results may vary based on use case and complexity.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Big savings number */}
            <div className="border border-foreground/10 rounded-2xl p-8 lg:p-10">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-3">
                Estimated Annual Savings
              </span>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl lg:text-6xl font-display">
                  {formatCurrency(annualSavings)}
                </span>
                <span className="text-lg text-muted-foreground font-mono">
                  /year
                </span>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium">
                  {savingsPercent}% cost reduction
                </span>
              </div>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-foreground/10 rounded-2xl p-6">
                <DollarSign className="w-5 h-5 text-muted-foreground mb-3" />
                <span className="block text-2xl font-display">
                  {formatCurrency(monthlySavings)}
                </span>
                <span className="text-xs text-muted-foreground mt-1 block">
                  Monthly savings
                </span>
              </div>
              <div className="border border-foreground/10 rounded-2xl p-6">
                <Clock className="w-5 h-5 text-muted-foreground mb-3" />
                <span className="block text-2xl font-display">
                  {hoursFreed.toLocaleString()}h
                </span>
                <span className="text-xs text-muted-foreground mt-1 block">
                  Hours freed / month
                </span>
              </div>
              <div className="border border-foreground/10 rounded-2xl p-6">
                <Users className="w-5 h-5 text-muted-foreground mb-3" />
                <span className="block text-2xl font-display">
                  {aiHandledCalls.toLocaleString()}
                </span>
                <span className="text-xs text-muted-foreground mt-1 block">
                  AI-handled calls / mo
                </span>
              </div>
              <div className="border border-foreground/10 rounded-2xl p-6">
                <TrendingUp className="w-5 h-5 text-muted-foreground mb-3" />
                <span className="block text-2xl font-display">
                  {humanAgentsNeeded - remainingHumanAgents}
                </span>
                <span className="text-xs text-muted-foreground mt-1 block">
                  Fewer agents needed
                </span>
              </div>
            </div>

            {/* Comparison bar */}
            <div className="border border-foreground/10 rounded-2xl p-6 lg:p-8">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-4">
                Cost Comparison
              </span>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Current cost</span>
                    <span className="font-mono">{formatCurrency(currentMonthlyCost)}/mo</span>
                  </div>
                  <div className="h-3 bg-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full bg-foreground/40 rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">With VoiceLabs</span>
                    <span className="font-mono">{formatCurrency(totalAiCost)}/mo</span>
                  </div>
                  <div className="h-3 bg-foreground/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-foreground rounded-full transition-all duration-700"
                      style={{
                        width: currentMonthlyCost > 0
                          ? `${Math.max(5, (totalAiCost / currentMonthlyCost) * 100)}%`
                          : "5%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
