'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

export default function CompletedProjectsPage() {
  const completedProjects = projects.filter(p => p.status === 'completed');

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-48 sm:pt-60 pb-16 sm:pb-32 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 md:mb-24"
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-primary mb-6 md:mb-10 block">The Legacy</span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif leading-none tracking-tighter uppercase mb-6 md:mb-8">Past <span className="italic text-primary/40">Landmarks.</span></h1>
            <div className="w-32 md:w-48 h-[1px] bg-primary/20" />
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {completedProjects.map((project) => {
              return (
                <motion.div 
                  key={project.slug} 
                  className="group flex flex-col gap-6 md:gap-8 mb-24 md:mb-40"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative aspect-video overflow-hidden shadow-2xl">
                      <Image 
                        src={project.image} 
                        alt={project.name} 
                        fill 
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </Link>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-black/5 pb-6 md:pb-8 gap-4">
                    <div>
                      <h3 className="text-3xl md:text-5xl font-serif">{project.name}</h3>
                      <p className="text-[10px] tracking-[0.4em] uppercase text-primary mt-2">{project.location}</p>
                      
                      <div className="mt-6">
                        <Link href={`/projects/${project.slug}`}>
                          <span className="text-[10px] tracking-[0.5em] uppercase text-foreground hover:text-primary transition-all font-bold border-b border-primary/20 pb-2 inline-block">
                            Explore Details →
                          </span>
                        </Link>
                      </div>
                    </div>
                    <p className="text-sm italic text-foreground/40 max-w-xs">{project.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
