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
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-40 md:pt-48 pb-20 md:pb-32 container-max">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-primary mb-6 block font-bold">The Journal</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 uppercase tracking-tight leading-none">Insights<span className="text-primary italic">.</span></h1>
            <p className="text-lg md:text-xl font-light text-foreground/60 italic max-w-2xl leading-relaxed">Latest thoughts on intelligent luxury living and real estate trends.</p>
            <div className="w-16 h-[1px] bg-primary/30 mt-10 md:mt-12" />
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {blogs.map((article, idx) => (
              <motion.div 
                key={article.slug}
                className="group luxury-card bg-transparent border-0 shadow-none hover:shadow-none hover:translate-y-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link href={`/insights/${article.slug}`}>
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-2xl shadow-sm group-hover:shadow-2xl transition-all duration-700">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </Link>
                
                <div className="space-y-4 px-2">
                  <span className="text-[9px] tracking-[0.5em] uppercase text-primary font-bold">{article.category}</span>
                  <Link href={`/insights/${article.slug}`}>
                    <h3 className="text-2xl font-serif group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                  </Link>
                  <p className="text-sm font-light text-foreground/50 leading-relaxed italic line-clamp-3">
                    {article.description}
                  </p>
                  <div className="pt-4">
                    <Link href={`/insights/${article.slug}`}>
                      <Button variant="link" className="p-0 h-auto text-[10px] tracking-[0.4em] uppercase text-foreground font-bold hover:text-primary transition-all">
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