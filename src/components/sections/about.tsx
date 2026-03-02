
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const cityImage = PlaceHolderImages.find(img => img.id === 'city-skyline');

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-accent font-semibold tracking-wider uppercase mb-2">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              ViMond is a modern real estate brand based in Pune.
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg font-light">
              <p>
                As a young and vibrant luxury developer, we are committed to developing cutting-edge landmarks 
                with world-class design abilities in prominent Pune localities.
              </p>
              <p>
                Our strategy is to create intelligent and luxurious housing for exclusive living, 
                while also meeting customer expectations, providing the perfect upgrade in lifestyle 
                with intelligence, functionality, opulence, and comfort.
              </p>
            </div>
            <div className="mt-10">
              <Button size="lg" variant="link" className="text-accent p-0 h-auto font-semibold text-lg hover:no-underline hover:text-accent/80 group">
                Know More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            {cityImage?.imageUrl && (
              <Image
                src={cityImage.imageUrl}
                alt={cityImage.description || 'Pune Skyline'}
                fill
                className="object-cover"
                data-ai-hint={cityImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-xl border-l-4 border-accent shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-1">We&apos;re building the future, today.</h3>
              <p className="text-sm text-foreground/70">Redefining luxury across Pune&apos;s most prestigious neighborhoods.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
