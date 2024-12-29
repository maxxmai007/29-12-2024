import { CreditCard, Plane, ShoppingBag, UtensilsCrossed } from 'lucide-react';

export const financialGoals = [
  {
    id: 'cashback',
    icon: CreditCard,
    title: 'Cashback'
  },
  {
    id: 'travel',
    icon: Plane,
    title: 'Travel'
  },
  {
    id: 'shopping',
    icon: ShoppingBag,
    title: 'Shopping'
  },
  {
    id: 'dining',
    icon: UtensilsCrossed,
    title: 'Dining and Lifestyle'
  }
] as const;

export type FinancialGoal = typeof financialGoals[number]['id'];