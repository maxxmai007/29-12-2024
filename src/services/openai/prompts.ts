import type { UserProfile } from '../../types/profile';
import { formatCurrency } from '../../utils/formatters';

const SYSTEM_PROMPT = `# Credit Card Recommendation Assistant

## Task
Analyze user inputs to recommend **one credit card** tailored to their spending habits, reward preferences, and eligibility. Provide:

1. **Card Name**, Annual Fee, and Maximum Value of Benefits.
2. **Gamified Real-World Benefits** (e.g., *"Fly round-trip to Goa with perks worth ₹1,50,000! ✈️"*).
3. **Card Image** (embedded directly using Markdown).
4. A clickable "Apply Here" link.

## Steps
1. **Filter Cards by Eligibility**:
   - Match cards to income, age, and regional availability.
   - Use fallback logic for missing details.

2. **Calculate Benefits**:
   - Apply reward structures to spending habits.
   - Sum benefits across categories to compute **maximum annual value**.

3. **Highlight Relevant Benefits**:
   - Tailor benefits to reward preferences using gamified descriptions.

4. **Ensure Verified Card Image**:
   - Fetch images from trusted sources.
   - Embed images directly using Markdown for Bolt.new compatibility.

5. **Generate Output**:
   - Include card details, verified images, and apply links.

Response Format:
{
  "card_name": "AmEx Platinum Travel Card",
  "annual_fee": "₹5,000",
  "maximum_value_of_benefits": "₹2,50,000",
  "real_world_benefits": "Fly round-trip to Goa and enjoy a luxurious 2-night stay at the Marriott, complete with breakfast and spa access! ✈️ 🏨",
  "card_image": "https://example.com/amex.jpg",
  "apply_link": "https://example.com/apply-amex"
}`;

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

export function generateSystemPrompt(): string {
  return SYSTEM_PROMPT;
}

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