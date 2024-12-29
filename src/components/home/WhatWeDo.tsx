import React from 'react';
import { NetworkGraph } from './graphs/NetworkGraph';
import { Timeline } from './timeline/Timeline';
import { SectionHeading } from './whatwedo/SectionHeading';
import { FeatureCards } from './whatwedo/FeatureCards';

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,183,136,0.02)_0%,rgba(0,0,0,0)_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading />
        <FeatureCards />
      </div>
    </section>
  );
}