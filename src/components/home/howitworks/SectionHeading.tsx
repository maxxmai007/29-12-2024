import React from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import '../../../styles/gold-text.css';

export function SectionHeading() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <div className="text-center mb-20">
      <div className="flex items-center gap-3 justify-center mb-4">
        <div className="w-1 h-1 rounded-full gold-gradient-button" />
        <h2 className="gold-gradient-text gold-shimmer text-sm font-medium tracking-wide uppercase font-montserrat">
          How it works
        </h2>
        <div className="w-1 h-1 rounded-full gold-gradient-button" />
      </div>
      
      <h3 
        ref={ref}
        className="text-4xl md:text-5xl font-display transition-all duration-1000 ease-out font-montserrat"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? '0' : '20px'})`,
        }}
      >
        <span className="text-white">We handle the details,</span>
        <br />
        <span className="gold-gradient-text gold-shimmer" data-text="you enjoy the benefits.">you enjoy the benefits.</span>
      </h3>
    </div>
  );
}