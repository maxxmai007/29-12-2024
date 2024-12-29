import type { UserProfile } from '../../../types/profile';
import { formatCurrency } from '../../../utils/formatters';
import { formatGoal } from './formatters';

export function formatUserPrompt(profile: UserProfile): string {
  const { basicDetails, spendingHabits, goals } = profile;

  const sections = [
    '# User Profile Analysis',
    '',
    '## Basic Details',
    `- Monthly Income: ${formatCurrency(basicDetails.income)}`,
    `- Occupation: ${basicDetails.occupation}`,
    `- Location: ${basicDetails.city}`,
    '',
    '## Monthly Spending Patterns',
    ...Object.entries(spendingHabits).map(
      ([category, amount]) => `- ${category.charAt(0).toUpperCase() + category.slice(1)}: ${formatCurrency(amount)}`
    ),
    '',
    '## Reward Preferences',
    ...goals.map(goal => `- ${formatGoal(goal)}`),
    '',
    'Please recommend ONE credit card that:',
    '1. Matches the income eligibility criteria',
    '2. Maximizes rewards based on the spending pattern',
    '3. Aligns with stated preferences',
    '4. Provides practical, real-world benefits'
  ];

  return sections.join('\n');
}