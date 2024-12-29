export const occupationTypes = [
  { value: 'salaried', label: 'Salaried Individual' },
  { value: 'self_employed', label: 'Self-Employed/ Business Owner' }
] as const;

export type OccupationType = typeof occupationTypes[number]['value'];