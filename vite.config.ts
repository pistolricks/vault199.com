import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Pages from 'vite-plugin-pages';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        Pages({
            dirs: ['src/pages'],
        }),
        solidPlugin(),
        tsconfigPaths(),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});