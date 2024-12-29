import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from '../ui/Button';
import { NavigationRibbon } from '../navigation/NavigationRibbon';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed w-full bg-dark-900/90 backdrop-blur-md z-50 border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Navigation ribbon */}
          <div className="flex-1 flex justify-center">
            <NavigationRibbon />
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/profile')}
              className="whitespace-nowrap"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}