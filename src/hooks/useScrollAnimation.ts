import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  startThreshold?: number;
  endThreshold?: number;
  persistUntil?: string; // Element selector to persist until
  rootMargin?: string;
}

export function useScrollAnimation({ 
  startThreshold = 0.65,
  endThreshold = 0.9,
  persistUntil,
  rootMargin = "0px"
}: ScrollAnimationOptions = {}) {
  const [progress, setProgress] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let persistElement: Element | null = null;
    if (persistUntil) {
      persistElement = document.querySelector(persistUntil);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = Math.max(0, Math.min(1, entry.intersectionRatio));
          
          // Check if we should persist the animation
          if (persistElement && progress === 1) {
            const persistRect = persistElement.getBoundingClientRect();
            if (persistRect.top > window.innerHeight) {
              return; // Keep current progress
            }
          }
          
          const normalizedProgress = (ratio - startThreshold) / (endThreshold - startThreshold);
          setProgress(Math.max(0, Math.min(1, normalizedProgress)));
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        rootMargin
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [startThreshold, endThreshold, rootMargin, persistUntil, progress]);

  return { elementRef, progress };
}