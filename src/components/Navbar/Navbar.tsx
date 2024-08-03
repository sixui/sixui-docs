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
      <div {...stylex.props(styles.inner)}>
        <div {...stylex.props(styles.scroller)}>
          <List sx={styles.list}>
            <NavLink to='/components/anchored'>Anchored</NavLink>
            <NavLink
              //to='/components/avatar'
              disabled
            >
              Avatar
            </NavLink>
            <NavLink
              //to='/components/badge'
              disabled
            >
              Badge
            </NavLink>
            <NavLink
              //to='/components/breadcrumbs'
              disabled
            >
              Breadcrumbs
            </NavLink>
            <NavLink to='/components/button'>Button</NavLink>
            <NavLink
              //to='/components/button-base'
              disabled
            >
              Button Base
            </NavLink>
            <NavLink
              //to='/components/card'
              disabled
            >
              Card
            </NavLink>
            <NavLink
              //to='/components/checkbox'
              disabled
            >
              Checkbox
            </NavLink>
            <NavLink
              //to='/components/chip'
              disabled
            >
              Chip
            </NavLink>
            <NavLink
              //to='/components/circular-progress-indicator'
              disabled
            >
              Circular Progress Indicator
            </NavLink>
            <NavLink
              //to='/components/color-button'
              disabled
            >
              Color Button
            </NavLink>
            <NavLink
              //to='/components/color-input-field'
              disabled
            >
              Color Input Field
            </NavLink>
            <NavLink
              //to='/components/color-picker-content'
              disabled
            >
              Color Picker Content
            </NavLink>
            <NavLink
              //to='/components/color-scheme'
              disabled
            >
              Color Scheme
            </NavLink>
            <NavLink
              //to='/components/color-tag'
              disabled
            >
              Color Tag
            </NavLink>
            <NavLink
              //to='/components/component-showcase'
              disabled
            >
              Component Showcase
            </NavLink>
            <NavLink
              //to='/components/copyable-text'
              disabled
            >
              Copyable Text
            </NavLink>
            <NavLink
              //to='/components/dialog'
              disabled
            >
              Dialog
            </NavLink>
            <NavLink
              //to='/components/dialog-content'
              disabled
            >
              Dialog Content
            </NavLink>
            <NavLink
              //to='/components/disclosure'
              disabled
            >
              Disclosure
            </NavLink>
            <NavLink
              //to='/components/disclosure-button'
              disabled
            >
              Disclosure Button
            </NavLink>
            <NavLink
              //to='/components/divider'
              disabled
            >
              Divider
            </NavLink>
            <NavLink
              //to='/components/elevation'
              disabled
            >
              Elevation
            </NavLink>
            <NavLink
              //to='/components/expandable'
              disabled
            >
              Expandable
            </NavLink>
            <NavLink
              //to='/components/fab'
              disabled
            >
              FAB
            </NavLink>
            <NavLink
              //to='/components/field'
              disabled
            >
              Field
            </NavLink>
            <NavLink
              //to='/components/field-base'
              disabled
            >
              Field Base
            </NavLink>
            <NavLink
              //to='/components/filterable-list'
              disabled
            >
              Filterable List
            </NavLink>
            <NavLink
              //to='/components/filterable-list-base'
              disabled
            >
              Filterable List Base
            </NavLink>
            <NavLink
              //to='/components/fluid-button'
              disabled
            >
              Fluid Button
            </NavLink>
            <NavLink
              //to='/components/focus-ring'
              disabled
            >
              Focus Ring
            </NavLink>
            <NavLink
              //to='/components/hct-color-picker-content'
              disabled
            >
              HCT Color Picker Content
            </NavLink>
            <NavLink
              //to='/components/hsl-color-picker-content'
              disabled
            >
              HSL Color Picker Content
            </NavLink>
            <NavLink
              //to='/components/html-select'
              disabled
            >
              HTML Select
            </NavLink>
            <NavLink
              //to='/components/icon-button'
              disabled
            >
              Icon Button
            </NavLink>
            <NavLink
              // to='/components/indeterminate-circular-progress-indicator'
              disabled
            >
              Indeterminate Circular Progress Indicator
            </NavLink>
            <NavLink
              //to='/components/item'
              disabled
            >
              Item
            </NavLink>
            <NavLink
              //to='/components/labeled'
              disabled
            >
              Labeled
            </NavLink>
            <NavLink
              //to='/components/list'
              disabled
            >
              List
            </NavLink>
            <NavLink
              //to='/components/list-item'
              disabled
            >
              List Item
            </NavLink>
            <NavLink
              //to='/components/menu'
              disabled
            >
              Menu
            </NavLink>
            <NavLink
              //to='/components/menu-list'
              disabled
            >
              Menu List
            </NavLink>
            <NavLink
              //to='/components/multi-select'
              disabled
            >
              Multi Select
            </NavLink>
            <NavLink
              //to='/components/multi-select-base'
              disabled
            >
              Multi Select Base
            </NavLink>
            <NavLink
              //to='/components/option-card'
              disabled
            >
              Option Card
            </NavLink>
            <NavLink
              //to='/components/paper'
              disabled
            >
              Paper
            </NavLink>
            <NavLink
              //to='/components/placeholder'
              disabled
            >
              Placeholder
            </NavLink>
            <NavLink
              //to='/components/plain-tooltip'
              disabled
            >
              Plain Tooltip
            </NavLink>
            <NavLink
              //to='/components/plain-tooltip-content'
              disabled
            >
              Plain Tooltip Content
            </NavLink>
            <NavLink
              //to='/components/popover-base'
              disabled
            >
              Popover Base
            </NavLink>
            <NavLink
              //to='/components/radio-group'
              disabled
            >
              Radio Group
            </NavLink>
            <NavLink
              //to='/components/rich-tooltip'
              disabled
            >
              Rich Tooltip
            </NavLink>
            <NavLink
              //to='/components/rich-tooltip-content'
              disabled
            >
              Rich Tooltip Content
            </NavLink>
            <NavLink
              //to='/components/scrim'
              disabled
            >
              Scrim
            </NavLink>
            <NavLink
              //to='/components/select'
              disabled
            >
              Select
            </NavLink>
            <NavLink
              //to='/components/select-base'
              disabled
            >
              Select Base
            </NavLink>
            <NavLink
              //to='/components/skeleton'
              disabled
            >
              Skeleton
            </NavLink>
            <NavLink
              //to='/components/snackbar'
              disabled
            >
              Snackbar
            </NavLink>
            <NavLink
              //to='/components/snackbar-content'
              disabled
            >
              Snackbar Content
            </NavLink>
            <NavLink
              //to='/components/state-layer'
              disabled
            >
              State Layer
            </NavLink>
            <NavLink
              //to='/components/step'
              disabled
            >
              Step
            </NavLink>
            <NavLink
              //to='/components/step-connector'
              disabled
            >
              Step Connector
            </NavLink>
            <NavLink
              //to='/components/stepper'
              disabled
            >
              Stepper
            </NavLink>
            <NavLink
              //to='/components/suggest'
              disabled
            >
              Suggest
            </NavLink>
            <NavLink
              //to='/components/suggest-base'
              disabled
            >
              Suggest Base
            </NavLink>
            <NavLink
              //to='/components/switch'
              disabled
            >
              Switch
            </NavLink>
            <NavLink
              //to='/components/tab'
              disabled
            >
              Tab
            </NavLink>
            <NavLink
              //to='/components/tab-list'
              disabled
            >
              Tab List
            </NavLink>
            <NavLink
              //to='/components/tabs'
              disabled
            >
              Tabs
            </NavLink>
            <NavLink
              //to='/components/text-area-field'
              disabled
            >
              Text Area Field
            </NavLink>
            <NavLink
              //to='/components/text-field-base'
              disabled
            >
              Text Field Base
            </NavLink>
            <NavLink
              //to='/components/text-input-field'
              disabled
            >
              Text Input Field
            </NavLink>
            <NavLink
              //to='/components/theme'
              disabled
            >
              Theme
            </NavLink>
            <NavLink
              //to='/components/tonal-palettes'
              disabled
            >
              Tonal Palettes
            </NavLink>
            <NavLink
              //to='/components/typography'
              disabled
            >
              Typography
            </NavLink>
            <NavLink
              //to='/components/visual-state'
              disabled
            >
              Visual State
            </NavLink>
          </List>
        </div>
      </div>
    </div>
  );
};
