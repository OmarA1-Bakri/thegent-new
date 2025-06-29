"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Footer from "../components/footer";
import StickyCTA from "../components/sticky-cta";
export default function AboutPage() {
  const values = [
    {
      icon: "mdi:lightbulb-on",
      title: "Innovation First",
      description: "Constantly seeking new ways to leverage technology for business growth"
    },
    {
      icon: "mdi:handshake",
      title: "Partnership Mindset",
      description: "Building long-term relationships based on mutual success and trust"
    },
    {
      icon: "mdi:target",
      title: "Results Driven",
      description: "Focused on delivering measurable outcomes and exceeding expectations"
    },
    {
      icon: "mdi:school",
      title: "Continuous Learning",
      description: "Staying ahead of industry trends and emerging technologies"
    }
  ];
  const timeline = [
    {
      year: "2024",
      title: "Senior Sales Director",
      company: "AI Financial Solutions",
      description: "Leading global sales strategy for AI-powered financial products"
    },
    {
      year: "2022",
      title: "VP of Partnerships",
      company: "FinTech Innovations",
      description: "Developed strategic partnerships resulting in 200% revenue growth"
    },
    {
      year: "2020",
      title: "Sales Manager",
      company: "Digital Banking Corp",
      description: "Built and led high-performing sales team for digital banking solutions"
    },
