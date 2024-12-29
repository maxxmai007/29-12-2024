import React from 'react';

interface TimelineGridProps {
  x: number;
  opacity?: number;
}

export function TimelineGrid({ x, opacity = 0.2 }: TimelineGridProps) {
  return (
    <line
      x1={x}
      y1={0}
      x2={x}
      y2="100%"
      stroke="#D4B788"
      strokeDasharray="3 3"
      opacity={opacity}
    />
  );
}