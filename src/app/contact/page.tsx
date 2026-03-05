import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ContactPage() {
  const contactImg = PlaceHolderImages.find(img => img.id === 'city-skyline');

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-20 min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative bg-secondary min-h-[400px]">
          {contactImg?.imageUrl && (
            <Image 
              src={contactImg.imageUrl} 
              alt="Pune" 
              fill 
              className="object-cover opacity-50"
              data-ai-hint={contactImg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-primary/5" />
          <div className="absolute bottom-20 left-20">
            <h1 className="text-6xl md:text-9xl font-serif text-foreground mb-8">Hello<span className="text-primary italic">.</span></h1>
            <div className="space-y-2 text-[10px] tracking-[0.4em] uppercase text-foreground/40">
              <p>Pune, India</p>
              <p>inquiry@vmondrealty.com</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-32">
          <form className="w-full max-w-md space-y-12">
            <div className="space-y-1">
              <span className="text-[9px] tracking-[0.5em] uppercase text-primary">Inquiry</span>
              <h2 className="text-3xl font-serif">Begin your journey.</h2>
            </div>
            
            <div className="space-y-10">
              <Input placeholder="FULL NAME" className="luxury-input" />
              <Input placeholder="EMAIL ADDRESS" className="luxury-input" />
              <Input placeholder="PHONE NUMBER" className="luxury-input" />
              <Textarea placeholder="MESSAGE" className="luxury-input min-h-[100px] resize-none" />
            </div>

            <Button className="w-full h-16 rounded-none bg-foreground text-background text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-primary transition-all shadow-xl">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
