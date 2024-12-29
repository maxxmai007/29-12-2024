import React from 'react';
import { TimelineEvent } from './TimelineData';

interface TimelinePointProps {
  event: TimelineEvent;
  cx: string;
  cy: string;
}

export function TimelinePoint({ event, cx, cy }: TimelinePointProps) {
  return (
    <g className="timeline-point" style={{ transform: `translate(${cx}, ${cy})` }}>
      {/* Point with pulse effect */}
      <circle
        r="5"
        fill="#D4B788"
        className="transition-transform duration-300 hover:scale-125"
      />
      
      {/* Pulse animation */}
      <circle
        r="5"
        fill="none"
        stroke="#D4B788"
        strokeWidth="1.5"
        className="animate-ping opacity-30"
      />
      
      {/* Event tooltip */}
      <foreignObject
        x="-80"
        y="-70"
        width="160"
        height="60"
        className="opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        <div className="bg-dark-800/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-gold-500/20 shadow-lg">
          <p className="text-white/90 text-sm font-medium mb-1">{event.location}</p>
          <p className="text-xs text-gold-500/60">{event.date}</p>
        </div>
      </foreignObject>
    </g>
  );
}