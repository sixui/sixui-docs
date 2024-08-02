import { useState } from 'react';
import stylex from '@stylexjs/stylex';
import { fixedForwardRef } from '@sixui/ui';

import type { IPlaygroundProps } from './Playground.types';
import { playgroundStyles } from './Playground.styles';
import { PlaygroundSections } from './PlaygroundSections';

const convertValue = (
  value: unknown,
  type: 'string' | 'number' | 'boolean',
): unknown => {
  switch (type) {
    case 'string':
      return value as string;
    case 'number':
      return Number(value);
    case 'boolean':
      return Boolean(value);
    default:
      return value;
  }
};

export const Playground = fixedForwardRef(function Playground<
  TSectionsProps extends Record<string, object>,
>(
  props: IPlaygroundProps<TSectionsProps>,
  forwardedRef?: React.Ref<HTMLDivElement>,
) {
  const { sx, componentRenderer, defaultSections, initialProps, ...other } =
    props;

  const [sections, setSections] = useState(defaultSections);

  const sectionsProps = Object.keys(sections).reduce(
    (sectionPropsAcc, sectionKey) => {
      const section = sections[sectionKey];
      const sectionProps = {
        ...initialProps?.[sectionKey],
        ...section.props,
        ...section.options.reduce((optionPropsAcc, option) => {
          if (option.modifiers?.disabled || option.modifiers?.off) {
            return {
              ...optionPropsAcc,
            };
          }

          return {
            ...optionPropsAcc,
            ...option.props,
            ...option.getProps?.({
              ...sectionPropsAcc,
              [sectionKey]: optionPropsAcc,
            }),
            ...(option.input?.value
              ? {
                  [option.input.targetProp]: option.input.getValue
                    ? option.input.getValue(option.input.value)
                    : convertValue(option.input.value, option.input.type),
                }
              : undefined),
          };
        }, {}),
      };

      return {
        ...sectionPropsAcc,
        [sectionKey]: {
          ...sectionProps,
          ...section.getProps?.({
            ...sectionPropsAcc,
            [sectionKey]: sectionProps,
          }),
        },
      };
    },
    {} as TSectionsProps,
  );

  return (
    <div
      {...stylex.props(playgroundStyles.host, sx)}
      {...other}
      ref={forwardedRef}
    >
      <div {...stylex.props(playgroundStyles.componentPanel)}>
        <div {...stylex.props(playgroundStyles.componentWrapper)}>
          {componentRenderer(sectionsProps)}
        </div>
      </div>

      <div {...stylex.props(playgroundStyles.optionsPanel)}>
        <PlaygroundSections<TSectionsProps>
          sections={sections}
          onSectionsChange={setSections}
          sectionsProps={sectionsProps}
        />
      </div>
    </div>
  );
});
