export function formatGoal(goal: string): string {
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