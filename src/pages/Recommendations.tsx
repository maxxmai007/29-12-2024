import React from 'react';
import { Logo } from '../components/layout/Logo';
import { BackButton } from '../components/ui/BackButton';
import { LoadingAnimation } from '../components/recommendations/LoadingAnimation';
import { RecommendationList } from '../components/recommendations/RecommendationList';
import { useRecommendationsStore } from '../store/useRecommendationsStore';
import { parseRecommendations } from '../utils/parseRecommendations';

export function Recommendations() {
  const { recommendations, isLoading, error } = useRecommendationsStore();
  const parsedData = recommendations ? parseRecommendations(recommendations) : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl px-4">
          <div className="text-center mb-8">
            <Logo className="mx-auto" />
            <h2 className="mt-6 text-3xl font-display tracking-tight text-white">
              Finding Your Perfect Card
            </h2>
            <p className="mt-2 text-sm text-gold-500/80">
              Our AI is analyzing thousands of credit cards to find your best match
            </p>
          </div>
          <LoadingAnimation />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <BackButton className="mb-8" />
        
        <div className="text-center mb-12">
          <Logo className="mx-auto" />
          <h2 className="mt-6 text-3xl font-display tracking-tight text-white">
            Your Personalized Recommendation
          </h2>
          <p className="mt-2 text-sm text-gold-500/80">
            Based on your profile and preferences
          </p>
        </div>

        {error ? (
          <div className="text-center text-red-500">
            {error}
          </div>
        ) : parsedData ? (
          <RecommendationList recommendations={parsedData.recommendations} />
        ) : null}
      </div>
    </div>
  );
}