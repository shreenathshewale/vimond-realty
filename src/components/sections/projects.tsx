'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  { title: 'Vivencia', location: 'Koregaon Park', imageId: 'vivencia-project' },
  { title: 'Signature Tower II', location: 'Model Colony', imageId: 'signature-tower' },
  { title: 'Verïsta', location: 'Law College Road', imageId: 'verista-project' }
];

export function Projects() {
  return (
    <section id="projects" className="section-padding charcoal-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-[#F5F1EB] mb-12">Our Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, idx) => {
            const projectImg = PlaceHolderImages.find(img => img.id === project.imageId);
            return (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-8">
                  {projectImg?.imageUrl && (
                    <Image
                      src={projectImg.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint={projectImg.imageHint}
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif text-[#F5F1EB]">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#B89B72]">{project.location}</p>
                    <Link href="/projects/ongoing" className="text-[10px] tracking-[0.3em] uppercase text-[#F5F1EB]/50 hover:text-[#B89B72] transition-colors">
                      Explore →
                    </Link>
                  </div>
                  <div className="w-full h-[1px] bg-[#B89B72]/20" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
