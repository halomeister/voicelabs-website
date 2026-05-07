"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Human-like Voice Agents",
    description: "Create AI agents with natural speech, custom accents, and personality. Train them instantly with your data and deploy on a no-code platform.",
    visual: "ai",
  },
  {
    number: "02",
    title: "Inbound & Outbound Calls",
    description: "Handle outbound sales calls, answer inbound support queries, and schedule appointments around the clock. Upload contacts, set a schedule, and go.",
    visual: "deploy",
  },
  {
    number: "03",
    title: "Engage & Convert",
    description: "Automate lead qualification and follow-ups, boost event attendance with AI invitations, and provide 24/7 customer support that never sleeps.",
    visual: "collab",
  },
  {
    number: "04",
    title: "Automate Tasks & Actions",
    description: "Send SMS, emails, and WhatsApp messages during calls. Transfer to live agents, collect data via webhooks, and schedule appointments with calendar invites.",
    visual: "security",
  },
];

{/* 01 — Voice Waveform: pulsing audio wave representing human-like voice */}
function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Waveform bars */}
      {[...Array(24)].map((_, i) => {
        const x = 20 + i * 7;
        const baseHeight = 8 + Math.sin(i * 0.6) * 20 + Math.cos(i * 0.9) * 15;
        return (
          <rect
            key={i}
            x={x}
            y={80}
            width="4"
            rx="2"
            fill="currentColor"
            opacity="0.6"
          >
            <animate
              attributeName="height"
              values={`${baseHeight * 0.3};${baseHeight};${baseHeight * 0.5};${baseHeight * 0.8};${baseHeight * 0.3}`}
              dur={`${1.5 + (i % 5) * 0.2}s`}
              begin={`${i * 0.05}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values={`${80 - baseHeight * 0.15};${80 - baseHeight * 0.5};${80 - baseHeight * 0.25};${80 - baseHeight * 0.4};${80 - baseHeight * 0.15}`}
              dur={`${1.5 + (i % 5) * 0.2}s`}
              begin={`${i * 0.05}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.5;0.7;0.3"
              dur={`${1.5 + (i % 5) * 0.2}s`}
              begin={`${i * 0.05}s`}
              repeatCount="indefinite"
            />
          </rect>
        );
      })}
      {/* Mic icon */}
      <circle cx="100" cy="140" r="6" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

{/* 02 — Phone with bidirectional arrows: inbound & outbound calls */}
function DeployVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Phone body */}
      <rect x="75" y="30" width="50" height="100" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="80" y="45" width="40" height="65" rx="2" fill="currentColor" opacity="0.05" />
      <circle cx="100" cy="122" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* Screen notch */}
      <rect x="90" y="34" width="20" height="4" rx="2" fill="currentColor" opacity="0.2" />

      {/* Outbound arrow (going right) */}
      <line x1="130" y1="60" x2="170" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </line>
      <polygon points="170,55 180,60 170,65" fill="currentColor" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </polygon>
      <text x="175" y="52" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.4">OUT</text>

      {/* Inbound arrow (coming left) */}
      <line x1="70" y1="90" x2="30" y2="90" stroke="currentColor" strokeWidth="2" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="1s" repeatCount="indefinite" />
      </line>
      <polygon points="30,85 20,90 30,95" fill="currentColor" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="1s" repeatCount="indefinite" />
      </polygon>
      <text x="15" y="82" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.4">IN</text>

      {/* Pulse rings around phone */}
      <rect x="75" y="30" width="50" height="100" rx="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="x" values="75;65" dur="2s" repeatCount="indefinite" />
        <animate attributeName="y" values="30;20" dur="2s" repeatCount="indefinite" />
        <animate attributeName="width" values="50;70" dur="2s" repeatCount="indefinite" />
        <animate attributeName="height" values="100;120" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

{/* 03 — Conversion funnel: lead → qualified → converted */}
function CollabVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Funnel shape */}
      <path d="M 40 25 L 160 25 L 130 70 L 130 70" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <path d="M 160 25 L 130 70 L 120 100" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <path d="M 40 25 L 70 70 L 80 100" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <line x1="70" y1="70" x2="130" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeDasharray="3 3" />
      <line x1="80" y1="100" x2="120" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeDasharray="3 3" />

      {/* Labels */}
      <text x="100" y="18" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="currentColor" opacity="0.4">LEADS</text>
      <text x="145" y="68" fontSize="7" fontFamily="monospace" fill="currentColor" opacity="0.4">QUALIFIED</text>
      <text x="138" y="98" fontSize="7" fontFamily="monospace" fill="currentColor" opacity="0.4">CONVERTED</text>

      {/* Animated dots falling through funnel */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} r="3" fill="currentColor" opacity="0">
          <animate
            attributeName="cx"
            values={`${60 + i * 20};${80 + i * 8};100`}
            dur="3s"
            begin={`${i * 0.6}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="28;70;120"
            dur="3s"
            begin={`${i * 0.6}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;0.7;0.7;0"
            dur="3s"
            begin={`${i * 0.6}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="3;3;4"
            dur="3s"
            begin={`${i * 0.6}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Checkmark at bottom */}
      <g transform="translate(100, 135)">
        <circle r="10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <path d="M -4 0 L -1 3 L 5 -3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}

{/* 04 — Connected action grid: SMS, email, calendar, webhook */}
function SecurityVisual() {
  const nodes = [
    { x: 55, y: 40, label: "SMS" },
    { x: 145, y: 40, label: "Email" },
    { x: 55, y: 110, label: "Cal" },
    { x: 145, y: 110, label: "Hook" },
  ];

  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Center hub */}
      <circle cx="100" cy="75" r="14" fill="currentColor" opacity="0.1">
        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="75" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <text x="100" y="78" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.6">AI</text>

      {/* Connection lines from center to each node */}
      {nodes.map((node, i) => (
        <line
          key={`line-${i}`}
          x1="100"
          y1="75"
          x2={node.x}
          y2={node.y}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.2"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;-7"
            dur="1s"
            begin={`${i * 0.25}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.15;0.4;0.15"
            dur="2s"
            begin={`${i * 0.5}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}

      {/* Animated data packets traveling along lines */}
      {nodes.map((node, i) => (
        <circle key={`packet-${i}`} r="2.5" fill="currentColor" opacity="0">
          <animate
            attributeName="cx"
            values={`100;${node.x}`}
            dur="1.5s"
            begin={`${i * 0.7}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values={`75;${node.y}`}
            dur="1.5s"
            begin={`${i * 0.7}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;0.8;0"
            dur="1.5s"
            begin={`${i * 0.7}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Node boxes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <rect
            x={node.x - 20}
            y={node.y - 14}
            width="40"
            height="28"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.2;0.5;0.2"
              dur="2.5s"
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
            />
          </rect>
          <text
            x={node.x}
            y={node.y + 3}
            textAnchor="middle"
            fontSize="9"
            fontFamily="monospace"
            fill="currentColor"
            opacity="0.5"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "deploy":
      return <DeployVisual />;
    case "ai":
      return <AIVisual />;
    case "collab":
      return <CollabVisual />;
    case "security":
      return <SecurityVisual />;
    default:
      return <DeployVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
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

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Capabilities
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Build AI voice assistants
            <br />
            <span className="text-muted-foreground">that work for you 24/7.</span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
