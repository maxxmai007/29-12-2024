import type { CreditCardRecommendation } from '../types';

export function validateRecommendation(data: any): CreditCardRecommendation {
  console.log('Validating recommendation data:', data);

  // Basic validation
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid recommendation data format');
  }

  // Extract and validate required fields with fallbacks
  const recommendation: CreditCardRecommendation = {
    card_name: data.card_name || 'Unnamed Card',
    annual_fee: data.annual_fee || 'N/A',
    maximum_value_of_benefits: data.maximum_value_of_benefits || 'N/A',
    real_world_benefits: data.real_world_benefits || 'No benefits information available',
    card_image: data.card_image || 'https://via.placeholder.com/300x200?text=Credit+Card',
    apply_link: data.apply_link || '#'
  };

  console.log('Validated recommendation:', recommendation);
  return recommendation;
}