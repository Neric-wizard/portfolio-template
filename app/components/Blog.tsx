"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, TrendingUp, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "Building a Modern Admin Dashboard with Next.js 15",
    excerpt: "Learn how I built a production-ready admin dashboard with real-time data, charts, and user management using Next.js, Tailwind, and tRPC.",
    date: "March 20, 2026",
    readTime: "5 min read",
    slug: "building-admin-dashboard-nextjs",
    tags: ["Next.js", "TypeScript", "tRPC"],
    featured: true,
    icon: "🚀"
  },
  {
    title: "Dark Mode in Tailwind: Best Practices",
    excerpt: "A complete guide to implementing dark mode in your Next.js applications. Learn about CSS variables, system preference detection, and smooth transitions.",
    date: "March 18, 2026",
    readTime: "4 min read",
    slug: "dark-mode-tailwind-best-practices",
    tags: ["Tailwind", "CSS", "Next.js"],
    featured: false,
    icon: "🌙"
  },
  {
    title: "Mastering Framer Motion: Advanced Animations",
    excerpt: "Take your animations to the next level with Framer Motion. Learn about spring animations, gesture detection, and scroll-triggered effects.",
    date: "March 15, 2026",
    readTime: "6 min read",
    slug: "mastering-framer-motion",
    tags: ["Framer Motion", "Animations", "React"],
    featured: false,
    icon: "✨"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">
            <BookOpen size={14} className="inline mr-1" />
            Latest Articles
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="section-title-wrapper">
              Thoughts & Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing knowledge and experiences from my development journey
          </p>
        </motion.div>

        {/* Featured Post (first one highlighted) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-0.5">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full font-medium">
                    Featured
                  </span>
                  <span className="text-2xl">{blogPosts[0].icon}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <a
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:gap-3 transition-all"
                  >
                    Read full article
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all"
            >
              {/* Icon Header */}
              <div className="relative h-32 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-6xl">
                {post.icon}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all"
                  >
                    Read
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all group"
          >
            <TrendingUp size={16} className="group-hover:rotate-12 transition" />
            View all articles
            <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}