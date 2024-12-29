import React from 'react';
import { cn } from '../../../utils/cn';

interface CardBaseProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function CardBase({ className, style, children }: CardBaseProps) {
  return (
    <div
      className={cn(
        "relative w-full aspect-[1.586] rounded-2xl overflow-hidden",
        "transform-gpu",
        // Enhanced glass effect
        "before:absolute before:inset-0 before:p-[1px]",
        "before:bg-gradient-to-b before:from-white/20 before:to-white/5",
        "before:rounded-2xl before:-z-[1]",
        className
      )}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}