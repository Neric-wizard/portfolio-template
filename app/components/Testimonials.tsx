"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    company: "TechFlow",
    companyLogo: "🚀",
    content: "Neric built our entire landing page in 3 days. Fast, professional, and exactly what we needed. The code quality was exceptional and he was a pleasure to work with. Will definitely hire him again.",
    rating: 5,
    avatar: "SJ",
    avatarColor: "from-purple-500 to-pink-500",
    avatarBg: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "ScaleUp",
    companyLogo: "📈",
    content: "The admin dashboard he built handles thousands of users daily. Clean code, great communication, delivered ahead of schedule. Neric understood our requirements immediately and executed perfectly.",
    rating: 5,
    avatar: "MC",
    avatarColor: "from-blue-500 to-cyan-500",
    avatarBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
  },
  {
    name: "Amina Diallo",
    role: "Product Lead",
    company: "BuildAfrica",
    companyLogo: "🌍",
    content: "Understood our requirements immediately. The work exceeded expectations and the support was incredible. Neric is now our go-to developer for frontend projects.",
    rating: 5,
    avatar: "AD",
    avatarColor: "from-green-500 to-emerald-500",
    avatarBg: "bg-gradient-to-br from-green-500 to-emerald-500"
  },
  {
    name: "David Okafor",
    role: "Founder",
    company: "PayStack Partners",
    companyLogo: "💳",
    content: "One of the most responsive developers I've worked with. Fixed issues before I even noticed them. His attention to detail is unmatched.",
    rating: 5,
    avatar: "DO",
    avatarColor: "from-orange-500 to-red-500",
    avatarBg: "bg-gradient-to-br from-orange-500 to-red-500"
  }
];

// Trusted by logos row
const trustedBy = [
  { name: "TechFlow", logo: "⚡" },
  { name: "ScaleUp", logo: "📊" },
  { name: "BuildAfrica", logo: "🌍" },
  { name: "PayStack", logo: "💳" },
  { name: "InnovateLabs", logo: "🔬" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">Testimonials</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="section-title-wrapper">
              What Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by founders and developers worldwide
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all group hover:scale-[1.02]"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-200 dark:text-purple-900/30" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{testimonial.role}</span>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                      <span>{testimonial.companyLogo}</span>
                      <span className="text-sm">{testimonial.company}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-8">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedBy.map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform cursor-default"
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}