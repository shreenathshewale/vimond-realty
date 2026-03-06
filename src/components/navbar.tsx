'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { InquiryPopup } from '@/components/ui/inquiry-popup';

export function Navbar() {
  const pathname = usePathname();
  const [isInquiryOpen, setIsInquiryOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F1F1F]/90 backdrop-blur-md border-b border-white/5 shadow-lg">
        <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Image
              src="/images/Logo.png"
              alt="ViMond Realty"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              href="/" 
              className={cn(
                "text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-[#8A7A63]", 
                pathname === '/' ? "text-[#8A7A63]" : "text-white"
              )}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={cn(
                "text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-[#8A7A63]", 
                pathname === '/about' ? "text-[#8A7A63]" : "text-white"
              )}
            >
              About
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-[10px] tracking-[0.3em] uppercase outline-none text-white hover:text-[#8A7A63] transition-colors">
                Projects <ChevronDown className="w-2 h-2 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1F1F1F] border border-white/10 rounded-none p-1 min-w-[200px] shadow-2xl">
                <DropdownMenuItem className="focus:bg-white/5 focus:text-[#8A7A63] rounded-none py-4 cursor-pointer">
                  <Link href="/projects/ongoing" className="text-[9px] tracking-[0.2em] uppercase w-full text-white/80">Ongoing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white/5 focus:text-[#8A7A63] rounded-none py-4 cursor-pointer">
                  <Link href="/projects/completed" className="text-[9px] tracking-[0.2em] uppercase w-full text-white/80">Completed</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              href="/luxury" 
              className={cn(
                "text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-[#8A7A63]", 
                pathname === '/luxury' ? "text-[#8A7A63]" : "text-white"
              )}
            >
              Intelligent Luxury
            </Link>

            <Link 
              href="/insights" 
              className={cn(
                "text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-[#8A7A63]", 
                pathname === '/insights' ? "text-[#8A7A63]" : "text-white"
              )}
            >
              Insights
            </Link>

            <Link 
              href="/contact" 
              className={cn(
                "text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-[#8A7A63]", 
                pathname === '/contact' ? "text-[#8A7A63]" : "text-white"
              )}
            >
              Contact
            </Link>
          </div>

          <Button 
            onClick={() => setIsInquiryOpen(true)}
            variant="outline" 
            className="rounded-none border-[#8A7A63]/50 text-[#8A7A63] text-[9px] tracking-[0.3em] uppercase px-8 h-10 hover:bg-[#8A7A63] hover:text-white transition-all bg-transparent"
          >
            Inquiry
          </Button>
        </div>
      </nav>

      <InquiryPopup 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
      />
    </>
  );
}
