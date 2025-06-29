"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ReadingProgress from '@/app/components/reading-progress';
interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  author: string;
  publishedAt: any;
  readTime: number;
  slug: string;
}
export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');
  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);
  const fetchPost = async () => {
    try {
      setLoading(true);
      
      
      const response = await fetch('/api/cosmic-database/blog-posts');
      const data = await response.json();
      const posts = data.posts || [];
      
      const currentPost = posts.find((p: BlogPost) => p.slug === slug);
      if (currentPost) {
        setPost(currentPost);
        
        
        const related = posts
          .filter((p: BlogPost) => 
            p.id !== currentPost.id && 
            p.tags.some(tag => currentPost.tags.includes(tag))
          )
          .slice(0, 3);
        setRelatedPosts(related);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
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
        body: JSON.stringify({ email, source: 'blog-post' })
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
  const formatContent = (content: string) => {
    
    return content
      .replace(/## (.*)/g, '<h2 class="text-2xl font-medium text-white mt-8 mb-4">$1</h2>')
      .replace(/### (.*)/g, '<h3 class="text-xl font-medium text-white mt-6 mb-3">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/\n\n/g, '</p><p class="text-neutral-300 leading-relaxed mb-4">')
      .replace(/^/, '<p class="text-neutral-300 leading-relaxed mb-4">')
      .replace(/$/, '</p>');
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-neutral-400">Loading article...</p>
        </div>
      </div>
    );
  }
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <Icon icon="mdi:file-document-remove" className="text-6xl text-neutral-600 mx-auto mb-4" />
          <h1 className="text-2xl font-light text-white mb-2">Article Not Found</h1>
          <p className="text-neutral-400 mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/insights" className="inline-flex items-center px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-xl hover:bg-[#D4AF37]/90 transition-colors">
            <Icon icon="mdi:arrow-left" className="mr-2" />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        {}
        <section className="pt-32 pb-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <Link href="/insights" className="inline-flex items-center text-neutral-400 hover:text-[#D4AF37] transition-colors">
                <Icon icon="mdi:arrow-left" className="mr-2" />
                Back to Insights
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6 text-neutral-400 text-sm"
            >
              <span>By {post.author}</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>{post.readTime} min read</span>
            </motion.div>
          </div>
        </section>
        {}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              <div 
                className="text-neutral-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />
            </motion.article>
            {}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-3xl p-8 text-center"
            >
              <h3 className="text-2xl font-light text-white mb-4">
                Enjoyed this article?
              </h3>
              <p className="text-neutral-300 mb-6">
                Subscribe to get more insights delivered to your inbox.
              </p>
              
              {newsletterStatus === 'success' ? (
                <div className="text-green-400 font-medium">
                  <Icon icon="mdi:check-circle" className="inline mr-2" />
                  Successfully subscribed!
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
            {}
            {relatedPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-light text-white mb-8">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/insights/${relatedPost.slug}`}>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[#D4AF37]/30 cursor-pointer">
                        <h4 className="text-lg font-medium text-white mb-2 hover:text-[#D4AF37] transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-neutral-400 text-sm mb-3 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="text-xs text-neutral-500">
                          {relatedPost.readTime} min read
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}