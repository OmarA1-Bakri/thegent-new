"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  avgSessionDuration: string;
  bounceRate: number;
  topPages: Array<{ path: string; views: number }>;
  topCountries: Array<{ country: string; visitors: number }>;
  deviceTypes: Array<{ type: string; percentage: number }>;
}

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      // Simulate analytics data - replace with real analytics API
      const mockData: AnalyticsData = {
        pageViews: 12543,
        uniqueVisitors: 8921,
        avgSessionDuration: "3m 42s",
        bounceRate: 34.2,
        topPages: [
          { path: "/", views: 4521 },
          { path: "/insights", views: 2834 },
          { path: "/about", views: 1923 },
          { path: "/contact", views: 1456 },
          { path: "/portfolio", views: 1809 }
        ],
        topCountries: [
          { country: "United Kingdom", visitors: 3456 },
          { country: "United States", visitors: 2134 },
          { country: "Germany", visitors: 1234 },
          { country: "France", visitors: 987 },
          { country: "Canada", visitors: 765 }
        ],
        deviceTypes: [
          { type: "Desktop", percentage: 65 },
          { type: "Mobile", percentage: 28 },
          { type: "Tablet", percentage: 7 }
        ]
      };
      
      setTimeout(() => {
        setAnalytics(mockData);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching analytics:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 animate-pulse">
              <div className="h-4 bg-white/10 rounded mb-2"></div>
              <div className="h-8 bg-white/10 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!analytics) return null;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-light text-white">Analytics Overview</h2>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
        >
          <option value="7d" className="bg-neutral-800">Last 7 days</option>
          <option value="30d" className="bg-neutral-800">Last 30 days</option>
          <option value="90d" className="bg-neutral-800">Last 90 days</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-neutral-400 text-sm">Page Views</span>
            <Icon icon="mdi:eye" className="text-[#D4AF37]" />
          </div>
          <div className="text-2xl font-light text-white">{analytics.pageViews.toLocaleString()}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-neutral-400 text-sm">Unique Visitors</span>
            <Icon icon="mdi:account-group" className="text-[#D4AF37]" />
          </div>
          <div className="text-2xl font-light text-white">{analytics.uniqueVisitors.toLocaleString()}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-neutral-400 text-sm">Avg. Session</span>
            <Icon icon="mdi:clock" className="text-[#D4AF37]" />
          </div>
          <div className="text-2xl font-light text-white">{analytics.avgSessionDuration}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-neutral-400 text-sm">Bounce Rate</span>
            <Icon icon="mdi:chart-line" className="text-[#D4AF37]" />
          </div>
          <div className="text-2xl font-light text-white">{analytics.bounceRate}%</div>
        </motion.div>
      </div>

      {/* Charts and Details */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
        >
          <h3 className="text-white font-medium mb-4">Top Pages</h3>
          <div className="space-y-3">
            {analytics.topPages.map((page, index) => (
              <div key={page.path} className="flex items-center justify-between">
                <span className="text-neutral-300 text-sm">{page.path}</span>
                <span className="text-[#D4AF37] font-medium">{page.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Device Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
        >
          <h3 className="text-white font-medium mb-4">Device Types</h3>
          <div className="space-y-3">
            {analytics.deviceTypes.map((device, index) => (
              <div key={device.type} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300 text-sm">{device.type}</span>
                  <span className="text-[#D4AF37] font-medium">{device.percentage}%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2">
                  <div 
                    className="bg-[#D4AF37] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${device.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}