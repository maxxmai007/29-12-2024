export function calculateFadeProgress(
  scrollProgress: number, 
  index: number, 
  totalBoxes: number
): number {
  // Start fading after 70% scroll
  const fadeStartThreshold = 0.7;
  const fadeEndThreshold = 0.9;
  
  if (scrollProgress < fadeStartThreshold) {
    return 0;
  }
  
  // Normalize progress between fade start and end thresholds
  const normalizedProgress = (scrollProgress - fadeStartThreshold) / (fadeEndThreshold - fadeStartThreshold);
  
  // Stagger the fade based on distance from center
  const centerRow = Math.floor(totalBoxes / 2);
  const currentRow = Math.floor(index / 3);
  const distanceFromCenter = Math.abs(currentRow - centerRow);
  const staggerDelay = distanceFromCenter * 0.1;
  
  return Math.min(1, Math.max(0, (normalizedProgress - staggerDelay) * 1.5));
}

export const timingFunctions = {
  easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
  easeInOutQuad: 'cubic-bezier(0.45, 0, 0.55, 1)',
  springy: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};