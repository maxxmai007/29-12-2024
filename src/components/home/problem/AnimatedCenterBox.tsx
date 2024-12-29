import React from 'react';
import { cn } from '../../../utils/cn';
import { timingFunctions } from '../../../utils/animationUtils';
import '../../../styles/gold-text.css';

interface AnimatedCenterBoxProps {
  progress: number;
}

export function AnimatedCenterBox({ progress }: AnimatedCenterBoxProps) {
  const isHighlightPhase = progress > 0.7;
  const highlightProgress = isHighlightPhase ? (progress - 0.7) / 0.3 : 0;
  
  const scale = 1 + (progress * 0.12) + (highlightProgress * 0.08);
  const brightness = 1 + (progress * 0.2) + (highlightProgress * 0.2);
  
  const glowOpacity = (progress * 0.4) + (highlightProgress * 0.3);
  const glowSize = isHighlightPhase ? 1 + highlightProgress * 0.3 : 1;

  return (
    <div className="relative">
      <div 
        className="absolute -inset-6 bg-earth-tan/15 blur-2xl rounded-full"
        style={{ 
          opacity: glowOpacity * 0.8,
          transform: `scale(${glowSize})`,
          filter: `blur(${12 + highlightProgress * 6}px)`,
          transition: `all 1s ${timingFunctions.easeOutCubic}`
        }} 
      />
      
      {isHighlightPhase && (
        <div 
          className="absolute -inset-8 bg-earth-tan/8 blur-3xl rounded-full"
          style={{ 
            opacity: highlightProgress * 0.6,
            transform: `scale(${1 + highlightProgress * 0.2})`,
            transition: `all 1s ${timingFunctions.easeOutCubic}`
          }} 
        />
      )}
      
      <div 
        className={cn(
          "relative p-10 min-h-[200px] rounded-2xl overflow-hidden",
          "bg-gradient-to-br from-earth-tan-dark/20 to-earth-tan/10",
          "border border-earth-beige/10 backdrop-blur-sm",
          "flex items-center justify-center z-10"
        )}
        style={{
          transform: `scale(${scale})`,
          filter: `brightness(${brightness})`,
          transition: `all 1s ${timingFunctions.easeOutCubic}`
        }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-r from-earth-tan/10 via-transparent to-earth-tan/10 animate-shimmer"
          style={{
            opacity: 0.2 + (progress * 0.3) + (highlightProgress * 0.2),
          }}
        />
        
        <div className="relative text-center">
          <h3 className="text-4xl font-display tracking-wide gold-gradient-text gold-shimmer mb-4" data-text="CONFUSED?">
            CONFUSED?
          </h3>
          <p className="text-2xl gold-gradient-text">
            LET'S MATCH YOU WITH YOUR IDEAL CREDIT CARD!
          </p>
        </div>
      </div>
    </div>
  );
}