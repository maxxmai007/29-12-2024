import OpenAI from 'openai';

// Get API key from environment variable
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  console.warn('OpenAI API key is missing! Please check your .env file');
}

// Initialize OpenAI client
export const openai = new OpenAI({
  apiKey: apiKey || 'dummy-key', // Fallback to prevent initialization error
  dangerouslyAllowBrowser: true
});

// Configuration object
export const openaiConfig = {
  MODEL: "gpt-4",
  TEMPERATURE: 0.7,
  MAX_TOKENS: 2000,
  API_KEY: apiKey,
  isMockMode: !apiKey
} as const;

// Helper function to check API configuration
export function checkOpenAIConfig() {
  const status = {
    hasKey: Boolean(apiKey),
    isMockMode: !apiKey,
    keyLength: apiKey?.length || 0
  };
  
  console.log('OpenAI Configuration Status:', status);
  return status;
}