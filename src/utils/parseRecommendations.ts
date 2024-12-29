import type { CreditCardRecommendation } from '../services/openai/types';

export function parseRecommendations(content: string): {
  recommendations: CreditCardRecommendation[];
} {
  try {
    console.log('Parsing recommendations content:', content);
    
    // Parse the response content if it's a string
    const parsed = typeof content === 'string' ? JSON.parse(content) : content;
    console.log('Parsed content:', parsed);

    // Handle both array and single recommendation formats
    let recommendations: CreditCardRecommendation[];
    
    if (Array.isArray(parsed.recommendations)) {
      recommendations = parsed.recommendations;
    } else if (parsed.card_name) {
      // Single recommendation format
      recommendations = [{
        card_name: parsed.card_name,
        annual_fee: parsed.annual_fee,
        maximum_value_of_benefits: parsed.maximum_value_of_benefits,
        real_world_benefits: parsed.real_world_benefits,
        card_image: parsed.card_image,
        apply_link: parsed.apply_link
      }];
    } else {
      throw new Error('Invalid recommendation format');
    }

    // Validate and provide defaults for each recommendation
    const validatedRecommendations = recommendations.map(rec => ({
      card_name: rec.card_name || 'Unnamed Card',
      annual_fee: rec.annual_fee || 'N/A',
      maximum_value_of_benefits: rec.maximum_value_of_benefits || 'N/A',
      real_world_benefits: rec.real_world_benefits || 'No benefits information available',
      card_image: rec.card_image || 'https://via.placeholder.com/300x200?text=Credit+Card',
      apply_link: rec.apply_link || '#'
    }));

    console.log('Validated recommendations:', validatedRecommendations);
    
    return { recommendations: validatedRecommendations };
  } catch (error) {
    console.error('Error parsing recommendations:', error);
    return { recommendations: [] };
  }
}