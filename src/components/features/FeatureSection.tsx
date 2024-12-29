import React from 'react';
import { FeatureGrid } from './FeatureGrid';
import { SectionImage } from './SectionImage';

export function FeatureSection() {
  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <SectionImage />
          
          {/* Right side - Features */}
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
                We are the best Credit Card
                <span className="block text-gold-500">Recommendation Engine</span>
              </h2>
              <p className="text-gold-500/80 text-lg">
                At MaxxMAI, we offer the most trusted and efficient credit card recommendations,
                helping individuals find their perfect financial match.
              </p>
            </div>
            <FeatureGrid />
          </div>
        </div>
      </div>
    </section>
  );
}