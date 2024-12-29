import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useProfileStore } from '../../store/useProfileStore';
import { AgeSelect } from './age/AgeSelect';
import { IncomeBracketSelect } from './income/IncomeBracketSelect';
import { OccupationSelect } from './occupation/OccupationSelect';
import { CitySelect } from './city/CitySelect';
import { useFormAutoSubmit } from '../../hooks/useFormAutoSubmit';

const basicDetailsSchema = z.object({
  age: z.string().min(1, 'Please select your age group'),
  income: z.string().min(1, 'Please select your annual income'),
  occupation: z.string().min(1, 'Please select your occupation'),
  city: z.string().min(1, 'Please select your city'),
});

type BasicDetailsForm = z.infer<typeof basicDetailsSchema>;

export function BasicDetails() {
  const { basicDetails, setBasicDetails } = useProfileStore();
  
  const form = useForm<BasicDetailsForm>({
    resolver: zodResolver(basicDetailsSchema),
    defaultValues: basicDetails || {
      age: '',
      income: '',
      occupation: '',
      city: '',
    },
  });

  const { formState: { errors }, setValue, watch } = form;
  const values = watch();

  useFormAutoSubmit({
    values,
    schema: basicDetailsSchema,
    onValidSubmit: (data) => {
      setBasicDetails(data);
    },
  });

  return (
    <div className="space-y-6"> {/* Consistent vertical spacing */}
      <div className="space-y-2"> {/* Consistent label spacing */}
        <AgeSelect
          value={values.age}
          onChange={(value) => setValue('age', value)}
          error={errors.age?.message}
        />
      </div>
      <div className="space-y-2">
        <IncomeBracketSelect
          value={values.income}
          onChange={(value) => setValue('income', value)}
          error={errors.income?.message}
        />
      </div>
      <div className="space-y-2">
        <OccupationSelect
          value={values.occupation}
          onChange={(value) => setValue('occupation', value)}
          error={errors.occupation?.message}
        />
      </div>
      <div className="space-y-2">
        <CitySelect
          value={values.city}
          onChange={(value) => setValue('city', value)}
          error={errors.city?.message}
        />
      </div>
    </div>
  );
}