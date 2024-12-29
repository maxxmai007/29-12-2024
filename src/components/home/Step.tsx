import React from 'react';
import { StepIcon } from './StepIcon';

interface StepProps {
  type: 'profile' | 'spending' | 'analysis' | 'recommendations';
  title: string;
}

export function Step({ type, title }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center p-8">
      <div className="w-16 h-16 rounded-full border border-gold-500/20 flex items-center justify-center mb-4">
        <StepIcon type={type} className="w-8 h-8 text-gold-500" />
      </div>
      <p className="text-sm text-gold-500/80">{title}</p>
    </div>
  );
}