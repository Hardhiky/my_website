import { css, keyframes } from 'styled-components';

// Keyframe animations
const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const ambient = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.6;
  }
`;

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const cardFlip = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const hover = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

// Default theme
export const theme = {
  colors: {
    bg: '#0a0a0a',
    dark: '#1a1022',
    primary: '#FF1744',
    secondary: '#8B2F9B',
    accent: '#00E5FF',
    text: '#ffffff',
    textSecondary: '#b3b3b3',
    neonRed: '#FF1744',
    neonBlue: '#00E5FF',
    neonPurple: '#8B2F9B',
    cardBg: 'rgba(20, 0, 20, 0.8)',
    cardBgHover: 'rgba(30, 0, 30, 0.9)',
  },
  fonts: {
    primary: "'JetBrains Mono', monospace",
    secondary: "'Press Start 2P', cursive",
    code: "'Fira Code', monospace",
  },
  shadows: {
    card: '0 0 20px rgba(255, 70, 85, 0.2)',
    cardHover: '0 0 30px rgba(255, 70, 85, 0.4)',
    text: '0 0 10px rgba(255, 255, 255, 0.5)',
    neonRed: '0 0 10px #FF1744, 0 0 20px #FF1744, 0 0 30px #FF1744',
    neonBlue: '0 0 10px #00E5FF, 0 0 20px #00E5FF, 0 0 30px #00E5FF',
    neonPurple: '0 0 10px #8B2F9B, 0 0 20px #8B2F9B, 0 0 30px #8B2F9B',
  },
  animations: {
    gradient: css`${gradient} 15s ease infinite`,
    ambient: css`${ambient} 10s ease infinite`,
    scanline: css`${scanline} 2s linear infinite`,
    cardFlip: css`${cardFlip} 1s ease-in-out`,
    hover: css`${hover} 2s ease-in-out infinite`,
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
}; 