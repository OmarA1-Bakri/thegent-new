"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function AboutSection() {
  const skills = [
    { name: "FinTech Solutions", icon: "solar:card-linear", level: 95 },
    { name: "AI Strategy", icon: "solar:cpu-bolt-linear", level: 90 },
    { name: "Sales Leadership", icon: "solar:chart-linear", level: 98 },
    { name: "Customer Success", icon: "solar:users-group-rounded-linear", level: 92 },
    { name: "Business Development", icon: "solar:graph-up-linear", level: 88 },
    { name: "Tech Innovation", icon: "solar:lightbulb-linear", level: 85 },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Neon background overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Neon Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="text-white">The Gent</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 text-neutral-300 leading-relaxed"
            >
              <p>
                I&apos;m Omar Al-Bakri, currently leading customer solutions at RTGS.global, 
                where I focus on connecting advanced financial technology with practical 
                business applications. My work centers on helping organizations understand 
                and implement FinTech solutions effectively.
              </p>
              
              <p>
                I&apos;m particularly interested in AI&apos;s potential to improve business 
                processes and decision-making. I work with teams to navigate technology 
                adoption while maintaining focus on measurable outcomes and sustainable growth.
              </p>
              
              <p>
                Outside of work, I enjoy science fiction, gaming (particularly Baldur&apos;s Gate), 
                and staying current with technology trends. Some colleagues have dubbed me the 
                &apos;Binary Baron&apos; - a playful reference to my enthusiasm for digital solutions.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-6 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/omar-al-bakri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
              >
                <Icon icon="mdi:linkedin" className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:omar@example.com"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
              >
                <Icon icon="ic:baseline-email" className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Core Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Icon icon={skill.icon} className="w-5 h-5 text-cyan-400" />
                      <span className="text-neutral-300 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 text-sm font-medium">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 mt-12"
            >
              <div className="text-center p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-neutral-300 text-sm">Years in FinTech</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-neutral-300 text-sm">Successful Projects</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}