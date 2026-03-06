'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { projects } from '@/data/projects';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  Waves, 
  Dumbbell, 
  Trees, 
  Cpu, 
  Car, 
  Sun, 
  Layout, 
  Home, 
  Heart, 
  Briefcase,
  Smile,
  Star,
  CheckCircle2
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { InquiryPopup } from '@/components/ui/inquiry-popup';

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-6 h-6" />,
  Dumbbell: <Dumbbell className="w-6 h-6" />,
  Trees: <Trees className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  Sun: <Sun className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Smile: <Smile className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = React.useState('about');
  const [isInquiryOpen, setIsInquiryOpen] = React.useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-serif">Project Not Found</h1>
      </div>
    );
  }

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'configurations', label: 'Configurations' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'location', label: 'Location' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveTab(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <Navbar />
      
      {/* Project Hero */}
      <section className="pt-48 pb-24 px-6 md:px-10 lg:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          >
            <div className="max-w-3xl">
              <span className="text-[10px] tracking-[0.6em] uppercase text-[#8A7A63] mb-6 block font-bold">
                Project Collection / {project.status}
              </span>
              <h1 className="text-5xl md:text-8xl font-serif leading-none mb-6 text-[#2B2B2B]">
                {project.name}<span className="text-[#8A7A63] italic">.</span>
              </h1>
              <p className="text-xl font-light text-[#2B2B2B]/60 italic mb-8 max-w-xl">
                {project.tagline}
              </p>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.5em] uppercase text-[#2B2B2B]/40">
                <MapPin className="w-3 h-3 text-[#8A7A63]" />
                <span>{project.location}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setIsInquiryOpen(true)}
                className="h-14 px-8 rounded-none bg-[#2B2B2B] text-[#F7F5F2] text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#8A7A63] transition-all"
              >
                Inquire Now
              </Button>
              <Button 
                onClick={() => setIsInquiryOpen(true)}
                variant="outline" 
                className="h-14 px-8 rounded-none border-[#8A7A63] text-[#8A7A63] text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#8A7A63] hover:text-white transition-all gap-2"
              >
                <Download className="w-4 h-4" />
                Download Brochure →
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative aspect-video w-full overflow-hidden shadow-2xl mb-12"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image 
              src={project.image} 
              alt={project.name} 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-24 z-30 bg-white/90 backdrop-blur-md border-y border-[#D8D2C8] overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex items-center justify-start gap-8 md:gap-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={cn(
                "py-6 text-[10px] tracking-[0.4em] uppercase font-bold transition-all border-b-2",
                activeTab === tab.id ? "text-[#8A7A63] border-[#8A7A63]" : "text-[#2B2B2B]/40 border-transparent hover:text-[#2B2B2B]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-24 space-y-32">
        {/* About Section */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B]">Visionary <br /> Engineering.</h2>
            <div className="w-16 h-[1px] bg-[#8A7A63]/30" />
            <p className="text-xl font-light text-[#2B2B2B]/70 leading-relaxed italic">
              {project.about}
            </p>
            {project.rera && (
              <div className="p-8 bg-[#ECE8E1] border-l-4 border-[#8A7A63]">
                <p className="text-[10px] tracking-widest uppercase font-bold text-[#8A7A63] mb-1">MahaRERA Registration No.</p>
                <p className="text-lg font-serif">{project.rera}</p>
                <a href="https://maharera.mahaonline.gov.in" target="_blank" className="text-[9px] underline uppercase tracking-widest mt-2 block hover:text-[#8A7A63] transition-colors">Visit MahaRERA Website</a>
              </div>
            )}
          </div>
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {project.amenities.map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 group p-4 border border-[#D8D2C8] hover:bg-white transition-colors">
                   <div className="text-[#8A7A63] group-hover:scale-110 transition-transform">
                     {iconMap[item.icon] || <ShieldCheck className="w-6 h-6" />}
                   </div>
                   <span className="text-[10px] tracking-[0.2em] uppercase font-bold">{item.label}</span>
                 </div>
               ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xs tracking-[0.4em] uppercase text-[#8A7A63] font-bold">Key Highlights</h3>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-light italic text-[#2B2B2B]/60">
                    <CheckCircle2 className="w-4 h-4 text-[#8A7A63]" /> {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Configurations Section */}
        {project.configurations && (
          <section id="configurations" className="space-y-16">
            <div className="text-center">
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#8A7A63] font-bold block mb-4">Availability</span>
              <h2 className="text-4xl md:text-6xl font-serif">Unit Configurations.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.configurations.map((config, i) => (
                <div key={i} className="bg-white p-12 border border-[#D8D2C8] text-center space-y-4 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-serif text-[#2B2B2B]">{config.type}</h3>
                  <div className="w-8 h-[1px] bg-[#8A7A63]/30 mx-auto" />
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A7A63] font-bold">Approx. Area</p>
                  <p className="text-lg font-light italic">{config.area}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Why Us Section */}
        <section id="why-us" className="space-y-16">
          <div className="text-center">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#8A7A63] font-bold block mb-4">Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-center">The ViMond Edge.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D8D2C8] border border-[#D8D2C8]">
            {project.whyUs.map((item, i) => (
              <div key={i} className="bg-[#F7F5F2] p-12 space-y-4 group hover:bg-white transition-colors duration-500">
                <span className="text-[10px] text-[#8A7A63] font-bold">0{i + 1}</span>
                <h3 className="text-xl font-serif text-[#2B2B2B] leading-tight">{item}</h3>
                <p className="text-xs font-light text-[#2B2B2B]/40 leading-relaxed italic">
                  Crafted with architectural intelligence and precision.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div>
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#8A7A63] font-bold block mb-4">Connectivity</span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B]">Location <br /> Advantage<span className="text-[#8A7A63] italic">.</span></h2>
              </div>
              <div className="space-y-6">
                {project.advantages.map((adv, i) => (
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
                src={`https://www.google.com/maps?q=${encodeURIComponent(project.location)}&output=embed`}
                width="100%"
                height="100%"
                className="transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="max-w-3xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-serif">Inquiry Support.</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {project.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-[#D8D2C8] py-4">
                <AccordionTrigger className="text-left font-serif text-xl text-[#2B2B2B] hover:no-underline hover:text-[#8A7A63] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-light text-[#2B2B2B]/60 italic pt-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final CTA */}
        <motion.div 
          className="p-16 md:p-24 bg-[#ECE8E1] text-center space-y-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-[#2B2B2B]">Refine Your Lifestyle.</h2>
          <p className="text-lg font-light text-[#2B2B2B]/60 italic max-w-xl mx-auto">
            Connect with our relationship managers for a private tour and more details about your future home.
          </p>
          <div className="pt-6">
            <Button 
              onClick={() => setIsInquiryOpen(true)}
              className="h-16 px-16 rounded-none bg-[#2B2B2B] text-[#F7F5F2] text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-[#8A7A63] transition-all"
            >
              Book a Consultation
            </Button>
          </div>
        </motion.div>
      </div>

      <InquiryPopup 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
        defaultProject={project.slug}
      />
      <Footer />
    </main>
  );
}
