import { createLazyFileRoute } from '@tanstack/react-router';
import { AnchoredPlayground } from '~/components/AnchoredPlayground';

export const Route = createLazyFileRoute('/components/anchored')({
  component: () => <AnchoredPlayground />,
});
