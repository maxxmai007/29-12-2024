import React from 'react';
import { Select } from '../../ui/Select';
import { occupationTypes } from './constants';

interface OccupationSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function OccupationSelect({ value, onChange, error }: OccupationSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gold-500/80">
        Occupation
      </label>
      <Select
        value={value}
        onChange={onChange}
        error={error}
        options={occupationTypes}
        placeholder="Select your occupation"
      />
    </div>
  );
}