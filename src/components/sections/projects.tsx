'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const projects = [
  { 
    title: 'Vivencia', 
    location: 'Koregaon Park', 
    imagePath: '/images/Vivenica.png', 
    layout: 'full',
    slug: 'vivencia',
    description: 'A landmark of tree-lined elegance that embodies the spirit of its historical location with contemporary precision.',
    highlights: ['Premium residential tower', 'Prime central location', 'Contemporary architecture']
  },
  { 
    title: 'Signature Tower II', 
    location: 'Model Colony', 
    imagePath: '/images/Signature.png', 
    layout: 'split-left',
    slug: 'signature',
    description: 'An iconic development designed for those who appreciate the finer nuances of living and architectural mastery.',
    highlights: ['High-end residential project', 'Excellent connectivity', 'Elegant design']
  },
  { 
    title: 'Verïsta', 
    location: 'Law College Road', 
    imagePath: '/images/Verista.png', 
    layout: 'split-right',
    slug: 'verista',
    description: 'Standing as a testament to intelligent design in a historic heart, blending traditional values with cutting-edge architecture.',
    highlights: ['Modern luxury apartments', 'Spacious layouts', 'Premium neighborhood']
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#ECE8E1] px-6 md:px-10 lg:px-20">
      <div className="asymmetric-container">
        <div className="mb-24 md:mb-40">
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-9xl font-serif text-foreground uppercase tracking-tighter mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The <br /><span className="italic text-primary">Portfolio.</span>
          </motion.h2>
          <div className="w-32 md:w-48 h-[1px] bg-primary/20" />
        </div>

        <div className="space-y-32 md:space-y-64">
          {projects.map((project, idx) => {
            if (project.layout === 'full') {
              return (
                <motion.div 
                  key={idx} 
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative aspect-video overflow-hidden mb-8 md:mb-12 shadow-2xl">
                      <Image
                        src={project.imagePath}
                        alt={project.title}
                        fill
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Link>
                  <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 border-l border-t border-primary/20 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-primary/10 pb-8 md:pb-12">
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif">{project.title}</h3>
                      <p className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">{project.location}</p>
                      <p className="text-lg font-light text-foreground/60 italic max-w-xl">{project.description}</p>
                    </div>
                    <div className="flex flex-col justify-between items-start lg:items-end">
                      <ul className="space-y-2 text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-8">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full" /> {h}
                          </li>
                        ))}
                      </ul>
                      <Link href={`/projects/${project.slug}`} className="text-[10px] tracking-[0.5em] uppercase text-foreground hover:text-primary transition-all group-hover:translate-x-2 font-bold border-b border-primary/20 pb-2">
                        Explore Details →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={idx} 
                className={cn(
                  "flex flex-col lg:flex-row gap-12 lg:gap-24 items-center",
                  project.layout === 'split-right' && "lg:flex-row-reverse"
                )}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-full lg:w-3/5 relative group">
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative aspect-square overflow-hidden shadow-xl">
                      <Image
                        src={project.imagePath}
                        alt={project.title}
                        fill
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className={cn(
                    "absolute -z-10 bg-background w-full h-full border border-primary/5 hidden sm:block",
                    project.layout === 'split-left' ? "-top-6 -left-6 md:-top-12 md:-left-12" : "-bottom-6 -right-6 md:-bottom-12 md:-right-12"
                  )} />
                </div>
                
                <div className="w-full lg:w-2/5 space-y-6 md:space-y-8">
                  <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Featured Development</span>
                  <h3 className="text-3xl md:text-4xl lg:text-6xl font-serif leading-none">{project.title}</h3>
                  <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/40">{project.location}</p>
                  <div className="w-12 h-[1px] bg-primary/30" />
                  <p className="text-base md:text-lg font-light text-foreground/60 leading-relaxed italic">
                    {project.description}
                  </p>
                  <ul className="space-y-2 text-[9px] tracking-[0.2em] uppercase text-foreground/40">
                    {project.highlights.map((h, i) => (
                      <li key={i}>• {h}</li>
                    ))}
                  </ul>
                  <Link href={`/projects/${project.slug}`} className="inline-block text-[10px] tracking-[0.5em] uppercase text-foreground font-bold hover:text-primary transition-all border-b border-primary/20 pb-2">
                    View Portfolio →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
