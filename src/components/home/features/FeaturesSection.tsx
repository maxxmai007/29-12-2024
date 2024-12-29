import React from 'react';
import { FeatureGrid } from './FeatureGrid';
import { SectionHeading } from './SectionHeading';
import { ImageSection } from './ImageSection';

export function FeaturesSection() {
  return (
    <section className="features-section py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ImageSection />
          <div className="space-y-12">
            <SectionHeading />
            <FeatureGrid />
          </div>
        </div>
      </div>
    </section>
  );
}