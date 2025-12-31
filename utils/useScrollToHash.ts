import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from './scrollToSection';

/**
 * Custom hook to handle scrolling to hash sections after route changes
 */
export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scrollToSection(location.hash);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);
};
