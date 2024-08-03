import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/components/button')({
  component: () => <div>Hello /components/button!</div>,
});
