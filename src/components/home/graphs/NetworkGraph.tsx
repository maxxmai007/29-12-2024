import React from 'react';
import { NetworkTitle } from './NetworkTitle';
import { NetworkBar } from './NetworkBar';

const networkData = [
  { network: 'Discover', cardCount: 2500, percentage: 25 },
  { network: 'Rupay', cardCount: 4000, percentage: 40 },
  { network: 'Mastercard', cardCount: 6500, percentage: 65 },
  { network: 'Visa', cardCount: 10000, percentage: 100 }
];

export function NetworkGraph() {
  return (
    <div className="relative w-full h-full flex flex-col items-center">
      {/* Title with proper spacing */}
      <div className="w-full text-center mb-8">
        <NetworkTitle />
      </div>
      
      {/* Graph container with fixed width and proper padding */}
      <div className="w-full px-8">
        <div className="grid grid-cols-4 gap-4">
          {networkData.map((item) => (
            <div key={item.network} className="flex justify-center">
              <NetworkBar
                percentage={item.percentage}
                cardCount={item.cardCount}
                label={item.network}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}