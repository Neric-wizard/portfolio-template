"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, MapPin, Phone, Send, Globe, Clock } from "lucide-react";
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

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@neric.dev", href: "mailto:hello@neric.dev", color: "hover:text-purple-600" },
    { icon: MapPin, label: "Location", value: "Yaoundé, Cameroon", color: "hover:text-red-500" },
    { icon: Phone, label: "Phone", value: "+237 6XX XXX XXX", href: "tel:+2376XXXXXXXX", color: "hover:text-green-500" },
    { icon: Globe, label: "Timezone", value: "WAT (UTC+1)", color: "hover:text-blue-500" },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", color: "hover:text-yellow-500" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Neric-wizard", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: Twitter, href: "https://twitter.com/n3_neric", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "https://linkedin.com/in/neric", label: "LinkedIn", color: "hover:text-blue-600" },
  ];

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
            Have a project in mind? Let's discuss how I can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className={`text-gray-900 dark:text-white font-medium ${info.color} transition`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className={`text-gray-900 dark:text-white font-medium ${info.color} transition`}>
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Find me on</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-6">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127639.71532632874!2d11.464305352312024!3d3.848031897128381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a7dc33cd1%3A0x8a8fc6e0a2c9f5e!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                  title="Yaoundé, Cameroon Map"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg">
                  📍 Yaoundé, Cameroon
                </div>
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
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <input 
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2 group"
                >
                  {status === "loading" ? "Sending..." : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 transition" />
                    </>
                  )}
                </button>
                
                {status === "success" && (
                  <p className="text-green-600 dark:text-green-400 text-center text-sm flex items-center justify-center gap-1">
                    ✓ Message sent! I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 dark:text-red-400 text-center text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}