import React from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from '../layout/Logo';
import { BackButton } from '../ui/BackButton';
import { PROFILE_STEPS } from '../../config/profile';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export function ProfileLayout({ children }: ProfileLayoutProps) {
  const location = useLocation();
  const currentStep = PROFILE_STEPS.findIndex(step => step.path === location.pathname) + 1;

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <BackButton className="mb-8" />
        
        <div className="text-center mb-12">
          <Logo className="mx-auto" />
          <div className="mt-8 flex justify-between items-center">
            {PROFILE_STEPS.map((step, index) => (
              <React.Fragment key={step.path}>
                <div className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${index + 1 <= currentStep ? 'bg-gold-500 text-dark-900' : 'bg-dark-800 text-gold-500/60'}
                  `}>
                    {index + 1}
                  </div>
                  <span className="ml-2 text-sm text-gold-500/80">{step.label}</span>
                </div>
                {index < PROFILE_STEPS.length - 1 && (
                  <div className={`
                    flex-1 h-px mx-4
                    ${index + 2 <= currentStep ? 'bg-gold-500' : 'bg-gold-500/20'}
                  `} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}