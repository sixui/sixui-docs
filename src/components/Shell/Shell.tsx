import { colorSchemeTokens } from '@sixui/ui/themes/base/colorScheme.stylex';
import stylex from '@stylexjs/stylex';

import type { IContainerProps } from '~/components/utils/Container';

export type IShellProps = IContainerProps & {
  children: React.ReactNode;
};

const styles = stylex.create({
  host: {
    backgroundColor: colorSchemeTokens.surfaceContainerLowest,
    paddingTop: '3.75rem',
    paddingLeft: '16.25rem',
  },
});

export const Shell: React.FC<IShellProps> = (props) => {
  const { sx, children } = props;

  return <div {...stylex.props(styles.host, sx)}>{children}</div>;
};
