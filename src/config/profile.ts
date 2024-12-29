export const PROFILE_SECTIONS = [
  { id: 'basic', title: 'Basic Details' },
  { id: 'spending', title: 'Spending Habits' },
  { id: 'goals', title: 'Reward Preferences' }
] as const;

export const PROFILE_STEPS = [
  { path: '/profile', label: 'Basic Details' },
  { path: '/profile/spending', label: 'Spending Habits' },
  { path: '/profile/goals', label: 'Reward Preferences' }
] as const;