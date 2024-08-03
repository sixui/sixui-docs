import { colorSchemeTokens } from '@sixui/ui/themes/base/colorScheme.stylex';
import stylex from '@stylexjs/stylex';

import type { IContainerProps } from '~/components/utils/Container';

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
});

export const Navbar: React.FC<INavbarProps> = (props) => {
  const { sx } = props;

  return <div {...stylex.props(styles.host, sx)}>Navbar</div>;
};
