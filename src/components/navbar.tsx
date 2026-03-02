
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-[0.2em] text-primary uppercase">
          ViMond<span className="text-accent">.</span>
        </Link>
        
        <div className="hidden md:flex space-x-12">
          {['Projects', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-semibold tracking-widest text-primary/60 hover:text-primary transition-colors uppercase"
            >
              {item}
            </Link>
          ))}
        </div>

        <Button variant="outline" className="rounded-none border-primary/20 text-xs tracking-widest uppercase px-8">
          Inquiry
        </Button>
      </div>
    </nav>
  );
}
