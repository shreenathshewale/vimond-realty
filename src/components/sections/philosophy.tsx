'use client';

import React from 'react';

const principles = [
  { title: "Intelligent Design", desc: "Functional spaces crafted with absolute precision." },
  { title: "Prime Locations", desc: "Strategically located in Pune’s most desirable historical areas." },
  { title: "Timeless Architecture", desc: "Design that remains elegant and relevant for decades." }
];

export function Philosophy() {
  return (
    <section id="luxury" className="section-padding bg-background">
      <div className="asymmetric-container">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-serif text-foreground uppercase tracking-tighter mb-24">
            Intelligent <br /><span className="italic">Living.</span>
          </h2>
          
          <div className="space-y-32">
            {principles.map((p, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
                <span className="text-[10px] font-bold text-primary/30 mt-2">0{idx + 1}</span>
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-6xl font-serif uppercase tracking-tight">{p.title}</h3>
                  <p className="text-xl md:text-2xl font-light text-foreground/50 leading-relaxed max-w-2xl">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
