export const springConfig = {
  stiffness: 100,
  damping: 15,
  mass: 1,
};

export const cardTimings = {
  entryDelay: 200, // Delay between each card's animation
  fallDuration: 1200, // Duration of the falling animation
  floatDuration: 3000, // Duration of the floating animation cycle
};

export const easings = {
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
};