import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-60 pb-32 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[9px] tracking-[0.6em] uppercase text-primary mb-12 block">Heritage</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-16 leading-tight">Defining Pune’s <span className="italic text-primary">modern legacy.</span></h1>
          <p className="text-lg md:text-2xl font-light text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            ViMond Realty stands as a beacon of architectural mastery, carefully selecting Pune's most prestigious locations to build landmark developments.
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h3 className="text-[10px] tracking-[0.5em] uppercase text-primary mb-8 font-bold">Innovation</h3>
            <p className="font-serif text-2xl text-foreground/80">Dynamic building methods for the modern era.</p>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.5em] uppercase text-primary mb-8 font-bold">Location</h3>
            <p className="font-serif text-2xl text-foreground/80">Koregaon Park, Model Colony, and beyond.</p>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.5em] uppercase text-primary mb-8 font-bold">Artistry</h3>
            <p className="font-serif text-2xl text-foreground/80">Architecture treated as a form of enduring art.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}