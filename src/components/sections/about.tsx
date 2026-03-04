'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'office-space');

  return (
    <section id="about" className="section-padding bg-background">
      <div className="asymmetric-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif text-foreground uppercase tracking-tighter mb-4">
              Who <br /> We Are<span className="text-primary italic">.</span>
            </h2>
            <div className="w-24 h-[1px] bg-primary/30" />
          </div>
          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed">
              ViMond Realty is an architectural powerhouse dedicated to redefining the Pune skyline. We believe luxury is the thoughtful response to modern living, executed with precision and artistry.
            </p>
          </div>
        </div>

        <div className="relative mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 bg-[#F8F6F2]/80 backdrop-blur-sm p-12 -mt-40 md:ml-24 max-w-4xl border border-primary/5">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">01</span>
              <h3 className="text-2xl font-serif">Intelligent Design</h3>
              <p className="text-xs font-light text-foreground/50 leading-relaxed">Form follows thought in every detail, crafted for the modern soul.</p>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">02</span>
              <h3 className="text-2xl font-serif">Prime Locations</h3>
              <p className="text-xs font-light text-foreground/50 leading-relaxed">Curating heritage and lifestyle value in Pune's most coveted pockets.</p>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">03</span>
              <h3 className="text-2xl font-serif">Timeless Art</h3>
              <p className="text-xs font-light text-foreground/50 leading-relaxed">Architecture that remains elegant for decades, enduring through eras.</p>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-full md:w-3/4 aspect-video -z-10 opacity-40">
            {aboutImg?.imageUrl && (
              <Image 
                src={aboutImg.imageUrl} 
                alt="Architecture detail" 
                fill 
                className="object-cover grayscale"
                data-ai-hint={aboutImg.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
