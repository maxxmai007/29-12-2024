import React from 'react';
import { Select } from '../../ui/Select';
import { incomeBrackets } from './constants';

interface IncomeBracketSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function IncomeBracketSelect({ value, onChange, error }: IncomeBracketSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gold-500/80">
        Annual Income
      </label>
      <Select
        value={value}
        onChange={onChange}
        error={error}
        options={incomeBrackets}
        placeholder="Select your annual income"
      />
    </div>
  );
}