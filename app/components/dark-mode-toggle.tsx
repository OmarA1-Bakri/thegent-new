"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true); 
  useEffect(() => {
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);
  useEffect(() => {
    
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        <Icon 
          icon={isDark ? "solar:moon-linear" : "solar:sun-linear"} 
          className="w-6 h-6" 
        />
      </motion.div>
    </motion.button>
  );
}