import React from 'react';

export function TimelineDividers() {
  return (
    <div className="absolute inset-0 flex">
      {/* First section divider */}
      <div className="w-1/3 border-r border-dashed border-gold-500/20" />
      
      {/* Second section divider */}
      <div className="w-1/3 border-r border-dashed border-gold-500/20" />
      
      {/* Third section */}
      <div className="w-1/3" />
    </div>
  );
}