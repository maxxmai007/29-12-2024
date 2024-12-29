export function formatCurrency(amount: string | number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Number(amount));
}

export function formatGoal(goal: string): string {
  const goalLabels: Record<string, string> = {
    cashback: 'Cashback Rewards',
    travel: 'Travel Benefits',
    shopping: 'Shopping Rewards',
    dining: 'Dining Benefits',
    lounge: 'Airport Lounge Access',
    insurance: 'Travel Insurance',
  };
  
  return goalLabels[goal] || goal;
}