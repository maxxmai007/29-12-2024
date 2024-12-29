import React from 'react';
import { cn } from '../../utils/cn';

interface CreditCardProps {
  className?: string;
  style?: React.CSSProperties;
  index: number;
  network: 'visa' | 'mastercard' | 'discover';
  name: string;
}

export function CreditCard({ className, style, index, network, name }: CreditCardProps) {
  return (
    <div
      className={cn(
        "relative w-[380px] h-[240px] rounded-2xl overflow-hidden",
        "transform transition-all duration-500",
        "bg-purple-400/20 backdrop-blur-sm",
        className
      )}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glass effect and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-purple-600/20" />
      
      {/* Card content */}
      <div className="relative p-8 h-full flex flex-col justify-between text-white/90">
        {/* Network logo */}
        <div className="text-2xl font-bold uppercase tracking-wider">
          {network}
        </div>
        
        {/* Card number and name */}
        <div className="space-y-4">
          <div className="flex gap-4 text-lg tracking-widest">
            <span>5024</span>
            <span>6734</span>
            <span>8927</span>
            <span>2488</span>
          </div>
          <div className="text-sm tracking-wider uppercase">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}