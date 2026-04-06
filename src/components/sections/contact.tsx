'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="section-padding stone-bg">
      <div className="asymmetric-container">
        <div className="flex flex-col md:flex-row gap-24 md:gap-40">
          <div className="md:w-1/3 space-y-24">
            <h2 className="text-5xl md:text-7xl font-serif text-foreground uppercase tracking-tighter">
              The <br /><span className="italic text-primary">Inquiry.</span>
            </h2>
            
            <div className="space-y-12">
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">Call Us</p>
                <p className="text-lg font-serif">+91 (0) 20 2567 0000</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">Write Us</p>
                <p className="text-lg font-serif">inquiry@vmondrealty.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">Visit Us</p>
                <p className="text-sm font-light text-foreground/60 leading-relaxed">
                  ViMond Landmark, Lane No. 7, <br />
                  Koregaon Park, Pune 411001
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <form className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                <Input placeholder="YOUR NAME" className="luxury-underline-input border-foreground/10" />
                <Input placeholder="EMAIL ADDRESS" className="luxury-underline-input border-foreground/10" />
                <Input placeholder="PHONE NUMBER" className="luxury-underline-input border-foreground/10" />
                <Input placeholder="SUBJECT" className="luxury-underline-input border-foreground/10" />
              </div>
              <Textarea placeholder="MESSAGE" className="luxury-underline-input min-h-[120px] border-foreground/10" />
              
              <Button className="h-16 px-16 rounded-none bg-primary text-white text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-[#766854] transition-all">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}