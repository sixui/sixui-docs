import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ThemeProvider } from '@sixui/ui';
import { HelmetProvider } from 'react-helmet-async';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

import '@sixui/ui/styles.css';
import { PersistentColorSchemeProvider } from '~/components/utils/PersistentColorSchemeProvider';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <HelmetProvider>
        <ThemeProvider>
          <PersistentColorSchemeProvider>
            <RouterProvider router={router} />
          </PersistentColorSchemeProvider>
        </ThemeProvider>
      </HelmetProvider>
    </StrictMode>,
  );
}
