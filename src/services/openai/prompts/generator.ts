import type { UserProfile } from '../../../types/profile';
import { SYSTEM_PROMPT } from './system';
import { formatUserPrompt } from './user';

export function generatePrompt(profile: UserProfile): string {
  return `${SYSTEM_PROMPT}\n\n${formatUserPrompt(profile)}`;
}