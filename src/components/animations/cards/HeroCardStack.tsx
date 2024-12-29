import React, { useEffect, useRef } from 'react';
import { Card } from './Card';
import { CARDS, ANIMATION_CONFIG } from './constants';
import { useCardAnimation } from './useCardAnimation';

export function HeroCardStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { animateCard } = useCardAnimation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.getElementsByClassName('credit-card');
    Array.from(cards).forEach((card, index) => {
      animateCard(card as HTMLElement, index);
    });
  }, [animateCard]);

  return (
    <div className="relative w-full max-w-[480px] mx-auto">
      <div 
        ref={containerRef}
        className="relative h-[400px]"
        style={{ 
          perspective: `${ANIMATION_CONFIG.perspective}px`,
          perspectiveOrigin: '50% 0%'
        }}
      >
        <div 
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {CARDS.map((card, index) => (
            <div
              key={index}
              className="credit-card absolute w-full"
              style={{ 
                zIndex: CARDS.length - index,
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center'
              }}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}