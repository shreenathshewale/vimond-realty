
'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-video-alt');

  if (!heroImage?.imageUrl) return null;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover brightness-75"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      </div>
      
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Intelligent Luxury<span className="text-accent">.</span>
        </h1>
        <p className="text-sm md:text-lg tracking-[0.3em] uppercase font-light text-white/70">
          Redefining the Pune Skyline
        </p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-px h-12 bg-white"></div>
      </div>
    </section>
  );
}
