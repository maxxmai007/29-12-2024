import React from 'react';
import { cn } from '../../../utils/cn';

interface SpendingSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  error?: string;
}

export function SpendingSlider({ label, value, onChange, error }: SpendingSliderProps) {
  return (
    <div className={cn(
      "w-full flex flex-col", // Changed to flex-col for better alignment
      "px-6 py-5 rounded-xl border min-h-[60px]", // Match height with other components
      "bg-dark-800/50 border-gold-500/10",
      "transition-all duration-300"
    )}>
      <div className="flex justify-between items-center mb-4">
        <span className="text-base font-medium text-white/60">{label}</span>
        <span className="text-base font-medium text-gold-500">₹{value.toLocaleString()}</span>
      </div>
      
      <div className="relative w-full">
        <input
          type="range"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={1000}
          max={100000}
          step={1000}
          className={cn(
            "w-full h-1 bg-dark-800 rounded-full appearance-none cursor-pointer",
            "range-slider" // Custom styles in slider.css
          )}
          style={{
            background: `linear-gradient(to right, #D4B788 0%, #D4B788 ${(value - 1000) / 990}%, rgba(212, 183, 136, 0.1) ${(value - 1000) / 990}%, rgba(212, 183, 136, 0.1) 100%)`
          }}
        />
      </div>

      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}