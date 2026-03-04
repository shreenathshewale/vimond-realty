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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif tracking-tighter text-foreground hover:text-primary transition-colors uppercase">
          ViMond<span className="text-primary italic">.</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/" className={cn("text-[10px] tracking-[0.3em] uppercase hover:text-primary transition-colors", pathname === '/' && "text-primary")}>
            Home
          </Link>
          <Link href="/about" className={cn("text-[10px] tracking-[0.3em] uppercase hover:text-primary transition-colors", pathname === '/about' && "text-primary")}>
            About
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-[10px] tracking-[0.3em] uppercase outline-none hover:text-primary transition-colors">
              Projects <ChevronDown className="w-2 h-2 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#E7E3DC] border-none rounded-none p-1 min-w-[200px] shadow-xl">
              <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary rounded-none py-4 cursor-pointer">
                <Link href="/projects/ongoing" className="text-[9px] tracking-[0.2em] uppercase w-full">Ongoing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary rounded-none py-4 cursor-pointer">
                <Link href="/projects/completed" className="text-[9px] tracking-[0.2em] uppercase w-full">Completed</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/luxury" className={cn("text-[10px] tracking-[0.3em] uppercase hover:text-primary transition-colors", pathname === '/luxury' && "text-primary")}>
            Philosophy
          </Link>
          <Link href="/contact" className={cn("text-[10px] tracking-[0.3em] uppercase hover:text-primary transition-colors", pathname === '/contact' && "text-primary")}>
            Contact
          </Link>
        </div>

        <Link href="/contact">
          <Button variant="outline" className="rounded-none border-primary/20 text-primary text-[9px] tracking-[0.3em] uppercase px-8 h-10 hover:bg-primary hover:text-white transition-all">
            Inquiry
          </Button>
        </Link>
      </div>
    </nav>
  );
}
