'use client';

import { useParams } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import { ArrowLeft } from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F5F2]">
        <h1 className="text-2xl font-serif">Article Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <Navbar />
      
      <article className="pt-48 pb-32 px-6 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link href="/insights" className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] mb-12 hover:text-[#2B2B2B] transition-colors font-bold">
              <ArrowLeft className="w-3 h-3" /> Back to Insights
            </Link>
            <span className="text-[10px] tracking-[0.6em] uppercase text-[#8A7A63] mb-6 block font-bold">{blog.category}</span>
            <h1 className="text-4xl md:text-7xl font-serif mb-8 leading-tight text-[#2B2B2B]">{blog.title}</h1>
            <p className="text-xl font-light text-[#2B2B2B]/60 italic leading-relaxed mb-12 border-l-2 border-[#8A7A63]/20 pl-8">
              {blog.description}
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div 
            className="relative aspect-video w-full overflow-hidden shadow-2xl mb-16"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {blog.content.map((paragraph, idx) => (
              <p key={idx} className="text-lg md:text-xl font-light text-[#2B2B2B]/80 leading-relaxed italic first-letter:text-5xl first-letter:font-serif first-letter:text-[#8A7A63] first-letter:float-left first-letter:mr-3">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <div className="mt-24 pt-12 border-t border-[#D8D2C8]">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8A7A63] font-bold mb-8">Share Insight</h4>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map(social => (
                <button key={social} className="text-[10px] tracking-[0.2em] uppercase text-[#2B2B2B]/40 hover:text-[#8A7A63] transition-colors font-bold">
                  {social}
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
