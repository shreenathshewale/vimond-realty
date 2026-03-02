import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ongoingProjects = [
  { id: 'vivencia-project', title: 'Vivencia', location: 'Koregaon Park', tagline: 'A landmark of tree-lined elegance.' },
  { id: 'verista-project', title: 'Verïsta', location: 'Law College Road', tagline: 'Contemporary living in a historic heart.' }
];

export default function OngoingProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-60 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[9px] tracking-[0.6em] uppercase text-primary mb-10 block">Ongoing</span>
          <h1 className="text-6xl md:text-9xl font-serif mb-24">The <span className="italic">Collection.</span></h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {ongoingProjects.map((project) => {
              const img = PlaceHolderImages.find(i => i.id === project.id);
              return (
                <div key={project.title} className="group relative aspect-[4/5] overflow-hidden bg-secondary">
                  {img?.imageUrl && (
                    <Image 
                      src={img.imageUrl} 
                      alt={project.title} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      data-ai-hint={img.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-all duration-700" />
                  <div className="absolute bottom-12 left-12">
                    <h3 className="text-4xl font-serif text-white mb-2">{project.title}</h3>
                    <p className="text-[9px] tracking-[0.4em] uppercase text-primary mb-4">{project.location}</p>
                    <p className="text-xs text-white/60 font-light tracking-wide">{project.tagline}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}