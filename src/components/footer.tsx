'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 text-foreground border-t border-black/5">
      <div className="container-max">
        {/* Top Footer: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-10">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image
                src="/images/Logo.png"
                alt="ViMond Realty"
                width={160}
                height={45}
                className="h-10 w-auto object-contain invert"
                priority
              />
            </Link>
            <p className="text-[11px] tracking-[0.2em] uppercase text-foreground/40 leading-relaxed max-w-xs">
              Crafting landmark developments with intelligent luxury and precision engineering in Pune's most prestigious locations.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-10">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Navigation</h4>
            <div className="flex flex-col gap-y-4 text-[11px] tracking-[0.2em] uppercase text-foreground/60">
              <Link href="/about" className="hover:text-primary transition-colors">About Company</Link>
              <Link href="/projects/ongoing" className="hover:text-primary transition-colors">Ongoing Projects</Link>
              <Link href="/projects/completed" className="hover:text-primary transition-colors">Completed Projects</Link>
              <Link href="/luxury" className="hover:text-primary transition-colors">Our Philosophy</Link>
              <Link href="/insights" className="hover:text-primary transition-colors">Blog & Insights</Link>
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-10">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Contact</h4>
            <div className="space-y-6">
              <p className="text-xl font-serif text-foreground">+91 20 2567 0000</p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-foreground/60">inquiry@vmondrealty.com</p>
              <div className="flex gap-4">
                <Link href="#" className="p-3 border border-black/5 rounded-full text-foreground/40 hover:border-primary hover:text-primary transition-all">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href="#" className="p-3 border border-black/5 rounded-full text-foreground/40 hover:border-primary hover:text-primary transition-all">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href="#" className="p-3 border border-black/5 rounded-full text-foreground/40 hover:border-primary hover:text-primary transition-all">
                  <Facebook className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Address */}
          <div className="space-y-10">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Our Office</h4>
            <p className="text-[11px] tracking-[0.2em] uppercase text-foreground/60 leading-relaxed">
              ViMond Landmark, Lane No. 7,<br />
              Koregaon Park, Pune 411001,<br />
              Maharashtra, India.
            </p>
            <p className="text-[10px] font-light text-foreground/30 uppercase tracking-widest leading-relaxed italic">
              Mon - Sat: 10:00 AM – 7:00 PM
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] tracking-[0.3em] uppercase text-foreground/40 border-t border-black/5 pt-10">
          <p>© 2025 Vimond Realty. Crafted with Precision.</p>
          <div className="flex gap-10">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
