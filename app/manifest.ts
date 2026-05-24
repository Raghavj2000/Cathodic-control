import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cathodic Control Company',
    short_name: 'CCC',
    description: 'Leading cathodic protection engineering company since 1980.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#003366',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
