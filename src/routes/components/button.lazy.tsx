import { createLazyFileRoute } from '@tanstack/react-router';
import { ButtonPlayground } from '~/components/ButtonPlayground';

export const Route = createLazyFileRoute('/components/button')({
  component: () => <ButtonPlayground />,
});
