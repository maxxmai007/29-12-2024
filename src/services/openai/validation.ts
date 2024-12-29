import type { OpenAIResponse } from './types';

export function validateResponse(content: string): OpenAIResponse {
  try {
    const parsed = JSON.parse(content);
    
    if (!parsed.CreditCards || !Array.isArray(parsed.CreditCards)) {
      throw new Error('Invalid response format: missing CreditCards array');
    }

    return parsed;
  } catch (error) {
    throw new Error('Invalid JSON response received');
  }
}