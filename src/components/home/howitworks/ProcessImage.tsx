import React from 'react';

export function ProcessImage() {
  return (
    <div className="relative rounded-2xl overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=600"
        alt="Credit Card Analysis Process"
        className="w-full h-[600px] object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/50 to-transparent opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent opacity-60" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-md p-6">
          <div className="absolute top-0 left-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}