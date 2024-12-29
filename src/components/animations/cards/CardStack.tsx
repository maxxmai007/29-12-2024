import React from 'react';
import { Card } from './Card';
import { useCardStackAnimation } from './useCardStackAnimation';

export function CardStack() {
  const containerRef = useCardStackAnimation();

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px]"
      style={{ perspective: '1000px' }}
    >
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className={`card${index} absolute w-full`}
            style={{
              zIndex: 3 - index,
              boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
              transformStyle: 'preserve-3d',
            }}
          >
            <Card
              network={`CARD ${index}`}
              name="Jane Cooper"
              number="4532 1234 5678 9012"
            />
          </div>
        ))}
      </div>
    </div>
  );
}