import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { products } from '../src/data/products.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const siteUrl = 'https://devifly.dev'
const lastmod = new Date().toISOString().split('T')[0]

const staticRoutes = [
  '/',
  '/products',
  '/solutions',
  '/case-studies',
  '/pricing',
  '/contact',
  '/landings',
  '/invitaciones',
  '/menus-digitales',
  '/saas',
  '/catalogos-nenis',
  '/salones-eventos',
]

const productRoutes = products
  .map((product) => product.link)
  .filter((route) => route && route.startsWith('/') && !route.includes('/demo'))

const routes = [...new Set([...staticRoutes, ...productRoutes])]

function getPriority(route) {
  if (route === '/') {
    return '1.0'
  }

  if (['/landings', '/invitaciones', '/menus-digitales', '/catalogos-nenis', '/salones-eventos', '/saas'].includes(route)) {
    return '0.9'
  }

  if (route.startsWith('/service/')) {
    return '0.8'
  }

  if (['/products', '/solutions', '/pricing', '/contact'].includes(route)) {
    return '0.8'
  }

  return '0.6'
}

function getChangeFreq(route) {
  if (route === '/' || route.startsWith('/service/')) {
    return 'weekly'
  }

  if (['/landings', '/invitaciones', '/menus-digitales', '/catalogos-nenis', '/salones-eventos', '/saas', '/products', '/pricing'].includes(route)) {
    return 'weekly'
  }

  return 'monthly'
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map(
      (route) => `  <url>
    <loc>${siteUrl}${route === '/' ? '' : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangeFreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`
    )
    .join('\n')}
</urlset>
`

const publicDir = path.resolve(__dirname, '../public')
await mkdir(publicDir, { recursive: true })
await writeFile(path.join(publicDir, 'sitemap.xml'), xml, 'utf8')