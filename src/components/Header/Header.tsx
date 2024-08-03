import { faMoon, faSunBright } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@sixui/ui';
import { colorSchemeTokens } from '@sixui/ui/themes/base/colorScheme.stylex';
import stylex from '@stylexjs/stylex';
import { useTernaryDarkMode } from 'usehooks-ts';

import type { IContainerProps } from '~/components/utils/Container';

export type IHeaderProps = IContainerProps;

const styles = stylex.create({
  host: {
    backgroundColor: colorSchemeTokens.surfaceContainerLowest,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: colorSchemeTokens.outlineVariant,
    height: '3.75rem',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 101,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.625rem',
  },
});

export const Header: React.FC<IHeaderProps> = (props) => {
  const { sx } = props;
  const { isDarkMode, setTernaryDarkMode } = useTernaryDarkMode();

  return (
    <div {...stylex.props(styles.host, sx)}>
      <div {...stylex.props(styles.logo)}>Logo</div>
      <div {...stylex.props(styles.buttons)}>
        <IconButton
          sx={sx}
          variant='outlined'
          icon={<FontAwesomeIcon icon={faMoon} />}
          selectedIcon={<FontAwesomeIcon icon={faSunBright} />}
          selected={isDarkMode}
          onClick={() => setTernaryDarkMode(isDarkMode ? 'light' : 'dark')}
        />
      </div>
    </div>
  );
};
