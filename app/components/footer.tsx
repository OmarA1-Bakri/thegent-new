"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      href: "https:
    },
    {
      name: "Email",
      icon: "ic:baseline-email",
      href: "mailto:omar@example.com",
    },
    {
      name: "GitHub",
      icon: "mdi:github",
      href: "#",
    },
  ];
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                thegent.uk
              </h3>
              <p className="text-neutral-300 leading-relaxed max-w-md">
                FinTech & AI Sales Leader focused on transforming complex technology into 
                practical growth opportunities. Strategic partnerships in the evolving digital landscape.
              </p>
            </div>
            {}
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400/70 backdrop-blur-sm mb-6">
              <Icon icon="solar:cpu-bolt-linear" className="w-3 h-3 mr-1" />
              Binary Baron
            </div>
            {}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : "_self"}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : ""}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon icon="ic:baseline-email" className="w-4 h-4 text-cyan-400" />
                <span className="text-neutral-300 text-sm">omar@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon="solar:phone-linear" className="w-4 h-4 text-cyan-400" />
                <span className="text-neutral-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon="solar:map-point-linear" className="w-4 h-4 text-cyan-400" />
                <span className="text-neutral-300 text-sm">Global Remote</span>
              </div>
            </div>
            {}
            <div className="mt-6 p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Available for Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-cyan-500/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} thegent.uk. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-neutral-400 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-neutral-400 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                Terms of Service
              </button>
              
              {}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
              >
                <Icon icon="solar:arrow-up-linear" className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      {}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
    </footer>
  );
}