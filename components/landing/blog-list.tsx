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
      <div className="mb-16">
        <p className="text-sm font-mono text-gray-500 tracking-wider uppercase mb-4">
          Blog
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-6">
          Insights & Updates
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl">
          Thoughts on AI voice agents, automation, and the future of customer
          experience from the VoiceLabs team.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gray-900 text-background"
                : "bg-secondary text-gray-500 hover:bg-accent hover:text-gray-900"
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
          className="group block mb-16 border border-gray-200 rounded-2xl overflow-hidden hover-lift"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-[4/3] md:aspect-auto bg-accent flex items-center justify-center">
              <div className="text-6xl font-display text-gray-500/20 p-12 text-center">
                {filtered[0].title.split(" ").slice(0, 3).join(" ")}
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  {filtered[0].category}
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="text-xs text-gray-500">
                  {filtered[0].readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display mb-4 group-hover:text-gray-500 transition-colors duration-300">
                {filtered[0].title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                {filtered[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="text-gray-900">{filtered[0].author.name}</span>
                  {" · "}
                  {new Date(filtered[0].date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>
        </a>
      )}

      {/* Post Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.slice(1).map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block hover-lift"
          >
            <div className="border border-gray-200 rounded-2xl overflow-hidden h-full flex flex-col">
              <div className="aspect-[16/10] bg-accent flex items-center justify-center">
                <div className="text-3xl font-display text-gray-500/20 p-8 text-center leading-tight">
                  {post.title.split(" ").slice(0, 4).join(" ")}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span className="text-xs text-gray-500">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-display mb-3 group-hover:text-gray-500 transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-900/5">
                  <span className="text-xs text-gray-500">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-gray-500">
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
