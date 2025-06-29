"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      
      const showCTA = scrollPosition > heroHeight && 
                     scrollPosition < documentHeight - windowHeight - 200;
      
      setIsVisible(showCTA);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2 group"
          >
            <span className="hidden sm:inline">Let&apos;s Talk</span>
            <Icon 
              icon="solar:arrow-right-linear" 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
            />
          </motion.button>
          
          {}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-ping opacity-20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}