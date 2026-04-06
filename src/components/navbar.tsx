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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { InquiryPopup } from '@/components/ui/inquiry-popup';

export function Navbar() {
  const pathname = usePathname();
  const [isInquiryOpen, setIsInquiryOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/luxury', label: 'Intelligent Luxury' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
  ];

  const projectLinks = [
    { href: '/projects/ongoing', label: 'Ongoing' },
    { href: '/projects/completed', label: 'Completed' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F1F1F]/95 backdrop-blur-md border-b border-white/5 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 md:h-24 flex justify-between items-center">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Image
              src="/images/Logo.png"
              alt="ViMond Realty"
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.slice(0, 2).map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={cn(
                  "text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-[#8A7A63]", 
                  pathname === link.href ? "text-[#8A7A63]" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            
            {mounted ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-[10px] tracking-[0.3em] uppercase outline-none text-white hover:text-[#8A7A63] transition-colors">
                  Projects <ChevronDown className="w-2 h-2 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1F1F1F] border border-white/10 rounded-none p-1 min-w-[200px] shadow-2xl">
                  {projectLinks.map((link) => (
                    <DropdownMenuItem key={link.href} className="focus:bg-white/5 focus:text-[#8A7A63] rounded-none py-4 cursor-pointer">
                      <Link href={link.href} className="text-[9px] tracking-[0.2em] uppercase w-full text-white/80">{link.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-1 text-[10px] tracking-[0.3em] uppercase text-white cursor-default">
                Projects <ChevronDown className="w-2 h-2 opacity-50" />
              </div>
            )}

            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={cn(
                  "text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-[#8A7A63]", 
                  pathname === link.href ? "text-[#8A7A63]" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button 
              onClick={() => setIsInquiryOpen(true)}
              variant="outline" 
              className="hidden sm:flex rounded-none border-[#8A7A63]/50 text-[#8A7A63] text-[9px] tracking-[0.3em] uppercase px-6 md:px-8 h-10 hover:bg-[#8A7A63] hover:text-white transition-all bg-transparent"
            >
              Inquiry
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden p-2 text-white hover:bg-white/5">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1F1F1F] border-white/10 p-0 text-white w-[80%] max-w-[400px]">
                <div className="flex flex-col h-full pt-20 px-8 pb-12">
                  <div className="space-y-8">
                    {navLinks.slice(0, 2).map((link) => (
                      <Link 
                        key={link.href}
                        href={link.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block text-lg tracking-[0.2em] uppercase font-light",
                          pathname === link.href ? "text-[#8A7A63]" : "text-white/70"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}

                    <div className="space-y-4">
                      <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold">Projects</p>
                      {projectLinks.map((link) => (
                        <Link 
                          key={link.href}
                          href={link.href} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-lg tracking-[0.2em] uppercase font-light pl-4"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>

                    {navLinks.slice(2).map((link) => (
                      <Link 
                        key={link.href}
                        href={link.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block text-lg tracking-[0.2em] uppercase font-light",
                          pathname === link.href ? "text-[#8A7A63]" : "text-white/70"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto pt-12">
                    <Button 
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsInquiryOpen(true);
                      }}
                      className="w-full h-14 rounded-none bg-[#8A7A63] text-white text-[10px] tracking-[0.4em] uppercase font-bold"
                    >
                      Inquire Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <InquiryPopup 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
      />
    </>
  );
}
