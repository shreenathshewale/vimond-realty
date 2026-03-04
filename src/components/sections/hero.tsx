'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-video-alt');

  if (!heroImage?.imageUrl) return null;

  return (
    <section className="relative pt-24 min-h-[90vh] w-full flex flex-col items-center">
      <div className="asymmetric-container w-full mt-24 text-center">
        <h1 className="text-6xl md:text-[120px] font-serif font-light leading-none tracking-tighter mb-8 text-foreground uppercase">
          Intelligent Luxury Living<span className="text-primary italic">.</span>
        </h1>
        <div className="editorial-divider max-w-2xl mx-auto" />
        <p className="max-w-xl mx-auto text-sm md:text-lg font-light text-foreground/60 leading-relaxed mb-16 italic">
          "ViMond Realty stands as a beacon of architectural mastery, carefully selecting Pune's most prestigious locations to build landmark developments."
        </p>
      </div>
      
      <div className="w-full h-[600px] relative overflow-hidden px-8">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover grayscale brightness-95 contrast-105"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      </div>
    </section>
  );
}
