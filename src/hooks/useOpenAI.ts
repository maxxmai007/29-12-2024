import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecommendations } from '../services/openai';
import { useRecommendationsStore } from '../store/useRecommendationsStore';
import { handleRecommendationError } from '../services/openai/utils/errorHandler';
import type { UserProfile } from '../types/profile';

export function useOpenAI() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setRecommendations } = useRecommendationsStore();

  const generateRecommendations = async (profile: UserProfile) => {
    try {
      setIsLoading(true);
      setError(null);

      // Validate required data
      if (!profile.basicDetails || !profile.spendingHabits || !profile.goals.length) {
        throw new Error('Please complete your profile before getting recommendations');
      }

      const result = await getRecommendations(profile);
      setRecommendations(JSON.stringify(result));
      navigate('/recommendations');
    } catch (err) {
      const error = handleRecommendationError(err);
      setError(error.message);
      console.error('Error getting recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getRecommendations: generateRecommendations,
    isLoading,
    error
  };
}