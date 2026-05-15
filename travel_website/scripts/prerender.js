import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

// Import live data from source — route list auto-updates when articles/categories are added
const { articles } = await import(pathToFileURL(join(root, 'src/data/articles.js')).href)
const { categories } = await import(pathToFileURL(join(root, 'src/data/categories.js')).href)

// Import the SSR render function from the Vite-built server bundle
const { render } = await import(pathToFileURL(join(root, 'dist/server/entry-server.js')).href)

// Build complete route list from live data
const years = [...new Set(articles.map(a => a.date.split(' ')[1]))]
const routes = [
  '/',
  '/articles',
  '/about',
  '/destinations',
  '/contact',
  '/disclaimer',
  '/affiliate-disclosure',
  '/privacy-policy',
  ...articles.map(a => `/articles/${a.slug}`),
  ...categories.map(c => `/articles/category/${c.slug}`),
  ...years.map(y => `/articles/archive/${y}`),
]

const template = readFileSync(join(root, 'dist/client/index.html'), 'utf-8')

console.log(`\nPre-rendering ${routes.length} routes into dist/client/...\n`)

for (const route of routes) {
  let appHtml
  try {
    appHtml = render(route)
  } catch (err) {
    console.error(`  ✗ ${route} — render error: ${err.message}`)
    continue
  }

  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  const dir = join(root, 'dist/client', route === '/' ? '' : route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  console.log(`  ✓ ${route}`)
}

console.log(`\nDone — ${routes.length} HTML files written to dist/client/\n`)
