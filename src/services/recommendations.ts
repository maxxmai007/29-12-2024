import { openai, getOpenAIConfig } from '../config/openai';
import type { UserProfile } from '../types/profile';
import { mockRecommendations } from './mockData';

export async function generateCreditCardRecommendations(userProfile: UserProfile) {
  const { isTestMode } = getOpenAIConfig();

  // Return mock data in test mode
  if (isTestMode) {
    console.log('Running in test mode - returning mock recommendations');
    return JSON.stringify(mockRecommendations);
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a credit card recommendation expert. Analyze the user profile and return ONLY a JSON response in the following format:
{
  "CreditCards": [
    {
      "CreditCardName": "Card Name",
      "CardImageURL": "URL to card image",
      "AnnualFee": "₹X,XXX",
      "MaximumAnnualRewards": "₹XX,XXX",
      "RealWorldBenefits": [
        "Benefit 1 in simple terms",
        "Benefit 2 in simple terms",
        "Benefit 3 in simple terms"
      ],
      "ApplyLink": "URL to apply"
    }
  ]
}`
        },
        {
          role: "user",
          content: `Please analyze this user profile and recommend credit cards:\n${JSON.stringify(userProfile, null, 2)}`
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      throw new Error('No recommendations received');
    }

    // Ensure we have valid JSON
    try {
      JSON.parse(content);
      return content;
    } catch (e) {
      throw new Error('Invalid JSON response received');
    }
  } catch (error) {
    console.error('Error generating recommendations:', error);
    throw new Error('Failed to generate credit card recommendations');
  }
}