'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function IntelligentLuxury() {
  const cards = [
    { title: "Unconventional Thinking", imageId: "blog-1", subtitle: "Innovation" },
    { title: "Unlimited Possibility", imageId: "hero-video-alt", subtitle: "Future" },
    { title: "Uncommon Sense", imageId: "blog-3", subtitle: "Precision" }
  ];

  return (
    <section id="luxury" className="section-spacing bg-background overflow-hidden">
      <div className="container-max">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-primary font-bold block mb-4">
              Planning • Location • Responsibility
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground uppercase tracking-tight mb-6">
              Intelligent Luxury
            </h2>
            <div className="w-24 h-[1px] bg-primary/20 mx-auto" />
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-square relative flex items-center justify-center p-8 md:p-12">
               <svg width="100%" height="100%" viewBox="0 0 400 400" className="max-w-md w-full h-auto drop-shadow-2xl">
                  <circle cx="200" cy="80" r="4" fill="#8A7A63" />
                  <circle cx="80" cy="320" r="4" fill="#8A7A63" />
                  <circle cx="320" cy="320" r="4" fill="#8A7A63" />
                  <line x1="200" y1="80" x2="80" y2="320" stroke="#8A7A63" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="80" y1="320" x2="320" y2="320" stroke="#8A7A63" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="320" y1="320" x2="200" y2="80" stroke="#8A7A63" strokeWidth="0.5" strokeDasharray="4 4" />
                  <text x="200" y="50" textAnchor="middle" className="text-[10px] uppercase tracking-[0.4em] fill-[#8A7A63] font-bold">Impeccable Planning</text>
                  <text x="50" y="350" textAnchor="middle" className="text-[10px] uppercase tracking-[0.4em] fill-[#8A7A63] font-bold">Responsible Building</text>
                  <text x="350" y="350" textAnchor="middle" className="text-[10px] uppercase tracking-[0.4em] fill-[#8A7A63] font-bold">Coveted Locations</text>
               </svg>
               <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">A Thoughtful Response to Modern Living.</h3>
            <div className="w-12 h-[1px] bg-primary/30" />
            <p className="text-lg md:text-xl font-light text-foreground/70 leading-relaxed italic">
              At ViMond, intelligence is the foundation of luxury. We don't just create homes; we engineer experiences that remain relevant for generations.
            </p>
            <p className="text-sm font-light text-foreground/50 leading-relaxed">
              Our studio approach treats every blueprint as a masterwork of precision, ensuring durability and timelessness through dynamic building methods.
            </p>
          </motion.div>
        </div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, idx) => {
            const img = PlaceHolderImages.find(i => i.id === card.imageId);
            return (
              <motion.div 
                key={idx} 
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg bg-secondary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {img?.imageUrl && (
                  <Image 
                    src={img.imageUrl} 
                    alt={card.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    data-ai-hint={img.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 transform transition-transform duration-500">
                   <p className="text-[10px] tracking-[0.5em] uppercase text-primary mb-3 font-bold">{card.subtitle}</p>
                   <h4 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                     {card.title}
                   </h4>
                   <div className="w-0 h-[1px] bg-primary/50 group-hover:w-16 transition-all duration-700 mt-6" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}