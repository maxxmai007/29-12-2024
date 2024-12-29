import React from 'react';
import { HeroContent } from './hero/HeroContent';
import { HeroAnimation } from './hero/HeroAnimation';

export function Hero() {
  return (
    <div className="relative min-h-[85vh] bg-dark-900 pt-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,183,136,0.02)_0%,rgba(0,0,0,0)_70%)]" />
      
      {/* Main content container */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <HeroContent />
          <HeroAnimation />
        </div>
      </div>
    </div>
  );
}