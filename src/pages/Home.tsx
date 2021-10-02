import { Card, Container, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { SettingsContext } from 'contexts/settingsContext';
import React, { useContext } from 'react';

const Home = () => {
  const { settings, saveSettings } = useContext(SettingsContext);

  const handleChangeDirection = (event: React.ChangeEvent<HTMLInputElement>) => {
    saveSettings({ ...settings, direction: event.target.value });
  };

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    saveSettings({ ...settings, theme: event.target.value });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Card sx={{ padding: 4 }}>
        <Typography variant="h1" color="primary.dark">
          React TypeScript Starter Kit
        </Typography>

        <Box my={3}>
          <Typography variant="h4">Change Direction</Typography>
          <RadioGroup value={settings.direction} onChange={handleChangeDirection} row>
            <FormControlLabel value="ltr" control={<Radio />} label="LTR Direction" />
            <FormControlLabel value="rtl" control={<Radio />} label="RTL Direction" />
          </RadioGroup>
        </Box>

        <Box my={3}>
          <Typography variant="h4">Change Theme</Typography>
          <RadioGroup value={settings.theme} onChange={handleChangeTheme} row>
            <FormControlLabel value="light" control={<Radio />} label="Light Theme" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark Theme" />
          </RadioGroup>
        </Box>
      </Card>
    </Container>
  );
};

export default Home;
