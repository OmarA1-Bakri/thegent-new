"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fintech", name: "FinTech" },
    { id: "ai", name: "AI Solutions" },
    { id: "strategy", name: "Strategy" },
  ];
  const projects = [
    {
      id: 1,
      title: "Real-Time Payment Gateway",
      category: "fintech",
      description: "Led the development of a next-generation payment processing system handling $1B+ in transactions.",
      image: "https:
      tags: ["Payments", "Real-time", "Scalability"],
      metrics: ["$1B+ Processed", "99.99% Uptime", "50ms Latency"],
      link: "#"
    },
    {
      id: 2,
      title: "AI-Powered Risk Assessment",
      category: "ai",
      description: "Implemented machine learning algorithms to reduce fraud detection time by 85% while improving accuracy.",
      image: "https:
      tags: ["Machine Learning", "Risk Management", "Automation"],
      metrics: ["85% Faster", "94% Accuracy", "60% Cost Reduction"],
      link: "#"
    },
    {
      id: 3,
      title: "Digital Banking Transformation",
      category: "strategy",
      description: "Orchestrated complete digital transformation for a traditional bank, resulting in 300% customer growth.",
      image: "https:
      tags: ["Digital Transformation", "Customer Experience", "Growth"],
      metrics: ["300% Growth", "40% Cost Savings", "95% Satisfaction"],
      link: "#"
    },
    {
      id: 4,
      title: "Cross-Border Payment Solution",
      category: "fintech",
      description: "Designed and launched a revolutionary cross-border payment platform reducing settlement time from days to minutes.",
      image: "https:
      tags: ["Cross-border", "Settlement", "Innovation"],
      metrics: ["Minutes Settlement", "75% Cost Reduction", "150+ Countries"],
      link: "#"
    },
    {
      id: 5,
      title: "Predictive Analytics Platform",
      category: "ai",
      description: "Built an AI platform that predicts market trends with 92% accuracy, enabling proactive business decisions.",
      image: "https:
      tags: ["Predictive Analytics", "Market Intelligence", "Decision Support"],
      metrics: ["92% Accuracy", "Real-time Insights", "25% ROI Increase"],
      link: "#"
    },
    {
      id: 6,
      title: "Enterprise Sales Optimization",
      category: "strategy",
      description: "Revolutionized sales processes using AI and data analytics, resulting in 150% increase in conversion rates.",
      image: "https:
      tags: ["Sales Optimization", "Data Analytics", "Process Improvement"],
      metrics: ["150% Conversion", "35% Faster Cycles", "$50M+ Revenue"],
      link: "#"
    }
  ];
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
      {}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </span>
            <br />
            <span className="text-white">Highlights</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Showcasing transformative projects that demonstrate the power of combining 
            FinTech expertise with AI innovation.
          </p>
        </motion.div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-black/20 backdrop-blur-md border border-cyan-500/20 rounded-full p-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "text-neutral-300 hover:text-cyan-400"
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
        {}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300">
                  {}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon icon="solar:eye-linear" className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    {}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {}
                    <div className="space-y-2 mb-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center space-x-2">
                          <Icon icon="solar:check-circle-linear" className="w-4 h-4 text-cyan-400" />
                          <span className="text-neutral-300 text-xs">{metric}</span>
                        </div>
                      ))}
                    </div>
                    {}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500/30 transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-neutral-300 mb-6">
            Interested in seeing how these solutions can transform your business?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}