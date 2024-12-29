import React from 'react';
import { Steps } from './Steps';
import { ProcessImage } from './ProcessImage';
import { SectionHeading } from './SectionHeading';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,183,136,0.02)_0%,rgba(0,0,0,0)_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <ProcessImage />
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <Steps />
          </div>
        </div>
      </div>
    </section>
  );
}