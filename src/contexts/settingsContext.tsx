import useLocalStorage from 'hooks/useLocalStorage';
import { createContext, ReactNode } from 'react';
import themeSettingsTypes from '../@types/themeSettings';
import { THEMES } from '../constants';

const initialSettings: themeSettingsTypes = {
  direction: 'ltr',
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
  roundedCorners: false
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
  const { data: settings, storeData: setStoreSettings } = useLocalStorage(
    'settings',
    initialSettings
  );

  const saveSettings = (updateSettings: themeSettingsTypes) => {
    setStoreSettings(updateSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
