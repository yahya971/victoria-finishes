// Helper to get the correct asset path for GitHub Pages
export const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`.replace(/\/+/g, '/');
};
