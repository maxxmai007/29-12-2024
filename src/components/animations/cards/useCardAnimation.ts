import { useCallback } from 'react';
import { ANIMATION_CONFIG } from './constants';

const EASING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

export function useCardAnimation() {
  const animateCard = useCallback((element: HTMLElement, index: number) => {
    const config = ANIMATION_CONFIG.cards;
    const cardConfig = index === 0 ? config.first : 
                      index === 1 ? config.second : config.third;

    // Initial state - above viewport
    element.style.opacity = '0';
    element.style.transform = `
      translateX(${cardConfig.translateX}px)
      translateY(-200%) 
      translateZ(${cardConfig.translateZ}px)
      rotateX(45deg)
      scale(${cardConfig.scale})
    `;

    // Trigger animation after delay
    setTimeout(() => {
      element.style.transition = `all ${ANIMATION_CONFIG.dropDuration}ms ${EASING}`;
      element.style.opacity = '1';
      
      // Final position - layered with horizontal offset
      element.style.transform = `
        translateX(${cardConfig.translateX}px)
        translateY(${cardConfig.translateY}px)
        translateZ(${cardConfig.translateZ}px)
        rotateX(10deg)
        scale(${cardConfig.scale})
      `;

      // Add floating animation after landing
      element.addEventListener('transitionend', () => {
        element.style.animation = `float-card-${index + 1} 3s ease-in-out infinite`;
      }, { once: true });
    }, ANIMATION_CONFIG.initialDelay + (index * ANIMATION_CONFIG.staggerDelay));
  }, []);

  return { animateCard };
}