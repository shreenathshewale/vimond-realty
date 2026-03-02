
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
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, idx) => {
            const projectImg = PlaceHolderImages.find(img => img.id === project.imageId);
            return (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                {projectImg?.imageUrl && (
                  <Image
                    src={projectImg.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint={projectImg.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-2xl font-light tracking-tight mb-2">{project.title}</h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase opacity-70">{project.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
