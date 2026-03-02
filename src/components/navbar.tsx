'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        <Link href="/" className="text-xl font-serif tracking-[0.2em] text-foreground hover:text-primary transition-colors uppercase">
          ViMond<span className="text-primary italic">.</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/" className={cn("nav-link", pathname === '/' && "text-primary")}>
            Home
          </Link>
          <Link href="/about" className={cn("nav-link", pathname === '/about' && "text-primary")}>
            About Us
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 nav-link outline-none">
              Projects <ChevronDown className="w-2 h-2 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/95 border-black/5 backdrop-blur-xl rounded-none p-1 min-w-[220px] shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <DropdownMenuItem className="focus:bg-primary/5 focus:text-primary rounded-none py-4 cursor-pointer">
                <Link href="/projects/ongoing" className="text-[9px] tracking-[0.2em] uppercase w-full">Ongoing Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-primary/5 focus:text-primary rounded-none py-4 cursor-pointer">
                <Link href="/projects/completed" className="text-[9px] tracking-[0.2em] uppercase w-full">Completed Projects</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/luxury" className={cn("nav-link", pathname === '/luxury' && "text-primary")}>
            Intelligent Luxury
          </Link>
          <Link href="/contact" className={cn("nav-link", pathname === '/contact' && "text-primary")}>
            Contact Us
          </Link>
        </div>

        <Link href="/contact">
          <Button variant="outline" className="rounded-none border-primary/40 text-primary text-[9px] tracking-[0.3em] uppercase px-8 h-10 hover:bg-primary hover:text-white transition-all">
            Inquiry
          </Button>
        </Link>
      </div>
    </nav>
  );
}