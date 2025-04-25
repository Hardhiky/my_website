import { DefaultTheme, keyframes } from 'styled-components';

// Keyframe animations
export const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const pulseGlow = keyframes`
  0% { filter: brightness(100%) drop-shadow(0 0 5px rgba(255, 0, 0, 0.7)); }
  50% { filter: brightness(120%) drop-shadow(0 0 15px rgba(255, 0, 0, 0.9)); }
  100% { filter: brightness(100%) drop-shadow(0 0 5px rgba(255, 0, 0, 0.7)); }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideIn = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Default theme
export const theme: DefaultTheme = {
  colors: {
    bg: '#0a0a0a',
    dark: '#121212',
    primary: '#ff3e3e',
    secondary: '#4a4a4a',
    accent: '#8b00ff',
    text: '#ffffff',
    textSecondary: '#b3b3b3',
    neonRed: '#ff0000',
    neonBlue: '#00f3ff',
    neonPurple: '#8b00ff',
    cardBg: 'rgba(18, 18, 18, 0.8)',
    cardBgHover: 'rgba(24, 24, 24, 0.9)',
  },
  fonts: {
    primary: '"Press Start 2P", cursive',
    secondary: '"Roboto Mono", monospace',
    code: '"Fira Code", monospace',
  },
  shadows: {
    card: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cardHover: '0 10px 20px rgba(0, 0, 0, 0.2)',
    text: '0 0 10px rgba(255, 255, 255, 0.5)',
    neonRed: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000',
    neonBlue: '0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff',
    neonPurple: '0 0 10px #8b00ff, 0 0 20px #8b00ff, 0 0 30px #8b00ff',
  },
  animations: {
    float: `${float} 3s ease-in-out infinite`,
    pulseGlow: `${pulseGlow} 2s ease-in-out infinite`,
    fadeIn: `${fadeIn} 0.5s ease-in`,
    slideIn: `${slideIn} 0.5s ease-out`,
    rotate: `${rotate} 2s linear infinite`,
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
}; 