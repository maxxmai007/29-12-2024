import React, { useEffect, useRef } from 'react';
import { Card } from './Card';

export function HeroCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Initial state
    card.style.opacity = '0';
    card.style.transform = 'translateY(-100vh) rotateX(45deg) scale(0.8)';

    // Trigger animation after a short delay
    setTimeout(() => {
      card.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0) rotateX(10deg) scale(1)';
    }, 300);

    // Add floating animation after landing
    card.addEventListener('transitionend', () => {
      card.style.animation = 'floatCard 3s ease-in-out infinite';
    });
  }, []);

  return (
    <div className="relative w-full max-w-[480px] mx-auto perspective-1000">
      <div ref={cardRef} className="relative w-full">
        <Card
          network="MAXXMAI"
          name="Jane Cooper"
          number="4532123456789012"
        />
      </div>
    </div>
  );
}