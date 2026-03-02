'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  { title: 'Vivencia', location: 'Koregaon Park', imageId: 'vivencia-project' },
  { title: 'Signature Tower II', location: 'Model Colony', imageId: 'signature-tower' },
  { title: 'Verïsta', location: 'Law College Road', imageId: 'verista-project' }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[9px] tracking-[0.6em] uppercase text-primary font-medium mb-6 block">The Collection</span>
            <h2 className="text-5xl md:text-6xl font-serif font-light leading-none">A curated selection of landmarks across Pune.</h2>
          </div>
          <button className="text-[10px] tracking-[0.4em] uppercase text-primary border-b border-primary/30 pb-2 hover:border-primary transition-all">
            View All Projects
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {projects.map((project, idx) => {
            const projectImg = PlaceHolderImages.find(img => img.id === project.imageId);
            return (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                {projectImg?.imageUrl && (
                  <Image
                    src={projectImg.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    data-ai-hint={projectImg.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-700" />
                <div className="absolute bottom-12 left-12 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-3xl font-serif font-light tracking-tight mb-2">{project.title}</h3>
                  <p className="text-[9px] tracking-[0.3em] uppercase opacity-60 text-primary">{project.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}