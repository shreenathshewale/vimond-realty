'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="stone-bg py-24 border-t border-primary/10">
      <div className="asymmetric-container flex flex-col items-center text-center space-y-16">
        <Link href="/" className="text-3xl font-serif tracking-tighter text-foreground uppercase">
          ViMond<span className="text-primary italic">.</span>
        </Link>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-4">
          <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/60">+91 20 2567 0000</p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/60">inquiry@vmondrealty.com</p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/60">Koregaon Park, Pune</p>
        </div>

        <div className="flex gap-12">
          {['Instagram', 'LinkedIn', 'Facebook'].map((social) => (
            <Link 
              key={social} 
              href="#" 
              className="text-[9px] tracking-[0.5em] uppercase text-primary hover:text-foreground transition-colors"
            >
              {social}
            </Link>
          ))}
        </div>

        <div className="editorial-divider max-w-7xl" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] tracking-[0.3em] uppercase text-foreground/30">
          <p>© 2025 Vimond Realty. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Disclaimer</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
