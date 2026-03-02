'use client';

import React from 'react';

export function About() {
  return (
    <section id="about" className="py-60 bg-background flex justify-center items-center text-center px-8">
      <div className="max-w-5xl">
        <span className="text-[9px] tracking-[0.6em] uppercase text-primary font-medium mb-12 block opacity-60">Our Heritage</span>
        <h2 className="text-4xl md:text-7xl font-serif font-light leading-[1.1] text-white">
          We define the Pune skyline through <span className="italic text-primary">intelligent luxury</span> and architectural mastery.
        </h2>
      </div>
    </section>
  );
}