
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Homeowner, Vivencia',
    content: "Owning a home at Vivencia has been a dream come true. The design, amenities, and location are thoughtfully planned, and the team's professionalism made the entire process seamless. It truly reflects the standard of luxury living promised."
  },
  {
    name: 'Rahul Mehta',
    role: 'Homeowner, Vivencia',
    content: "Vivencia offers a perfect balance of luxury and comfort. The attention to detail in design, amenities, and overall planning truly reflects premium living. Choosing this project has been one of the best decisions for my family."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold tracking-wider uppercase mb-2">What Our Clients Say</p>
          <h2 className="text-4xl font-bold text-primary">Building Trust One Home at a Time</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="border-none shadow-xl rounded-2xl bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-accent/10">
                <Quote className="w-24 h-24 rotate-180" />
              </div>
              <CardContent className="p-10 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <Avatar className="h-14 w-14 border-2 border-accent/20">
                    <AvatarFallback className="bg-primary text-white">{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-primary text-lg">{t.name}</h4>
                    <p className="text-accent text-sm font-medium uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <p className="text-foreground/80 italic text-lg leading-relaxed font-light">
                  &ldquo;{t.content}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
