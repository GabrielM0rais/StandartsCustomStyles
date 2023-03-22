import {DefaultTheme as DefaultThemeProps} from 'styled-components';

const DefaultConfigs = {
  colors: {
    neutrals: {
      neutral_black_lgt: 'rgb(0, 0, 0)',
      neutral_dark: 'rgb(142, 156, 182)',
      neutral_darker: 'rgb(40, 48, 72)',
      neutral_mid: 'rgb(210, 216, 227)',
      neutral_mid_light: 'rgb(238, 241, 244)',
      neutral_light: 'rgb(241, 244, 249)',
      neutral_lighter: 'rgb(243, 246, 250)',
      neutral_white: 'rgb(255, 255, 255)',
    },

    suport: {
      status_success: 'rgb(59, 154, 69)',
      status_danger: 'rgb(235, 0, 27)',
      status_warning: 'rgb(255, 182, 40)',
      status_info: 'rgb(52, 171, 197)',

      status_success_lgt: 'rgb(210, 216, 227)',
      status_danger_lgt: 'rgb(238, 241, 245)',
      status_warning_lgt: 'rgb(241, 244, 249)',
      status_info_lgt: 'rgb(243, 246, 250)',

      transparent: 'transparent',
    },
  },
  typography: {
    weight: {
      light: 'Poppins-Light',
      regular: 'Poppins-Regular',
      medium: 'Poppins-Medium',
      semiBold: 'Poppins-SemiBold',
      bold: 'Poppins-Bold',
      extraBold: 'Poppins-ExtraBold',
    },
    sizes: {
      tiny: 12,
      small: 14,
      regular: 16,
      h6: 18,
      h5: 22,
      h4: 24,
      h3: 28,
      h2: 36,
      h1: 48,
    },
  },
  spacing: {
    tiny: 4,
    small: 8,
    base: 16,
    md: 24,
    lg: 32,
    xlg: 48,
  },
  borders: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
  },
};

export const DarkTheme: DefaultThemeProps = {
  ...DefaultConfigs,
  themeColors: {
    primary: '',
    primaryText: '',
    secondaryText: '',
    background: '',
    secondaryBackground: '',
    border: '',
  },
};

export const LightTheme: DefaultThemeProps = {
  ...DefaultConfigs,
  themeColors: {
    primary: '',
    primaryText: '',
    secondaryText: '',
    background: '',
    secondaryBackground: '',
    border: '',
  },
};
