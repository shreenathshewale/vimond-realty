
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Contact() {
  return (
    <section id="contact" className="py-40 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-primary mb-16">
          Begin your journey<span className="text-accent">.</span>
        </h2>
        <form className="space-y-6">
          <Input 
            placeholder="NAME" 
            className="border-0 border-b border-primary/20 rounded-none bg-transparent h-16 text-xs tracking-widest focus-visible:ring-0 focus-visible:border-primary transition-colors" 
          />
          <Input 
            placeholder="EMAIL" 
            className="border-0 border-b border-primary/20 rounded-none bg-transparent h-16 text-xs tracking-widest focus-visible:ring-0 focus-visible:border-primary transition-colors" 
          />
          <Button className="w-full h-16 rounded-none bg-primary text-white text-[10px] tracking-[0.4em] uppercase mt-12 hover:bg-primary/90">
            Submit Inquiry
          </Button>
        </form>
      </div>
    </section>
  );
}
