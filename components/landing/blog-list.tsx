"use client";

import { useState } from "react";
import { blogPosts } from "@/lib/blog-data";
import { ArrowRight } from "lucide-react";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
      {/* Header */}
      <div className="mb-12">
        <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider block mb-4">Blog</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-gray-900 mb-4">
          Insights & Updates
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Thoughts on AI voice agents, automation, and the future of customer
          experience from the VoiceLabs team.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-[#7c3aed] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {filtered.length > 0 && (
        <a
          href={`/blog/${filtered[0].slug}`}
          className="group block mb-12 border border-gray-200 rounded-2xl overflow-hidden hover:border-[#7c3aed]/30 hover:shadow-sm transition-all"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-[#7c3aed]/10 to-[#a78bfa]/10 flex items-center justify-center">
              <div className="text-4xl md:text-5xl font-display text-[#7c3aed]/20 p-8 md:p-12 text-center leading-tight">
                {filtered[0].title.split(" ").slice(0, 3).join(" ")}
              </div>
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#7c3aed]/10 text-[#7c3aed] text-xs font-medium rounded-full">
                  {filtered[0].category}
                </span>
                <span className="text-xs text-gray-400">{filtered[0].readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-display text-gray-900 mb-3 group-hover:text-[#7c3aed] transition-colors">
                {filtered[0].title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {filtered[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  <span className="text-gray-900 font-medium">{filtered[0].author.name}</span>
                  {" · "}
                  {new Date(filtered[0].date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#7c3aed] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        </a>
      )}

      {/* Post Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.slice(1).map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="border border-gray-200 rounded-2xl overflow-hidden h-full flex flex-col hover:border-[#7c3aed]/30 hover:shadow-sm transition-all">
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-2xl font-display text-gray-300 p-6 text-center leading-tight">
                  {post.title.split(" ").slice(0, 4).join(" ")}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-mono text-[#7c3aed] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#7c3aed] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{post.author.name}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
