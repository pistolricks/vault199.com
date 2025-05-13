const { defineConfig } = require('@vite-pwa/assets-generator/config')

module.exports = defineConfig({
  preset: {
    apple: [
      {
        sizes: [180],
        href: 'apple-touch-icon.png',
      },
    ],
    favicons: [
      {
        sizes: [64],
        href: 'favicon.ico',
      },
    ],
    pwa: [
      {
        sizes: [64, 192, 512],
        href: 'pwa-{width}x{height}.png',
      },
      {
        sizes: [512],
        href: 'maskable-icon-512x512.png',
        purpose: 'maskable',
      },
    ],
  },
  images: [
    {
      src: 'public/img/icons/apple-touch-icon.png',
      sizes: [64, 192, 512],
      formats: ['png'],
    },
  ],
})
