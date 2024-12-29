export const API_CONFIG = {
  OPENAI: {
    MODEL: 'gpt-4',
    TEMPERATURE: 0.7,
    MAX_TOKENS: 2000,
  },
} as const;

export const ENV_KEYS = {
  OPENAI_API_KEY: 'VITE_OPENAI_API_KEY',
} as const;