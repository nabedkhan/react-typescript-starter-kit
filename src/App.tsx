import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import RTL from 'components/RTL';
import useSettings from 'hooks/useSettings';
import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'routes';
import { createCustomTheme } from 'theme';

const App: FC = () => {
  const content = useRoutes(routes);
  const { settings } = useSettings();

  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    roundedCorners: settings.roundedCorners,
    responsiveFontSizes: settings.responsiveFontSizes
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RTL>
          <CssBaseline />
          {content}
        </RTL>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
