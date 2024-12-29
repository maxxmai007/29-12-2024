import React from 'react';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ScrollProgressBar } from '../components/profile/ScrollProgressBar';
import { ProfileSection } from '../components/profile/ProfileSection';
import { BasicDetails } from '../components/profile/BasicDetails';
import { SpendingHabits } from '../components/profile/SpendingHabits';
import { Goals } from '../components/profile/Goals';
import { RecommendationsSection } from '../components/recommendations/RecommendationsSection';
import { useProfileStore } from '../store/useProfileStore';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useProfileNavigation } from '../hooks/useProfileNavigation';
import { PROFILE_SECTIONS } from '../config/profile';

export function ProfileBuilder() {
  const { basicDetails, spendingHabits, goals } = useProfileStore();
  const { handleSectionComplete } = useProfileNavigation();
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
      
      <div className="max-w-[1440px] mx-auto px-4 py-6">
        <ProfileHeader />

        {/* Main sections grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <ProfileSection
              id="basic"
              title="Basic Details"
              isActive={activeSection === 'basic' || isSectionComplete('basic')}
            >
              <BasicDetails onNext={() => handleSectionComplete('basic')} />
            </ProfileSection>
          </div>

          <div className="lg:col-span-4">
            <ProfileSection
              id="spending"
              title="Monthly Spends"
              isActive={activeSection === 'spending' || isSectionComplete('spending')}
            >
              <SpendingHabits onNext={() => handleSectionComplete('spending')} />
            </ProfileSection>
          </div>

          <div className="lg:col-span-4">
            <ProfileSection
              id="goals"
              title="Reward Preferences"
              isActive={activeSection === 'goals' || isSectionComplete('goals')}
            >
              <Goals onNext={() => handleSectionComplete('goals')} />
            </ProfileSection>
          </div>
        </div>

        {/* Separate recommendations section */}
        <RecommendationsSection />
      </div>
    </div>
  );
}