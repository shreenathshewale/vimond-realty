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
    <section id="luxury" className="section-padding bg-background">
      <div className="asymmetric-container mb-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-foreground uppercase tracking-widest mb-6">
            Intelligent Luxury
          </h2>
          <div className="w-48 h-[1px] bg-primary/20 mx-auto mb-8" />
          <p className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-primary font-bold">
            Planning • Location • Responsibility
          </p>
        </motion.div>
      </div>

      <div className="asymmetric-container mb-64">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            className="relative aspect-square flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
             <svg width="100%" height="100%" viewBox="0 0 400 400" className="max-w-md">
                <circle cx="200" cy="80" r="4" fill="#8A7A63" />
                <circle cx="80" cy="320" r="4" fill="#8A7A63" />
                <circle cx="320" cy="320" r="4" fill="#8A7A63" />
                <line x1="200" y1="80" x2="80" y2="320" stroke="#D8D2C8" strokeWidth="1" />
                <line x1="80" y1="320" x2="320" y2="320" stroke="#D8D2C8" strokeWidth="1" />
                <line x1="320" y1="320" x2="200" y2="80" stroke="#D8D2C8" strokeWidth="1" />
                <text x="200" y="50" textAnchor="middle" className="text-[9px] uppercase tracking-[0.4em] fill-[#8A7A63] font-bold">Impeccable Planning</text>
                <text x="50" y="345" textAnchor="middle" className="text-[9px] uppercase tracking-[0.4em] fill-[#8A7A63] font-bold">Responsible Building</text>
                <text x="350" y="345" textAnchor="middle" className="text-[9px] uppercase tracking-[0.4em] fill-[#8A7A63] font-bold">Coveted Locations</text>
             </svg>
             {/* Offset Shadow Panel */}
             <div className="absolute inset-0 bg-secondary/10 -z-10 rounded-full blur-3xl" />
          </motion.div>
          <div className="space-y-8 md:pl-12">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">A Thoughtful Response to Modern Living.</h3>
            <div className="w-12 h-[1px] bg-primary/30" />
            <p className="text-xl font-light text-foreground/70 leading-relaxed italic">
              At ViMond, intelligence is the foundation of luxury. We don't just create homes; we engineer experiences that remain relevant for generations.
            </p>
          </div>
        </div>
      </div>

      <div className="asymmetric-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const img = PlaceHolderImages.find(i => i.id === card.imageId);
            return (
              <motion.div 
                key={idx} 
                className="group relative aspect-[3/4] overflow-hidden bg-secondary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                {img?.imageUrl && (
                  <Image 
                    src={img.imageUrl} 
                    alt={card.title} 
                    fill 
                    className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-75"
                    data-ai-hint={img.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-10 right-10 transform transition-transform duration-500 group-hover:-translate-y-4">
                   <p className="text-[9px] tracking-[0.5em] uppercase text-primary mb-4 font-bold">{card.subtitle}</p>
                   <h4 className="text-2xl md:text-4xl font-serif text-white leading-tight">
                     {card.title}
                   </h4>
                </div>
                {/* Minimal Editorial Border */}
                <div className="absolute inset-4 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
