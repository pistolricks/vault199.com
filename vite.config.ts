import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Pages from 'vite-plugin-pages';
import {VitePWA} from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import solidSvg from 'vite-plugin-solid-svg'

export default defineConfig({
    plugins: [
        tailwindcss(),
        solidPlugin(),
        solidSvg(),
        Pages({
            dirs: [
                {dir: 'src/pages', baseRoute: ''},
                { dir: 'src/pages/data/contacts/**', baseRoute: 'contacts' },

            ],

        }),

        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: "auto",
            includeAssets: ['favicon.ico', 'icon-192.png', 'icon-512.png', 'icon-1024.png', 'icon-maskable.png', 'screenshot.png'],
            workbox: {
                sourcemap: true,
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
                            },
                            backgroundSync: {
                                name: 'bg-queue',
                                options: {
                                    maxRetentionTime: 24 * 60
                                }
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
                "description": "Pipboy 3000 tested and approved by Vault-Tec",
                "theme_color": "#111",
                "background_color": "#111",
                "display": "standalone",
                "orientation": "portrait",
                "scope": "./",
                "start_url": "/",
                "icons": [
                    {
                        "src": "img/icons/icon-192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "img/icons/icon-512.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "any"
                    },
                    {
                        "src": "img/icons/icon-1024.png",
                        "sizes": "1024x1024",
                        "type": "image/png"
                    },
                    {
                        "src": "img/icons/icon-maskable.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "maskable"
                    }
                ],
                "screenshots": [
                    {
                        "src": "img/icons/screenshot.png",
                        "sizes": "1179x2556",
                        "type": "image/png"
                    },
                    {
                        "src": "img/icons/screenshot-wide.jpg",
                        "sizes": "1074x603",
                        "type": "image/jpeg",
                        "form_factor": "wide",
                        "label": "Application"
                    }
                ]
            },
            devOptions: {
                enabled: true,
                type: 'module',

                /* other options */
            }
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
