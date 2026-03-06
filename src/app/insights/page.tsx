'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import { Button } from '@/components/ui/button';

export default function InsightsPage() {
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {blogs.map((article, idx) => (
              <motion.div 
                key={article.slug}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/insights/${article.slug}`}>
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-700">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </Link>
                
                <div className="space-y-4">
                  <span className="text-[9px] tracking-[0.5em] uppercase text-[#8A7A63] font-bold">{article.category}</span>
                  <Link href={`/insights/${article.slug}`}>
                    <h3 className="text-2xl font-serif group-hover:text-[#8A7A63] transition-colors leading-tight">{article.title}</h3>
                  </Link>
                  <p className="text-sm font-light text-[#2B2B2B]/50 leading-relaxed italic line-clamp-3">
                    {article.description}
                  </p>
                  <div className="pt-4">
                    <Link href={`/insights/${article.slug}`}>
                      <Button variant="link" className="p-0 h-auto text-[10px] tracking-[0.4em] uppercase text-[#2B2B2B] font-bold hover:text-[#8A7A63] transition-all">
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
