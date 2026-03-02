
'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Philosophy() {
  const officeImg = PlaceHolderImages.find(img => img.id === 'office-space');

  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
        <div className="md:w-1/2">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-8 block">Innovation</span>
          <h2 className="text-4xl md:text-6xl font-light leading-[1.1] text-primary mb-12">
            Intelligent design meets seamless functionality for the modern few.
          </h2>
        </div>
        <div className="md:w-1/2 relative aspect-square w-full">
          {officeImg?.imageUrl && (
            <Image
              src={officeImg.imageUrl}
              alt="Intelligent Luxury"
              fill
              className="object-cover"
              data-ai-hint={officeImg.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
