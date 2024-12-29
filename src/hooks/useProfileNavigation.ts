import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { PROFILE_SECTIONS } from '../config/profile';
import { scrollToSection, getNextSection } from '../utils/navigation';

export function useProfileNavigation() {
  const navigate = useNavigate();

  const handleSectionComplete = (sectionId: string) => {
    const nextSection = getNextSection(sectionId, PROFILE_SECTIONS);
    
    if (nextSection) {
      scrollToSection(nextSection.id);
    } else {
      navigate(ROUTES.RECOMMENDATIONS);
    }
  };

  return { handleSectionComplete };
}