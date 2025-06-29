"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  author: string;
  publishedAt: any;
  readTime: number;
  slug: string;
}
export default function InsightsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');
  useEffect(() => {
    fetchPosts();
  }, [selectedTag, searchTerm]);
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedTag) params.append('tag', selectedTag);
      if (searchTerm) params.append('search', searchTerm);
      
      const response = await fetch(`/api/cosmic-database/blog-posts?${params}`);
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/cosmic-database/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'insights-page' })
      });
      
      const data = await response.json();
      if (data.success) {
        setNewsletterStatus('success');
        setEmail('');
      } else {
        setNewsletterStatus('error');
      }
    } catch (error) {
      setNewsletterStatus('error');
    }
  };
  const formatDate = (timestamp: any) => {
    if (!timestamp) return '';
    
    try {
      if (timestamp && timestamp._seconds) {
        return new Date(timestamp._seconds * 1000).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } else if (typeof timestamp === 'string') {
        return new Date(timestamp).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
      return '';
    } catch (error) {
      return '';
    }
  };
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-light text-white mb-6"
          >
            Insights & <span className="text-[#D4AF37]">Perspectives</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto font-light"
          >
            Exploring the intersection of technology, finance, and innovation. 
            Thoughts on building the future of FinTech.
          </motion.p>
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8"
          >
            <div className="relative flex-1">
              <Icon icon="mdi:magnify" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
              />
            </div>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
            >
              <option value="">All Topics</option>
              {allTags.map(tag => (
                <option key={tag} value={tag} className="bg-neutral-800">{tag}</option>
              ))}
            </select>
          </motion.div>
        </div>
      </section>
      {}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 animate-pulse">
                  <div className="h-4 bg-white/10 rounded mb-4"></div>
                  <div className="h-20 bg-white/10 rounded mb-4"></div>
                  <div className="h-4 bg-white/10 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <Icon icon="mdi:file-document-outline" className="text-6xl text-neutral-600 mx-auto mb-4" />
              <p className="text-neutral-400 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/insights/${post.slug}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 hover:border-[#D4AF37]/30 cursor-pointer">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map(tag => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-neutral-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
      {}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-3xl p-8 md:p-12 text-center"
          >
            <Icon icon="mdi:email-outline" className="text-4xl text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on FinTech, AI, and business strategy delivered to your inbox.
            </p>
            
            {newsletterStatus === 'success' ? (
              <div className="text-green-400 font-medium">
                <Icon icon="mdi:check-circle" className="inline mr-2" />
                Successfully subscribed to newsletter!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSignup} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-xl hover:bg-[#D4AF37]/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
            
            {newsletterStatus === 'error' && (
              <p className="text-red-400 text-sm mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}