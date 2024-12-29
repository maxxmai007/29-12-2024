import React, { useMemo } from 'react';
import { cn } from '../../../utils/cn';
import { calculateFadeProgress } from '../../../utils/animationUtils';

interface AnimatedConfusionBoxProps {
  text: string;
  index: number;
  progress: number;
  totalBoxes: number;
}

export function AnimatedConfusionBox({ 
  text, 
  index, 
  progress, 
  totalBoxes 
}: AnimatedConfusionBoxProps) {
  const fadeProgress = useMemo(() => 
    calculateFadeProgress(progress, index, totalBoxes),
    [progress, index, totalBoxes]
  );

  const isGreen = index % 2 === 0;
  
  return (
    <div 
      className={cn(
        "relative p-8 min-h-[200px] rounded-2xl overflow-hidden",
        "border border-earth-beige/5",
        "transition-all duration-700 backdrop-blur-sm",
        "flex items-center justify-center",
        isGreen 
          ? "bg-gradient-to-br from-earth-green-dark/40 to-earth-green/30" 
          : "bg-gradient-to-br from-earth-navy-dark/40 to-earth-navy/30"
      )}
      style={{
        opacity: Math.max(0, 1 - fadeProgress * 1.5),
        transform: `
          scale(${1 - fadeProgress * 0.1})
          translate(${fadeProgress * (index % 3 - 1) * 20}px, ${fadeProgress * (Math.floor(index / 3) - 1) * 20}px)
        `,
        filter: `blur(${fadeProgress * 8}px)`,
        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <p className="text-xl font-display tracking-wide text-earth-beige-light/80 uppercase text-center leading-relaxed">
        {text}
      </p>
    </div>
  );
}