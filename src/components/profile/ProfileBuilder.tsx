import React from 'react';
import { ProfileHeader } from './ProfileHeader';
import { ScrollProgressBar } from './ScrollProgressBar';
import { ProfileSection } from './ProfileSection';
import { BasicDetails } from './BasicDetails';
import { SpendingHabits } from './SpendingHabits';
import { Goals } from './Goals';
import { useProfileStore } from '../../store/useProfileStore';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { PROFILE_SECTIONS } from '../../config/profile';

export function ProfileBuilder() {
  const { basicDetails, spendingHabits, goals } = useProfileStore();
  const activeSection = useScrollSpy(PROFILE_SECTIONS.map(s => s.id));

  const isSectionComplete = (section: string) => {
    switch (section) {
      case 'basic':
        return !!basicDetails;
      case 'spending':
        return !!spendingHabits;
      case 'goals':
        return goals.length > 0;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <ScrollProgressBar />
      
      <div className="max-w-[1440px] mx-auto px-8 pt-6 pb-12">
        <ProfileHeader />

        {/* Reduced margin-top for closer spacing */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROFILE_SECTIONS.map((section) => (
            <div key={section.id} className="flex">
              <ProfileSection
                id={section.id}
                title={section.title}
                isActive={activeSection === section.id || isSectionComplete(section.id)}
              >
                {section.id === 'basic' && <BasicDetails />}
                {section.id === 'spending' && <SpendingHabits />}
                {section.id === 'goals' && <Goals />}
              </ProfileSection>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}