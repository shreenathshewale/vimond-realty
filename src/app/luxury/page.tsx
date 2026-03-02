import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function LuxuryPage() {
  const principles = [
    { title: "Functional Art", desc: "Spaces that serve the soul as much as the purpose." },
    { title: "Dynamic Build", desc: "Utilizing future-proof construction methods." },
    { title: "Prime Selection", desc: "Curating locations with historical and lifestyle value." },
    { title: "Modern Comfort", desc: "Technology integrated seamlessly with tradition." }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-60 pb-32 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[9px] tracking-[0.6em] uppercase text-primary mb-10 block">Intelligent Luxury</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-16 leading-tight">Form follows <span className="italic">intelligence.</span></h1>
          <p className="text-xl md:text-3xl font-light text-foreground/60 leading-relaxed max-w-3xl mx-auto italic">
            "Luxury is not just an aesthetic; it is the thoughtful response to modern living."
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {principles.map((p, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <span className="text-[10px] text-primary/40 font-bold">0{idx + 1}</span>
              <h3 className="text-3xl md:text-5xl font-serif">{p.title}</h3>
              <div className="w-12 h-[1px] bg-primary/30" />
              <p className="text-sm md:text-lg text-foreground/50 font-light tracking-wide">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}