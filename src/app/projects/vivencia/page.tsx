'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Waves, 
  Dumbbell, 
  Trees, 
  Smile, 
  Car, 
  ShieldCheck, 
  Home, 
  Cpu, 
  MapPin, 
  Download,
  ArrowRight
} from 'lucide-react';

export default function VivenciaPage() {
  const amenities = [
    { icon: <Waves className="w-6 h-6" />, label: "Infinity Pool" },
    { icon: <Dumbbell className="w-6 h-6" />, label: "Private Gym" },
    { icon: <Trees className="w-6 h-6" />, label: "Rooftop Garden" },
    { icon: <Smile className="w-6 h-6" />, label: "Children Play Area" },
    { icon: <Car className="w-6 h-6" />, label: "Reserved Parking" },
    { icon: <ShieldCheck className="w-6 h-6" />, label: "24/7 Security" },
    { icon: <Home className="w-6 h-6" />, label: "Grand Clubhouse" },
    { icon: <Cpu className="w-6 h-6" />, label: "Smart Automation" },
  ];

  const advantages = [
    "Heart of Koregaon Park, Lane 7",
    "Proximity to Osho International Resort",
    "Access to Elite Lifestyle & Dining Hubs",
    "Serene, Tree-lined Historical Neighborhood"
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <Navbar />
      
      {/* Project Hero */}
      <section className="pt-48 pb-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          >
            <div>
              <span className="text-[10px] tracking-[0.6em] uppercase text-[#8A7A63] mb-6 block font-bold">Project No. 01</span>
              <h1 className="text-5xl md:text-8xl font-serif leading-none mb-6 text-[#2B2B2B]">Vivencia<span className="text-[#8A7A63] italic">.</span></h1>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.5em] uppercase text-[#2B2B2B]/40">
                <MapPin className="w-3 h-3" />
                <span>Koregaon Park, Pune</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="h-14 px-8 rounded-none bg-[#2B2B2B] text-[#F7F5F2] text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#8A7A63] transition-all">
                  Inquire Now
                </Button>
              </Link>
              <Button variant="outline" className="h-14 px-8 rounded-none border-[#8A7A63] text-[#8A7A63] text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#8A7A63] hover:text-white transition-all gap-2">
                <Download className="w-4 h-4" />
                Download Brochure
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative aspect-video w-full overflow-hidden shadow-2xl mb-24"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image 
              src="/images/Vivenica.png" 
              alt="Vivencia Project" 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-32">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B]">Tree-lined <br /> elegance.</h2>
              <div className="w-16 h-[1px] bg-[#8A7A63]/30" />
              <p className="text-xl font-light text-[#2B2B2B]/70 leading-relaxed italic">
                Located in the heart of Pune's most prestigious neighborhood, Vivencia is a landmark of architectural precision and lifestyle enhancement.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-sm font-light text-[#2B2B2B]/60 leading-relaxed">
                Every detail of Vivencia has been engineered to honor the legacy of Koregaon Park while introducing modern, future-proof building methods. From the orientation of the living spaces to the selection of sustainable materials, intelligence is at the core of this luxury development.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-[#D8D2C8] pt-8">
                 <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8A7A63] font-bold">Status</span>
                    <p className="text-sm font-serif mt-1">Ongoing</p>
                 </div>
                 <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8A7A63] font-bold">Configurations</span>
                    <p className="text-sm font-serif mt-1">3 & 4 BHK</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Amenities Grid */}
          <section className="mb-32">
            <div className="mb-16">
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#8A7A63] font-bold block mb-4">Lifestyle</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B]">Amenities<span className="text-[#8A7A63] italic">.</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D8D2C8] border border-[#D8D2C8]">
              {amenities.map((item, idx) => (
                <div key={idx} className="bg-[#F7F5F2] p-10 flex flex-col items-center text-center group hover:bg-[#ECE8E1] transition-colors">
                  <div className="text-[#8A7A63] mb-6 transition-transform group-hover:scale-110 duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#2B2B2B] font-bold">{item.label}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Location Advantage */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div>
                  <span className="text-[10px] tracking-[0.5em] uppercase text-[#8A7A63] font-bold block mb-4">Connectivity</span>
                  <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B]">Location <br /> Advantage<span className="text-[#8A7A63] italic">.</span></h2>
                </div>
                <div className="space-y-6">
                  {advantages.map((adv, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="mt-1.5 p-1 bg-[#8A7A63]/10 rounded-full group-hover:bg-[#8A7A63] transition-colors">
                        <ArrowRight className="w-3 h-3 text-[#8A7A63] group-hover:text-white" />
                      </div>
                      <p className="text-lg font-light text-[#2B2B2B]/70 italic">{adv}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] w-full shadow-2xl border border-[#D8D2C8]">
                <iframe
                  src="https://www.google.com/maps?q=Koregaon+Park+Pune&output=embed"
                  width="100%"
                  height="100%"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Gallery Preview */}
          <section className="mb-32">
             <div className="mb-16">
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#8A7A63] font-bold block mb-4">Visuals</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B]">The Gallery<span className="text-[#8A7A63] italic">.</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="relative aspect-[4/5] overflow-hidden group">
                  <Image src="/images/Hero.png" alt="Interior View" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5" />
               </div>
               <div className="relative aspect-[4/5] overflow-hidden group lg:mt-12">
                  <Image src="/images/we.png" alt="Architectural Detail" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5" />
               </div>
               <div className="relative aspect-[4/5] overflow-hidden group">
                  <Image src="/images/Vivenica.png" alt="Exterior View" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5" />
               </div>
            </div>
          </section>

          {/* Final CTA */}
          <motion.div 
            className="p-16 md:p-24 bg-[#ECE8E1] text-center space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-[#2B2B2B]">Begin your journey.</h2>
            <p className="text-lg font-light text-[#2B2B2B]/60 italic max-w-xl mx-auto">
              Connect with our relationship managers to experience the intelligent luxury of Vivencia first hand.
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <Button className="h-16 px-16 rounded-none bg-[#2B2B2B] text-[#F7F5F2] text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-[#8A7A63] transition-all">
                  Request a Private Tour
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
