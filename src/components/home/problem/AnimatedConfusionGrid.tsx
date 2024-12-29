import React from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { confusionData } from './confusionData';
import { AnimatedConfusionBox } from './AnimatedConfusionBox';
import { AnimatedCenterBox } from './AnimatedCenterBox';

export function AnimatedConfusionGrid() {
  const { elementRef, progress } = useScrollAnimation({
    persistUntil: '.features-section', // Will persist until reaching Features section
    startThreshold: 0.65,
    endThreshold: 0.9
  });

  return (
    <div ref={elementRef} className="grid grid-cols-3 gap-6">
      {confusionData.map((item, index) => (
        <React.Fragment key={index}>
          {index === 4 ? (
            <AnimatedCenterBox progress={progress} />
          ) : (
            <AnimatedConfusionBox 
              text={item} 
              index={index} 
              progress={progress}
              totalBoxes={confusionData.length - 1}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}