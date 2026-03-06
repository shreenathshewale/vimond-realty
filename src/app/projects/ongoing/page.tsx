'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function OngoingProjectsPage() {
  const ongoingProjects = projects.filter(p => p.status === 'ongoing');

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-48 sm:pt-64 pb-24 sm:pb-48 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16 md:mb-32"
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-primary mb-6 md:mb-10 block font-bold">The Collection</span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif leading-none tracking-tighter uppercase mb-6 md:mb-8">Ongoing <br /><span className="italic text-primary/40">Projects.</span></h1>
            <div className="w-32 md:w-48 h-[1px] bg-primary/20" />
          </motion.div>
          
          <div className="space-y-32 md:space-y-64">
            {ongoingProjects.map((project, idx) => {
              return (
                <motion.div 
                  key={project.slug} 
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="w-full lg:w-3/5 relative group">
                    <Link href={`/projects/${project.slug}`}>
                      <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                        <Image 
                          src={project.image} 
                          alt={project.name} 
                          fill 
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  </div>
                  
                  <div className="w-full lg:w-2/5 space-y-6 md:space-y-8">
                    <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Location No. 0{idx + 1}</span>
                    <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-none">{project.name}</h3>
                    <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/40">{project.location}</p>
                    <div className="w-12 h-[1px] bg-primary/30" />
                    <p className="text-lg sm:text-xl font-light text-foreground/60 italic leading-relaxed">
                      {project.tagline}
                    </p>
                    <div className="pt-8 md:pt-12 flex flex-col gap-6">
                       <Link href={`/projects/${project.slug}`}>
                         <span className="text-[10px] tracking-[0.5em] uppercase text-foreground hover:text-primary transition-all font-bold border-b border-primary/20 pb-2 inline-block">
                           EXPLORE DETAILS →
                         </span>
                       </Link>
                    </div>
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