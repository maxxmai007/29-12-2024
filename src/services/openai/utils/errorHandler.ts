import { RecommendationError } from '../errors/RecommendationError';

export function handleRecommendationError(error: unknown): RecommendationError {
  console.error('Recommendation error:', error);

  if (error instanceof RecommendationError) {
    return error;
  }

  if (error instanceof Error) {
    return new RecommendationError(
      error.message,
      'RECOMMENDATION_ERROR',
      error
    );
  }

  return new RecommendationError(
    'An unexpected error occurred while getting recommendations',
    'UNKNOWN_ERROR',
    error
  );
}