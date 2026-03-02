import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const completedProjects = [
  { id: 'signature-tower', title: 'Signature Tower II', location: 'Model Colony', tagline: 'A legacy redefined.' }
];

export default function CompletedProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-60 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[9px] tracking-[0.6em] uppercase text-primary mb-10 block">Completed</span>
          <h1 className="text-6xl md:text-9xl font-serif mb-24">Past <span className="italic">Landmarks.</span></h1>
          
          <div className="max-w-4xl mx-auto">
            {completedProjects.map((project) => {
              const img = PlaceHolderImages.find(i => i.id === project.id);
              return (
                <div key={project.title} className="group flex flex-col gap-8 mb-40">
                  <div className="relative aspect-video overflow-hidden shadow-2xl">
                    {img?.imageUrl && (
                      <Image 
                        src={img.imageUrl} 
                        alt={project.title} 
                        fill 
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        data-ai-hint={img.imageHint}
                      />
                    )}
                  </div>
                  <div className="flex justify-between items-end border-b border-black/5 pb-8">
                    <div>
                      <h3 className="text-5xl font-serif">{project.title}</h3>
                      <p className="text-[10px] tracking-[0.4em] uppercase text-primary mt-2">{project.location}</p>
                    </div>
                    <p className="text-sm italic text-foreground/40">{project.tagline}</p>
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