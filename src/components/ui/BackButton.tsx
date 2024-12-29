import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface BackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function BackButton({ className, ...props }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={cn(
        'inline-flex items-center gap-2 text-gold-500/80 hover:text-gold-500 transition-colors',
        className
      )}
      {...props}
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm">Back</span>
    </button>
  );
}