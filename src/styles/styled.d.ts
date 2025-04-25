import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      dark: string;
      primary: string;
      secondary: string;
      accent: string;
      text: string;
      rust: string;
      python: string;
      react: string;
      node: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    shadows: {
      card: string;
      cardHover: string;
      project: string;
      skill: string;
      achievement: string;
    };
    animations: {
      float: string;
      pulseGlow: string;
      cardFlip: string;
      gradient: string;
      ambient: string;
      scanline: string;
      hover: string;
      slideIn: string;
    };
  }
} 