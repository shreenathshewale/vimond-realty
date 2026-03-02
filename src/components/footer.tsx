'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-medium">
            © 2026 ViMond Realty. Intelligent Luxury.
          </p>
        </div>
        <div className="flex gap-16">
          {['Instagram', 'Youtube', 'Linkedin'].map(social => (
            <a key={social} href="#" className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-medium hover:text-primary transition-colors">
              {social}
            </a>
          ))}
        </div>
        <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-medium">
          Pune, India
        </p>
      </div>
    </footer>
  );
}