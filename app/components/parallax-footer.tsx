"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import TextRevealEffect from "./text-reveal-effect";
export default function ParallaxFooter() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const socialLinks = [
    { icon: "mdi:linkedin", href: "https:
    { icon: "mdi:twitter", href: "https:
    { icon: "mdi:github", href: "https:
    { icon: "mdi:email", href: "mailto:omar@example.com", label: "Email" }
  ];
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    { label: "Portfolio", href: "#portfolio" }
  ];
  
  const particlePositions = [
    { left: "15%", top: "25%" },
    { left: "35%", top: "60%" },
    { left: "55%", top: "30%" },
    { left: "75%", top: "70%" },
    { left: "25%", top: "80%" },
    { left: "65%", top: "15%" },
    { left: "85%", top: "45%" },
    { left: "45%", top: "85%" },
    { left: "5%", top: "55%" },
    { left: "95%", top: "35%" }
  ];
  return (
    <footer className="relative bg-black border-t border-neutral-800">
      {}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-900/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="h-40 mb-16">
            <TextRevealEffect className="h-full">
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-center">
                OMAR AL-BAKRI
              </h1>
            </TextRevealEffect>
          </div>
        </div>
      </div>
      {}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium text-white mb-4">About Omar</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">
              A forward-thinking FinTech & AI sales leader driving innovation in 
              financial technology and artificial intelligence. Transforming businesses 
              through strategic technology implementation.
            </p>
          </motion.div>
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-neutral-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium text-white mb-4">Connect</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-neutral-400 text-sm">
              Ready to innovate together? Let&apos;s connect and explore the possibilities.
            </p>
          </motion.div>
        </div>
        {}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-neutral-500 text-sm">
            © 2024 Omar Al-Bakri. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-neutral-500 text-sm">
            <a href="#privacy" className="hover:text-yellow-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-yellow-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
      {}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particlePositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + (i % 2),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}
    </footer>
  );
}