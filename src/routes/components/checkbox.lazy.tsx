import { ThemeProvider } from '@sixui/ui';
import { createLazyFileRoute } from '@tanstack/react-router';
import { AnchoredPlayground } from '~/components/AnchoredPlayground';

export const Route = createLazyFileRoute('/components/checkbox')({
  component: () => (
    <ThemeProvider>
      <AnchoredPlayground />
    </ThemeProvider>
  ),
});
