import { createTheme, responsiveFontSizes } from '@mui/material';
import merge from 'merge';
import themeSettingsTypes from '../@types/themeSettings';
import { THEMES } from '../constants';
import palette from './colors';
import components from './components';
import themesOptions from './themeOptions';
import typography from './typography';

const baseOptions = {
  direction: 'ltr',
  components: components,
  typography: typography,
  palette: palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
};

export const createCustomTheme = (config: themeSettingsTypes) => {
  let themeOptions = themesOptions[config.theme];

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOptions = themesOptions[THEMES.LIGHT];
  }

  let theme = createTheme(
    merge(
      {},
      baseOptions,
      themeOptions,
      { ...(config.roundedCorners && { shape: { borderRadius: 16 } }) },
      { direction: config.direction }
    )
  );

  console.log(theme);

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
