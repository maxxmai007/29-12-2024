import { ENV_KEYS } from './constants';

export interface EnvConfig {
  OPENAI_API_KEY: string;
  IS_DEV: boolean;
  IS_PROD: boolean;
}

export const env: EnvConfig = {
  OPENAI_API_KEY: import.meta.env[ENV_KEYS.OPENAI_API_KEY] || '',
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
};