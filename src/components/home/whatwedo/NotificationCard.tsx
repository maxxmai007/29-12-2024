import React from 'react';

export function NotificationCard() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-xs bg-dark-800 rounded-lg p-4 border border-gold-500/10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-1 rounded-full bg-gold-500" />
          <span className="text-xs text-gold-500/60">NEW CARD ALERT</span>
        </div>
        <h4 className="text-sm text-white mb-1">Time for your next card</h4>
        <p className="text-xs text-gold-500/40">Click to see exactly why</p>
      </div>
    </div>
  );
}