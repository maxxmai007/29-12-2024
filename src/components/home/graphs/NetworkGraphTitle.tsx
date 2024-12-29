import React from 'react';

export function NetworkGraphTitle() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h3 className="text-emerald-400 text-base font-medium">
        Cards Per Network
      </h3>
      <span className="text-xs text-emerald-400/40">
        *Approximate distribution
      </span>
    </div>
  );
}