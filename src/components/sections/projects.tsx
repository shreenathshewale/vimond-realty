'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { projects } from '@/data/projects';

export function Projects() {
  const ongoingProjects = projects.filter(p => p.status === 'ongoing');
  const completedProjects = projects.filter(p => p.status === 'completed');

  return (
    <section id="projects" className="section-padding bg-[#ECE8E1] px-6 md:px-10 lg:px-20">
      <div className="asymmetric-container">
        <div className="mb-16 md:mb-40">
          <motion.h2 
            className="text-4xl sm:text-6xl md:text-[100px] font-serif text-foreground uppercase tracking-tighter mb-6 md:mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ongoing <br className="hidden sm:block" /><span className="italic text-primary">Portfolio.</span>
          </motion.h2>
          <div className="w-24 md:w-48 h-[1px] bg-primary/20" />
        </div>

        <div className="space-y-24 md:space-y-64 mb-32 md:mb-64">
          {ongoingProjects.map((project, idx) => {
            const isFullWidth = idx === 0;

            if (isFullWidth) {
              return (
                <motion.div 
                  key={project.slug} 
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative aspect-[16/9] overflow-hidden mb-8 md:mb-12 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700 bg-black">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                  <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-24 md:h-24 border-l border-t border-primary/20 -z-10" />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 border-b border-primary/10 pb-8 md:pb-12 group-hover:-translate-y-1 transition-transform">
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-serif">{project.name}</h3>
                      <p className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">{project.location}</p>
                      <p className="text-base md:text-lg font-light text-foreground/60 italic max-w-xl">{project.tagline}</p>
                      <div className="pt-4 md:pt-6">
                        <Link href={`/projects/${project.slug}`}>
                          <span className="text-[10px] tracking-[0.5em] uppercase font-bold border-b border-primary/20 hover:border-primary pb-2 transition-all inline-block">
                            EXPLORE DETAILS →
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end items-start lg:items-end">
                      <ul className="space-y-2 text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-4 lg:mb-8">
                        {project.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full" /> {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={project.slug} 
                className={cn(
                  "group flex flex-col lg:flex-row gap-10 lg:gap-24 items-center",
                  idx % 2 !== 0 && "lg:flex-row-reverse"
                )}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-full lg:w-3/5 relative">
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative aspect-[16/10] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-700 bg-black">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className={cn(
                    "absolute -z-10 bg-background w-full h-full border border-primary/5 hidden md:block",
                    idx % 2 === 0 ? "-top-8 -left-8" : "-bottom-8 -right-8"
                  )} />
                </div>
                
                <div className="w-full lg:w-2/5 space-y-4 md:space-y-8 group-hover:-translate-y-1 transition-transform text-center lg:text-left">
                  <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Featured Development</span>
                  <h3 className="text-3xl md:text-4xl lg:text-6xl font-serif leading-none">{project.name}</h3>
                  <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/40">{project.location}</p>
                  <div className="w-12 h-[1px] bg-primary/30 mx-auto lg:mx-0" />
                  <p className="text-base md:text-lg font-light text-foreground/60 leading-relaxed italic">
                    {project.tagline}
                  </p>
                  <div className="pt-4 md:pt-6">
                    <Link href={`/projects/${project.slug}`}>
                      <span className="text-[10px] tracking-[0.5em] uppercase font-bold border-b border-primary/20 hover:border-primary pb-2 transition-all inline-block">
                        EXPLORE DETAILS →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Completed Projects */}
        <div className="mt-32 md:mt-64">
          <motion.h2 
            className="text-4xl sm:text-6xl md:text-[80px] font-serif text-foreground uppercase tracking-tighter mb-12 md:mb-16 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Past <br className="hidden sm:block" /><span className="italic text-primary">Achievements.</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {completedProjects.map((project) => (
              <motion.div 
                key={project.slug} 
                className="group space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative aspect-[4/5] overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-700 bg-black">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </Link>
                <div className="space-y-2 group-hover:-translate-y-1 transition-transform text-center sm:text-left">
                  <h3 className="text-2xl font-serif">{project.name}</h3>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">{project.location}</p>
                  <div className="pt-4">
                    <Link href={`/projects/${project.slug}`}>
                      <span className="text-[10px] tracking-[0.5em] uppercase font-bold border-b border-primary/20 hover:border-primary pb-2 transition-all inline-block">
                        EXPLORE DETAILS →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
