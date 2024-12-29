import React from 'react';
import { MotionDiv } from '../../ui/motion';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroButtons } from './HeroButtons';

export function HeroContent() {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-start pt-20"
    >
      <HeroTitle />
      <HeroDescription />
      <HeroButtons />
    </MotionDiv>
  );
}