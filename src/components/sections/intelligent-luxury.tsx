'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function IntelligentLuxury() {
  const cards = [
    { title: "Unconventional Thinking", imageId: "blog-1" },
    { title: "Unlimited Possibility", imageId: "hero-video-alt" },
    { title: "Uncommon Sense", imageId: "blog-3" }
  ];

  return (
    <section id="luxury" className="section-padding bg-[#F7F5F2]">
      {/* 1 - Section Header */}
      <div className="asymmetric-container mb-32 text-center">
        <h2 className="text-5xl md:text-7xl font-serif text-[#2B2B2B] uppercase tracking-widest mb-6">
          Intelligent Luxury
        </h2>
        <div className="w-48 h-[1px] bg-[#D8D2C8] mx-auto mb-8" />
        <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#8A7A63] font-medium">
          Impeccable Planning • Coveted Locations • Responsible Building
        </p>
      </div>

      {/* 2 - Intelligent Luxury Concept */}
      <div className="asymmetric-container mb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Left: Geometric Diagram */}
          <div className="relative aspect-square flex items-center justify-center p-8">
             <svg width="100%" height="100%" viewBox="0 0 400 400" className="max-w-md">
                <circle cx="200" cy="80" r="4" fill="#8A7A63" />
                <circle cx="80" cy="320" r="4" fill="#8A7A63" />
                <circle cx="320" cy="320" r="4" fill="#8A7A63" />
                <line x1="200" y1="80" x2="80" y2="320" stroke="#D8D2C8" strokeWidth="1" />
                <line x1="80" y1="320" x2="320" y2="320" stroke="#D8D2C8" strokeWidth="1" />
                <line x1="320" y1="320" x2="200" y2="80" stroke="#D8D2C8" strokeWidth="1" />
                <text x="200" y="50" textAnchor="middle" className="text-[10px] uppercase tracking-[0.3em] fill-[#8A7A63] font-sans font-bold">Impeccable Planning</text>
                <text x="50" y="345" textAnchor="middle" className="text-[10px] uppercase tracking-[0.3em] fill-[#8A7A63] font-sans font-bold">Responsible Building</text>
                <text x="350" y="345" textAnchor="middle" className="text-[10px] uppercase tracking-[0.3em] fill-[#8A7A63] font-sans font-bold">Coveted Locations</text>
             </svg>
          </div>
          {/* Right: Description */}
          <div className="space-y-8 md:pl-12">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">A Thoughtful Response to Modern Living.</h3>
            <div className="w-12 h-[1px] bg-[#8A7A63]/30" />
            <p className="text-xl font-light text-[#2B2B2B]/70 leading-relaxed italic">
              At ViMond, intelligence is the foundation of luxury. It is the foresight to build responsibly and the wisdom to choose locations that hold enduring value. We don't just create homes; we engineer experiences that remain relevant for generations.
            </p>
          </div>
        </div>
      </div>

      {/* 3 - Intelligence Feature Cards */}
      <div className="asymmetric-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {cards.map((card, idx) => {
            const img = PlaceHolderImages.find(i => i.id === card.imageId);
            return (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden bg-[#ECE8E1]">
                {img?.imageUrl && (
                  <Image 
                    src={img.imageUrl} 
                    alt={card.title} 
                    fill 
                    className="object-cover grayscale brightness-[0.4] transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-75"
                    data-ai-hint={img.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute bottom-12 left-10 right-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                   <p className="text-[9px] tracking-[0.4em] uppercase text-[#8A7A63] mb-4 font-bold">Intelligence is...</p>
                   <h4 className="text-2xl md:text-4xl font-serif text-white leading-tight">
                     {card.title}
                   </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
