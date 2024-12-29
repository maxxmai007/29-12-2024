import React from 'react';
import { Button } from '../ui/Button';
import { LoadingSpinner } from './LoadingSpinner';
import { useOpenAI } from '../../hooks/useOpenAI';
import { useProfileStore } from '../../store/useProfileStore';

export function RecommendationsButton() {
  const { getRecommendations, isLoading, error } = useOpenAI();
  const { basicDetails, spendingHabits, goals } = useProfileStore();

  const handleGetRecommendations = () => {
    if (isLoading) return;

    getRecommendations({
      basicDetails,
      spendingHabits,
      goals
    });
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={handleGetRecommendations}
        disabled={isLoading}
        className="w-full relative"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <LoadingSpinner size="sm" />
            Getting Recommendations...
          </span>
        ) : (
          'Get Recommendations'
        )}
      </Button>

      {/* Error display */}
      {error && (
        <p className="text-sm text-red-500 text-center">
          {error}
        </p>
      )}
    </div>
  );
}