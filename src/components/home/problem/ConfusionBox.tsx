import React from 'react';
import { cn } from '../../../utils/cn';

interface ConfusionBoxProps {
  text: string;
  index: number;
}

export function ConfusionBox({ text, index }: ConfusionBoxProps) {
  // Alternate between green and navy backgrounds
  const isGreen = index % 2 === 0;
  
  return (
    <div className={cn(
      "relative group p-6 rounded-2xl overflow-hidden",
      "border border-earth-beige/5 hover:border-earth-beige/10",
      "transition-all duration-300 backdrop-blur-sm",
      isGreen 
        ? "bg-gradient-to-br from-earth-green-dark/40 to-earth-green/30" 
        : "bg-gradient-to-br from-earth-navy-dark/40 to-earth-navy/30"
    )}>
      {/* Glow effect */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        "bg-gradient-to-br",
        isGreen 
          ? "from-earth-green-light/5 to-transparent" 
          : "from-earth-navy-light/5 to-transparent"
      )} />
      
      {/* Content */}
      <p className="relative text-lg font-display tracking-wide text-earth-beige-light/80 uppercase">
        {text}
      </p>
    </div>
  );
}