'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-48 pb-32 container-max">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-primary mb-6 block font-bold">Legal Standards</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 uppercase tracking-tight leading-none">Privacy Policy<span className="text-primary italic">.</span></h1>
            <div className="w-16 h-[1px] bg-primary/30 mt-10" />
          </motion.div>

          <motion.div 
            className="space-y-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">1. Introduction</h2>
              <p className="text-lg font-light text-foreground/60 leading-relaxed italic">
                ViMond Realty is committed to protecting the privacy of our clients and visitors. This policy outlines how we collect, use, and safeguard your personal information in alignment with our "Intelligent Luxury" philosophy.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">2. Information Collection</h2>
              <p className="text-base font-light text-foreground/60 leading-relaxed">
                We collect personal information that you provide voluntarily through our website's inquiry forms, AI assistants, and contact sections. This may include:
              </p>
              <ul className="space-y-4 text-sm font-light text-foreground/50 list-disc pl-5 tracking-wide">
                <li>Full name and contact details (email, phone number).</li>
                <li>Project preferences and specific residential interests.</li>
                <li>Digital interactions through our AI Inquiry Assistant.</li>
                <li>Technical data such as IP address and browser type for site optimization.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">3. Use of Information</h2>
              <p className="text-base font-light text-foreground/60 leading-relaxed">
                Your data is processed to enhance your experience with ViMond Realty. Specifically, we use it to:
              </p>
              <ul className="space-y-4 text-sm font-light text-foreground/50 list-disc pl-5 tracking-wide">
                <li>Respond to project inquiries and schedule site visits.</li>
                <li>Provide personalized property recommendations via our AI tools.</li>
                <li>Send updates regarding new project launches or construction milestones.</li>
                <li>Ensure compliance with MahaRERA regulations and real estate legalities.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">4. Data Security</h2>
              <p className="text-base font-light text-foreground/60 leading-relaxed">
                Just as we apply precision engineering to our buildings, we apply high standards of technical security to your information. We utilize encrypted storage and secure protocols to prevent unauthorized access or disclosure of your personal details.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">5. Third-Party Sharing</h2>
              <p className="text-base font-light text-foreground/60 leading-relaxed">
                We do not sell your personal information. We may share data with trusted service partners (such as relationship managers or RERA consultants) solely to facilitate your journey with ViMond Realty.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">6. Contact Us</h2>
              <p className="text-base font-light text-foreground/60 leading-relaxed">
                If you have any questions regarding this Privacy Policy or wish to request the deletion of your data, please contact our administrative office at inquiry@vmondrealty.com.
              </p>
            </div>

            <div className="pt-12 border-t border-black/5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/30 font-bold">
                Last Updated: January 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
