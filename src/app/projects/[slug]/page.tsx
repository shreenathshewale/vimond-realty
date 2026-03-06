'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { projects } from '@/data/projects';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  ExternalLink
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-serif">Project Not Found</h1>
      </div>
    );
  }

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
              <span className="text-[10px] tracking-[0.6em] uppercase text-[#8A7A63] mb-6 block font-bold">
                Project / {project.status}
              </span>
              <h1 className="text-5xl md:text-8xl font-serif leading-none mb-6 text-[#2B2B2B]">
                {project.name}<span className="text-[#8A7A63] italic">.</span>
              </h1>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.5em] uppercase text-[#2B2B2B]/40">
                <MapPin className="w-3 h-3" />
                <span>{project.location}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-14 px-8 rounded-none bg-[#2B2B2B] text-[#F7F5F2] text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#8A7A63] transition-all">
                Inquire Now
              </Button>
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
              src={project.image} 
              alt={project.name} 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Project Content Tabs */}
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="bg-transparent border-b border-[#D8D2C8] w-full justify-start h-auto p-0 mb-16 gap-8 overflow-x-auto overflow-y-hidden no-scrollbar">
                {['details', 'location', 'why-us', 'faqs'].map((tab) => (
                  <TabsTrigger 
                    key={tab}
                    value={tab}
                    className="rounded-none bg-transparent border-b-2 border-transparent data-[state=active]:border-[#8A7A63] data-[state=active]:bg-transparent text-[10px] tracking-[0.4em] uppercase font-bold py-4 px-0"
                  >
                    {tab.replace('-', ' ')}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="details" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-32">
                  <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B]">The Vision & <br /> Planning.</h2>
                    <div className="w-16 h-[1px] bg-[#8A7A63]/30" />
                    <p className="text-xl font-light text-[#2B2B2B]/70 leading-relaxed italic">
                      {project.description}
                    </p>
                    {project.rera && (
                      <div className="p-6 bg-[#ECE8E1] border-l-4 border-[#8A7A63]">
                        <p className="text-[10px] tracking-widest uppercase font-bold text-[#8A7A63] mb-1">MahaRERA Registration No.</p>
                        <p className="text-lg font-serif">{project.rera}</p>
                        <a href="https://maharera.mahaonline.gov.in" target="_blank" className="text-[9px] underline uppercase tracking-widest mt-2 block">Visit MahaRERA Website</a>
                      </div>
                    )}
                  </div>
                  <div className="space-y-8">
                    <p className="text-sm font-light text-[#2B2B2B]/60 leading-relaxed">
                      {project.fullDescription}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#D8D2C8]">
                       {project.amenities.map((item, idx) => (
                         <div key={idx} className="flex items-center gap-4 group">
                           <div className="text-[#8A7A63]">
                             {iconMap[item.icon] || <ShieldCheck className="w-6 h-6" />}
                           </div>
                           <span className="text-[10px] tracking-[0.2em] uppercase font-bold">{item.label}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="location" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
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
                      src={`https://www.google.com/maps?q=${encodeURIComponent(project.location + ' Pune')}&output=embed`}
                      width="100%"
                      height="100%"
                      className="transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="why-us" className="mt-0">
                <div className="mb-32">
                   <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-6xl font-serif">The ViMond Edge.</h2>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        { title: "Intelligent Design", desc: "Every square inch is planned with architectural intelligence." },
                        { title: "Prime Locations", desc: "We select Pune's most iconic heritage areas." },
                        { title: "Construction Quality", desc: "Dynamic building methods and premium materials." }
                      ].map((item, i) => (
                        <div key={i} className="p-12 bg-white border border-[#D8D2C8] space-y-4 text-center">
                           <h3 className="text-xl font-serif text-[#8A7A63]">{item.title}</h3>
                           <p className="text-sm font-light text-[#2B2B2B]/60 italic">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </TabsContent>

              <TabsContent value="faqs" className="mt-0">
                <div className="max-w-3xl mx-auto mb-32">
                   <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-6xl font-serif">Frequently Asked Questions.</h2>
                   </div>
                   <Accordion type="single" collapsible className="w-full">
                     {project.faqs.map((faq, idx) => (
                       <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-[#D8D2C8] py-4">
                         <AccordionTrigger className="text-left font-serif text-xl text-[#2B2B2B] hover:no-underline">
                           {faq.question}
                         </AccordionTrigger>
                         <AccordionContent className="text-lg font-light text-[#2B2B2B]/60 italic pt-4">
                           {faq.answer}
                         </AccordionContent>
                       </AccordionItem>
                     ))}
                   </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Final CTA */}
          <motion.div 
            className="p-16 md:p-24 bg-[#ECE8E1] text-center space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-[#2B2B2B]">Experience the Luxury.</h2>
            <p className="text-lg font-light text-[#2B2B2B]/60 italic max-w-xl mx-auto">
              Our relationship managers are ready to provide a private tour and more details about your future home.
            </p>
            <div className="pt-6">
               <Button className="h-16 px-16 rounded-none bg-[#2B2B2B] text-[#F7F5F2] text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-[#8A7A63] transition-all">
                  Book a Consultation
                </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
