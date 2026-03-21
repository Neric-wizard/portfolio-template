"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mpqynvvl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      
      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">Get in Touch</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="section-title-wrapper">
              Let's Talk
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 group hover:text-purple-600 transition">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition" />
                  <span>hello@neric.dev</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 group hover:text-purple-600 transition">
                  <MapPin className="w-5 h-5 group-hover:scale-110 transition" />
                  <span>Cameroon</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 group hover:text-purple-600 transition">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition" />
                  <span>+237 XXX XXX XXX</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Follow me</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 transition group">
                  <Github className="w-5 h-5 group-hover:scale-110 transition" />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 transition group">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition" />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 transition group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                />
              </div>
              <div>
                <input 
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2 group"
              >
                {status === "loading" ? "Sending..." : (
                  <>
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 transition" />
                  </>
                )}
              </button>
              
              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center text-sm">Message sent! I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}