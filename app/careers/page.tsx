"use client";

import { useState, useRef } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { VoiceChatWidget } from "@/components/landing/voice-chat-widget";
import { X, MapPin, Clock, Upload, Check } from "lucide-react";

const jobs = [
  {
    id: "ai-engineer",
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    description: "We're looking for an AI/ML Engineer to help build and improve our voice AI models. You'll work on speech recognition, natural language understanding, and voice synthesis to make our agents sound more human.",
    responsibilities: [
      "Design and train voice AI models for real-time conversation",
      "Improve speech-to-text and text-to-speech pipelines",
      "Optimize model latency for sub-500ms response times",
      "Collaborate with product team on new agent capabilities",
      "Research and implement latest advances in conversational AI",
    ],
    requirements: [
      "3+ years experience in ML/AI, preferably NLP or speech",
      "Strong Python skills, experience with PyTorch or TensorFlow",
      "Experience with LLMs (GPT, Claude, etc.) and prompt engineering",
      "Understanding of real-time audio processing",
      "Bonus: experience with voice synthesis (ElevenLabs, etc.)",
    ],
  },
  {
    id: "fullstack-engineer",
    title: "Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (Worldwide)",
    type: "Full-time",
    description: "Join our engineering team to build the VoiceLabs platform. You'll work across the stack — from our React dashboard to our Node.js backend and real-time WebSocket infrastructure.",
    responsibilities: [
      "Build and maintain the VoiceLabs web application",
      "Design and implement REST and WebSocket APIs",
      "Work on real-time call monitoring and analytics dashboards",
      "Optimize performance for high-concurrency scenarios",
      "Write clean, tested, and well-documented code",
    ],
    requirements: [
      "4+ years full-stack experience (React + Node.js/Python)",
      "Experience with TypeScript, Next.js, and PostgreSQL",
      "Understanding of WebSocket and real-time systems",
      "Experience with cloud infrastructure (AWS/GCP)",
      "Bonus: experience with telephony APIs (Twilio, Vonage)",
    ],
  },
  {
    id: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Remote (US/EU)",
    type: "Full-time",
    description: "We need a Product Designer to shape the VoiceLabs experience. You'll design intuitive interfaces for complex voice AI workflows — from agent creation to campaign analytics.",
    responsibilities: [
      "Design end-to-end user flows for the VoiceLabs platform",
      "Create high-fidelity prototypes and design systems",
      "Conduct user research and usability testing",
      "Collaborate closely with engineering and product teams",
      "Define and maintain our design system",
    ],
    requirements: [
      "3+ years product design experience (B2B SaaS preferred)",
      "Strong portfolio showing complex workflow design",
      "Proficiency in Figma and prototyping tools",
      "Experience with design systems and component libraries",
      "Bonus: experience designing for AI/ML products",
    ],
  },
  {
    id: "account-executive",
    title: "Account Executive",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    description: "We're hiring an Account Executive to drive revenue growth. You'll own the full sales cycle — from demo to close — working with mid-market and enterprise companies looking to automate their voice operations.",
    responsibilities: [
      "Run product demos and manage the full sales cycle",
      "Build and maintain a healthy pipeline of qualified opportunities",
      "Negotiate contracts and close deals",
      "Collaborate with marketing on lead generation campaigns",
      "Provide customer feedback to product team",
    ],
    requirements: [
      "3+ years B2B SaaS sales experience",
      "Track record of meeting/exceeding quota",
      "Experience selling to mid-market or enterprise",
      "Strong communication and presentation skills",
      "Bonus: experience in AI, voice, or contact center space",
    ],
  },
];

function JobModal({ job, onClose }: { job: typeof jobs[0]; onClose: () => void }) {
  const [formState, setFormState] = useState({ name: "", email: "", linkedin: "", message: "" });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would upload to an API
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 md:p-10">
          {!isSubmitted ? (
            <>
              {/* Job details */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#7c3aed]/10 text-[#7c3aed] text-xs font-medium rounded-full">
                    {job.department}
                  </span>
                  <span className="text-xs text-gray-400">{job.type}</span>
                </div>
                <h2 className="text-2xl font-display text-gray-900 mb-2">{job.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{job.description}</p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Responsibilities</h3>
                <ul className="space-y-2">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {job.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application form */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-lg font-display text-gray-900 mb-4">Apply for this role</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7c3aed] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7c3aed] transition-colors"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">LinkedIn profile</label>
                    <input
                      type="url"
                      value={formState.linkedin}
                      onChange={(e) => setFormState({ ...formState, linkedin: e.target.value })}
                      className="w-full h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7c3aed] transition-colors"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload CV *</label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-24 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 transition-all cursor-pointer"
                    >
                      {file ? (
                        <>
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-600">{file.name}</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-500">Click to upload PDF, DOC, or DOCX</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Why do you want to join VoiceLabs?</label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7c3aed] transition-colors resize-none"
                      placeholder="Tell us a bit about yourself..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full text-sm font-medium transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#7c3aed] flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-display text-gray-900 mb-3">Application submitted!</h2>
              <p className="text-gray-500 max-w-sm">
                Thanks for applying to the {job.title} role. We&apos;ll review your application and get back to you within a week.
              </p>
              <button
                onClick={onClose}
                className="mt-8 px-6 py-2.5 border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Careers</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 mb-4">
              Join the team building
              <span className="text-gray-400"> the future of voice AI</span>
            </h1>
            <p className="text-lg text-gray-600">
              We&apos;re a small, fast-moving team working on hard problems in conversational AI. Remote-first, async-friendly, and focused on shipping.
            </p>
          </div>

          {/* Perks */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { emoji: "🌍", text: "Remote-first" },
              { emoji: "💰", text: "Competitive salary + equity" },
              { emoji: "🏖️", text: "Unlimited PTO" },
              { emoji: "🚀", text: "Fast-growing startup" },
            ].map((perk) => (
              <div key={perk.text} className="flex items-center gap-3 px-5 py-4 bg-gray-50 rounded-xl">
                <span className="text-xl">{perk.emoji}</span>
                <span className="text-sm font-medium text-gray-700">{perk.text}</span>
              </div>
            ))}
          </div>

          {/* Open positions */}
          <div>
            <h2 className="text-xl font-display text-gray-900 mb-6">Open positions</h2>
            <div className="space-y-3">
              {jobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className="w-full text-left border border-gray-200 rounded-xl p-5 hover:border-[#7c3aed]/30 hover:shadow-sm transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#7c3aed] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                        <span>{job.department}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>{job.location}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <span className="text-sm text-[#7c3aed] font-medium shrink-0">
                      View & Apply →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* No fit CTA */}
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl text-center">
            <h3 className="text-lg font-display text-gray-900 mb-2">Don&apos;t see a fit?</h3>
            <p className="text-sm text-gray-500 mb-4">
              We&apos;re always looking for talented people. Send us your CV and we&apos;ll reach out when something opens up.
            </p>
            <a href="mailto:careers@voicelabs.ai" className="text-sm text-[#7c3aed] font-medium hover:underline">
              careers@voicelabs.ai
            </a>
          </div>
        </div>
      </div>
      <FooterSection />
      <VoiceChatWidget />

      {/* Job Modal */}
      {selectedJob && <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </main>
  );
}
