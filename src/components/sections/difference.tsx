
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function Difference() {
  const parkImg = PlaceHolderImages.find(img => img.id === 'koregaon-park');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold tracking-wider uppercase mb-2">The ViMond Difference</p>
            <h2 className="text-4xl font-bold text-primary mb-8">
              Why Koregaon Park — And Why ViMond Realty Matters Here
            </h2>
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed font-light">
              <p>
                Koregaon Park isn’t just a location on the map — it is Pune’s most enduring symbol of elegance and cultural heritage. 
                For generations, its tree-lined avenues, boutique cafés, and timeless architecture have shaped a lifestyle that every new neighbourhood tries to imitate.
              </p>
              <p className="font-medium text-primary">
                This is where ViMond Realty stands apart. While others build around Koregaon Park, ViMond builds inside it — 
                preserving the authenticity and exclusivity that define this iconic neighbourhood.
              </p>
            </div>
            <div className="mt-10">
              <Button className="bg-accent text-white px-10 py-6 rounded-full text-lg shadow-lg hover:shadow-accent/30 transition-shadow">
                Discover Vivencia
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={parkImg?.imageUrl || ''}
              alt="Koregaon Park Avenue"
              fill
              className="object-cover"
              data-ai-hint={parkImg?.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
