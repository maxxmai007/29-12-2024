export interface CardRecommendation {
  name: string;
  image: string;
  annualFee: string;
  maxRewards: string;
  benefits: string[];
  applyLink?: string;
}

export interface RecommendationsResponse {
  recommendations: CardRecommendation[];
}