import React from 'react';
import { Timeline } from './Timeline';

export function TimelineSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-display text-white mb-2">Global Adventures</h3>
        <p className="text-gold-500/60">Maximize rewards across your international journey</p>
      </div>
      <Timeline />
      <div className="text-center">
        <p className="text-sm text-gold-500/40">
          *Projected rewards based on your travel spending patterns
        </p>
      </div>
    </div>
  );
}