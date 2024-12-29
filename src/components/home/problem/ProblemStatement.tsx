import React from 'react';
import { AnimatedConfusionGrid } from './AnimatedConfusionGrid';

export function ProblemStatement() {
  return (
    <section className="relative min-h-[900px] py-40 bg-dark-900">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,183,136,0.02)_0%,rgba(0,0,0,0)_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedConfusionGrid />
      </div>
    </section>
  );
}