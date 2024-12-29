import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils/cn';
import '../../../styles/gold-text.css';

interface NetworkBarProps {
  percentage: number;
  cardCount: number;
  label: string;
}

export function NetworkBar({ percentage, cardCount, label }: NetworkBarProps) {
  const [height, setHeight] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setHeight(percentage);
          }, 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="flex flex-col items-center w-[60px]">
      {/* Static card count label */}
      <div className="h-6 mb-2">
        <span className="text-sm font-medium text-[#B08D57] font-montserrat">
          {cardCount.toLocaleString()}
        </span>
      </div>

      {/* Bar */}
      <div className="relative w-full mb-4" ref={barRef}>
        <div
          className={cn(
            "w-full rounded-lg transition-all duration-[1.5s] ease-out",
            "bg-gradient-to-t from-[#A0784C] to-[#B08D57]",
            "hover:from-[#B08D57] hover:to-[#C09D67]",
          )}
          style={{ 
            height: `${height}%`,
            minHeight: '40px',
            maxHeight: '160px',
            boxShadow: '0 0 20px rgba(176, 141, 87, 0.2)'
          }}
        >
          {/* Metallic shine effect */}
          <div 
            className="absolute inset-0 rounded-lg opacity-50"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(176, 141, 87, 0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: 'shine 3s infinite linear'
            }}
          />
        </div>
      </div>
      
      {/* Network label */}
      <span className="text-sm font-medium text-[#B08D57] font-montserrat text-center">
        {label}
      </span>
    </div>
  );
}