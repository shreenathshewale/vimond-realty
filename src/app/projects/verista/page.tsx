'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function VeristaPage() {
  const amenities = ['Landscaped Courtyard', 'Multipurpose Hall', 'Concierge Service', 'Advanced Security'];
  const advantages = ['Historic Law College Road', 'Near FTII & Bhandarkar Institute', 'Serene and Prestigious'];

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
            <span className="text-[10px] tracking-[0.6em] uppercase text-[#8A7A63] mb-6 block font-bold">Project No. 02</span>
            <h1 className="text-5xl md:text-8xl font-serif leading-none mb-6">Verïsta<span className="text-[#8A7A63] italic">.</span></h1>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#2B2B2B]/40">Law College Road, Pune</p>
          </motion.div>

          <motion.div 
            className="relative aspect-video w-full overflow-hidden shadow-2xl mb-24"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image 
              src="/images/Verista.png" 
              alt="Verïsta Project" 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-32">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif">Contemporary <br /> heritage.</h2>
              <div className="w-16 h-[1px] bg-[#8A7A63]/30" />
              <p className="text-xl font-light text-[#2B2B2B]/70 leading-relaxed italic">
                Verïsta stands as a testament to intelligent design in a historic heart, blending traditional values with cutting-edge architecture.
              </p>
              <div className="pt-8">
                <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] font-bold mb-6">Key Features</h4>
                <ul className="space-y-4 text-sm font-light text-[#2B2B2B]/60 italic">
                  <li>• High Ceiling Concept</li>
                  <li>• Cross-Ventilation Engineering</li>
                  <li>• Expansive Private Balconies</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-12">
              <p className="text-sm font-light text-[#2B2B2B]/60 leading-relaxed">
                On the prestigious Law College Road, Verïsta offers a rare combination of modern luxury and serene heritage. The development focuses on maximizing natural light and cross-ventilation, ensuring that form always follows the intelligence of the site&apos;s unique characteristics.
              </p>
              
              <div className="grid grid-cols-2 gap-12 border-y border-[#D8D2C8] py-12">
                <div>
                  <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] font-bold mb-4">Amenities</h4>
                  <ul className="text-[10px] tracking-[0.2em] uppercase text-[#2B2B2B]/50 space-y-2">
                    {amenities.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] font-bold mb-4">Location</h4>
                  <ul className="text-[10px] tracking-[0.2em] uppercase text-[#2B2B2B]/50 space-y-2">
                    {advantages.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/contact">
                  <Button className="h-16 px-12 rounded-none bg-[#2B2B2B] text-[#F7F5F2] text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-[#8A7A63] transition-all w-full md:w-auto">
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
