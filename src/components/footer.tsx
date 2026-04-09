'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2a3e51] pt-24 pb-12 text-white">
      <div className="container-max">
        {/* Top Footer: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Column 1: Contact */}
          <div className="space-y-10">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Inquiry</h4>
            <div className="space-y-6">
              <p className="text-3xl font-serif text-white">+91 20 2567 0000</p>
              <div className="flex gap-4">
                <Link href="#" className="p-3 border border-white/10 rounded-full text-white/60 hover:border-primary hover:text-primary transition-all">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href="#" className="p-3 border border-white/10 rounded-full text-white/60 hover:border-primary hover:text-primary transition-all">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href="#" className="p-3 border border-white/10 rounded-full text-white/60 hover:border-primary hover:text-primary transition-all">
                  <Facebook className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Email */}
          <div className="space-y-10 md:border-x border-white/10 md:px-16">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Write Us</h4>
            <p className="text-2xl font-serif text-white">inquiry@vmondrealty.com</p>
            <p className="text-[10px] font-light text-white/30 uppercase tracking-widest leading-relaxed">
              Available Monday to Saturday <br /> 10:00 AM – 7:00 PM (IST)
            </p>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-10">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Navigation</h4>
            <div className="grid grid-cols-2 gap-y-6 text-[11px] tracking-[0.2em] uppercase text-white/60">
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/projects/ongoing" className="hover:text-primary transition-colors">Ongoing</Link>
              <Link href="/projects/completed" className="hover:text-primary transition-colors">Completed</Link>
              <Link href="/luxury" className="hover:text-primary transition-colors">Philosophy</Link>
              <Link href="/insights" className="hover:text-primary transition-colors">Insights</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Corporate Office Strip */}
        <div className="w-full h-[1px] bg-white/5 mb-10" />
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/30 leading-relaxed max-w-2xl">
            Corporate Office: ViMond Landmark, Lane No. 7, Koregaon Park, Pune 411001, Maharashtra, India.
          </p>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] tracking-[0.3em] uppercase text-white/20 border-t border-white/5 pt-10">
          <p>© 2025 Vimond Realty. Crafted with Precision.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}