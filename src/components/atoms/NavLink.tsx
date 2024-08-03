import { ListItem, type IListItemProps } from '@sixui/ui';
import { listItemTokens } from '@sixui/ui/components/ListItem/ListItem.stylex';
import stylex from '@stylexjs/stylex';

import { createLink } from '~/helpers/createLink';

export const ListItemLink = createLink<IListItemProps>(ListItem);

const styles = stylex.create({
  host: {
    [listItemTokens.containerMinHeight$md]: '40px',
  },
});

export const NavLink: typeof ListItemLink = (props) => (
  <ListItemLink {...props} sx={styles.host} activeProps={{ selected: true }} />
);
