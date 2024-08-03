import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ColorSchemeProvider, ThemeProvider } from '@sixui/ui';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

import '@sixui/ui/styles.css';

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
      <ThemeProvider>
        <ColorSchemeProvider variant='light'>
          <RouterProvider router={router} />
        </ColorSchemeProvider>
      </ThemeProvider>
    </StrictMode>,
  );
}
