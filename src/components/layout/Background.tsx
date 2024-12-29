import React, { useEffect, useRef } from 'react';

export function Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.getElementsByClassName('credit-card');
    Array.from(cards).forEach((card, index) => {
      const delay = Math.random() * 2;
      const duration = 3 + Math.random() * 2;
      const x = Math.random() * 100 - 50;
      const y = Math.random() * 100 - 50;
      
      (card as HTMLElement).style.setProperty('--delay', `${delay}s`);
      (card as HTMLElement).style.setProperty('--duration', `${duration}s`);
      (card as HTMLElement).style.setProperty('--x', `${x}px`);
      (card as HTMLElement).style.setProperty('--y', `${y}px`);
      (card as HTMLElement).style.setProperty('--index', index.toString());
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-transparent opacity-40" />
      
      {/* Credit Card Matrix */}
      <div className="absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="credit-card absolute rounded-xl overflow-hidden"
            style={{
              left: `${(i % 6) * 20}%`,
              top: `${Math.floor(i / 6) * 25}%`,
              width: '240px',
              height: '150px',
            }}
          >
            <div className="relative w-full h-full transform transition-all duration-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20" />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm border border-white/10">
                <div className="p-4">
                  <div className="w-12 h-8 rounded bg-emerald-500/20 mb-4" />
                  <div className="space-y-2">
                    <div className="w-full h-2 rounded bg-white/10" />
                    <div className="w-3/4 h-2 rounded bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    </div>
  );
}