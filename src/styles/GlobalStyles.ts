import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Press+Start+2P&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 50% 50%, rgba(255, 70, 85, 0.15) 0%, transparent 60%),
        radial-gradient(circle at 100% 0%, rgba(139, 47, 155, 0.1) 0%, transparent 50%),
        linear-gradient(45deg, ${theme.colors.background} 0%, #1a1022 100%);
      background-size: 200% 200%;
      animation: gradient 15s ease infinite;
      pointer-events: none;
      z-index: -2;
    }

    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 20%, rgba(255, 70, 85, 0.05) 0%, transparent 30%),
        radial-gradient(circle at 80% 80%, rgba(139, 47, 155, 0.05) 0%, transparent 30%);
      animation: ambient 10s ease infinite;
      pointer-events: none;
      z-index: -1;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes ambient {
    0%, 100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.6;
    }
  }

  .crt-effect {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 10;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.03) 50%,
      rgba(0, 0, 0, 0.1) 50%
    );
    background-size: 100% 4px;
    opacity: 0.15;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.secondary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }
`;

export { theme }; 