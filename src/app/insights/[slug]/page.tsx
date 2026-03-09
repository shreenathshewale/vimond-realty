'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F5F2]">
        <h1 className="text-2xl font-serif">Article Not Found</h1>
      </div>
    );
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <Navbar />
      
      <article className="pt-48 pb-32 px-6 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link href="/insights" className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] mb-12 hover:text-[#2B2B2B] transition-colors font-bold">
              <ArrowLeft className="w-3 h-3" /> Back to Insights
            </Link>
            <span className="text-[10px] tracking-[0.6em] uppercase text-[#8A7A63] mb-6 block font-bold">{blog.category}</span>
            <h1 className="text-4xl md:text-7xl font-serif mb-8 leading-tight text-[#2B2B2B] uppercase tracking-tighter">{blog.title}</h1>
            <p className="text-xl font-light text-[#2B2B2B]/60 italic leading-relaxed mb-12 border-l-2 border-[#8A7A63]/20 pl-8">
              {blog.description}
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div 
            className="relative aspect-video w-full overflow-hidden shadow-2xl mb-16"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Impact Statistics */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24"
            {...fadeIn}
          >
            {blog.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-8 bg-white border border-[#D8D2C8] text-center space-y-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-3xl md:text-5xl font-serif text-[#8A7A63]">{stat.value}</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#2B2B2B]/40 font-bold">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Main Content & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            <motion.div 
              className="lg:col-span-2 space-y-8"
              {...fadeIn}
            >
              {blog.content.map((paragraph, idx) => (
                <p key={idx} className="text-lg md:text-xl font-light text-[#2B2B2B]/80 leading-relaxed italic">
                  {paragraph}
                </p>
              ))}
            </motion.div>
            
            <motion.div 
              className="space-y-8 p-8 bg-[#ECE8E1] border border-[#D8D2C8]/50"
              {...fadeIn}
            >
              <h3 className="text-xs tracking-[0.4em] uppercase text-[#8A7A63] font-bold">Quick Highlights</h3>
              <ul className="space-y-4">
                {blog.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#8A7A63] mt-0.5 shrink-0" />
                    <span className="text-[11px] uppercase tracking-widest text-[#2B2B2B]/60 leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Deep Dive Pillars (Accordion) */}
          <motion.section 
            className="pt-16 border-t border-[#D8D2C8]"
            {...fadeIn}
          >
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] font-bold block mb-4">Deep Dive</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B]">The Foundation & Pillars</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {blog.pillars.map((pillar, idx) => (
                <AccordionItem key={idx} value={`pillar-${idx}`} className="border-b border-[#D8D2C8] py-4">
                  <AccordionTrigger className="text-left font-serif text-xl md:text-2xl text-[#2B2B2B] hover:no-underline hover:text-[#8A7A63] transition-colors">
                    {pillar.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg font-light text-[#2B2B2B]/60 italic pt-6 leading-relaxed max-w-3xl">
                    {pillar.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

          <div className="mt-24 pt-12 border-t border-[#D8D2C8] flex justify-between items-center">
            <Link href="/insights">
              <Button variant="outline" className="rounded-none border-[#8A7A63] text-[#8A7A63] text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#8A7A63] hover:text-white transition-all">
                Back to Insights
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#2B2B2B]/40">Vimond Realty Journal</span>
              <div className="w-12 h-[1px] bg-[#D8D2C8]" />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
