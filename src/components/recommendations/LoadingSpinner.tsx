import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingSpinner({ className, size = 'md' }: LoadingSpinnerProps) {
  return (
    <Loader2 
      className={cn(
        "animate-spin text-gold-500",
        {
          'w-4 h-4': size === 'sm',
          'w-6 h-6': size === 'md',
          'w-8 h-8': size === 'lg'
        },
        className
      )}
    />
  );
}