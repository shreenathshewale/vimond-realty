'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: <Instagram className="w-4 h-4" />, href: "#" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#" },
    { icon: <Facebook className="w-4 h-4" />, href: "#" },
    { icon: <Twitter className="w-4 h-4" />, href: "#" }
  ];

  return (
    <footer className="w-full flex flex-col">
      {/* TOP FOOTER - Light Section */}
      <section className="ivory-bg py-24 px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">
          
          {/* Column 1: Contact */}
          <div className="md:pr-12 md:border-r border-[#B89B72]/20 flex flex-col space-y-6">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-[#B89B72] font-bold">Contact</h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-[9px] tracking-[0.2em] uppercase text-foreground/40 font-medium">Inquiry</p>
                <p className="text-sm font-serif text-[#2C2C2C]">+91 (0) 20 2567 0000</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] tracking-[0.2em] uppercase text-foreground/40 font-medium">Email</p>
                <p className="text-sm font-serif text-[#2C2C2C]">inquiry@vmondrealty.com</p>
              </div>
            </div>
          </div>

          {/* Column 2: Office Address */}
          <div className="md:px-12 md:border-r border-[#B89B72]/20 flex flex-col space-y-6">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-[#B89B72] font-bold">Office</h4>
            <div className="space-y-2">
              <p className="text-sm font-serif text-[#2C2C2C] leading-relaxed">
                ViMond Landmark, <br />
                Lane No. 7, Koregaon Park, <br />
                Pune, Maharashtra 411001
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="md:pl-12 flex flex-col space-y-6">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-[#B89B72] font-bold">Explore</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/about" className="text-xs tracking-widest uppercase hover:text-[#B89B72] transition-colors w-fit">About</Link>
              <Link href="/projects/ongoing" className="text-xs tracking-widest uppercase hover:text-[#B89B72] transition-colors w-fit">Projects</Link>
              <Link href="/luxury" className="text-xs tracking-widest uppercase hover:text-[#B89B72] transition-colors w-fit">Intelligent Luxury</Link>
              <Link href="/contact" className="text-xs tracking-widest uppercase hover:text-[#B89B72] transition-colors w-fit">Contact</Link>
            </nav>
          </div>

        </div>
      </section>

      {/* MIDDLE STRIP - Dark Section */}
      <section className="charcoal-bg py-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex justify-center gap-6">
          {socialLinks.map((social, idx) => (
            <a 
              key={idx} 
              href={social.href}
              className="w-10 h-10 rounded-full border border-[#B89B72]/30 flex items-center justify-center text-[#B89B72] hover:bg-[#B89B72] hover:text-[#1F1F1F] transition-all duration-500 group"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>

      {/* BOTTOM STRIP - Minimal */}
      <section className="bg-[#E8DFD3] py-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#2C2C2C]/50 font-medium">
            © 2025 Vimond Realty. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[9px] tracking-[0.3em] uppercase text-[#2C2C2C]/50 font-medium hover:text-[#B89B72] transition-colors">
              Disclaimer
            </Link>
            <Link href="#" className="text-[9px] tracking-[0.3em] uppercase text-[#2C2C2C]/50 font-medium hover:text-[#B89B72] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
