import type { IAny } from '@sixui/ui';
import { Link, type LinkComponent } from '@tanstack/react-router';
import { forwardRef } from 'react';

export const createLink = <TProps, TComponent = React.FC<TProps>>(
  Component: TComponent,
): LinkComponent<TComponent> =>
  forwardRef(function CreatedLink(props, ref) {
    return <Link {...(props as IAny)} _asChild={Component} ref={ref} />;
  }) as LinkComponent<TComponent>;
