import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const projectsImg = PlaceHolderImages.find(img => img.id === 'vivencia-project');
  const luxuryImg = PlaceHolderImages.find(img => img.id === 'office-space');

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Short Intro */}
      <section className="section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl leading-[1.3] text-foreground font-serif">
            We craft landmarks that define the <span className="italic text-primary">intelligent luxury</span> of modern Pune.
          </h2>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <span className="text-[9px] tracking-[0.5em] uppercase text-primary mb-8 block">The Collection</span>
            <h2 className="text-4xl md:text-6xl mb-10 font-serif">Curated architectural excellence.</h2>
            <Link href="/projects/ongoing" className="nav-link border-b border-primary/20 pb-2">
              Explore Projects
            </Link>
          </div>
          <div className="md:w-1/2 aspect-[4/5] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            {projectsImg?.imageUrl && (
              <Image 
                src={projectsImg.imageUrl} 
                alt="Projects Preview" 
                fill 
                className="object-cover"
                data-ai-hint={projectsImg.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      {/* Philosophy Preview */}
      <section className="section-padding">
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

      {/* CTA */}
      <section className="py-40 bg-foreground text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-3xl md:text-5xl text-background font-serif mb-12">Begin your landmark journey.</h2>
          <Link href="/contact" className="inline-block border border-primary/40 text-primary px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-primary hover:text-white transition-all">
            Inquire Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}