
'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    num: "01",
    title: "The Art of Building: How ViMond Creates Architecture That Inspires",
    desc: "A look into ViMond’s philosophy of treating architecture as a form of art while maintaining precision, innovation, and long-term value.",
    imageId: "blog-1"
  },
  {
    num: "02",
    title: "Why Prime Locations Matter: Understanding Pune’s Most Coveted Neighborhoods",
    desc: "An insight into why ViMond carefully selects Pune’s most prestigious localities for its landmark developments.",
    imageId: "blog-2"
  },
  {
    num: "03",
    title: "How Intelligent Luxury Is Transforming Modern Living in Pune",
    desc: "A deep dive into how ViMond is redefining luxury living in Pune by integrating intelligent design, technology, and architectural excellence.",
    imageId: "blog-3"
  }
];

export function Blogs() {
  return (
    <section id="blogs" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-accent font-semibold tracking-wider uppercase mb-2">Blogs & Insights</p>
            <h2 className="text-4xl font-bold text-primary">Stay Informed with Our Latest Real Estate Trends</h2>
          </div>
          <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
            View All Blogs
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => {
            const blogImg = PlaceHolderImages.find(img => img.id === post.imageId);
            return (
              <Card key={idx} className="group overflow-hidden border-none shadow-lg rounded-2xl bg-white flex flex-col h-full">
                <div className="relative aspect-video overflow-hidden">
                  {blogImg?.imageUrl && (
                    <Image
                      src={blogImg.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={blogImg.imageHint}
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-primary text-white font-bold w-10 h-10 flex items-center justify-center rounded-lg text-sm">
                    {post.num}
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-primary mb-4 line-clamp-2 leading-tight h-14">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 font-light">
                    {post.desc}
                  </p>
                  <div className="mt-auto">
                    <button className="text-accent font-bold text-sm uppercase tracking-widest hover:text-accent/80 transition-colors flex items-center">
                      Learn More <span className="ml-2">→</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
