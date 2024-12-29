import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Initialize OpenAI client
export const openai = new OpenAI({
  apiKey: apiKey || 'dummy-key',
  dangerouslyAllowBrowser: true
});

// OpenAI API configuration
export const OPENAI_CONFIG = {
  model: "gpt-4",
  temperature: 0.7,
  max_tokens: 2000,
  presence_penalty: 0.1,
  frequency_penalty: 0.1
} as const;

// Helper functions
export const isTestMode = !apiKey;

export function getOpenAIConfig() {
  return {
    isTestMode,
    hasValidKey: Boolean(apiKey)
  };
}