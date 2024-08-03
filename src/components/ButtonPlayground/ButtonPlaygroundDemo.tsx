import { Button, type IButtonProps } from '@sixui/ui';

export type IButtonPlaygroundDemoProps = {
  button: IButtonProps;
};

export const ButtonPlaygroundDemo: React.FC<IButtonPlaygroundDemoProps> = (
  props,
) => <Button {...props.button} />;
