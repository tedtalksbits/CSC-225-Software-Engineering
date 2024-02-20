import { nativeTheme } from 'electron';

export const toggleTheme = () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'light';
  } else {
    nativeTheme.themeSource = 'dark';
  }
  return nativeTheme.shouldUseDarkColors;
};

export const setTheme = (theme: 'light' | 'dark') => {
  nativeTheme.themeSource = theme;
};

export const getTheme = () => {
  return nativeTheme.shouldUseDarkColors;
};

export const setSystemTheme = () => {
  nativeTheme.themeSource = 'system';
};
