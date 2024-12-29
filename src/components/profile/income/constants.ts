export const incomeBrackets = [
  { value: 'below_300000', label: 'Below 3 lakh' },
  { value: '300000_600000', label: '3 lakh to 6 lakh' },
  { value: '600000_1200000', label: '6 lakh to 12 lakh' },
  { value: '1200000_2500000', label: '12 lakh to 25 lakh' },
  { value: 'above_2500000', label: 'Above 25 lakh' }
] as const;

export type IncomeBracket = typeof incomeBrackets[number]['value'];