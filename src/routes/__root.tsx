import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from '~/components/Header';
import { Navbar } from '~/components/Navbar';
import { Shell } from '~/components/Shell';
import { Page } from '~/components/Page';
import { PageHeader } from '~/components/PageHeader';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Navbar />
      <Shell>
        <PageHeader />
        <Page>
          <Outlet />
        </Page>
        <TanStackRouterDevtools />
      </Shell>
    </>
  ),
});
