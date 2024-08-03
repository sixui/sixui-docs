import stylex from '@stylexjs/stylex';
import { colorSchemeTokens } from '@sixui/ui/themes/base/colorScheme.stylex';
import { shapeTokens } from '@sixui/ui/themes/base/shape.stylex';

export type IPlaygroundStylesKey = keyof typeof playgroundStyles;
export const playgroundStyles = stylex.create({
  host: {
    display: 'grid',
    gridTemplateColumns: '1fr 240px',
    gridAutoRows: '1fr',
    gap: 8,
    borderRadius: shapeTokens.corner$sm,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorSchemeTokens.outlineVariant,
  },
  componentPanel: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    borderTopLeftRadius: shapeTokens.corner$sm,
    borderBottomLeftRadius: shapeTokens.corner$sm,
  },
  componentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flexGrow: 1,
    backgroundColor: colorSchemeTokens.surfaceContainerLowest,
    backgroundImage: `radial-gradient(${colorSchemeTokens.outlineVariant} 0.5px, transparent 0)`,
    backgroundSize: '10px 10px',
  },
  optionsPanel: {
    padding: 16,
    backgroundColor: colorSchemeTokens.surfaceContainerLow,
    borderTopRightRadius: shapeTokens.corner$sm,
    borderBottomRightRadius: shapeTokens.corner$sm,
  },
});
