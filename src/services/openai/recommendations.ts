import { openai, openaiConfig } from './client';
import { SYSTEM_PROMPT } from './prompts/system';
import { formatUserPrompt } from './prompts/user';
import { parseOpenAIResponse } from './utils/responseParser';
import { OpenAIServiceError } from './types/error';
import { mockRecommendations } from '../mock/recommendations';
import type { UserProfile } from '../../types/profile';
import type { RecommendationsResponse } from './types';

export async function getRecommendations(profile: UserProfile): Promise<RecommendationsResponse> {
  // Check OpenAI configuration
  if (openaiConfig.isMockMode) {
    console.info('Using mock recommendations data');
    return mockRecommendations;
  }

  try {
    console.log('Sending request to OpenAI...');
    
    // Make API call
    const completion = await openai!.chat.completions.create({
      model: openaiConfig.MODEL,
      temperature: openaiConfig.TEMPERATURE,
      max_tokens: openaiConfig.MAX_TOKENS,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: formatUserPrompt(profile) }
      ]
    });

    // Get response content
    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new OpenAIServiceError('No recommendations received', 'NO_CONTENT');
    }

    console.log('Received OpenAI response');

    // Parse and validate response
    try {
      const result = parseOpenAIResponse(content);
      console.log('Successfully parsed recommendations:', result);
      return result;
    } catch (parseError) {
      console.error('Failed to parse OpenAI response:', parseError);
      throw new OpenAIServiceError(
        'Invalid response format received',
        'INVALID_FORMAT',
        parseError
      );
    }
  } catch (error) {
    console.error('OpenAI API error:', error);
    if (error instanceof OpenAIServiceError) {
      throw error;
    }
    throw new OpenAIServiceError('Failed to generate recommendations', 'API_ERROR', error);
  }
}