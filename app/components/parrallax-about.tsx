"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
export default function ParallaxAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "RTGS.global", label: "Current Role" },
    { number: "AI & FinTech", label: "Specialization" },
    { number: "Global", label: "Impact Reach" }
  ];
  const interests = [
    { icon: "lucide:brain-circuit", label: "AI Innovation" },
    { icon: "lucide:gamepad-2", label: "Gaming" },
    { icon: "lucide:rocket", label: "Sci-Fi Enthusiast" },
    { icon: "lucide:code", label: "Python & Java" }
  ];
  return (
    <div ref={containerRef} className="relative min-h-screen py-20">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,255,255,0.05),transparent_50%)]" />
      </motion.div>
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
                About
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Omar Al-Bakri
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-neutral-300 leading-relaxed"
            >
              <p className="text-lg">
                I&apos;m Omar Al-Bakri, currently leading customer solutions at <span className="text-cyan-400 font-medium">RTGS.global</span>, where I&apos;m helping shape the future of finance. With over 15 years of experience in sales, FinTech, and customer engagement, I&apos;ve built a career on creating impactful solutions and fostering strong partnerships.
              </p>
              
              <p className="text-lg">
                But my interests go beyond the traditional. I&apos;m fascinated by the potential of <span className="text-blue-400 font-medium">AI to transform our world</span>. It&apos;s not just a tool; it&apos;s a revolution. To stay ahead of the curve, I&apos;ve been diving deep into cloud computing, Python, and Java programming.
              </p>
              
              <p className="text-lg">
                This website is a glimpse into my journey – a mix of professional highlights, personal insights, and a passion for innovation. From closing major deals to building AI-powered payment systems, I&apos;m driven by a desire to create and explore. I believe technology, used wisely, can help us solve some of the world&apos;s biggest challenges.
              </p>
              
              <p className="text-lg">
                Outside of work, I&apos;m a sci-fi fan, a gamer (Baldur&apos;s Gate, anyone?), and a tech enthusiast. When I&apos;m not building the future of finance, I&apos;m exploring new technologies and connecting with others who share my passion for progress.
              </p>
              
              <p className="text-lg text-cyan-400">
                Let&apos;s connect. Whether you&apos;re interested in FinTech, AI, or just want to chat about the latest tech trends, I&apos;d love to hear from you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm">
                  <Icon icon={interest.icon} className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-neutral-300">{interest.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group relative p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="text-2xl md:text-3xl font-light text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-neutral-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <Icon icon="lucide:quote" className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-neutral-300 italic leading-relaxed">
                    "Technology, used wisely, can help us solve some of the world&apos;s biggest challenges."
                  </p>
                  <p className="text-cyan-400 text-sm mt-2">— My driving philosophy</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Icon icon="lucide:sparkle" className="w-8 h-8 text-cyan-400" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Icon icon="lucide:sparkle" className="w-6 h-6 text-blue-400" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}