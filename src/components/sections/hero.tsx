'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-video-alt');

  if (!heroImage?.imageUrl) return null;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover opacity-40 grayscale"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </div>
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-[120px] font-serif font-light leading-none tracking-tight mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          Intelligent Luxury<span className="text-primary italic">.</span>
        </h1>
        <p className="text-[12px] md:text-[14px] tracking-[0.6em] uppercase font-light text-primary/80 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          Redefining the Pune Skyline
        </p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center gap-4">
        <span className="text-[8px] tracking-[0.5em] uppercase">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
}