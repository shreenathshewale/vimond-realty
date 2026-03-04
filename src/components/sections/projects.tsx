'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const projects = [
  { title: 'Vivencia', location: 'Koregaon Park', imageId: 'vivencia-project', layout: 'full' },
  { title: 'Signature Tower II', location: 'Model Colony', imageId: 'signature-tower', layout: 'split-left' },
  { title: 'Verïsta', location: 'Law College Road', imageId: 'verista-project', layout: 'split-right' }
];

export function Projects() {
  return (
    <section id="projects" className="section-padding stone-bg">
      <div className="asymmetric-container">
        <div className="mb-32">
          <h2 className="text-5xl md:text-8xl font-serif text-foreground uppercase tracking-tighter mb-8">
            The <br /><span className="italic text-primary">Portfolio.</span>
          </h2>
        </div>

        <div className="space-y-48">
          {projects.map((project, idx) => {
            const projectImg = PlaceHolderImages.find(img => img.id === project.imageId);
            
            if (project.layout === 'full') {
              return (
                <div key={idx} className="group">
                  <div className="relative aspect-[21/9] overflow-hidden mb-12">
                    {projectImg?.imageUrl && (
                      <Image
                        src={projectImg.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover grayscale brightness-90 transition-transform duration-1000 group-hover:scale-105"
                        data-ai-hint={projectImg.imageHint}
                      />
                    )}
                  </div>
                  <div className="flex justify-between items-end border-b border-primary/20 pb-8">
                    <div>
                      <h3 className="text-4xl md:text-6xl font-serif">{project.title}</h3>
                      <p className="text-[10px] tracking-[0.4em] uppercase text-primary mt-2">{project.location}</p>
                    </div>
                    <Link href="/projects/ongoing" className="text-[10px] tracking-[0.4em] uppercase text-foreground/40 hover:text-primary transition-colors">
                      View Project →
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <div key={idx} className={cn(
                "flex flex-col md:flex-row gap-20 items-center",
                project.layout === 'split-right' && "md:flex-row-reverse"
              )}>
                <div className="md:w-3/5 relative aspect-square overflow-hidden group">
                  {projectImg?.imageUrl && (
                    <Image
                      src={projectImg.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover grayscale brightness-90 transition-transform duration-1000 group-hover:scale-105"
                      data-ai-hint={projectImg.imageHint}
                    />
                  )}
                </div>
                <div className="md:w-2/5 space-y-6">
                  <h3 className="text-4xl md:text-5xl font-serif">{project.title}</h3>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-primary">{project.location}</p>
                  <div className="w-12 h-[1px] bg-primary/30" />
                  <p className="text-sm font-light text-foreground/60 leading-relaxed italic">
                    A landmark development that embodies the spirit of its historical location with contemporary precision.
                  </p>
                  <Link href="/projects/ongoing" className="inline-block text-[10px] tracking-[0.4em] uppercase text-foreground/40 hover:text-primary transition-colors mt-8">
                    Explore Details →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
