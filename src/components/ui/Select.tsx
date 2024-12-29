import React from 'react';
import { cn } from '../../utils/cn';
import { Search } from 'lucide-react';

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: readonly { value: string; label: string; }[];
  error?: string;
  onChange: (value: string) => void;
}

export function Select({ 
  options, 
  error, 
  className, 
  placeholder,
  onChange,
  value,
  ...props 
}: SelectProps) {
  return (
    <div className="relative w-full">
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full px-6 py-5 min-h-[60px]", // Match height with other components
          "bg-dark-800/50 border rounded-xl",
          "text-base font-medium",
          "text-white placeholder:text-gold-500/40 appearance-none",
          "border-gold-500/20 focus:border-gold-500/40",
          "pr-12",
          error && "border-red-500/50 focus:border-red-500/70",
          className
        )}
        {...props}
      >
        <option value="" disabled>
          {placeholder || 'Select an option'}
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value} className="bg-dark-800 text-base">
            {label}
          </option>
        ))}
      </select>

      {/* Icon container matches other components */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <div className={cn(
          "w-10 h-10 flex items-center justify-center", // Match icon size
          "rounded-lg bg-dark-900 text-gold-500/60"
        )}>
          <Search className="w-6 h-6" />
        </div>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}