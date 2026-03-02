
'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AIAssistant } from '@/components/ai-assistant';

const faqs = [
  {
    question: "What is the development process at ViMond Realty?",
    answer: "Our process is meticulous, starting from prime location selection to world-class architectural design and high-tech construction methods, ensuring every landmark meets our 'Intelligent Luxury' standards."
  },
  {
    question: "What are the current project locations?",
    answer: "We are currently developing premium projects in Koregaon Park, Model Colony, and Law College Road in Pune."
  },
  {
    question: "How does ViMond ensure the quality of construction?",
    answer: "We use advanced technology and dynamic building methods. We maintain high standards in architecture that complement their surroundings and promote lifestyle enhancement."
  }
];

export function FAQ() {
  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-accent font-semibold tracking-wider uppercase mb-2">Have Questions? We Have Answers.</p>
            <h2 className="text-4xl font-bold text-primary mb-8">Development Process & Property Details</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-muted py-2">
                  <AccordionTrigger className="text-left font-bold text-primary hover:text-accent hover:no-underline text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed text-base pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8">
              <button className="text-primary font-bold border-b-2 border-accent pb-1">Explore All FAQs</button>
            </div>
          </div>
          
          <div className="sticky top-24">
            <AIAssistant />
          </div>
        </div>
      </div>
    </section>
  );
}
