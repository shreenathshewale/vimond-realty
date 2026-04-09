'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="section-spacing bg-[#ECE8E1]">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <motion.div 
            className="lg:w-1/3 space-y-12 md:space-y-16"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Connect</span>
              <h2 className="text-4xl md:text-6xl font-serif text-foreground uppercase tracking-tight leading-none">
                Begin Your<br /><span className="italic text-primary">Journey.</span>
              </h2>
            </div>
            
            <div className="space-y-10 md:space-y-12">
              <div className="space-y-3 group">
                <p className="text-[9px] tracking-[0.4em] uppercase text-primary font-bold opacity-60">Call Us</p>
                <p className="text-xl md:text-2xl font-serif group-hover:text-primary transition-colors">+91 20 2567 0000</p>
              </div>
              <div className="space-y-3 group">
                <p className="text-[9px] tracking-[0.4em] uppercase text-primary font-bold opacity-60">Write Us</p>
                <p className="text-xl md:text-2xl font-serif group-hover:text-primary transition-colors break-all">inquiry@vmondrealty.com</p>
              </div>
              <div className="space-y-3">
                <p className="text-[9px] tracking-[0.4em] uppercase text-primary font-bold opacity-60">Visit Us</p>
                <p className="text-sm font-light text-foreground/60 leading-relaxed uppercase tracking-widest mt-2">
                  ViMond Landmark, Lane No. 7, <br />
                  Koregaon Park, Pune 411001
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3 bg-white p-8 md:p-16 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-10 md:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
                <div className="space-y-2">
                   <label className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-bold">Full Name</label>
                   <Input placeholder="E.G. ALEXANDER MUNDE" className="luxury-underline-input" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-bold">Email Address</label>
                   <Input placeholder="E.G. HELLO@EMAIL.COM" className="luxury-underline-input" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-bold">Phone Number</label>
                   <Input placeholder="+91 XXX XXX XXXX" className="luxury-underline-input" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-bold">Subject</label>
                   <Input placeholder="E.G. PROJECT INQUIRY" className="luxury-underline-input" />
                </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-bold">Message</label>
                 <Textarea placeholder="HOW CAN WE ASSIST YOU?" className="luxury-underline-input min-h-[120px] resize-none" />
              </div>
              
              <Button className="btn-luxury bg-primary text-white w-full md:w-auto mt-4">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}