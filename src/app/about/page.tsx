import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Eye, Diamond, Sparkles, Briefcase, Heart } from 'lucide-react';

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'office-space');
  const founderImg = PlaceHolderImages.find(img => img.id === 'founder-portrait');

  const values = [
    { title: "Transparency", icon: <Eye className="w-6 h-6" />, desc: "Honesty and clarity in every development phase." },
    { title: "Quality", icon: <Diamond className="w-6 h-6" />, desc: "Uncompromising standards in materials and design." },
    { title: "Delight", icon: <Sparkles className="w-6 h-6" />, desc: "Exceeding expectations to bring joy to every resident." },
    { title: "Responsibility", icon: <Briefcase className="w-6 h-6" />, desc: "Accountability for our environmental and social impact." },
    { title: "Care", icon: <Heart className="w-6 h-6" />, desc: "Building communities with empathy and deep consideration." }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Section 1: About Company */}
      <section className="pt-40 pb-32 px-8">
        <div className="asymmetric-container">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-serif uppercase tracking-tight mb-4">About Vimond Realty</h1>
            <div className="w-full h-[1px] bg-primary/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden grayscale">
              {aboutImg?.imageUrl && (
                <Image 
                  src={aboutImg.imageUrl} 
                  alt="Architecture Studio" 
                  fill 
                  className="object-cover"
                  data-ai-hint={aboutImg.imageHint}
                />
              )}
            </div>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 italic">
                ViMond Realty stands as a beacon of architectural mastery, carefully selecting Pune's most prestigious locations to build landmark developments.
              </p>
              <p className="text-base font-light leading-relaxed text-foreground/60">
                We believe that luxury is not just an aesthetic; it is the thoughtful response to modern living. Our approach integrates dynamic building methods with a deep respect for Pune's cultural heritage, creating spaces that serve the soul as much as the purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission and Vision */}
      <section className="py-32 px-8 bg-card/30">
        <div className="asymmetric-container grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group p-12 bg-background border border-secondary rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2">
            <h2 className="text-3xl font-serif mb-6 text-primary">Our Mission</h2>
            <p className="text-lg font-light leading-relaxed text-foreground/60">
              To redefine urban living by crafting landmarks that embody intelligent luxury, precision engineering, and architectural artistry.
            </p>
          </div>
          <div className="group p-12 bg-background border border-secondary rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2">
            <h2 className="text-3xl font-serif mb-6 text-primary">Our Vision</h2>
            <p className="text-lg font-light leading-relaxed text-foreground/60">
              To be Pune's most trusted developer, recognized for creating enduring legacies that harmonize modern innovation with timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Company Values */}
      <section className="py-32 px-8">
        <div className="asymmetric-container">
          <h2 className="text-4xl font-serif text-center mb-24">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-y border-secondary">
            {values.map((value, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 md:border-r last:border-r-0 border-secondary group hover:bg-card/20 transition-colors">
                <div className="text-primary mb-6 transform transition-transform group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-lg font-serif mb-4 uppercase tracking-widest">{value.title}</h3>
                <p className="text-xs font-light text-foreground/50 leading-relaxed">{value.desc}</p>
                <div className="w-8 h-[1px] bg-primary/30 mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Founder Section */}
      <section className="py-48 px-8 bg-card/10">
        <div className="asymmetric-container grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden grayscale shadow-2xl">
            {founderImg?.imageUrl && (
              <Image 
                src={founderImg.imageUrl} 
                alt="Mr. Vijay Munde" 
                fill 
                className="object-cover"
                data-ai-hint={founderImg.imageHint}
              />
            )}
          </div>
          <div className="p-16 bg-background border border-secondary shadow-sm relative">
            <div className="absolute -top-12 -left-12 text-9xl font-serif text-primary/5 select-none leading-none">"</div>
            <span className="text-[10px] tracking-[0.5em] uppercase text-primary mb-4 block">Founder</span>
            <h2 className="text-5xl font-serif mb-12">Mr. Vijay Munde</h2>
            <p className="text-lg font-light text-foreground/70 leading-relaxed mb-8">
              "Building is not just about concrete and steel; it's about creating the backdrop for life's most precious moments. At ViMond, we treat every blueprint as a promise of excellence."
            </p>
            <p className="text-sm font-light text-foreground/50 leading-relaxed italic">
              Under Vijay's leadership, ViMond Realty has evolved from a boutique developer to a landmark architectural powerhouse in Pune, driven by a philosophy of 'Intelligent Luxury'.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
