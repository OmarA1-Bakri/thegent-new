"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
export default function ExperienceSection() {
  const experiences = [
    {
      title: "Customer Solutions Lead",
      company: "RTGS.global",
      period: "2023 - Present",
      description: "Leading customer solutions and driving growth in the global payments technology sector. Specializing in real-time gross settlement systems and cross-border payment innovations.",
      achievements: [
        "Increased customer satisfaction by 40% through strategic solution design",
        "Led implementation of AI-driven customer success initiatives",
        "Managed portfolio of enterprise clients worth $50M+ ARR"
      ],
      icon: "solar:case-linear",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Senior Sales Manager",
      company: "FinTech Solutions Inc.",
      period: "2021 - 2023",
      description: "Drove revenue growth through strategic partnerships and innovative sales methodologies in the financial technology space.",
      achievements: [
        "Exceeded sales targets by 150% for two consecutive years",
        "Built and managed high-performing sales team of 12 professionals",
        "Pioneered AI-assisted sales processes that improved conversion by 35%"
      ],
      icon: "solar:chart-linear",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Business Development Manager",
      company: "Digital Banking Corp",
      period: "2019 - 2021",
      description: "Focused on expanding market presence in the digital banking sector, with emphasis on AI and machine learning solutions.",
      achievements: [
        "Secured partnerships with 25+ financial institutions",
        "Launched innovative AI-powered banking products",
        "Generated $15M in new business revenue"
      ],
      icon: "solar:graph-up-linear",
      color: "from-purple-500 to-pink-600"
    }
  ];
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
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
              Professional
            </span>
            <br />
            <span className="text-white">Journey</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            A track record of transforming complex challenges into growth opportunities 
            across the FinTech and AI landscape.
          </p>
        </motion.div>
        {}
        <div className="relative">
          {}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full hidden lg:block" />
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:space-x-8`}
              >
                {}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-black z-10 hidden lg:block" />
                {}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "" : "lg:text-right"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
                  >
                    {}
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? "" : "lg:justify-end"}`}>
                      <div className={`flex items-center space-x-3 ${index % 2 === 0 ? "" : "lg:flex-row-reverse lg:space-x-reverse"}`}>
                        <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center`}>
                          <Icon icon={exp.icon} className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-cyan-400 font-medium">{exp.period}</span>
                      </div>
                    </div>
                    {}
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-cyan-400 mb-4">{exp.company}</h4>
                    {}
                    <p className="text-neutral-300 mb-6 leading-relaxed">{exp.description}</p>
                    {}
                    <div className="space-y-3">
                      <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * achIndex }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <Icon icon="solar:check-circle-linear" className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-300 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                {}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how my expertise in FinTech and AI can drive your organization&apos;s growth.
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
              Let&apos;s Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}