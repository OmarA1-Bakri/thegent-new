"use client";
import React from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export default function SEOOptimizer({
  title = "Omar Al-Bakri | FinTech & AI Sales Leader",
  description = "FinTech & AI Sales Leader transforming complex technology into growth opportunities. Strategic partnerships in the digital revolution.",
  keywords = ["FinTech", "AI", "Sales Leader", "Digital Transformation", "Omar Al-Bakri"],
  image = "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  url = "https://thegent.uk",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Omar Al-Bakri"
}: SEOOptimizerProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "Person",
    ...(type === "article" ? {
      headline: title,
      description,
      image,
      author: {
        "@type": "Person",
        name: author
      },
      publisher: {
        "@type": "Person",
        name: author
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime
    } : {
      name: author,
      jobTitle: "FinTech & AI Sales Leader",
      description,
      image,
      url,
      sameAs: [
        "https://linkedin.com/in/omar-al-bakri",
        "https://twitter.com/omar_albakri"
      ]
    })
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Omar Al-Bakri" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@omar_albakri" />
      
      {/* Article specific */}
      {type === "article" && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content={author} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  );
}