export const ANIMATION_CONFIG = {
  perspective: 1400,
  initialDelay: 500,
  dropDuration: 1200,
  staggerDelay: 250,
  cards: {
    first: {
      translateX: 0,
      translateY: 0,
      translateZ: 0,
      scale: 1
    },
    second: {
      translateX: 40,    // Offset to the right
      translateY: -60,   // Move up from first card
      translateZ: 40,    // Bring forward in Z-space
      scale: 0.98       // Slightly smaller
    },
    third: {
      translateX: 80,    // Further offset to the right
      translateY: -120,  // Move up from second card
      translateZ: 80,    // Bring even more forward
      scale: 0.96       // Even smaller for perspective
    }
  }
} as const;

export const CARDS = [
  {
    network: "VISA",
    name: "Jane Cooper",
    number: "4532 1234 5678 9012",
    color: "from-indigo-500/20 to-indigo-600/10",
    shadowColor: "rgba(99, 102, 241, 0.2)"
  },
  {
    network: "MASTERCARD",
    name: "Alex Rivera",
    number: "5412 7512 3456 7890",
    color: "from-rose-500/20 to-rose-600/10",
    shadowColor: "rgba(244, 63, 94, 0.2)"
  },
  {
    network: "AMEX",
    name: "Sarah Chen",
    number: "3782 8123 4567 8901",
    color: "from-emerald-500/20 to-emerald-600/10",
    shadowColor: "rgba(16, 185, 129, 0.2)"
  }
] as const;