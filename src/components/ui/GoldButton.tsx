import React from 'react';
import { cn } from '../../utils/cn';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function GoldButton({ children, className, ...props }: GoldButtonProps) {
  return (
    <button 
      className={cn(
        // Base styles
        "group relative px-8 py-4 bg-dark-900 border border-gold-500/20",
        "flex items-center justify-center w-full isolate overflow-hidden",
        
        // Hover animations
        "hover:scale-[1.02] hover:border-gold-500/40",
        "transition-all duration-300 ease-out",
        
        // Glow effect container
        "before:absolute before:inset-0 before:bg-gold-500/0",
        "before:transition-colors before:duration-300",
        "hover:before:bg-gold-500/5",
        
        // Ensure content stays above effects
        "after:absolute after:inset-0 after:rounded-sm",
        "after:shadow-[inset_0_0_0_1px_rgba(212,183,136,0.2)]",
        "hover:after:shadow-[inset_0_0_0_1px_rgba(212,183,136,0.4)]",
        "after:transition-shadow after:duration-300",
        
        className
      )}
      {...props}
    >
      {/* Shine effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(45deg, transparent 45%, rgba(212,183,136,0.1) 50%, transparent 55%)',
          backgroundSize: '200% 200%',
          animation: 'shine 1.5s infinite'
        }}
      />
      
      {/* Button content */}
      <span className="relative flex items-center justify-center text-gold-500 font-medium font-montserrat">
        {children}
      </span>
    </button>
  );
}