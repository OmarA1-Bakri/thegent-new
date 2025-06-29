"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/components/hero-section";
import AboutSection from "@/app/components/about-section";
import ExperienceSection from "@/app/components/experience-section";
import PortfolioSection from "@/app/components/portfolio-section";
import ContactSection from "@/app/components/contact-section";
import Footer from "@/app/components/footer";
import ParticleAnimation from "@/app/components/particle-animation";
import FloatingNav from "@/app/components/floating-nav";
import ReadingProgress from "@/app/components/reading-progress";
import DarkModeToggle from "@/app/components/dark-mode-toggle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <ParticleAnimation />

      {/* Progress Indicator */}
      <ReadingProgress />

      {/* Navigation */}
      <Navbar />
      <FloatingNav />

      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}