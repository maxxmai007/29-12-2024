import React from 'react';

export function ImageSection() {
  return (
    <div className="relative rounded-2xl overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800"
        alt="Credit Card Analysis"
        className="w-full h-[600px] object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent opacity-60" />
    </div>
  );
}