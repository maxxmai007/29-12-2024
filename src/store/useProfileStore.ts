import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface BasicDetails {
  age: string;
  income: string;
  occupation: string;
  city: string;
}

export interface SpendingHabits {
  groceries: string;
  dining: string;
  shopping: string;
  travel: string;
}

export interface ProfileState {
  basicDetails: BasicDetails | null;
  spendingHabits: SpendingHabits | null;
  goals: string[];
  setBasicDetails: (details: BasicDetails) => void;
  setSpendingHabits: (habits: SpendingHabits) => void;
  setGoals: (goals: string[]) => void;
  reset: () => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      basicDetails: null,
      spendingHabits: null,
      goals: [],
      setBasicDetails: (details) => set({ basicDetails: details }),
      setSpendingHabits: (habits) => set({ spendingHabits: habits }),
      setGoals: (goals) => set({ goals }),
      reset: () => set({ basicDetails: null, spendingHabits: null, goals: [] }),
    }),
    {
      name: 'profile-store',
    }
  )
);