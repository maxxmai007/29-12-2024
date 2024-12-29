import React from 'react';
import { useNavigate } from 'react-router-dom';
import { smoothScroll } from '../../../utils/scroll';
import { GoldButton } from '../../ui/GoldButton';

export function HeroButtons() {
  const navigate = useNavigate();

  const handleLearnMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    smoothScroll('what-we-do');
  };

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
      <GoldButton onClick={() => navigate('/profile')}>
        New Credit Card User
      </GoldButton>

      <GoldButton 
        onClick={handleLearnMore}
        className="text-[0.95rem]" // Slightly reduced font size
      >
        Existing Credit Card User
      </GoldButton>
    </div>
  );
}