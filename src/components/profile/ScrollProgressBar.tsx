import React, { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gold-500/20 z-50">
      <div 
        className="h-full bg-gradient-to-r from-gold-500 to-gold-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute right-0 top-0 h-full w-4 animate-pulse">
          <div className="w-2 h-2 rounded-full bg-gold-500 absolute right-0 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}