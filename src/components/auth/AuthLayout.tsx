import React from 'react';
import { Logo } from '../layout/Logo';
import { BackButton } from '../ui/BackButton';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-dark-900 flex">
      <div className="flex-1 flex flex-col px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-md mx-auto">
          <BackButton className="mb-8" />
          
          <div className="text-center">
            <Logo className="mx-auto" />
            <h2 className="mt-6 text-3xl font-display tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-2 text-sm text-gold-500/80">
              {subtitle}
            </p>
          </div>

          <div className="mt-8">
            <div className="py-8 px-4 sm:px-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}