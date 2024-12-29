import React from 'react';
import { Select } from '../../ui/Select';
import { ageGroups } from './constants';

interface AgeSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function AgeSelect({ value, onChange, error }: AgeSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gold-500/80">
        Age
      </label>
      <Select
        value={value}
        onChange={onChange}
        error={error}
        options={ageGroups}
        placeholder="Select your age group"
      />
    </div>
  );
}