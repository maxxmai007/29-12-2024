export interface BasicDetails {
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

export interface UserProfile {
  basicDetails: BasicDetails;
  spendingHabits: SpendingHabits;
  goals: string[];
}