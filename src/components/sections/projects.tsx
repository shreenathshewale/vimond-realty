
'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin } from 'lucide-react';

const projects = [
  {
    title: 'Vivencia',
    location: 'Koregaon Park, Pune',
    type: 'Residential',
    imageId: 'vivencia-project'
  },
  {
    title: 'Signature Tower II',
    location: 'Model Colony, Pune',
    type: 'Residential',
    imageId: 'signature-tower'
  },
  {
    title: 'Verïsta',
    location: 'Law College Road, Pune',
    type: 'Residential',
    imageId: 'verista-project'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold tracking-wider uppercase mb-2">Featured Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Shaping Pune's Skyline</h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Architectural masterpieces designed for modern living. Explore our portfolio of landmark developments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const projectImg = PlaceHolderImages.find(img => img.id === project.imageId);
            return (
              <Card key={idx} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {projectImg?.imageUrl && (
                    <Image
                      src={projectImg.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={projectImg.imageHint}
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-primary hover:bg-white">{project.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-accent" />
                    {project.location}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto italic font-light">
            &ldquo;Our spaces are built to inspire connection and innovation, 
            featuring open layouts that promote a lifestyle of distinction.&rdquo;
          </p>
          <button className="text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
