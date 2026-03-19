"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
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
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 text-purple-600" />
                <span>hello@neric.dev</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span>Cameroon</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5 text-purple-600" />
                <span>+237 XXX XXX XXX</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="#" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="#" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-4">
              <div>
                <input 
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <input 
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <textarea 
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}