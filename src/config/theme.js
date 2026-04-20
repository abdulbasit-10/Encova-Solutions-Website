// Universal theme configuration
// Change these values to update the entire website's color scheme

export const theme = {
  colors: {
    primary: {
      main: '#1f2937', // Dark Grey
      light: '#374151',
      dark: '#111827',
      darker: '#0a0e14',
    },
    secondary: {
      main: '#ffffff', // White
      light: '#f9fafb',
      grey: '#6b7280',
      darkGrey: '#4b5563',
    },
    accent: {
      main: '#3b82f6', // Blue for CTAs
      hover: '#2563eb',
      light: '#60a5fa',
    },
    background: {
      primary: '#ffffff',
      secondary: '#111827',
      card: '#374151',
      light: '#f9fafb',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e5e7eb',
      muted: '#9ca3af',
      dark: '#1f2937',
    },
    border: {
      light: '#374151',
      medium: '#4b5563',
    },
  },
  spacing: {
    section: '5rem', // py-20
    container: '7rem', // max-w-7xl
  },
  borderRadius: {
    default: '0.5rem',
    large: '1rem',
  },
  transition: {
    default: 'all 0.3s ease-in-out',
  },
};

export default theme;

