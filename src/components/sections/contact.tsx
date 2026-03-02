
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold tracking-wider uppercase mb-2">Reach Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Looking for your dream property? Let&apos;s build it together.</h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-xl text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/60 mb-1">Call Now</p>
                  <p className="text-xl font-bold">+91 91724 81200</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-xl text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/60 mb-1">Email Us</p>
                  <p className="text-xl font-bold">sales@vimondrealty.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-xl text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/60 mb-1">Corporate Office</p>
                  <p className="text-lg font-bold">“Arthvishva” 3rd floor, Lane no. 5, Koregaon Park, Pune- 411001</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 text-foreground shadow-2xl">
            <h3 className="text-2xl font-bold text-primary mb-6">Send an Inquiry</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input placeholder="John Doe" className="bg-muted/30 border-none h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</label>
                  <Input placeholder="+91 12345 67890" className="bg-muted/30 border-none h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                <Input placeholder="john@example.com" className="bg-muted/30 border-none h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea placeholder="I'm interested in learning more about..." className="bg-muted/30 border-none min-h-[120px]" />
              </div>
              <Button className="w-full bg-accent text-white h-14 text-lg rounded-xl font-bold mt-4 hover:bg-accent/90">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
