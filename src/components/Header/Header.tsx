import { colorSchemeTokens } from '@sixui/ui/themes/base/colorScheme.stylex';
import stylex from '@stylexjs/stylex';

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
});

export const Header: React.FC<IHeaderProps> = (props) => {
  const { sx } = props;

  return <div {...stylex.props(styles.host, sx)}>Header</div>;
};
