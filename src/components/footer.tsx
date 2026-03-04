'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background py-24 border-t border-secondary">
      <div className="asymmetric-container">
        {/* Top Footer: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Column 1: Contact & Socials */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">Inquiry</h4>
              <p className="text-2xl font-serif">+91 20 2567 0000</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="p-3 border border-secondary rounded-full text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-3 border border-secondary rounded-full text-primary hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-3 border border-secondary rounded-full text-primary hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Email */}
          <div className="space-y-4 border-x border-secondary/50 px-8">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">Write Us</h4>
            <p className="text-lg font-serif">inquiry@vmondrealty.com</p>
            <p className="text-xs font-light text-foreground/50">Support available Mon-Sat, 10am-7pm</p>
          </div>

          {/* Column 3: Address */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">Corporate Office</h4>
            <p className="text-sm font-light leading-relaxed text-foreground/70">
              ViMond Landmark, Lane No. 7, <br />
              Koregaon Park, Pune 411001, <br />
              Maharashtra, India
            </p>
            <Link href="/contact" className="text-[10px] tracking-[0.2em] uppercase text-primary underline underline-offset-4 hover:text-foreground transition-colors">
              Find us on Map
            </Link>
          </div>
        </div>

        <div className="w-full h-[1px] bg-secondary mb-8" />

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-foreground/40">
          <p>© 2025 Vimond Realty. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/projects/ongoing" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/luxury" className="hover:text-primary transition-colors">Philosophy</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="#" className="hover:text-primary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
