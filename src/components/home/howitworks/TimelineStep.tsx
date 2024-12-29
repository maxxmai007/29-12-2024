import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

interface TimelineStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
  index: number;
}

export function TimelineStep({ icon: Icon, title, description, isLast, index }: TimelineStepProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 });

  return (
    <div 
      ref={ref}
      className="flex gap-6 group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? '0' : '20px'})`,
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`
      }}
    >
      {/* Timeline marker */}
      <div className="relative flex flex-col items-center">
        {/* Circle node with glow effect */}
        <div className={cn(
          "relative w-12 h-12 rounded-full bg-dark-900/80 border-2",
          "flex items-center justify-center z-10",
          "transition-all duration-300",
          isVisible ? "border-gold-500/40" : "border-gold-500/20",
          "before:absolute before:inset-0 before:rounded-full",
          "before:bg-gold-500/10 before:blur-md before:scale-0",
          "group-hover:before:scale-150 before:transition-transform before:duration-700"
        )}>
          <Icon className={cn(
            "w-5 h-5 transition-all duration-300",
            isVisible ? "text-gold-500" : "text-gold-500/40"
          )} />
        </div>
        
        {/* Connecting line with progressive glow */}
        {!isLast && (
          <div className="absolute top-12 left-1/2 h-[calc(100%+1.5rem)] w-px -translate-x-1/2 overflow-hidden">
            <div 
              className="h-full w-full bg-gradient-to-b from-gold-500/20 to-transparent"
              style={{
                transform: `scaleY(${isVisible ? 1 : 0})`,
                transformOrigin: 'top',
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            <div 
              className="absolute inset-0 w-full bg-gradient-to-b from-gold-500/40 to-transparent"
              style={{
                transform: `scaleY(${isVisible ? 1 : 0})`,
                transformOrigin: 'top',
                transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: 0.5,
                animation: isVisible ? 'pulseGlow 2s infinite' : 'none'
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <h4 className="text-xl font-medium text-white mb-2 group-hover:text-gold-500 transition-colors">
          {title}
        </h4>
        <p className="text-gold-500/60 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}