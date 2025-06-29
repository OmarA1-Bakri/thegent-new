"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface BlogEditorProps {
  post?: any;
  onSave: (postData: any) => void;
  onCancel: () => void;
}

export default function BlogEditor({ post, onSave, onCancel }: BlogEditorProps) {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
    excerpt: post?.excerpt || '',
    tags: post?.tags?.join(', ') || '',
    status: post?.status || 'draft',
    featured: post?.featured || false
  });

  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const postData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      readTime: Math.ceil(formData.content.split(' ').length / 200)
    };
    onSave(postData);
  };

  const formatPreviewContent = (content: string) => {
    return content
      .replace(/## (.*)/g, '<h2 class="text-2xl font-medium text-white mt-6 mb-3">$1</h2>')
      .replace(/### (.*)/g, '<h3 class="text-xl font-medium text-white mt-4 mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/\n\n/g, '</p><p class="text-neutral-300 leading-relaxed mb-4">')
      .replace(/^/, '<p class="text-neutral-300 leading-relaxed mb-4">')
      .replace(/$/, '</p>');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-light text-white">
            {post ? 'Edit Article' : 'Create New Article'}
          </h1>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsPreview(!isPreview)}
              className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <Icon icon={isPreview ? "mdi:pencil" : "mdi:eye"} className="w-4 h-4 mr-2 inline" />
              {isPreview ? 'Edit' : 'Preview'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>

        {isPreview ? (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.tags.split(',').map(tag => tag.trim()).filter(Boolean).map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-light text-white mb-4">{formData.title}</h1>
            <p className="text-neutral-400 mb-8">{formData.excerpt}</p>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formatPreviewContent(formData.content) }}
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                    placeholder="Article title..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Excerpt</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 resize-none"
                    placeholder="Brief description..."
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Content</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    rows={20}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 resize-none font-mono text-sm"
                    placeholder="Write your article content here... Use ## for headings, **bold**, *italic*"
                    required
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-medium mb-4">Publishing Options</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Status</label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                      >
                        <option value="draft" className="bg-neutral-800">Draft</option>
                        <option value="published" className="bg-neutral-800">Published</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Tags</label>
                      <input
                        type="text"
                        value={formData.tags}
                        onChange={(e) => setFormData({...formData, tags: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                        placeholder="AI, FinTech, Innovation"
                      />
                      <p className="text-neutral-400 text-xs mt-1">Separate tags with commas</p>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={formData.featured}
                        onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                        className="mr-2"
                      />
                      <label htmlFor="featured" className="text-white">Featured Article</label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-xl hover:bg-[#D4AF37]/90 transition-colors"
                >
                  {post ? 'Update Article' : 'Create Article'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}