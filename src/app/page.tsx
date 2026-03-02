
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Philosophy } from '@/components/sections/philosophy';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Philosophy />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
