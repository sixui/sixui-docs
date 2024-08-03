import { Typography } from '@sixui/ui';
import stylex from '@stylexjs/stylex';

import type { IContainerProps } from '~/components/utils/Container';

export type IPageProps = IContainerProps & {
  children: React.ReactNode;
};

const styles = stylex.create({
  host: {
    position: 'relative',
    paddingLeft: '4rem',
    paddingRight: '4rem',
  },
  inner: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    paddingTop: '0.625rem',
  },
  main: {
    width: 'calc(100% - 16rem)',
    maxWidth: '51.25rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tableOfContents: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '16.25rem',
  },
  title: {
    position: 'relative',
    marginTop: '2rem',
    marginBottom: '1rem',
    wordBreak: 'break-word',
  },
});

export const Page: React.FC<IPageProps> = (props) => {
  const { sx, children } = props;

  return (
    <div {...stylex.props(styles.host, sx)}>
      <div {...stylex.props(styles.inner)}>
        <div {...stylex.props(styles.main)}>
          <Typography as='h2' sx={styles.title} variant='headline'>
            Anchored
          </Typography>
          <p>Description</p>

          <Typography as='h2' sx={styles.title} variant='headline'>
            Anchored
          </Typography>
          <p>Description</p>

          {children}
        </div>
        <div {...stylex.props(styles.tableOfContents)}>tableOfContents</div>
      </div>
    </div>
  );
};
