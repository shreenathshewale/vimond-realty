'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Contact() {
  const contactImg = PlaceHolderImages.find(img => img.id === 'city-skyline');

  return (
    <section id="contact" className="min-h-screen bg-background flex flex-col md:flex-row border-t border-white/5">
      <div className="w-full md:w-1/2 relative min-h-[400px]">
        {contactImg?.imageUrl && (
          <Image
            src={contactImg.imageUrl}
            alt="Pune Skyline"
            fill
            className="object-cover opacity-40 grayscale"
            data-ai-hint={contactImg.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        <div className="absolute inset-0 p-20 flex flex-col justify-end">
          <h2 className="text-5xl md:text-8xl font-serif font-light text-white mb-8">
            Begin your <br /> <span className="italic text-primary">journey.</span>
          </h2>
          <div className="space-y-4 text-[10px] tracking-[0.3em] uppercase opacity-60">
            <p>Pune, Maharashtra, India</p>
            <p>inquiry@vmondrealty.com</p>
            <p>+91 (0) 20 2567 0000</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-background p-12 md:p-32 flex flex-col justify-center">
        <form className="space-y-12 max-w-lg mx-auto w-full">
          <div className="space-y-10">
            <div className="group">
              <Input 
                placeholder="FULL NAME" 
                className="luxury-input"
              />
            </div>
            <div className="group">
              <Input 
                placeholder="EMAIL ADDRESS" 
                className="luxury-input"
              />
            </div>
            <div className="group">
              <Input 
                placeholder="PHONE NUMBER" 
                className="luxury-input"
              />
            </div>
            <div className="group">
              <Textarea 
                placeholder="YOUR MESSAGE" 
                className="luxury-input min-h-[100px] resize-none"
              />
            </div>
          </div>
          <Button className="w-full h-20 rounded-none bg-primary text-background text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-white transition-all shadow-2xl">
            Submit Inquiry
          </Button>
        </form>
      </div>
    </section>
  );
}