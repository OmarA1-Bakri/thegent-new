"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Omar_Al-Bakri_CV.pdf";
    link.click();
  };
  
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: (i * 7.3) % 100, 
      top: (i * 11.7) % 100,
      delay: (i * 0.1) % 2,
      duration: 3 + (i % 3),
    }));
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full opacity-30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              backgroundColor: '#94713b',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1"
              alt="TheGent.uk Logo"
              className="h-16 md:h-20 mx-auto lg:mx-0 object-contain"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
              FinTech & AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sales Leader
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-neutral-300 mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Transforming complex financial technology into sustainable growth opportunities.
            Strategic partnerships in the evolving AI landscape.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Let&apos;s Connect
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="border border-cyan-500/50 text-cyan-400 px-8 py-3 rounded-full font-medium hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Icon icon="material-symbols:download" className="w-5 h-5" />
              <span>Download CV</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-3xl" />
            
            {/* Profile Image - Using your uploaded portrait */}
            <motion.img
              whileHover={{ scale: 1.02 }}
              src="/Untitled design (4).png"
              alt="Omar Al-Bakri"
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-80"
              style={{ backgroundColor: '#94713b' }}
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-60"
              style={{ backgroundColor: '#94713b' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cyan-400 cursor-pointer"
          onClick={() => scrollToSection("#about")}
        >
          <Icon icon="solar:arrow-down-linear" className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}