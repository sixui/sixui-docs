import { Typography } from '@sixui/ui';
import { colorSchemeTokens } from '@sixui/ui/themes/base/colorScheme.stylex';
import stylex from '@stylexjs/stylex';

import type { IContainerProps } from '~/components/utils/Container';

export type IPageHeaderProps = IContainerProps;

const styles = stylex.create({
  host: {
    position: 'relative',
    backgroundColor: colorSchemeTokens.surfaceContainerLow,
    paddingLeft: '4rem',
    paddingRight: '4rem',
  },
  inner: {
    paddingBottom: '1.5rem',
    paddingTop: '2rem',
    maxWidth: '67.625rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    marginBottom: '0.3125rem',
  },
  description: {
    maxWidth: '28.125rem',
    color: colorSchemeTokens.onSurfaceVariant,
    marginBottom: '2rem',
  },
});

export const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  const { sx } = props;

  return (
    <div {...stylex.props(styles.host, sx)}>
      <div {...stylex.props(styles.inner)}>
        <Typography as='h1' sx={styles.title} variant='headline' size='lg'>
          Anchored
        </Typography>
        <Typography as='p' sx={styles.description} variant='body' size='lg'>
          Description
        </Typography>
      </div>
    </div>
  );
};
