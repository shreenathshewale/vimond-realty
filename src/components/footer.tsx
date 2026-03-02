
'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] tracking-[0.2em] text-primary/40 uppercase">
          © 2026 ViMond Realty. Intelligent Luxury.
        </p>
        <div className="flex gap-12">
          {['Instagram', 'Youtube', 'Facebook'].map(social => (
            <a key={social} href="#" className="text-[10px] tracking-[0.2em] text-primary/40 uppercase hover:text-accent transition-colors">
              {social}
            </a>
          ))}
        </div>
        <p className="text-[10px] tracking-[0.2em] text-primary/40 uppercase">
          Pune, India
        </p>
      </div>
    </footer>
  );
}
