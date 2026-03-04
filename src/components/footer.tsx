'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#F7F5F2] pt-24 pb-8 border-t border-[#D8D2C8]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Footer: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Column 1: Contact */}
          <div className="space-y-8">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] font-bold">Inquiry</h4>
            <div className="space-y-4">
              <p className="text-2xl font-serif text-[#2B2B2B]">+91 20 2567 0000</p>
              <div className="flex gap-4">
                <Link href="#" className="p-2 border border-[#D8D2C8] rounded-full text-[#8A7A63] hover:bg-[#8A7A63] hover:text-white transition-all">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href="#" className="p-2 border border-[#D8D2C8] rounded-full text-[#8A7A63] hover:bg-[#8A7A63] hover:text-white transition-all">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href="#" className="p-2 border border-[#D8D2C8] rounded-full text-[#8A7A63] hover:bg-[#8A7A63] hover:text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Email */}
          <div className="space-y-8 md:border-x border-[#D8D2C8]/50 md:px-16">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] font-bold">Write Us</h4>
            <p className="text-xl font-serif text-[#2B2B2B]">inquiry@vmondrealty.com</p>
            <p className="text-[10px] font-light text-[#2B2B2B]/40 uppercase tracking-widest">Available Mon-Sat, 10am-7pm</p>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-8">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] font-bold">Navigation</h4>
            <div className="grid grid-cols-2 gap-y-4 text-[10px] tracking-[0.2em] uppercase text-[#2B2B2B]/60">
              <Link href="/about" className="hover:text-[#8A7A63] transition-colors">About</Link>
              <Link href="/projects/ongoing" className="hover:text-[#8A7A63] transition-colors">Projects</Link>
              <Link href="/luxury" className="hover:text-[#8A7A63] transition-colors">Intelligent Luxury</Link>
              <Link href="/contact" className="hover:text-[#8A7A63] transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Corporate Office Strip */}
        <div className="w-full h-[1px] bg-[#D8D2C8]/30 mb-8" />
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#2B2B2B]/40 leading-relaxed">
            Corporate Office: ViMond Landmark, Lane No. 7, Koregaon Park, Pune 411001, Maharashtra, India
          </p>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.2em] uppercase text-[#2B2B2B]/30 border-t border-[#D8D2C8]/20 pt-8">
          <p>© 2025 Vimond Realty. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[#8A7A63] transition-colors">Disclaimer</Link>
            <Link href="#" className="hover:text-[#8A7A63] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
