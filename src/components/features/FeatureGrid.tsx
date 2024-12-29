import React from 'react';
import { FeatureCard } from './FeatureCard';
import { FEATURES } from './constants';

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {FEATURES.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          {...feature}
          index={index}
        />
      ))}
    </div>
  );
}