import React from 'react';
import { cn } from '../../utils/cn';

interface ProfileSectionProps {
  id: string;
  title: string;
  isActive: boolean;
  children: React.ReactNode;
}

export function ProfileSection({ id, title, isActive, children }: ProfileSectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "w-full h-[680px]", // Fixed height for all sections
        "flex flex-col",
        "p-8", // Consistent padding
        "rounded-xl border",
        "transition-all duration-500",
        isActive ? "bg-dark-800/50 border-gold-500/20" : "bg-dark-900/50 border-gold-500/10"
      )}
    >
      {/* Section header */}
      <div className="mb-8">
        <h2 className={cn(
          "text-2xl font-display font-semibold tracking-tight",
          "transition-colors duration-300",
          isActive ? "text-white" : "text-white/60"
        )}>
          {title}
        </h2>
      </div>

      {/* Content container with flex-1 to fill available space */}
      <div className="flex-1 flex flex-col justify-start">
        {children}
      </div>
    </section>
  );
}