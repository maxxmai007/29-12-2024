import React from 'react';
import { MotionDiv } from '../../ui/motion';
import { FeatureIcon } from './FeatureIcon';

interface FeatureCardProps {
  icon: 'brain' | 'shield' | 'zap' | 'target';
  title: string;
  description: string;
  delay: number;
}

export function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex flex-col space-y-4">
        <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <FeatureIcon type={icon} />
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
          <p className="text-gold-500/60 leading-relaxed">{description}</p>
        </div>
      </div>
    </MotionDiv>
  );
}