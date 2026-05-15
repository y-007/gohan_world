import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const { articles } = await import(pathToFileURL(join(root, 'src/data/articles.js')).href)
const { categories } = await import(pathToFileURL(join(root, 'src/data/categories.js')).href)
const { render } = await import(pathToFileURL(join(root, 'dist/server/entry-server.js')).href)

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

// Per-route SEO metadata — title replaces the generic "GOHAN WORLD" shell title
const STATIC_META = {
  '/': {
    title: 'Gohan World — Japan & USA Travel Tips, Insurance Guides & Cultural Insights',
    desc: 'Practical travel tips, insurance guidance, and cultural insights for USA–Japan travelers. Senior-friendly advice from Yuko at Gohan World.',
  },
  '/articles': {
    title: 'All Articles | Gohan World',
    desc: 'Browse all Gohan World travel articles — Medicare abroad, Japan packing lists, eSIM guides, airport tips, food culture, and more.',
  },
  '/about': {
    title: 'About Yuko | Gohan World',
    desc: 'Meet Yuko, the traveler behind Gohan World — sharing Japan and USA travel tips focused on seniors, first-time visitors, and mindful explorers.',
  },
  '/destinations': {
    title: 'Destinations | Gohan World',
    desc: 'Explore destinations between Japan and the USA — Tokyo, Kyoto, Osaka, New York, Hawaii, and San Francisco travel guides from Gohan World.',
  },
  '/contact': {
    title: 'Contact | Gohan World',
    desc: 'Get in touch with Gohan World. Questions, feedback, or collaboration inquiries are welcome.',
  },
  '/disclaimer': {
    title: 'Disclaimer | Gohan World',
    desc: 'Gohan World disclaimer — content is for informational purposes only and is not professional insurance, legal, or medical advice.',
  },
  '/affiliate-disclosure': {
    title: 'Affiliate Disclosure | Gohan World',
    desc: 'Gohan World affiliate disclosure — how this site earns commissions and what that means for readers.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Gohan World',
    desc: 'Gohan World privacy policy — how we collect, use, and protect your personal information.',
  },
}

// Build article meta from live data
for (const a of articles) {
  STATIC_META[`/articles/${a.slug}`] = {
    title: `${a.title} | Gohan World`,
    desc: a.excerpt,
  }
}

// Build category meta from live data
for (const c of categories) {
  STATIC_META[`/articles/category/${c.slug}`] = {
    title: `${c.name} Articles | Gohan World`,
    desc: `Browse Gohan World ${c.name.toLowerCase()} articles — practical guides and real stories for USA–Japan travelers.`,
  }
}

// Build archive meta
for (const y of years) {
  STATIC_META[`/articles/archive/${y}`] = {
    title: `${y} Articles | Gohan World`,
    desc: `Browse all Gohan World articles published in ${y} — travel tips, insurance guides, and cultural insights for USA–Japan travelers.`,
  }
}

const FALLBACK = {
  title: 'Gohan World — Japan & USA Travel Tips',
  desc: 'Practical travel tips and insurance guidance for USA–Japan travelers — Gohan World.',
}

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

  const { title, desc } = STATIC_META[route] || FALLBACK
  const safeDesc = desc.replace(/"/g, '&quot;')
  const metaTag = `<meta name="description" content="${safeDesc}">`

  const html = template
    .replace('<title>GOHAN WORLD</title>', `<title>${title}</title>\n    ${metaTag}`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const dir = join(root, 'dist/client', route === '/' ? '' : route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  console.log(`  ✓ ${route}`)
}

console.log(`\nDone — ${routes.length} HTML files written to dist/client/\n`)
