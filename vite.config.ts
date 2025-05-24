import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Pages from 'vite-plugin-pages';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
    plugins: [
        Pages({
            dirs: ['src/pages'],
        }),
        solidPlugin(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: "auto",
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,webmanifest}'],
                // runtimeCaching is optional, you can configure it as needed
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'images-cache',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                            }
                        }
                    }
                ]
            },
            manifest: {
                "name": "Vault-Tec Vault 199",
                "short_name": "Vault 199",
                "description": "The Last Line of Defense",
                "theme_color": "#000000",
                "background_color": "#ffffff",
                "display": "standalone",
                "orientation": "portrait",
                "scope": "/",
                "start_url": "/",
                "icons": [
                    {
                        "src": "img/icons/favicon.ico",
                        "sizes": "32x32",
                        "type": "image/x-icon"
                    },
                    {
                        "src": "img/icons/apple-touch-icon.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "img/icons/android-chrome-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    },
                    {
                        "src": "img/icons/apple-touch-icon.png",
                        "sizes": "192x192",
                        "type": "image/png",
                        "purpose": "any"
                    },
                    {
                        "src": "img/icons/android-chrome-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png",
                        "purpose": "any"
                    },
                    {
                        "src": "img/icons/android-chrome-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "maskable"
                    }
                ],
            },
        }),
        tsconfigPaths(),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});
