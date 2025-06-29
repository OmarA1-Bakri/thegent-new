"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  author: string;
  publishedAt: any;
  status: string;
}
interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  sector: string;
  client: string;
  featured: boolean;
}
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  submittedAt: any;
  status: string;
}
interface NewsletterSubscriber {
  id: string;
  email: string;
  name: string;
  subscribedAt: any;
  source: string;
}
export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
