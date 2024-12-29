import React from 'react';
import { cn } from '../../../utils/cn';
import { LucideIcon } from 'lucide-react';

interface GoalCardProps {
  icon: LucideIcon;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

export function GoalCard({ icon: Icon, title, isSelected, onClick }: GoalCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4",
        "px-6 py-5 rounded-xl border min-h-[60px]", // Match height with other components
        "transition-all duration-300",
        isSelected ? (
          "bg-gold-500/10 border-gold-500"
        ) : (
          "bg-dark-800/50 border-gold-500/10 hover:bg-gold-500/5"
        )
      )}
    >
      {/* Icon container matches slider handle size */}
      <div className={cn(
        "flex-shrink-0 w-10 h-10", // Match icon size
        "flex items-center justify-center",
        "rounded-lg transition-colors",
        isSelected ? "bg-gold-500 text-dark-900" : "bg-dark-900 text-gold-500/60"
      )}>
        <Icon className="w-6 h-6" />
      </div>
      
      <span className={cn(
        "text-base font-medium transition-colors",
        isSelected ? "text-gold-500" : "text-white/60"
      )}>
        {title}
      </span>
    </button>
  );
}