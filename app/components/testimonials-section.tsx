"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, FinanceFlow",
      company: "FinanceFlow",
      content: "Omar's strategic vision and deep understanding of AI transformed our sales approach. His ability to translate complex technology into business value is unmatched.",
      image: "https:
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, TechBank Solutions",
      company: "TechBank Solutions",
      content: "Working with Omar was a game-changer. He helped us scale from startup to $50M ARR through his innovative sales strategies and partnership development.",
      image: "https:
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Innovation, Global Bank",
      company: "Global Bank",
      content: "Omar's expertise in FinTech and AI is exceptional. He guided our digital transformation initiative, resulting in 40% improved operational efficiency.",
      image: "https:
      rating: 5
    }
  ];
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-poppins">
            Client <span className="text-[#D4AF37]">Testimonials</span>
          </h2>
          <p className="text-neutral-300 text-lg">
            What industry leaders say about working with me
          </p>
        </motion.div>
        {}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            >
              {}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                  <Icon icon="mdi:format-quote-close" className="w-6 h-6 text-[#D4AF37]" />
                </div>
              </div>
              {}
              <blockquote className="text-white text-xl md:text-2xl font-light text-center leading-relaxed mb-8">
                &ldquo;{testimonials[currentTestimonial].content}&rdquo;
              </blockquote>
              {}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Icon key={i} icon="mdi:star" className="w-5 h-5 text-[#D4AF37]" />
                ))}
              </div>
              {}
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-center">
                  <div className="text-white font-medium">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-neutral-400 text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-[#D4AF37] text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Icon icon="mdi:chevron-left" className="w-5 h-5 text-white" />
            </button>
            {}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? "bg-[#D4AF37]" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Icon icon="mdi:chevron-right" className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}