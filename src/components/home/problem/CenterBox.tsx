import React from 'react';
import { cn } from '../../../utils/cn';

export function CenterBox() {
  return (
    <div className={cn(
      "relative p-8 rounded-2xl overflow-hidden",
      "bg-gradient-to-br from-earth-tan-dark/20 to-earth-tan/10",
      "border border-earth-beige/10 backdrop-blur-sm",
      "transform transition-all duration-300 hover:scale-105"
    )}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-earth-tan/10 via-transparent to-earth-tan/10 animate-shimmer" />
      
      {/* Content */}
      <div className="relative text-center">
        <h3 className="text-3xl font-display tracking-wide text-earth-beige-light mb-3">
          Confused?
        </h3>
        <p className="text-xl text-earth-tan-light/90">
          Let's Match You with Your Ideal Credit Card!
        </p>
      </div>
    </div>
  );
}