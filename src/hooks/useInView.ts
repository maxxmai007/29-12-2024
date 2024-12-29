import { useState, useEffect, RefObject } from 'react';

interface InViewOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  onVisibilityChange?: (ratio: number) => void;
}

export function useInView(
  elementRef: RefObject<Element>,
  {
    threshold = Array.from({ length: 101 }, (_, i) => i / 100), // More granular thresholds
    root = null,
    rootMargin = "0px",
    freezeOnceVisible = false,
    onVisibilityChange
  }: InViewOptions = {}
) {
  const [isInView, setIsInView] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let frameId: number;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        const ratio = entry.intersectionRatio;
        
        // Use requestAnimationFrame for smoother transitions
        frameId = requestAnimationFrame(() => {
          setIsInView(isVisible);
          setIntersectionRatio(ratio);
          onVisibilityChange?.(ratio);
        });

        if (freezeOnceVisible && isVisible && ratio > 0.9) {
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);
    
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, onVisibilityChange]);

  return { isInView, intersectionRatio };
}