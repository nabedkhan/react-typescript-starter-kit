import { CssBaseline, ThemeProvider } from '@mui/material';
import RTL from 'components/RTL';
import useSettings from 'hooks/useSettings';
import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { createCustomTheme } from 'theme';
import routes from './routes';

const App: FC = () => {
  const content = useRoutes(routes);
  const { settings } = useSettings();

  const theme = createCustomTheme({
    direction: settings.direction,
    theme: settings.theme,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners
  });

  return (
    <ThemeProvider theme={theme}>
      <RTL>
        <CssBaseline />
        {content}
      </RTL>
    </ThemeProvider>
  );
};

export default App;
