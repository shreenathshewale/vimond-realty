'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { blogs } from '@/data/blogs';

export default function InsightsPage() {
  const featured = blogs[0];

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
              <Link href={`/insights/${featured.slug}`} className="relative aspect-[16/10] overflow-hidden shadow-2xl">
                <Image 
                  src={featured.image} 
                  alt={featured.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </Link>
              <div className="space-y-6">
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#8A7A63] font-bold">{featured.category}</span>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">{featured.title}</h2>
                <p className="text-lg font-light text-[#2B2B2B]/60 italic leading-relaxed">{featured.description}</p>
                <Link href={`/insights/${featured.slug}`} className="inline-block text-[10px] tracking-[0.5em] uppercase text-[#2B2B2B] font-bold border-b border-[#D8D2C8] pb-2 transition-all">
                  Read Article →
                </Link>
              </div>
            </div>
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
                  <Link href={`/insights/${article.slug}`} className="inline-block text-[10px] tracking-[0.4em] uppercase text-[#2B2B2B]/30 hover:text-[#8A7A63] border-b border-[#D8D2C8] pb-1 transition-all">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
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
