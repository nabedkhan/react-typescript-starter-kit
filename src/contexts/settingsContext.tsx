import { createContext, ReactNode, useEffect, useState } from 'react';
import themeSettingsTypes from '../@types/themeSettings';
import { THEMES } from '../constants';

const initialSettings: themeSettingsTypes = {
  direction: 'ltr',
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
  roundedCorners: true
};

const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem('settings');
    if (storedData) {
      settings = JSON.parse(storedData);
    } else {
      settings = {
        direction: 'ltr',
        responsiveFontSizes: true,
        roundedCorners: true,
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches
          ? THEMES.DARK
          : THEMES.LIGHT
      };
    }
  } catch (error) {
    console.log(error);
  }

  return settings;
};

export const storeSettings = (settings: themeSettingsTypes) => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: (arg: themeSettingsTypes) => {}
});

// component props type
type SettingsProviderProps = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    const restoredSettings = restoreSettings();
    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = (updateSettings: themeSettingsTypes) => {
    setSettings(updateSettings);
    storeSettings(updateSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
