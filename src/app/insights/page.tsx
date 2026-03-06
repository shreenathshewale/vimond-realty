'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const insights = [
  {
    title: "Decoding Intelligent Luxury: More Than Just Aesthetics",
    category: "Design",
    description: "Understanding the engineering and planning that defines a truly intelligent home in today's modern urban landscape.",
    imageId: "blog-3",
  },
  {
    title: "Why Location is the Ultimate Luxury",
    category: "Philosophy",
    description: "A deep dive into why prime historical neighborhoods like Koregaon Park remain the most coveted living spaces.",
    imageId: "blog-2",
  },
  {
    title: "The Evolution of Luxury Real Estate in Pune",
    category: "Market Trends",
    description: "Exploring how global standards are shaping the new architectural landmarks of the city.",
    imageId: "blog-1",
  },
  {
    title: "Real Estate Investment Strategies in Pune",
    category: "Investment",
    description: "Key factors to consider when investing in high-end residential property for long-term value.",
    imageId: "city-skyline",
  },
  {
    title: "Smart Home Trends for 2025",
    category: "Technology",
    description: "How integrated home automation is redefining convenience and security in luxury developments.",
    imageId: "blog-3",
  },
  {
    title: "Sustainable Real Estate Development",
    category: "Responsibility",
    description: "ViMond's approach to responsible building and reducing environmental impact without compromising luxury.",
    imageId: "koregaon-park",
  }
];

export default function InsightsPage() {
  const featured = {
    title: "Future of Luxury Living in Pune",
    category: "Featured Insight",
    description: "As the skyline of Pune evolves, we look at the shifts in architectural philosophy that are prioritizing intelligence, space, and legacy over mere size.",
    imageId: "blog-1"
  };

  const featuredImg = PlaceHolderImages.find(i => i.id === featured.imageId);

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <Navbar />
      
      <section className="pt-48 pb-32 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-[#8A7A63] mb-6 block font-bold">The Journal</span>
            <h1 className="text-5xl md:text-9xl font-serif mb-8 uppercase tracking-tighter leading-none">Insights<span className="text-[#8A7A63] italic">.</span></h1>
            <p className="text-xl font-light text-[#2B2B2B]/60 italic max-w-2xl">Latest thoughts on intelligent luxury living and real estate trends.</p>
            <div className="w-24 h-[1px] bg-[#8A7A63]/30 mt-12" />
          </motion.div>

          {/* Featured Article */}
          <motion.div 
            className="mb-32 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="relative aspect-[16/10] overflow-hidden shadow-2xl">
                {featuredImg?.imageUrl && (
                  <Image 
                    src={featuredImg.imageUrl} 
                    alt={featured.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="space-y-6">
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#8A7A63] font-bold">{featured.category}</span>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">{featured.title}</h2>
                <p className="text-lg font-light text-[#2B2B2B]/60 italic leading-relaxed">{featured.description}</p>
                <Link href="#" className="inline-block text-[10px] tracking-[0.5em] uppercase text-[#2B2B2B] font-bold border-b border-[#D8D2C8] pb-2 transition-all">
                  Read Article →
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {insights.map((article, idx) => {
              const img = PlaceHolderImages.find(i => i.id === article.imageId);
              return (
                <motion.div 
                  key={idx}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-700">
                    {img?.imageUrl && (
                      <Image 
                        src={img.imageUrl} 
                        alt={article.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  <div className="space-y-4">
                    <span className="text-[9px] tracking-[0.5em] uppercase text-[#8A7A63] font-bold">{article.category}</span>
                    <h3 className="text-2xl font-serif group-hover:text-[#8A7A63] transition-colors leading-tight">{article.title}</h3>
                    <p className="text-sm font-light text-[#2B2B2B]/50 leading-relaxed italic line-clamp-3">
                      {article.description}
                    </p>
                    <Link href="#" className="inline-block text-[10px] tracking-[0.4em] uppercase text-[#2B2B2B]/30 hover:text-[#8A7A63] border-b border-[#D8D2C8] pb-1 transition-all">
                      Read Journal →
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div 
            className="mt-48 p-12 md:p-24 bg-[#ECE8E1] text-center space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif">Stay Informed.</h2>
            <p className="text-lg font-light text-[#2B2B2B]/60 italic max-w-xl mx-auto">
              Stay updated with the latest insights on luxury living and real estate trends.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button className="h-16 px-16 rounded-none bg-[#2B2B2B] text-[#F7F5F2] text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-[#8A7A63] transition-all">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
