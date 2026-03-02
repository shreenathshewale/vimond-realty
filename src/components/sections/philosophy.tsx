
'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function Philosophy() {
  const officeImg = PlaceHolderImages.find(img => img.id === 'office-space');

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            {officeImg?.imageUrl && (
              <Image
                src={officeImg.imageUrl}
                alt={officeImg.description || 'ViMond Philosophy'}
                fill
                className="object-cover"
                data-ai-hint={officeImg.imageHint}
              />
            )}
          </div>
          
          <div className="lg:w-1/2">
            <p className="text-accent font-semibold tracking-wider uppercase mb-2">Our Philosophy</p>
            <h2 className="text-4xl font-bold text-primary mb-6">Crafting Landmarks.<br />Defining Luxury.</h2>
            <div className="space-y-6 text-foreground/80 text-lg font-light leading-relaxed">
              <p>
                Founded with a vision to redefine Pune&apos;s skyline, ViMond Realty is dedicated to creating spaces that are not just built, but thoughtfully crafted. 
              </p>
              <p>
                We blend intelligent design with timeless luxury to deliver homes that inspire. 
                Our spaces are crafted to inspire teamwork and imagination, featuring open environments that spark collaboration and connection.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <Button className="bg-primary text-white rounded-full px-8 h-12">More About Our Vision</Button>
              <Button variant="ghost" className="text-accent hover:text-accent/80 font-semibold h-12">Discover Projects</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
