'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative pt-24 min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="asymmetric-container w-full z-10 text-center mb-16 px-6 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-[100px] font-serif font-light leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 text-foreground uppercase">
            Intelligent <br className="hidden sm:block" /> Luxury Living<span className="text-primary italic">.</span>
          </h1>
          <div className="w-16 md:w-24 h-[1px] bg-primary/30 mx-auto my-8 md:my-12" />
          <p className="max-w-xl mx-auto text-sm md:text-lg font-light text-foreground/60 leading-relaxed italic px-4">
            "ViMond Realty stands as a beacon of architectural mastery, carefully selecting Pune's most prestigious locations."
          </p>
        </motion.div>
      </div>
      
      <motion.div 
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] px-4 sm:px-8 md:px-24"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative w-full h-full overflow-hidden shadow-2xl">
          <Image
            src="/images/Hero.png"
            alt="ViMond Realty Luxury Living"
            fill
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/40 to-transparent" />
        </div>
        {/* Architectural Offset Frame */}
        <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:right-16 w-24 h-24 md:w-32 md:h-32 border-r border-b border-primary/20 -z-10" />
      </motion.div>
    </section>
  );
}
