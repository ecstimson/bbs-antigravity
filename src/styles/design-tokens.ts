export const colors = {
  // Brand Colors (Derived from provided palette)
  primary: {
    DEFAULT: '#4EA5E6', // Blue Jeans
    foreground: '#FFFFFF',
  },
  secondary: {
    DEFAULT: '#F2B641', // Maximum Yellow Red
    foreground: '#0D1317',
  },
  accent: {
    DEFAULT: '#3B82F6', // Royal Blue Light
    foreground: '#FFFFFF',
  },
  background: {
    light: '#F9FAFB', // Ghost White
    dark: '#0D1317', // Rich Black
  },
  text: {
    light: '#0D1317', // Rich Black
    dark: '#F9FAFB', // Ghost White
  }
}

export const spacing = {
  container: '1280px',
  section: {
    sm: '4rem',
    md: '6rem',
    lg: '8rem',
  },
}

export const typography = {
  fontFamily: {
    sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
    heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
    mono: ['var(--font-mono)', 'monospace'],
  },
}

export const borderRadius = {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)',
}
