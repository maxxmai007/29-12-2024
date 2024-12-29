import { useCallback } from 'react';

export function useCardAnimation() {
  const animateCard = useCallback((
    element: HTMLElement,
    index: number,
    totalCards: number
  ) => {
    // Calculate final position
    const yOffset = index * 20; // 20px spacing between cards
    const rotation = (Math.random() * 6 - 3); // Random rotation between -3 and 3 degrees

    // Custom spring animation
    const keyframes = [
      {
        opacity: 0,
        transform: 'translateY(-100%) rotateX(45deg) scale(0.9)',
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      {
        opacity: 1,
        transform: `translateY(${yOffset}px) rotateZ(${rotation}deg) scale(1)`,
      }
    ];

    const animation = element.animate(keyframes, {
      duration: 1200,
      fill: 'forwards',
      delay: index * 200,
    });

    // Add floating animation after landing
    animation.onfinish = () => {
      element.animate(
        [
          { transform: `translateY(${yOffset}px) rotateZ(${rotation}deg)` },
          { transform: `translateY(${yOffset - 5}px) rotateZ(${rotation}deg)` },
          { transform: `translateY(${yOffset}px) rotateZ(${rotation}deg)` },
        ],
        {
          duration: 3000,
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    };
  }, []);

  return { animateCard };
}