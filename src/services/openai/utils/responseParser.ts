import { validateRecommendation } from '../validation/responseValidator';
import type { RecommendationsResponse } from '../types';

export function parseOpenAIResponse(content: string): RecommendationsResponse {
  try {
    console.log('Raw OpenAI response:', content);
    
    // Parse the JSON content
    const parsed = JSON.parse(content.trim());
    console.log('Parsed response:', parsed);
    
    // Handle both single recommendation and array formats
    const recommendationData = parsed.recommendations?.[0] || parsed;
    
    // Validate and transform the response
    const recommendation = validateRecommendation(recommendationData);
    
    // Return in the expected format
    return {
      recommendations: [recommendation]
    };
  } catch (error) {
    console.error('Error parsing OpenAI response:', error);
    throw error;
  }
}