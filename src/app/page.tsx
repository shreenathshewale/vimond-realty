
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Philosophy } from '@/components/sections/philosophy';
import { Difference } from '@/components/sections/difference';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { Blogs } from '@/components/sections/blogs';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Philosophy />
      <Difference />
      <Testimonials />
      <FAQ />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
}
