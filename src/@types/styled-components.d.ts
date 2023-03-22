// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      neutrals: {
        neutral_black_lgt: string;
        neutral_dark: string;
        neutral_darker: string;
        neutral_mid: string;
        neutral_mid_light: string;
        neutral_light: string;
        neutral_lighter: string;
        neutral_white: string;
      };

      suport: {
        status_success: string;
        status_danger: string;
        status_warning: string;
        status_info: string;

        status_success_lgt: string;
        status_danger_lgt: string;
        status_warning_lgt: string;
        status_info_lgt: string;

        transparent: string;
      };
    };
    themeColors: {
      // for custom theme
      primary: string;
      primaryText: string;
      secondaryText: string;
      background: string;
      secondaryBackground: string;
      border: string;
    };
    typography: {
      weight: {
        light: string;
        regular: string;
        medium: string;
        semiBold: string;
        bold: string;
        extraBold: string;
      };
      sizes: {
        tiny: number;
        small: number;
        regular: number;
        h6: number;
        h5: number;
        h4: number;
        h3: number;
        h2: number;
        h1: number;
      };
    };
    spacing: {
      tiny: number;
      small: number;
      base: number;
      md: number;
      lg: number;
      xlg: number;
    };
  }
}
