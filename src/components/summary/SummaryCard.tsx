import React from 'react';
import { Edit2 } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onEdit: () => void;
}

export function SummaryCard({ title, icon, children, onEdit }: SummaryCardProps) {
  return (
    <div className="bg-dark-800/50 border border-gold-500/10 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
        <button
          onClick={onEdit}
          className="text-gold-500/60 hover:text-gold-500 transition-colors"
        >
          <Edit2 className="w-4 h-4" />
        </button>
      </div>
      {children}
    </div>
  );
}