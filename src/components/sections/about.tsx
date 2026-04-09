'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="section-spacing bg-background overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl group">
              <Image 
                src="/images/we.png" 
                alt="Who We Are - Vimond Realty" 
                width={900}
                height={1200}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-40 h-40 bg-white shadow-xl rounded-2xl p-6 hidden md:flex flex-col justify-center border border-black/5">
               <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">Concept 01</span>
               <p className="text-[11px] text-foreground/50 mt-3 uppercase tracking-widest leading-relaxed font-medium">
                 Merging legacy with future-proof engineering.
               </p>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2 space-y-10 lg:pl-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Our Narrative</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground uppercase tracking-tight leading-tight">
                Who We Are<span className="text-primary italic">.</span>
              </h2>
              <div className="w-12 h-[1px] bg-primary/30" />
              <p className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed italic">
                ViMond Realty is an architectural powerhouse dedicated to redefining the Pune skyline with intelligent design.
              </p>
            </div>
            
            <p className="text-base font-light text-foreground/60 leading-relaxed max-w-lg">
              We believe luxury is the thoughtful response to modern living. Our studio approach treats every blueprint as a masterwork of precision, ensuring durability and timelessness.
            </p>

            <div className="grid grid-cols-1 gap-8 pt-6">
              {[
                { id: "01", title: "Intelligent Design", desc: "Form follows thought in every detail." },
                { id: "02", title: "Prime Locations", desc: "Curating heritage and lifestyle value." },
                { id: "03", title: "Timeless Art", desc: "Architecture that remains elegant for decades." }
              ].map((item) => (
                <div key={item.id} className="flex gap-6 items-start group">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold transition-transform group-hover:translate-x-1">{item.id}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-serif uppercase tracking-widest leading-none">{item.title}</h3>
                    <p className="text-[10px] font-medium text-foreground/40 uppercase tracking-[0.2em] mt-3">{item.desc}</p>
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