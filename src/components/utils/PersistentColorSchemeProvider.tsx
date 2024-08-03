import { ColorSchemeProvider } from '@sixui/ui';
import { Helmet } from 'react-helmet-async';
import { useTernaryDarkMode } from 'usehooks-ts';
import theme from '@sixui/ui/themes/base/theme.json';

export type IPersistentColorSchemeProviderProps = {
  children: React.ReactNode;
};

export const PersistentColorSchemeProvider: React.FC<
  IPersistentColorSchemeProviderProps
> = (props) => {
  const { children } = props;
  const { isDarkMode } = useTernaryDarkMode();

  // TODO: find a more elgant way to get the correct background color role
  // (surfaceContainerLow) from the theme.
  const backgroundColor = isDarkMode
    ? theme.schemes.dark.surfaceContainerLowest
    : theme.schemes.light.surfaceContainerLowest;

  return (
    <ColorSchemeProvider variant={isDarkMode ? 'dark' : 'light'}>
      <Helmet>
        <style type='text/css'>{`
            html {
              background-color: ${backgroundColor};
            }
          `}</style>
      </Helmet>
      {children}
    </ColorSchemeProvider>
  );
};
