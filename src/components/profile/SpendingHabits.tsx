import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useProfileStore } from '../../store/useProfileStore';
import { SpendingSlider } from './spending/SpendingSlider';
import { useFormAutoSubmit } from '../../hooks/useFormAutoSubmit';

const spendingSchema = z.object({
  groceries: z.number().min(1000, 'Please enter your spending amount'),
  dining: z.number().min(1000, 'Please enter your spending amount'),
  shopping: z.number().min(1000, 'Please enter your spending amount'),
  travel: z.number().min(1000, 'Please enter your spending amount'),
});

type SpendingForm = z.infer<typeof spendingSchema>;

interface SpendingHabitsProps {
  onNext: () => void;
}

export function SpendingHabits({ onNext }: SpendingHabitsProps) {
  const { spendingHabits, setSpendingHabits } = useProfileStore();
  
  const form = useForm<SpendingForm>({
    resolver: zodResolver(spendingSchema),
    defaultValues: {
      groceries: 1000,
      dining: 1000,
      shopping: 1000,
      travel: 1000,
      ...spendingHabits && Object.fromEntries(
        Object.entries(spendingHabits).map(([key, value]) => [key, parseInt(value)])
      )
    },
  });

  const { formState: { errors }, setValue, watch } = form;
  const values = watch();

  useFormAutoSubmit({
    values,
    schema: spendingSchema,
    onValidSubmit: (data) => {
      const stringifiedData = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, value.toString()])
      );
      setSpendingHabits(stringifiedData);
      onNext();
    },
  });

  const spendingCategories = [
    { id: 'groceries', label: 'Groceries and Food' },
    { id: 'dining', label: 'Entertainment and Leisure' },
    { id: 'shopping', label: 'Shopping and Retail' },
    { id: 'travel', label: 'Travel and Transportation' }
  ];

  return (
    <div className="space-y-3">
      {spendingCategories.map(category => (
        <SpendingSlider
          key={category.id}
          label={category.label}
          value={values[category.id as keyof SpendingForm]}
          onChange={(value) => setValue(category.id as keyof SpendingForm, value)}
          error={errors[category.id as keyof SpendingForm]?.message}
        />
      ))}
    </div>
  );
}