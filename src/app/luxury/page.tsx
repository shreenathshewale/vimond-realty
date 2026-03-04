import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { IntelligentLuxury } from '@/components/sections/intelligent-luxury';

export default function LuxuryPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <Navbar />
      
      <section className="pt-60 pb-32 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[9px] tracking-[0.6em] uppercase text-[#8A7A63] mb-10 block font-bold">The Philosophy</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-16 leading-tight text-[#2B2B2B]">Form follows <span className="italic">intelligence.</span></h1>
          <p className="text-xl md:text-3xl font-light text-[#2B2B2B]/60 leading-relaxed max-w-3xl mx-auto italic">
            "Luxury is not just an aesthetic; it is the thoughtful response to modern living."
          </p>
        </div>
      </section>

      <IntelligentLuxury />

      <section className="section-padding bg-[#ECE8E1]">
        <div className="asymmetric-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
             <div className="space-y-6">
                <span className="text-[10px] text-[#8A7A63] font-bold tracking-[0.2em] uppercase">01 / The Vision</span>
                <h3 className="text-3xl font-serif">Architecture for the Soul</h3>
                <p className="text-sm font-light text-[#2B2B2B]/60 leading-relaxed">
                  We believe that the spaces we inhabit shape the way we live. By integrating intelligent design with artistic expression, we create landmarks that serve as both functional retreats and architectural statements.
                </p>
             </div>
             <div className="space-y-6">
                <span className="text-[10px] text-[#8A7A63] font-bold tracking-[0.2em] uppercase">02 / The Method</span>
                <h3 className="text-3xl font-serif">Dynamic Engineering</h3>
                <p className="text-sm font-light text-[#2B2B2B]/60 leading-relaxed">
                  Our development process utilizes future-proof construction methods and precision engineering. From foundation to finishes, every choice is made with durability and sophistication in mind.
                </p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
