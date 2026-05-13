"use client";

import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { BlogPost, getRelatedPosts } from "@/lib/blog-data";

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Headings
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-lg font-semibold mt-10 mb-4">
          {renderInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-display mt-12 mb-6">
          {renderInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // Unordered list items
    if (line.trimStart().startsWith("- ")) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && lines[i].trimStart().startsWith("- ")) {
        listItems.push(
          <li key={key++} className="text-gray-500 leading-relaxed">
            {renderInline(lines[i].trimStart().slice(2))}
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-2 my-4 ml-2">
          {listItems}
        </ul>
      );
      continue;
    }

    // Ordered list items
    if (/^\d+\.\s/.test(line.trimStart())) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trimStart())) {
        listItems.push(
          <li key={key++} className="text-gray-500 leading-relaxed">
            {renderInline(lines[i].trimStart().replace(/^\d+\.\s/, ""))}
          </li>
        );
        i++;
      }
      elements.push(
        <ol key={key++} className="list-decimal list-inside space-y-2 my-4 ml-2">
          {listItems}
        </ol>
      );
      continue;
    }

    // Empty lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraphs
    elements.push(
      <p key={key++} className="text-gray-500 leading-relaxed mb-6">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

function renderInline(text: string): React.ReactNode {
  // Handle bold and inline code
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|`(.+?)`)/g;
  let lastIndex = 0;
  let match;
  let k = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(
        <strong key={k++} className="text-gray-900 font-medium">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      parts.push(
        <code
          key={k++}
          className="text-sm bg-accent px-1.5 py-0.5 rounded font-mono"
        >
          {match[3]}
        </code>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length === 1 ? parts[0] : parts;
}

export function BlogArticle({ post }: { post: BlogPost }) {
  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
      {/* Back link */}
      <a
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
        Back to Blog
      </a>

      {/* Article Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider px-3 py-1 bg-secondary rounded-full">
            {post.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display mb-8 leading-tight">
          {post.title}
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-sm font-medium">
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mb-24">{renderMarkdown(post.content)}</article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-display mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <a
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group block hover-lift"
              >
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10] bg-accent flex items-center justify-center">
                    <div className="text-2xl font-display text-gray-500/20 p-6 text-center leading-tight">
                      {related.title.split(" ").slice(0, 4).join(" ")}
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                      {related.category}
                    </span>
                    <h3 className="text-base font-display mt-2 group-hover:text-gray-500 transition-colors duration-300 leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2">
                      {related.readTime}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
