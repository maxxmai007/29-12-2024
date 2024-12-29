import React from 'react';

interface NetworkData {
  network: string;
  value: number;
}

const networkData: NetworkData[] = [
  { network: 'Discover', value: 25 },
  { network: 'Rupay', value: 40 },
  { network: 'Mastercard', value: 65 },
  { network: 'Visa', value: 100 },
];

export function NetworkGraph() {
  return (
    <div className="relative w-full h-full flex flex-col p-4">
      <div className="absolute top-2 right-2">
        <span className="text-xs text-gold-500/40">*chart not to scale</span>
      </div>
      
      <h3 className="text-gold-500/80 text-sm font-medium mb-8">
        Cards Per Network
      </h3>
      
      <div className="flex-1 flex items-end justify-between gap-6 mt-auto">
        {networkData.map((item) => (
          <div key={item.network} className="flex flex-col items-center group">
            <div className="relative w-14 mb-4">
              <div
                className="w-full bg-gradient-to-t from-gold-500/20 to-gold-500/40 rounded-full transition-all duration-300 group-hover:from-gold-500/30 group-hover:to-gold-500/50"
                style={{ 
                  height: `${item.value}%`,
                  filter: 'blur(0.5px)',
                  boxShadow: '0 0 20px rgba(212, 183, 136, 0.1)'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, rgba(212, 183, 136, 0.3) 0%, rgba(212, 183, 136, 0) 100%)',
                  }}
                />
              </div>
            </div>
            
            <span className="text-xs text-gold-500/60 font-medium">
              {item.network}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}