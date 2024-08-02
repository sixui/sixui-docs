import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import styleX from 'vite-plugin-stylex';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    styleX({
      libraries: ["@sixui/ui"],
    }),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    /**
     *
     * @sixui/ui cannot be optimized because `*.stylex` files must not be
     * bundled to be transformed by the stylex plugin. But Vite will throw an
     * error because @sixui/ui, which is an ESM package, uses CJS packages. As
     * CJS packages are only supported with Vite if they are prebundled, we need
     * to include these transitive packages in `optimizeDeps.include`.
     *
     * @see https://github.com/vitejs/vite/issues/3024
     */
    include: ["react-transition-group", "react-dom"],
    exclude: ["@sixui/ui"],
  },
});
