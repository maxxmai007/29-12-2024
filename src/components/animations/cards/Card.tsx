import React from 'react';
import { CardBase } from './CardBase';
import { CardContent } from './CardContent';

interface CardProps {
  network: string;
  name: string;
  number: string;
  color?: string;
  shadowColor?: string;
}

export function Card({ network, name, number, color, shadowColor }: CardProps) {
  const customStyle = {
    '--card-shadow-color': shadowColor || 'rgba(0, 0, 0, 0.2)',
  } as React.CSSProperties;

  return (
    <CardBase
      style={customStyle}
      className={`
        transform-gpu transition-all duration-300
        ${color ? `bg-gradient-to-br ${color}` : 'bg-gradient-to-br from-purple-500/20 to-purple-600/10'}
        shadow-[0_10px_30px_-8px_var(--card-shadow-color)]
        hover:shadow-[0_20px_40px_-12px_var(--card-shadow-color)]
        backdrop-blur-[2px]
      `}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
      
      {/* Card content */}
      <CardContent
        network={network}
        name={name}
        number={number}
      />
    </CardBase>
  );
}