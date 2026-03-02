'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  { title: "Intelligent Design", desc: "Form follows thought in every detail." },
  { title: "Prime Locations", desc: "Curating heritage and lifestyle value." },
  { title: "Timeless Architecture", desc: "Landmarks that endure through eras." }
];

export function About() {
  return (
    <section id="about" className="section-padding ivory-bg flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Who We Are</h2>
        <div className="w-24 h-[1px] bg-primary mx-auto mb-10" />
        <p className="text-lg md:text-xl font-light text-foreground/70 leading-relaxed max-w-2xl mx-auto">
          ViMond Realty is an architectural powerhouse dedicated to redefining the Pune skyline. We believe luxury is the thoughtful response to modern living, executed with precision and artistry.
        </p>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {values.map((val, idx) => (
          <Card key={idx} className="bg-white/50 border-none shadow-sm hover:shadow-md transition-shadow duration-500 rounded-none overflow-hidden group">
            <CardContent className="p-12">
              <span className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block font-bold">Value 0{idx + 1}</span>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">{val.title}</h3>
              <p className="text-sm font-light text-foreground/50 tracking-wide">{val.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
