"use client";

import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Neric-wizard", color: "hover:text-gray-900 dark:hover:text-white" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/n3_neric", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/neric", color: "hover:text-blue-600" },
    { name: "Email", icon: Mail, href: "mailto:hello@neric.dev", color: "hover:text-red-400" },
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Neric
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building modern web experiences with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 transition-all hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Neric-wizard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/n3_neric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-sm"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/neric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition text-sm"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Have a project in mind? Let's work together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105"
            >
              Contact Me
              <Mail size={16} className="group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Neric. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <span>Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>Next.js + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}