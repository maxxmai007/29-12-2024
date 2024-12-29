export interface CreditCardRecommendation {
  card_name: string;
  annual_fee: string;
  maximum_value_of_benefits: string;
  real_world_benefits: string;
  card_image: string;
  apply_link: string;
}

export interface OpenAIError extends Error {
  code?: string;
  status?: number;
}