import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GoalCard } from './goals/GoalCard';
import { financialGoals, type FinancialGoal } from './goals/constants';
import { useProfileStore } from '../../store/useProfileStore';

const goalsSchema = z.object({
  goals: z.array(z.string()).min(1, 'Please select at least one reward preference')
});

type GoalsForm = z.infer<typeof goalsSchema>;

interface GoalsProps {
  onNext: () => void;
}

export function Goals({ onNext }: GoalsProps) {
  const { goals: selectedGoals, setGoals } = useProfileStore();
  
  const { formState: { errors }, setValue } = useForm<GoalsForm>({
    resolver: zodResolver(goalsSchema),
    defaultValues: {
      goals: selectedGoals
    }
  });

  const toggleGoal = (goalId: FinancialGoal) => {
    const newGoals = selectedGoals.includes(goalId)
      ? selectedGoals.filter(g => g !== goalId)
      : [...selectedGoals, goalId];
    
    setValue('goals', newGoals);
    setGoals(newGoals);
    
    if (newGoals.length > 0) {
      onNext();
    }
  };

  return (
    <div className="space-y-3">
      {financialGoals.map((goal) => (
        <GoalCard
          key={goal.id}
          icon={goal.icon}
          title={goal.title}
          isSelected={selectedGoals.includes(goal.id)}
          onClick={() => toggleGoal(goal.id)}
        />
      ))}

      {errors.goals && (
        <p className="text-sm text-red-500 mt-2">
          {errors.goals.message}
        </p>
      )}
    </div>
  );
}