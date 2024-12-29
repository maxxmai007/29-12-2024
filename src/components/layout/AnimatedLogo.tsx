import React, { useEffect, useRef } from 'react';
import { CreditCard } from 'lucide-react';
import '../../styles/logo-animation.css';

export function AnimatedLogo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add shine effect
    const shine = document.createElement('div');
    shine.className = 'shine-effect';
    container.appendChild(shine);

    // Add dot after shine animation
    setTimeout(() => {
      const dot = document.createElement('div');
      dot.className = 'i-dot';
      container.appendChild(dot);
    }, 2000);

    return () => {
      shine.remove();
      const dot = container.querySelector('.i-dot');
      if (dot) dot.remove();
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <CreditCard className="w-6 h-6 text-gold-500" />
      <div className="logo-container" ref={containerRef}>
        <span className="text-white font-bold">MAXXM</span>
        <span className="ai-text">AI</span>
      </div>
    </div>
  );
}