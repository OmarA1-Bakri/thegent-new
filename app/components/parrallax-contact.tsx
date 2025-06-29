"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
export default function ParallaxContact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
  };
  const contactMethods = [
    {
      icon: "mdi:email",
      label: "Email",
      value: "omar@rtgs.global",
      href: "mailto:omar@rtgs.global"
    },
    {
      icon: "mdi:linkedin",
      label: "LinkedIn",
      value: "Connect with me",
      href: "https:
    },
    {
      icon: "lucide:building-2",
      label: "RTGS.global",
      value: "Customer Solutions",
      href: "https:
    }
  ];
  return (
    <div ref={containerRef} className="relative min-h-screen py-20">
      {}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 bg-gradient-to-t from-black via-neutral-900 to-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.05),transparent_50%)]" />
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Let&apos;s Create
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-400 bg-clip-text text-transparent">
              The Future Together
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge FinTech and AI solutions? 
            Let&apos;s start the conversation.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm text-neutral-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 bg-neutral-900/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-sm text-neutral-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 bg-neutral-900/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-sm text-neutral-400 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-4 bg-neutral-900/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none transition-all duration-300 backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium rounded-xl overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <Icon icon="mdi:arrow" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </form>
          </motion.div>
          {}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Get in touch</h3>
              <p className="text-neutral-400 leading-relaxed">
                Whether you&apos;re looking to implement AI solutions, optimize your FinTech 
                operations, or explore new opportunities in financial technology, I&apos;m here 
                to help turn your vision into reality.
              </p>
            </div>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon icon={method.icon} className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{method.label}</div>
                    <div className="text-neutral-400 text-sm">{method.value}</div>
                  </div>
                  <Icon icon="mdi:arrow" className="w-5 h-5 text-neutral-600 ml-auto group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
            {}
            <div className="relative mt-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 opacity-20"
              >
                <Icon icon="lucide:sparkle" className="w-12 h-12 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}