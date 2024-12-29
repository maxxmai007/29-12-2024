import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GoalCard } from './GoalCard';
import { financialGoals, type FinancialGoal } from './constants';
import { useProfileStore } from '../../../store/useProfileStore';
import { useOpenAI } from '../../../hooks/useOpenAI';
import { Button } from '../../ui/Button';
import { LoadingSpinner } from '../../recommendations/LoadingSpinner';

const goalsSchema = z.object({
  goals: z.array(z.string()).min(1, 'Please select at least one reward preference')
});

type GoalsForm = z.infer<typeof goalsSchema>;

interface GoalsProps {
  onNext: () => void;
}

export function Goals({ onNext }: GoalsProps) {
  const navigate = useNavigate();
  const { goals: selectedGoals, setGoals, basicDetails, spendingHabits } = useProfileStore();
  const { getRecommendations, isLoading, error } = useOpenAI();
  
  const { handleSubmit, formState: { errors }, setValue } = useForm<GoalsForm>({
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
  };

  const handleGetRecommendations = async () => {
    if (!basicDetails || !spendingHabits || selectedGoals.length === 0) {
      return;
    }

    await getRecommendations({
      basicDetails,
      spendingHabits,
      goals: selectedGoals
    });
  };

  return (
    <form onSubmit={handleSubmit(handleGetRecommendations)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {financialGoals.map((goal) => (
          <GoalCard
            key={goal.id}
            icon={goal.icon}
            title={goal.title}
            description={goal.description}
            isSelected={selectedGoals.includes(goal.id)}
            onClick={() => toggleGoal(goal.id)}
          />
        ))}
      </div>

      {errors.goals && (
        <p className="text-sm text-red-500 text-center">
          {errors.goals.message}
        </p>
      )}

      <Button
        type="submit"
        disabled={isLoading || selectedGoals.length === 0}
        className="w-full"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <LoadingSpinner size="sm" />
            Getting Recommendations...
          </span>
        ) : (
          'Get Recommendations'
        )}
      </Button>

      {error && (
        <p className="text-sm text-red-500 text-center">
          {error}
        </p>
      )}
    </form>
  );
}