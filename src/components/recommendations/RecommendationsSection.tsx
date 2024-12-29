import React from 'react';
import { RecommendationsButton } from './RecommendationsButton';

export function RecommendationsSection() {
  return (
    <div className="mt-12 max-w-[1440px] mx-auto px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <RecommendationsButton />
        </div>
      </div>
    </div>
  );
}