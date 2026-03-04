
'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Eye, Diamond, Sparkles, Briefcase, Heart } from 'lucide-react';

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'office-space');
  const founderImg = PlaceHolderImages.find(img => img.id === 'founder-portrait');

  const values = [
    { title: "Transparency", icon: <Eye className="w-5 h-5" />, desc: "Honesty and clarity in every development phase." },
    { title: "Quality", icon: <Diamond className="w-5 h-5" />, desc: "Uncompromising standards in materials and design." },
    { title: "Delight", icon: <Sparkles className="w-5 h-5" />, desc: "Exceeding expectations to bring joy to every resident." },
    { title: "Responsibility", icon: <Briefcase className="w-5 h-5" />, desc: "Accountability for our environmental impact." },
    { title: "Care", icon: <Heart className="w-5 h-5" />, desc: "Building communities with empathy." }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Section 1: About Company - Split Editorial */}
      <section className="pt-48 pb-32 px-8">
        <div className="asymmetric-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div 
              className="relative aspect-[4/5] overflow-hidden group shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              {aboutImg?.imageUrl && (
                <Image 
                  src={aboutImg.imageUrl} 
                  alt="Architecture Studio" 
                  fill 
                  className="object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint={aboutImg.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
              {/* Offset Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/20 -z-10" />
            </motion.div>
            
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Legacy & Vision</span>
                <h1 className="text-5xl md:text-8xl font-serif uppercase tracking-tighter leading-none">About <br /> Vimond Realty</h1>
                <div className="w-24 h-[1px] bg-primary/30" />
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 italic">
                ViMond Realty stands as a beacon of architectural mastery, carefully selecting Pune's most prestigious locations to build landmark developments.
              </p>
              <p className="text-sm font-light leading-relaxed text-foreground/50 max-w-md">
                We believe that luxury is not just an aesthetic; it is the thoughtful response to modern living. Our approach integrates dynamic building methods with a deep respect for cultural heritage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission and Vision - Elevated Cards */}
      <section className="py-32 px-8 bg-card/30">
        <div className="asymmetric-container grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Our Mission", text: "To redefine urban living by crafting landmarks that embody intelligent luxury, precision engineering, and architectural artistry." },
            { title: "Our Vision", text: "To be Pune's most trusted developer, recognized for creating enduring legacies that harmonize modern innovation with timeless elegance." }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              className="group p-16 bg-background border border-primary/5 rounded-none shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <h2 className="text-3xl font-serif mb-8 text-primary uppercase tracking-widest">{card.title}</h2>
              <p className="text-lg font-light leading-relaxed text-foreground/60 italic">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Company Values - Horizontal Blocks */}
      <section className="py-48 px-8">
        <div className="asymmetric-container">
          <motion.h2 
            className="text-4xl md:text-6xl font-serif text-center mb-32 uppercase tracking-tighter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-y border-primary/10">
            {values.map((value, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center text-center p-12 md:border-r last:border-r-0 border-primary/10 group hover:bg-card/20 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-primary mb-8 transform transition-transform group-hover:scale-125 duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xs font-serif mb-6 uppercase tracking-[0.4em] font-bold">{value.title}</h3>
                <p className="text-[10px] font-light text-foreground/40 uppercase tracking-widest leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Founder Section - Floating Editorial */}
      <section className="py-64 px-8 bg-card/10 relative">
        <div className="asymmetric-container grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            {/* Offset Background Panel */}
            <div className="absolute -top-12 -right-12 w-full h-full bg-secondary/20 -z-10" />
            <div className="relative aspect-[4/5] overflow-hidden grayscale shadow-2xl">
              {founderImg?.imageUrl && (
                <Image 
                  src={founderImg.imageUrl} 
                  alt="Mr. Vijay Munde" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint={founderImg.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700" />
            </div>
          </motion.div>
          
          <motion.div 
            className="p-16 bg-background border border-primary/5 shadow-2xl relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="absolute -top-12 -left-12 text-9xl font-serif text-primary/10 select-none leading-none">"</div>
            <div className="space-y-2 mb-12">
              <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">Founder</span>
              <h2 className="text-5xl font-serif leading-none">Mr. Vijay Munde</h2>
            </div>
            <p className="text-xl font-light text-foreground/70 leading-relaxed mb-12 italic">
              "Building is not just about concrete and steel; it's about creating the backdrop for life's most precious moments."
            </p>
            <p className="text-xs font-light text-foreground/40 leading-relaxed uppercase tracking-widest">
              Under Vijay's leadership, ViMond Realty has evolved into an architectural powerhouse driven by 'Intelligent Luxury'.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
