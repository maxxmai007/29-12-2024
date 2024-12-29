import React from 'react';
import { RecommendationCard } from './RecommendationCard';
import type { CreditCardRecommendation } from '../../services/openai/types';

interface RecommendationListProps {
  recommendations: CreditCardRecommendation[];
}

export function RecommendationList({ recommendations }: RecommendationListProps) {
  if (recommendations.length === 0) {
    return (
      <div className="text-center text-gold-500/60">
        No recommendations available. Please try again.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {recommendations.map((card, index) => (
        <RecommendationCard key={index} {...card} />
      ))}
    </div>
  );
}