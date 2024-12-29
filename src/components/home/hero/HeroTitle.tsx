import React from 'react';
import '../../../styles/gold-text.css';

export function HeroTitle() {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat tracking-tight mb-6 flex flex-wrap items-center gap-x-4">
      <span className="text-white">Maximize Your</span>
      <span className="gold-gradient-text gold-shimmer" data-text="Rewards">Rewards</span>
      <span className="text-white">with the</span>
      <span className="gold-gradient-text gold-shimmer" data-text="Perfect Card">Perfect Card</span>
    </h1>
  );
}