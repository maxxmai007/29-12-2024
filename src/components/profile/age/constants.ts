export const ageGroups = [
  { value: 'below_18', label: 'Below 18' },
  { value: '18_24', label: '18-24' },
  { value: '25_34', label: '25-34' },
  { value: '35_44', label: '35-44' },
  { value: '45_54', label: '45-54' },
  { value: '55_64', label: '55-64' },
  { value: '65_above', label: '65 and above' }
] as const;

export type AgeGroup = typeof ageGroups[number]['value'];