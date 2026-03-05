'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden px-6 md:px-10 lg:px-20">
      <div className="asymmetric-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Architectural Layered Background */}
            <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-full h-full bg-secondary/30 -z-10" />
            
            <div className="relative aspect-[3/4] overflow-hidden group">
              <Image 
                src="/images/who.png" 
                alt="Who We Are - Vimond Realty" 
                width={900}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            {/* Floating Detail Frame */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 h-32 md:w-48 md:h-48 border border-primary/10 backdrop-blur-sm p-4 hidden sm:block">
               <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">Concept No. 01</span>
               <p className="text-[10px] text-foreground/40 mt-2 uppercase tracking-widest leading-relaxed">
                 Merging legacy with future-proof engineering.
               </p>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2 space-y-8 lg:space-y-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-foreground uppercase tracking-tighter mb-6">
                Who <br /> We Are<span className="text-primary italic">.</span>
              </h2>
              <div className="w-24 h-[1px] bg-primary/30 mb-8" />
              <p className="text-lg sm:text-xl md:text-2xl font-light text-foreground/80 leading-relaxed italic">
                ViMond Realty is an architectural powerhouse dedicated to redefining the Pune skyline.
              </p>
            </div>
            
            <p className="text-sm font-light text-foreground/60 leading-relaxed max-w-md">
              We believe luxury is the thoughtful response to modern living. Our studio approach treats every blueprint as a masterwork of precision and artistry.
            </p>

            <div className="grid grid-cols-1 gap-6 md:gap-8 pt-4 md:pt-8">
              {[
                { id: "01", title: "Intelligent Design", desc: "Form follows thought in every detail." },
                { id: "02", title: "Prime Locations", desc: "Curating heritage and lifestyle value." },
                { id: "03", title: "Timeless Art", desc: "Architecture that remains elegant for decades." }
              ].map((item) => (
                <div key={item.id} className="flex gap-4 md:gap-6 items-start border-l border-primary/20 pl-4 md:pl-6 group">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold group-hover:translate-x-1 transition-transform">{item.id}</span>
                  <div>
                    <h3 className="text-base md:text-lg font-serif uppercase tracking-widest">{item.title}</h3>
                    <p className="text-[10px] font-light text-foreground/40 uppercase tracking-widest mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
