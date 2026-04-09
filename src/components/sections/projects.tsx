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
    <section id="projects" className="section-spacing bg-white">
      <div className="container-max">
        <div className="mb-24 md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-primary font-bold block mb-6">Portfolio</span>
            <h2 className="text-4xl md:text-7xl font-serif text-foreground uppercase tracking-tighter mb-8 leading-tight">
              Ongoing Landmarks<span className="text-primary italic">.</span>
            </h2>
            <div className="w-24 h-[1px] bg-primary/20 mx-auto" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-32">
          {ongoingProjects.map((project, idx) => (
            <motion.div 
              key={project.slug} 
              className="luxury-card overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              </Link>
              
              <div className="p-10 space-y-6">
                <div>
                  <p className="text-[9px] tracking-[0.4em] uppercase text-primary font-bold mb-3">{project.location}</p>
                  <h3 className="text-3xl font-serif mb-4 leading-none">{project.name}</h3>
                  <p className="text-sm font-light text-foreground/50 italic leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-black/5">
                  <Link href={`/projects/${project.slug}`} className="text-[10px] tracking-[0.4em] uppercase font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2">
                    Explore Details <span className="text-primary font-serif italic text-lg leading-none mt-1">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Completed Projects Section */}
        <div className="mt-32 pt-32 border-t border-black/5">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-tight">Past Landmarks.</h2>
            <p className="text-sm font-light text-foreground/40 uppercase tracking-[0.3em] mt-4">Building enduring legacies since inception.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {completedProjects.map((project, idx) => (
              <motion.div 
                key={project.slug} 
                className="group space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft group-hover:shadow-xl transition-all duration-500 bg-black/5">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </Link>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif">{project.name}</h3>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-primary font-bold">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}