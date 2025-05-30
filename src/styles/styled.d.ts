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
      textSecondary: string;
      neonRed: string;
      neonBlue: string;
      neonPurple: string;
      cardBg: string;
      cardBgHover: string;
    };
    fonts: {
      primary: string;
      secondary: string;
      code: string;
    };
    shadows: {
      card: string;
      cardHover: string;
      text: string;
      neonRed: string;
      neonBlue: string;
      neonPurple: string;
    };
    animations: {
      gradient: any;
      ambient: any;
      scanline: any;
      cardFlip: any;
      hover: any;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
  }
} 