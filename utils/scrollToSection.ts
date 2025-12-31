/**
 * Scrolls to a section on the page, handling both hash navigation and routing
 */
export const scrollToSection = (hash: string) => {
  if (!hash || hash === '#') return;

  // Remove the # from hash
  const id = hash.replace('#', '');

  // Small delay to ensure DOM is ready
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};
