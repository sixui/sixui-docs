import stylex from '@stylexjs/stylex';

import type { IContainerProps } from '~/components/utils/Container';

export type ITemplateProps = IContainerProps & {
  children: React.ReactNode;
};

const styles = stylex.create({
  host: {},
});

export const Template: React.FC<ITemplateProps> = (props) => {
  const { sx, children } = props;

  return <div {...stylex.props(styles.host, sx)}>{children}</div>;
};
