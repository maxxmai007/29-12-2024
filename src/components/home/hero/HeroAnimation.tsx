import React from 'react';
import { MotionDiv } from '../../ui/motion';
import { HeroCardStack } from '../../animations/cards/HeroCardStack';

export function HeroAnimation() {
  return (
    <div className="relative flex items-center justify-center h-full pt-32">
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-[480px]"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gold-500/20 blur-[120px] rounded-full" />
        
        {/* Card stack animation */}
        <div className="relative">
          <HeroCardStack />
        </div>
      </MotionDiv>
    </div>
  );
}