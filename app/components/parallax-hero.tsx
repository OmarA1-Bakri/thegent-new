"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  useEffect(() => {
    setMounted(true);
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const particlePositions = [
    { left: "10%", top: "20%" },
    { left: "20%", top: "60%" },
    { left: "30%", top: "30%" },
    { left: "40%", top: "80%" },
    { left: "50%", top: "15%" },
    { left: "60%", top: "70%" },
    { left: "70%", top: "40%" },
    { left: "80%", top: "25%" },
    { left: "90%", top: "65%" },
    { left: "15%", top: "85%" },
    { left: "25%", top: "45%" },
    { left: "35%", top: "75%" },
    { left: "45%", top: "35%" },
    { left: "55%", top: "55%" },
    { left: "65%", top: "10%" },
    { left: "75%", top: "90%" },
    { left: "85%", top: "50%" },
    { left: "95%", top: "30%" },
    { left: "5%", top: "70%" },
    { left: "12%", top: "40%" }
  ];
  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,191,255,0.1),transparent_50%)]" />
      </motion.div>
      {}
      {mounted && (
        <div className="absolute inset-0">
          {particlePositions.map((position, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-blue-400' : 'bg-sky-400'
              }`}
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}
      {}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm">
            <Icon icon="lucide:brain-circuit" className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">FinTech & AI Innovation Leader</span>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-6 tracking-tight"
        >
          Omar
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-400 bg-clip-text text-transparent">
            Al-Bakri
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-neutral-400 max-w-3xl mb-8 font-light"
        >
          Shaping the future of finance through AI innovation at{" "}
          <span className="text-cyan-400 font-medium">RTGS.global</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium rounded-full overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">Let&apos;s Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 border border-cyan-400/50 text-white font-medium rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              Explore My Journey
              <Icon icon="mdi:arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {[
            { icon: "lucide:building-2", text: "RTGS.global" },
            { icon: "lucide:code", text: "Python & Java" },
            { icon: "lucide:gamepad-2", text: "Baldur's Gate Fan" },
            { icon: "lucide:rocket", text: "Sci-Fi Enthusiast" }
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/30 backdrop-blur-sm text-xs text-neutral-400"
            >
              <Icon icon={badge.icon} className="w-3 h-3 text-cyan-400" />
              <span>{badge.text}</span>
            </div>
          ))}
        </motion.div>
        {}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-neutral-500 cursor-pointer"
            onClick={scrollToAbout}
          >
            <span className="text-sm">Scroll to explore</span>
            <Icon icon="mdi:arrow" className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}