import { UserProfile } from '../../../types/profile';
import { formatCurrency } from '../../../utils/formatters';

export function generateUserPrompt(profile: UserProfile): string {
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
    '4. Provides gamified real-world benefits'
  ];

  return sections.join('\n');
}

function formatGoal(goal: string): string {
  const goalMap: Record<string, string> = {
    cashback: '💰 Cashback Rewards',
    travel: '✈️ Travel Benefits & Miles',
    shopping: '🛍️ Shopping Rewards',
    dining: '🍽️ Dining Benefits',
    lounge: '🛋️ Airport Lounge Access',
    insurance: '🛡️ Travel Insurance'
  };
  
  return goalMap[goal] || goal;
}