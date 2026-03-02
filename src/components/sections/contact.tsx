'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col md:flex-row border-t border-black/5">
      {/* Left Side - Dark Section */}
      <div className="w-full md:w-2/5 charcoal-bg p-12 md:p-24 flex flex-col justify-center">
        <div className="space-y-16">
          <h2 className="text-4xl md:text-6xl font-serif text-[#F5F1EB] leading-tight">
            Connect with <br /> <span className="italic text-[#B89B72]">Excellence.</span>
          </h2>
          
          <div className="space-y-10">
            <div className="flex items-center gap-6 group">
              <div className="p-3 border border-[#B89B72]/30 text-[#B89B72] group-hover:bg-[#B89B72] group-hover:text-[#1F1F1F] transition-all">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#F5F1EB]/40 mb-1">Address</p>
                <p className="text-sm font-light text-[#F5F1EB]">Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-3 border border-[#B89B72]/30 text-[#B89B72] group-hover:bg-[#B89B72] group-hover:text-[#1F1F1F] transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#F5F1EB]/40 mb-1">Email</p>
                <p className="text-sm font-light text-[#F5F1EB]">inquiry@vmondrealty.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-3 border border-[#B89B72]/30 text-[#B89B72] group-hover:bg-[#B89B72] group-hover:text-[#1F1F1F] transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#F5F1EB]/40 mb-1">Call</p>
                <p className="text-sm font-light text-[#F5F1EB]">+91 (0) 20 2567 0000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Light Section */}
      <div className="w-full md:w-3/5 ivory-bg p-12 md:p-32 flex flex-col justify-center">
        <form className="space-y-12 max-w-xl w-full">
          <div className="space-y-8">
            <div className="group">
              <Input 
                placeholder="FULL NAME" 
                className="luxury-input"
              />
            </div>
            <div className="group">
              <Input 
                placeholder="EMAIL ADDRESS" 
                className="luxury-input"
              />
            </div>
            <div className="group">
              <Input 
                placeholder="PHONE NUMBER" 
                className="luxury-input"
              />
            </div>
            <div className="group">
              <Textarea 
                placeholder="YOUR MESSAGE" 
                className="luxury-input min-h-[100px] resize-none"
              />
            </div>
          </div>
          <Button className="w-full h-16 rounded-none bg-[#B89B72] text-[#F5F1EB] text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-[#A8845C] transition-all shadow-xl">
            Submit Inquiry
          </Button>
        </form>
      </div>
    </section>
  );
}
