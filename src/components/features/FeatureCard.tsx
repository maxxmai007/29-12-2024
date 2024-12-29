import React from 'react';
import { cn } from '../../utils/cn';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group space-y-4">
      <div className="w-12 h-12 rounded-full border border-gold-500/20 bg-dark-800/50 flex items-center justify-center">
        {icon}
      </div>
      
      <div>
        <h3 className="text-xl text-white font-medium mb-2">
          {title}
        </h3>
        <p className="text-gold-500/60">
          {description}
        </p>
      </div>
    </div>
  );
}