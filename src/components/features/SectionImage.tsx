import React from 'react';

export function SectionImage() {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800&h=1000"
        alt="Professional using MaxxMAI"
        className="w-full h-[600px] object-cover rounded-2xl"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
    </div>
  );
}