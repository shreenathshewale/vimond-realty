
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-video-alt');

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImage?.imageUrl && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description || 'Luxury Real Estate'}
            fill
            className="object-cover brightness-[0.4]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-accent font-medium tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Latest Project: Vivencia
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Elevate Your Lifestyle<br className="hidden md:block" />
          <span className="text-accent">— with Intelligent Luxury.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
          Experience residential excellence in the heart of Koregaon Park, Pune.
          Crafting landmarks designed for the discerning few.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-8 py-6 text-lg rounded-full">
            Contact Us <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-full">
            Explore Vivencia
          </Button>
        </div>
      </div>
    </section>
  );
}
