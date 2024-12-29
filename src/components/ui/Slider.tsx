import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  error?: string;
  formatValue?: (value: number) => string;
}

export function Slider({
  value,
  onChange,
  min = 0,
  max = 100000,
  step = 1000,
  label,
  error,
  formatValue = (v) => `₹${v.toLocaleString()}`
}: SliderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = x / rect.width;
    const rawValue = min + (max - min) * pct;
    const steppedValue = Math.round(rawValue / step) * step;
    const boundedValue = Math.max(min, Math.min(max, steppedValue));
    
    onChange(boundedValue);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-gold-500/80">
            {label}
          </label>
          <span className="text-sm text-gold-500">
            {formatValue(value)}
          </span>
        </div>
      )}
      
      <div
        ref={sliderRef}
        className="relative h-2 bg-dark-800 rounded-full cursor-pointer"
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* Track */}
        <div
          className="absolute h-full bg-gradient-to-r from-gold-500 to-gold-600 rounded-full"
          style={{ width: `${percentage}%` }}
        />
        
        {/* Thumb */}
        <div
          className={cn(
            "absolute w-4 h-4 -mt-1 -ml-2 bg-gold-500 rounded-full",
            "shadow-lg transition-shadow duration-200",
            "hover:shadow-gold-500/20 hover:shadow-lg",
            isDragging && "shadow-gold-500/30 shadow-xl"
          )}
          style={{ left: `${percentage}%` }}
          onMouseDown={() => setIsDragging(true)}
        >
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full animate-ping bg-gold-500/20" />
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}