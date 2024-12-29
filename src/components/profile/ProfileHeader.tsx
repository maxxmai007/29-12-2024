import React from 'react';
import { Logo } from '../layout/Logo';
import { BackButton } from '../ui/BackButton';

export function ProfileHeader() {
  return (
    <div className="flex flex-col space-y-8"> {/* Reduced space-y from 12 to 8 */}
      {/* Logo and Back Button Row */}
      <div className="flex items-center justify-between">
        <Logo />
        <BackButton />
      </div>

      {/* Header Text - reduced margin-bottom */}
      <div className="text-center">
        <h1 className="text-4xl font-display font-semibold tracking-tight text-white mb-2">
          Discover Your Match
        </h1>
        <p className="text-base text-gold-500/80">
          Let's find your perfect credit card match
        </p>
      </div>
    </div>
  );
}