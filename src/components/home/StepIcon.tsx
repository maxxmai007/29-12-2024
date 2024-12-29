import React from 'react';
import { User, Wallet, Brain, CreditCard } from 'lucide-react';

const icons = {
  profile: User,
  spending: Wallet,
  analysis: Brain,
  recommendations: CreditCard,
} as const;

interface StepIconProps {
  type: keyof typeof icons;
  className?: string;
}

export function StepIcon({ type, className }: StepIconProps) {
  const Icon = icons[type];
  return <Icon className={className} />;
}