'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif tracking-[0.1em] text-white hover-gold uppercase">
          ViMond<span className="text-primary">.</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/" className="text-[10px] font-medium tracking-[0.3em] uppercase hover-gold">
            Home
          </Link>
          <Link href="#about" className="text-[10px] font-medium tracking-[0.3em] uppercase hover-gold">
            About Us
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-[10px] font-medium tracking-[0.3em] uppercase hover-gold outline-none">
              Projects <ChevronDown className="w-3 h-3 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background/95 border-white/5 backdrop-blur-xl rounded-none p-2 min-w-[200px] animate-in fade-in zoom-in-95 duration-200">
              <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary rounded-none py-3">
                <Link href="#projects" className="text-[9px] tracking-[0.2em] uppercase w-full">Ongoing Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary rounded-none py-3">
                <Link href="#projects" className="text-[9px] tracking-[0.2em] uppercase w-full">Completed Projects</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="#philosophy" className="text-[10px] font-medium tracking-[0.3em] uppercase hover-gold">
            Intelligent Luxury
          </Link>
          <Link href="#contact" className="text-[10px] font-medium tracking-[0.3em] uppercase hover-gold">
            Contact Us
          </Link>
        </div>

        <Button variant="outline" className="rounded-none border-primary/30 text-primary text-[10px] tracking-[0.2em] uppercase px-8 hover:bg-primary hover:text-background transition-all">
          Inquiry
        </Button>
      </div>
    </nav>
  );
}