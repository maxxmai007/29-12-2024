import React from 'react';
import { ComboBox } from '../../ui/ComboBox';
import { indianCities } from './constants';

interface CitySelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function CitySelect({ value, onChange, error }: CitySelectProps) {
  return (
    <ComboBox
      label="City"
      value={value}
      onChange={onChange}
      options={indianCities}
      placeholder="Search for your city"
      error={error}
    />
  );
}