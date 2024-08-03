import { List } from '@sixui/ui';
import { colorSchemeTokens } from '@sixui/ui/themes/base/colorScheme.stylex';
import stylex from '@stylexjs/stylex';

import type { IContainerProps } from '~/components/utils/Container';
import { NavLink } from '~/components/atoms/NavLink';

export type INavbarProps = IContainerProps;

const styles = stylex.create({
  host: {
    backgroundColor: colorSchemeTokens.surfaceContainerLowest,
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderRightColor: colorSchemeTokens.outlineVariant,
    position: 'fixed',
    top: '3.75rem',
    bottom: 0,
    left: 0,
    width: '16.25rem',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 100,
  },
  inner: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    position: 'relative',
    overflow: 'hidden',
  },
  scroller: {
    overflow: 'scroll',
    scrollbarWidth: 'none',
    width: '100%',
    height: '100%',
  },
  body: {
    paddingTop: '1rem',
    paddingBottom: '6.25rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const Navbar: React.FC<INavbarProps> = (props) => {
  const { sx } = props;

  return (
    <div {...stylex.props(styles.host, sx)}>
      <List sx={styles.list}>
        <NavLink to='/components/anchored'>Anchored</NavLink>
        <NavLink to='/components/button'>Button</NavLink>
      </List>
    </div>
  );
};
