'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Philosophy() {
  const officeImg = PlaceHolderImages.find(img => img.id === 'office-space');

  return (
    <section id="philosophy" className="py-60 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-32">
        <div className="md:w-1/2">
          <span className="text-[9px] tracking-[0.6em] uppercase text-primary font-medium mb-12 block">Philosophy</span>
          <h2 className="text-4xl md:text-7xl font-serif font-light leading-[1.1] text-white mb-16">
            Form follows <span className="italic text-primary">intelligence</span> in every space we create.
          </h2>
          <p className="text-[12px] tracking-[0.1em] text-white/50 leading-relaxed font-light max-w-md">
            We believe that luxury is not just about aesthetics, but about how a space functions and responds to the needs of modern living.
          </p>
        </div>
        <div className="md:w-1/2 relative aspect-square w-full">
          <div className="absolute inset-0 border border-primary/20 translate-x-12 translate-y-12 z-0" />
          {officeImg?.imageUrl && (
            <div className="relative z-10 w-full h-full">
              <Image
                src={officeImg.imageUrl}
                alt="Intelligent Luxury"
                fill
                className="object-cover grayscale"
                data-ai-hint={officeImg.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}