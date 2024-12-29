import React from 'react';
import { CreditCard as CardIcon } from 'lucide-react';

interface CardContentProps {
  network: string;
  name: string;
  number: string;
}

export function CardContent({ network, name, number }: CardContentProps) {
  return (
    <div className="relative p-6 h-full flex flex-col justify-between">
      {/* Card chip and network */}
      <div className="flex items-center justify-between">
        <div className="w-12 h-8 rounded bg-gold-500/20" />
        <CardIcon className="w-8 h-8 text-gold-500/60" />
      </div>
      
      {/* Card number */}
      <div className="space-y-1">
        <div className="flex gap-3 text-lg tracking-widest text-white/90">
          {number.match(/.{1,4}/g)?.map((group, i) => (
            <span key={i}>{group}</span>
          ))}
        </div>
        
        {/* Cardholder name and network */}
        <div className="flex items-center justify-between">
          <span className="text-sm tracking-wider text-white/80 uppercase">
            {name}
          </span>
          <span className="text-sm font-medium text-gold-500/80 uppercase">
            {network}
          </span>
        </div>
      </div>
    </div>
  );
}