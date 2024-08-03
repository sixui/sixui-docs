import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/pro-regular-svg-icons';

import type { IPlaygroundSections } from '~/components/Playground';
import { Playground } from '~/components/Playground';
import {
  ButtonPlaygroundDemo,
  type IButtonPlaygroundDemoProps,
} from './ButtonPlaygroundDemo';

export const buttonPlaygroundSections: IPlaygroundSections<IButtonPlaygroundDemoProps> =
  {
    button: {
      title: 'Button',
      options: [
        {
          label: 'Variant',
          input: {
            type: 'string',
            value: 'filled',
            items: [
              { label: 'Filled', value: 'filled' },
              { label: 'Filled Tonal', value: 'filledTonal' },
              { label: 'Elevated', value: 'elevated' },
              { label: 'Outlined', value: 'outlined' },
              { label: 'Danger', value: 'danger' },
              { label: 'Text', value: 'text' },
            ],
            targetProp: 'variant',
          },
          modifiers: {
            required: true,
          },
        },
        {
          label: 'Text',
          input: {
            type: 'string',
            value: 'Add to cart',
            targetProp: 'children',
          },
          modifiers: {
            required: true,
          },
        },
        {
          label: 'Icon',
          props: {
            icon: <FontAwesomeIcon icon={faCartPlus} />,
          },
        },
        {
          label: 'Icon in trailing position',
          props: {
            trailingIcon: true,
          },
          getModifiers: (sectionProps) => ({
            disabled: !sectionProps?.button.icon,
          }),
          modifiers: {
            off: true,
          },
        },
        {
          label: 'Disabled',
          props: {
            disabled: true,
          },
          modifiers: {
            off: true,
          },
        },
        {
          label: 'Loading',
          props: {
            loading: true,
          },
          modifiers: {
            off: true,
          },
        },
        {
          label: 'Loading text',
          input: {
            type: 'string',
            value: 'Wait...',
            targetProp: 'loadingText',
          },
          modifiers: {
            off: true,
          },
          getModifiers: (sectionProps) => ({
            disabled: !sectionProps?.button.loading,
          }),
        },
      ],
    },
  };

export const ButtonPlayground: React.FC = (props) => {
  return (
    <Playground<IButtonPlaygroundDemoProps>
      {...props}
      defaultSections={buttonPlaygroundSections}
      componentRenderer={(props) => <ButtonPlaygroundDemo {...props} />}
    />
  );
};
