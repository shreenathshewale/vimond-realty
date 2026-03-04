
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-video-alt');

  if (!heroImage?.imageUrl) return null;

  return (
    <section className="relative pt-24 min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="asymmetric-container w-full z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl md:text-[100px] font-serif font-light leading-[0.9] tracking-tighter mb-8 text-foreground uppercase">
            Intelligent <br /> Luxury Living<span className="text-primary italic">.</span>
          </h1>
          <div className="w-24 h-[1px] bg-primary/30 mx-auto my-12" />
          <p className="max-w-xl mx-auto text-sm md:text-lg font-light text-foreground/60 leading-relaxed italic">
            "ViMond Realty stands as a beacon of architectural mastery, carefully selecting Pune's most prestigious locations."
          </p>
        </motion.div>
      </div>
      
      <motion.div 
        className="relative w-full h-[70vh] px-8 md:px-24"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative w-full h-full overflow-hidden shadow-2xl">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover grayscale brightness-75 contrast-110"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/40 to-transparent" />
        </div>
        {/* Architectural Offset Frame */}
        <div className="absolute -bottom-8 -right-4 md:right-16 w-32 h-32 border-r border-b border-primary/20 -z-10" />
      </motion.div>
    </section>
  );
}
