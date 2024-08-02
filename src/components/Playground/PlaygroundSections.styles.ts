import stylex from '@stylexjs/stylex';
import { buttonTokens } from '@sixui/ui/components/Button/Button.stylex';
import { listItemTokens } from '@sixui/ui/components/ListItem/ListItem.stylex';

export const playgroundOptionDisclosureButtonStyles = stylex.create({
  button: {
    [listItemTokens.containerMinHeight$md]: buttonTokens.containerHeight,
  },
});
