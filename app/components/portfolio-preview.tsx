"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function PortfolioPreview() {
  const projects = [
    {
      title: "AI-Powered Trading Platform",
      category: "FinTech",
      description: "Led the sales strategy for a revolutionary AI trading platform that increased client ROI by 300%",
      image: "https:
      tags: ["AI", "Trading", "SaaS"],
      metrics: "300% ROI Increase"
    },
    {
      title: "Digital Banking Solution",
      category: "Banking",
      description: "Spearheaded partnerships for a digital banking platform serving 1M+ users",
      image: "https:
      tags: ["Digital Banking", "Mobile", "API"],
      metrics: "1M+ Users"
    },
    {
      title: "Blockchain Payment Gateway",
      category: "Payments",
      description: "Drove adoption of blockchain payment solutions across 50+ enterprise clients",
      image: "https:
      tags: ["Blockchain", "Payments", "Enterprise"],
      metrics: "50+ Enterprises"
    }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-poppins">
            Featured <span className="text-[#D4AF37]">Portfolio</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
            Explore some of my most impactful projects where I&apos;ve driven innovation 
            and delivered exceptional results in FinTech and AI.
          </p>
        </motion.div>
        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                {}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                      {project.metrics}
                    </span>
                  </div>
                </div>
                {}
                <div className="p-6">
                  <h3 className="text-white font-medium text-lg mb-2 group-hover:text-[#D4AF37] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 text-neutral-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center bg-[#D4AF37] text-black px-8 py-4 rounded-full font-medium hover:bg-yellow-500 transition-colors duration-200"
          >
            View Full Portfolio
            <Icon icon="mdi:arrow-right" className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}