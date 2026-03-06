'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SignaturePage() {
  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <Navbar />
      
      <section className="pt-48 pb-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 md:mb-24"
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-[#8A7A63] mb-6 block font-bold">Project No. 03</span>
            <h1 className="text-5xl md:text-8xl font-serif leading-none mb-6">Signature<span className="text-[#8A7A63] italic">.</span></h1>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#2B2B2B]/40">Model Colony, Pune</p>
          </motion.div>

          <motion.div 
            className="relative aspect-video w-full overflow-hidden shadow-2xl mb-24"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image 
              src="/images/Signature.png" 
              alt="Signature Project" 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif">A legacy <br /> redefined.</h2>
              <div className="w-16 h-[1px] bg-[#8A7A63]/30" />
              <p className="text-xl font-light text-[#2B2B2B]/70 leading-relaxed italic">
                Signature Tower II represents the peak of architectural mastery in Model Colony, setting new benchmarks for urban sophistication.
              </p>
            </div>
            
            <div className="space-y-12">
              <p className="text-sm font-light text-[#2B2B2B]/60 leading-relaxed">
                As a landmark development, Signature is designed for those who appreciate the finer nuances of living. The project integrates dynamic building methods with absolute precision engineering, resulting in a landmark that remains elegant and relevant across decades.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-[#D8D2C8] pt-12">
                <div>
                  <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] font-bold mb-4">Status</h4>
                  <p className="text-sm font-light text-[#2B2B2B]/60 uppercase tracking-widest">Completed</p>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] font-bold mb-4">Typology</h4>
                  <p className="text-sm font-light text-[#2B2B2B]/60 uppercase tracking-widest">Iconic Tower</p>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/contact">
                  <Button className="h-16 px-12 rounded-none bg-[#2B2B2B] text-[#F7F5F2] text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-[#8A7A63] transition-all">
                    Inquire Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
