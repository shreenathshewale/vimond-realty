'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Heart, 
  Dumbbell, 
  ShieldCheck, 
  Home, 
  Cpu, 
  MapPin, 
  Download,
  ArrowRight,
  User,
  Layout,
  Briefcase
} from 'lucide-react';

export default function SignaturePage() {
  const amenities = [
    { icon: <Heart className="w-6 h-6" />, label: "Wellness Center" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Business Lounge" },
    { icon: <User className="w-6 h-6" />, label: "Children Play Area" },
    { icon: <Layout className="w-6 h-6" />, label: "Rooftop Skywalk" },
    { icon: <ShieldCheck className="w-6 h-6" />, label: "Advanced Security" },
    { icon: <Dumbbell className="w-6 h-6" />, label: "Elite Fitness Lab" },
    { icon: <Home className="w-6 h-6" />, label: "Grand Lobby" },
    { icon: <Cpu className="w-6 h-6" />, label: "Home Automation" },
  ];

  const advantages = [
    "Tranquil Model Colony Location",
    "Easy Access to Pune University",
    "Premier and Established Neighborhood",
    "Connected to Major Commercial Hubs"
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
              <span className="text-[10px] tracking-[0.6em] uppercase text-[#8A7A63] mb-6 block font-bold">Project No. 03</span>
              <h1 className="text-5xl md:text-8xl font-serif leading-none mb-6 text-[#2B2B2B]">Signature<span className="text-[#8A7A63] italic">.</span></h1>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.5em] uppercase text-[#2B2B2B]/40">
                <MapPin className="w-3 h-3" />
                <span>Model Colony, Pune</span>
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
              src="/images/Signature.png" 
              alt="Signature Project" 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-32">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B]">A legacy <br /> redefined.</h2>
              <div className="w-16 h-[1px] bg-[#8A7A63]/30" />
              <p className="text-xl font-light text-[#2B2B2B]/70 leading-relaxed italic">
                Signature Tower II represents the peak of architectural mastery in Model Colony, setting new benchmarks for urban sophistication.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-sm font-light text-[#2B2B2B]/60 leading-relaxed">
                As a landmark development, Signature is designed for those who appreciate the finer nuances of living. The project integrates dynamic building methods with absolute precision engineering, resulting in a landmark that remains elegant and relevant across decades.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-[#D8D2C8] pt-8">
                 <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8A7A63] font-bold">Status</span>
                    <p className="text-sm font-serif mt-1">Ongoing</p>
                 </div>
                 <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8A7A63] font-bold">Configurations</span>
                    <p className="text-sm font-serif mt-1">4 BHK Sky Homes</p>
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
                  src="https://www.google.com/maps?q=Model+Colony+Pune&output=embed"
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
                  <Image src="/images/hero.jpg" alt="Interior View" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5" />
               </div>
               <div className="relative aspect-[4/5] overflow-hidden group lg:mt-12">
                  <Image src="/images/we.png" alt="Architectural Detail" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5" />
               </div>
               <div className="relative aspect-[4/5] overflow-hidden group">
                  <Image src="/images/Signature.png" alt="Exterior View" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
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
            <h2 className="text-4xl md:text-6xl font-serif text-[#2B2B2B]">A Legacy Redefined.</h2>
            <p className="text-lg font-light text-[#2B2B2B]/60 italic max-w-xl mx-auto">
              Signature Tower II is more than a residence; it is an architectural landmark. Reserve your position today.
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
