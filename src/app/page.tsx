import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const luxuryImg = PlaceHolderImages.find(img => img.id === 'office-space');

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Redesigned Sections */}
      <About />
      <Projects />

      {/* Philosophy Preview */}
      <section className="section-padding ivory-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-20">
          <div className="md:w-1/2">
            <span className="text-[9px] tracking-[0.5em] uppercase text-primary mb-8 block">Our Ethos</span>
            <h2 className="text-4xl md:text-6xl mb-10 font-serif">Where form follows <span className="italic">intelligence.</span></h2>
            <Link href="/luxury" className="nav-link border-b border-primary/20 pb-2">
              Our Philosophy
            </Link>
          </div>
          <div className="md:w-1/2 aspect-video relative overflow-hidden shadow-sm">
            {luxuryImg?.imageUrl && (
              <Image 
                src={luxuryImg.imageUrl} 
                alt="Luxury Philosophy" 
                fill 
                className="object-cover opacity-80"
                data-ai-hint={luxuryImg.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      {/* CTA / Final Inquiry Section */}
      <Contact />

      <Footer />
    </main>
  );
}
