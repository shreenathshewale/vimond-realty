
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-primary mb-6 block">
              ViMond<span className="text-accent">Realty</span>
            </Link>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8">
              From bespoke residences to landmark developments, our portfolio embodies a dedication to craftsmanship, forward-thinking design, and enduring quality.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                <button key={idx} className="bg-muted/50 p-2.5 rounded-full text-primary hover:bg-accent hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6">Navigate</h4>
            <ul className="space-y-4">
              {['Home', 'Projects', 'Intelligent Luxury', 'About', 'Blogs', 'FAQs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-accent text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>sales@vimondrealty.com</li>
              <li>+91 91724 81200</li>
              <li className="leading-relaxed">
                “Arthvishva” 3rd floor, Lane no. 5, Koregaon Park, Pune- 411001
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4 font-light">
              Subscribe to our newsletter for latest updates and luxury insights.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-muted/30 border-none rounded-full h-12" />
              <Button size="icon" className="bg-primary text-white rounded-full h-12 w-12 flex-shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-xs font-light">
            © 2026 ViMond Realty. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {['Terms & Conditions', 'Privacy Policy', 'Disclaimer'].map((item) => (
              <Link key={item} href="#" className="text-muted-foreground hover:text-accent text-xs transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground text-[10px] font-light uppercase tracking-widest">
            Designed & Developed by Oye Marketor
          </p>
        </div>
      </div>
    </footer>
  );
}
