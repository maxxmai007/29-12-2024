import React from 'react';
import { User, CreditCard, Brain, CheckCircle } from 'lucide-react';
import { TimelineStep } from './TimelineStep';

const steps = [
  {
    icon: User,
    title: 'Create Your Profile',
    description: 'Share your income, occupation, and location to determine credit card eligibility.'
  },
  {
    icon: CreditCard,
    title: 'Share Spending Habits',
    description: 'Tell us your spending across categories to help maximize rewards.'
  },
  {
    icon: Brain,
    title: 'AI Analysis',
    description: 'Our AI compares thousands of cards to find the best match for you.'
  },
  {
    icon: CheckCircle,
    title: 'Get Recommendations',
    description: 'Get personalized credit card suggestions with detailed benefits and rewards.'
  }
];

export function Steps() {
  return (
    <div className="relative">
      {/* Background glow effect */}
      <div className="absolute -inset-4 bg-gold-500/5 blur-3xl rounded-full" />
      
      {/* Timeline steps */}
      <div className="relative space-y-2">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.title}
            {...step}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}