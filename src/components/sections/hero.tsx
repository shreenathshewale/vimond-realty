'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-main');

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Texture/Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(138,122,99,0.05),transparent)] pointer-events-none" />
      
      <div className="container-max w-full z-10 text-center mb-12 md:mb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] md:text-xs tracking-[0.8em] uppercase text-primary font-bold block mb-6 md:mb-8">
            Intelligent Design • Prime Locations
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1] tracking-tighter mb-8 text-foreground uppercase">
            Luxury Living<br />Redefined<span className="text-primary italic">.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-2xl mx-auto text-lg md:text-xl font-light text-foreground/50 leading-relaxed italic mb-10 px-4"
          >
            ViMond Realty stands as a beacon of architectural mastery, carefully selecting Pune&apos;s most prestigious locations to craft landmarks for generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/projects/ongoing">
              <Button className="btn-luxury bg-primary text-white shadow-xl shadow-primary/20">
                Explore Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="btn-luxury border-primary/30 text-primary hover:bg-primary/5">
                Book a Visit
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="container-max relative w-full h-[40vh] md:h-[55vh] lg:h-[65vh] pb-10"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl bg-black/5">
          {heroImg && (
            <Image
              src={heroImg.imageUrl}
              alt={heroImg.description}
              fill
              className="w-full h-full object-contain"
              priority
              data-ai-hint={heroImg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}