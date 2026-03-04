
'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ongoingProjects = [
  { id: 'vivencia-project', title: 'Vivencia', location: 'Koregaon Park', tagline: 'A landmark of tree-lined elegance.' },
  { id: 'verista-project', title: 'Verïsta', location: 'Law College Road', tagline: 'Contemporary living in a historic heart.' }
];

export default function OngoingProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-64 pb-48 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-32"
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-primary mb-10 block font-bold">The Collection</span>
            <h1 className="text-7xl md:text-9xl font-serif leading-none tracking-tighter uppercase mb-8">Ongoing <br /><span className="italic text-primary/40">Projects.</span></h1>
            <div className="w-48 h-[1px] bg-primary/20" />
          </motion.div>
          
          <div className="space-y-64">
            {ongoingProjects.map((project, idx) => {
              const img = PlaceHolderImages.find(i => i.id === project.id);
              return (
                <motion.div 
                  key={project.title} 
                  className={`flex flex-col md:flex-row gap-24 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="w-full md:w-3/5 relative group">
                    <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                      {img?.imageUrl && (
                        <Image 
                          src={img.imageUrl} 
                          alt={project.title} 
                          fill 
                          className="object-cover grayscale brightness-90 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                          data-ai-hint={img.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                    {/* Architectural Frame Offset */}
                    <div className={`absolute -z-10 bg-card/50 w-full h-full border border-primary/5 ${idx % 2 === 0 ? '-top-12 -left-12' : '-bottom-12 -right-12'}`} />
                  </div>
                  
                  <div className="w-full md:w-2/5 space-y-8">
                    <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Location No. 0{idx + 1}</span>
                    <h3 className="text-5xl md:text-7xl font-serif leading-none">{project.title}</h3>
                    <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/40">{project.location}</p>
                    <div className="w-12 h-[1px] bg-primary/30" />
                    <p className="text-xl font-light text-foreground/60 italic leading-relaxed">
                      {project.tagline}
                    </p>
                    <div className="pt-12">
                       <button className="text-[10px] tracking-[0.5em] uppercase text-foreground hover:text-primary transition-all group border-b border-primary/20 pb-2">
                         Download Brochure <span className="inline-block transform group-hover:translate-x-2 transition-transform">→</span>
                       </button>
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
