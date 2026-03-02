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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[#B89B72]/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        <Link href="/" className="text-xl font-serif tracking-[0.2em] text-[#2C2C2C] hover:text-[#B89B72] transition-colors uppercase">
          ViMond<span className="text-[#B89B72] italic">.</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/" className={cn("nav-link", pathname === '/' && "text-[#B89B72]")}>
            Home
          </Link>
          <Link href="/about" className={cn("nav-link", pathname === '/about' && "text-[#B89B72]")}>
            About Us
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 nav-link outline-none">
              Projects <ChevronDown className="w-2 h-2 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#F5F1EB] border-[#B89B72]/20 rounded-none p-1 min-w-[220px] shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <DropdownMenuItem className="focus:bg-[#B89B72]/10 focus:text-[#B89B72] rounded-none py-4 cursor-pointer">
                <Link href="/projects/ongoing" className="text-[10px] tracking-[0.2em] uppercase w-full">Ongoing Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-[#B89B72]/10 focus:text-[#B89B72] rounded-none py-4 cursor-pointer">
                <Link href="/projects/completed" className="text-[10px] tracking-[0.2em] uppercase w-full">Completed Projects</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/luxury" className={cn("nav-link", pathname === '/luxury' && "text-[#B89B72]")}>
            Intelligent Luxury
          </Link>
          <Link href="/contact" className={cn("nav-link", pathname === '/contact' && "text-[#B89B72]")}>
            Contact Us
          </Link>
        </div>

        <Link href="/contact">
          <Button variant="outline" className="rounded-none border-[#B89B72]/40 text-[#B89B72] text-[10px] tracking-[0.3em] uppercase px-8 h-10 hover:bg-[#B89B72] hover:text-white transition-all">
            Inquiry
          </Button>
        </Link>
      </div>
    </nav>
  );
}
