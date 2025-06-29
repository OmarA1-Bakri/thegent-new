"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  sector: string;
  technologies: string[];
  results: string[];
  imageUrl: string;
  projectUrl: string;
  completedAt: any;
  featured: boolean;
  client: string;
  duration: string;
  role: string;
  slug: string;
}
export default function PortfolioPage() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  useEffect(() => {
    fetchProjects();
  }, [selectedSector, selectedTechnology, showFeaturedOnly]);
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedSector) params.append('sector', selectedSector);
      if (selectedTechnology) params.append('technology', selectedTechnology);
      if (showFeaturedOnly) params.append('featured', 'true');
      
      const response = await fetch(`/api/cosmic-database/portfolio-projects?${params}`);
      const data = await response.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };
  const formatDate = (timestamp: any) => {
    if (!timestamp) return '';
