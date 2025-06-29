"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
export default function ParallaxExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const experiences = [
    {
      year: "2024",
      title: "Customer Solutions Lead",
      company: "RTGS.global",
      description: "Leading customer solutions at RTGS.global, helping shape the future of finance through innovative payment systems and AI-powered solutions. Driving digital transformation initiatives across global markets.",
      achievements: ["Global payment solutions", "AI integration", "Customer success leadership"],
      icon: "lucide:building-2"
    },
    {
      year: "2020-2023",
      title: "FinTech Sales Director",
      company: "Financial Innovation Hub",
      description: "Spearheaded sales strategies for emerging financial technologies, focusing on AI applications in payment systems and risk management. Built strong partnerships across the FinTech ecosystem.",
      achievements: ["AI-powered payment systems", "Strategic partnerships", "Revenue growth"],
      icon: "lucide:trending-up"
    },
    {
      year: "2015-2020",
      title: "Senior Sales Manager",
      company: "Digital Finance Solutions",
      description: "Developed comprehensive sales strategies for financial technology products. Specialized in customer engagement and building long-term relationships with enterprise clients.",
      achievements: ["Enterprise client acquisition", "Customer engagement", "Team leadership"],
      icon: "lucide:users"
    },
    {
      year: "Present",
      title: "AI & Tech Enthusiast",
      company: "Personal Development",
      description: "Continuously learning and exploring cloud computing, Python, and Java programming. Passionate about the potential of AI to transform our world and solve global challenges.",
      achievements: ["Python & Java programming", "Cloud computing", "AI research"],
      icon: "lucide:brain-circuit"
    }
  ];
  return (
    <div ref={containerRef} className="relative min-h-screen py-20">
      {}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,255,255,0.06),transparent_50%)]" />
      </motion.div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Professional
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            15+ years of innovation, leadership, and transformative results in FinTech and AI
          </p>
        </motion.div>
        {}
        <div className="relative">
          {}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform md:-translate-x-1/2" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform md:-translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75" />
              </div>
              {}
              <motion.div
                style={{ rotateX }}
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="group relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <Icon icon={exp.icon} className="w-6 h-6 text-cyan-400" />
                        <span className="text-2xl font-light text-cyan-400">{exp.year}</span>
                      </div>
                      <div className="h-px bg-neutral-700 flex-1" />
                    </div>
                    
                    <h3 className="text-2xl font-medium text-white mb-2">{exp.title}</h3>
                    <p className="text-cyan-400 mb-4">{exp.company}</p>
                    <p className="text-neutral-400 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Icon icon="lucide:sparkle" className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-neutral-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group">
            <span className="text-white">Ready to innovate together?</span>
            <Icon icon="mdi:arrow" className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}