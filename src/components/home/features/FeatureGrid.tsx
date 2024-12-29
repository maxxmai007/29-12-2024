import React from 'react';
import { FeatureCard } from './FeatureCard';
import { features } from './featuresData';

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          {...feature}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}