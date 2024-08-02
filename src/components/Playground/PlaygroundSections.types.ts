import type { IContainerProps } from '~/components/utils/Container';
import type { IPlaygroundSections } from './Playground.types';

export type IPlaygroundSectionsProps<
  TSectionsProps extends Record<string, object>,
> = IContainerProps & {
  sections: IPlaygroundSections<TSectionsProps>;
  onSectionsChange: (sections: IPlaygroundSections<TSectionsProps>) => void;
  sectionsProps: TSectionsProps;
};
