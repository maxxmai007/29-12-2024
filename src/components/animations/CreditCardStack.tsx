import React from 'react';
import { MotionDiv } from '../ui/motion';
import { CreditCard } from './CreditCard';

const cards = [
  { network: 'visa', name: 'Jane Cooper' },
  { network: 'discover', name: 'Leslie Alexander' },
  { network: 'mastercard', name: 'Jenny Wilson' },
] as const;

export function CreditCardStack() {
  return (
    <div className="relative w-[380px] h-[480px] perspective-1000">
      {cards.map((card, index) => (
        <MotionDiv
          key={index}
          className="absolute left-0 top-0"
          initial={{ 
            y: -500,
            rotateX: 45,
            scale: 0.9,
            opacity: 0
          }}
          animate={{ 
            y: index * 40,
            rotateX: 0,
            scale: 1,
            opacity: 1
          }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: index * 0.3,
            duration: 0.8
          }}
          style={{
            zIndex: cards.length - index,
            transformStyle: 'preserve-3d',
          }}
        >
          <CreditCard 
            index={index}
            network={card.network}
            name={card.name}
            className="hover:translate-y-[-10px] transition-transform duration-300"
          />
        </MotionDiv>
      ))}
    </div>
  );
}