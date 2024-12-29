import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export const openai = new OpenAI({
  apiKey: apiKey || 'dummy-key',
  dangerouslyAllowBrowser: true
});

export const OPENAI_CONFIG = {
  model: "gpt-4",
  temperature: 0.7,
  max_tokens: 2000
} as const;

export const isTestMode = !apiKey;

export function getOpenAIConfig() {
  return {
    isTestMode,
    hasValidKey: Boolean(apiKey)
  };
}