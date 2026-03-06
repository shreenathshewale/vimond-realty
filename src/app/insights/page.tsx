'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const insights = [
  {
    title: "The Evolution of Luxury Real Estate in Pune",
    category: "Market Trends",
    description: "Exploring how global standards are shaping the new architectural landmarks of the city.",
    imageId: "blog-1",
  },
  {
    title: "Why Location is the Ultimate Luxury",
    category: "Philosophy",
    description: "A deep dive into why prime historical neighborhoods remain the most coveted living spaces.",
    imageId: "blog-2",
  },
  {
    title: "Decoding Intelligent Luxury: More Than Just Aesthetics",
    category: "Design",
    description: "Understanding the engineering and planning that defines a truly intelligent home.",
    imageId: "blog-3",
  }
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <Navbar />
      
      <section className="pt-48 pb-32 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-[#8A7A63] mb-6 block font-bold">The Journal</span>
            <h1 className="text-5xl md:text-9xl font-serif mb-8 uppercase tracking-tighter leading-none">Insights<span className="text-[#8A7A63] italic">.</span></h1>
            <div className="w-24 h-[1px] bg-[#8A7A63]/30" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
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
                    <h3 className="text-2xl font-serif group-hover:text-[#8A7A63] transition-colors">{article.title}</h3>
                    <p className="text-sm font-light text-[#2B2B2B]/50 leading-relaxed italic">
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
