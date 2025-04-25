import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    bg: '#1a0f2e',
    dark: '#0f0721',
    primary: '#6d28d9',
    secondary: '#4c1d95',
    accent: '#7c3aed',
    text: '#e2e8f0',
    rust: '#f87171',
    python: '#60a5fa',
    react: '#38bdf8',
    node: '#4ade80',
  },
  fonts: {
    primary: "'Inter', sans-serif",
    secondary: "'Press Start 2P', cursive",
  },
  shadows: {
    card: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cardHover: '0 10px 20px rgba(0, 0, 0, 0.3)',
    project: '0 4px 6px rgba(0, 0, 0, 0.2)',
    skill: '0 2px 4px rgba(0, 0, 0, 0.15)',
    achievement: '0 3px 5px rgba(0, 0, 0, 0.25)',
  },
  animations: {
    float: 'float 6s ease-in-out infinite',
    pulseGlow: 'pulseGlow 2s ease-in-out infinite',
    cardFlip: 'cardFlip 0.6s ease-out forwards',
    gradient: 'gradient 15s ease infinite',
    ambient: 'ambient 10s ease infinite',
    scanline: 'scanline 10s linear infinite',
    hover: 'hover 0.3s ease-out forwards',
    slideIn: 'slideIn 0.5s ease-out forwards',
  },
}; 