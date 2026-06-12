import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const { articles } = await import(pathToFileURL(join(root, 'src/data/articles.js')).href)
const { categories } = await import(pathToFileURL(join(root, 'src/data/categories.js')).href)
const { render } = await import(pathToFileURL(join(root, 'dist/server/entry-server.js')).href)

const HOSTNAME = 'https://www.gohanworld.com'

const MONTH_TO_NUM = {
  January: '01', February: '02', March: '03', April: '04',
  May: '05', June: '06', July: '07', August: '08',
  September: '09', October: '10', November: '11', December: '12',
}

// Convert "April 2026" → "2026-04-01"
function monthYearToISO(dateStr) {
  const [month, year] = dateStr.split(' ')
  return `${year}-${MONTH_TO_NUM[month] || '01'}-01`
}

const today = new Date().toISOString().slice(0, 10)

const years = [...new Set(articles.map(a => a.date.split(' ')[1]))]

const routes = [
  '/',
  '/articles',
  '/about',
  '/destinations',
  '/destinations/tokyo',
  '/destinations/kyoto',
  '/destinations/newyork',
  '/destinations/hawaii',
  '/destinations/osaka',
  '/destinations/treasurecoast',
  '/contact',
  '/search',
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
    image: `${HOSTNAME}/hero_profile.png`,
  },
  '/articles': {
    title: 'All Articles | Gohan World',
    desc: 'Browse all Gohan World travel articles — Medicare abroad, Japan packing lists, eSIM guides, airport tips, food culture, and more.',
  },
  '/about': {
    title: 'About Yuko | Gohan World',
    desc: 'Meet Yuko, the traveler behind Gohan World — sharing Japan and USA travel tips focused on seniors, first-time visitors, and mindful explorers.',
    image: `${HOSTNAME}/about-yuko.jpg`,
  },
  '/destinations': {
    title: 'Destinations | Gohan World',
    desc: 'Explore destinations between Japan and the USA — Tokyo, Kyoto, Osaka, New York, Hawaii, and Treasure Coast travel guides from Gohan World.',
  },
  '/destinations/tokyo': {
    title: 'Tokyo Travel Guide — Attractions, Food & Tips | Gohan World',
    desc: 'Complete Tokyo travel guide for USA visitors — Senso-ji Temple, Shibuya Crossing, the best ramen, practical travel tips, and how to fly from the USA.',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=80',
  },
  '/destinations/kyoto': {
    title: 'Kyoto Travel Guide — Temples, Gardens & Culture | Gohan World',
    desc: 'Complete Kyoto travel guide — Fushimi Inari, Arashiyama bamboo grove, Kinkaku-ji, Gion district, kaiseki dining, and how to get there from the USA.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
  },
  '/destinations/newyork': {
    title: 'New York City Travel Guide — Things to Do, Eat & See | Gohan World',
    desc: 'Complete New York City travel guide — Central Park, Brooklyn Bridge, Japanese ramen, New York pizza, travel tips, and direct flights from Japan.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
  },
  '/destinations/hawaii': {
    title: 'Hawaii Travel Guide — Beaches, Food & Island Tips | Gohan World',
    desc: 'Complete Hawaii travel guide — Waikiki Beach, Road to Hana, poke bowls, shave ice, sea turtles, and direct flights from Japan to Honolulu.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  '/destinations/osaka': {
    title: 'Osaka Travel Guide — Street Food, Dotonbori & Culture | Gohan World',
    desc: 'Complete Osaka travel guide — Dotonbori, Osaka Castle, takoyaki, okonomiyaki, kushikatsu, and how to get there from the USA.',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80',
  },
  '/destinations/treasurecoast': {
    title: 'Treasure Coast, Florida Travel Guide — Beaches & Seafood | Gohan World',
    desc: 'Treasure Coast Florida travel guide — Hutchinson Island beaches, Jonathan Dickinson State Park, fresh grouper, stone crab, and sea turtle nesting.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
  },
  '/contact': {
    title: 'Contact | Gohan World',
    desc: 'Get in touch with Gohan World. Questions, feedback, or collaboration inquiries are welcome.',
  },
  '/search': {
    title: 'Search | Gohan World',
    desc: 'Search all Gohan World articles — travel tips, insurance guides, packing lists, and cultural insights for USA–Japan travelers.',
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

for (const a of articles) {
  STATIC_META[`/articles/${a.slug}`] = {
    title: `${a.title} | Gohan World`,
    desc: a.excerpt,
    image: a.heroImage ? `${HOSTNAME}${a.heroImage}` : undefined,
  }
}

for (const c of categories) {
  STATIC_META[`/articles/category/${c.slug}`] = {
    title: `${c.name} Articles | Gohan World`,
    desc: `Browse Gohan World ${c.name.toLowerCase()} articles — practical guides and real stories for USA–Japan travelers.`,
  }
}

for (const y of years) {
  STATIC_META[`/articles/archive/${y}`] = {
    title: `${y} Articles | Gohan World`,
    desc: `Browse all Gohan World articles published in ${y} — travel tips, insurance guides, and cultural insights for USA–Japan travelers.`,
  }
}

const FALLBACK = {
  title: 'Gohan World — Japan & USA Travel Tips',
  desc: 'Practical travel tips and insurance guidance for USA–Japan travelers — Gohan World.',
  image: `${HOSTNAME}/hero_profile.png`,
}

// Sitemap config per route pattern
function getSitemapEntry(route) {
  if (route === '/') {
    return { lastmod: today, changefreq: 'weekly', priority: '1.0' }
  }
  if (route === '/articles' || route === '/destinations') {
    return { lastmod: today, changefreq: 'weekly', priority: '0.9' }
  }
  if (route === '/about') {
    return { lastmod: today, changefreq: 'monthly', priority: '0.8' }
  }
  if (route.startsWith('/destinations/') && route !== '/destinations') {
    return { lastmod: today, changefreq: 'monthly', priority: '0.8' }
  }
  if (route.startsWith('/articles/category/')) {
    return { lastmod: today, changefreq: 'monthly', priority: '0.8' }
  }
  if (route.startsWith('/articles/archive/')) {
    return { lastmod: today, changefreq: 'monthly', priority: '0.6' }
  }
  if (route.startsWith('/articles/')) {
    const article = articles.find(a => `/articles/${a.slug}` === route)
    const lastmod = article ? monthYearToISO(article.date) : today
    return { lastmod, changefreq: 'monthly', priority: '0.8' }
  }
  // Legal / utility pages
  return { lastmod: today, changefreq: 'yearly', priority: '0.3' }
}

// ── Pre-render HTML ──────────────────────────────────────────────────────────

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

  const { title, desc, image } = STATIC_META[route] || FALLBACK
  const safeTitle = title.replace(/"/g, '&quot;')
  const safeDesc  = desc.replace(/"/g, '&quot;')
  const canonical = `${HOSTNAME}${route === '/' ? '/' : route + '/'}`
  const ogImage   = image || `${HOSTNAME}/hero_profile.png`

  const headBlock = [
    `<title>${title}</title>`,
    `<meta name="description" content="${safeDesc}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:title" content="${safeTitle}">`,
    `<meta property="og:description" content="${safeDesc}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:image" content="${ogImage}">`,
    `<meta property="og:type" content="website">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${safeTitle}">`,
    `<meta name="twitter:description" content="${safeDesc}">`,
    `<meta name="twitter:image" content="${ogImage}">`,
  ].join('\n    ')

  const html = template
    .replace('<!--prerender:head-->', headBlock)
    .replace('<!--prerender:app-->', appHtml)

  const dir = join(root, 'dist/client', route === '/' ? '' : route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  console.log(`  ✓ ${route}`)
}

// ── Generate sitemap.xml ─────────────────────────────────────────────────────

const urlEntries = routes.map(route => {
  const { lastmod, changefreq, priority } = getSitemapEntry(route)
  const loc = `${HOSTNAME}${route === '/' ? '/' : route + '/'}`
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`

writeFileSync(join(root, 'dist/client/sitemap.xml'), sitemap)
console.log(`\n✓ sitemap.xml written with ${routes.length} URLs`)

console.log(`\nDone — ${routes.length} HTML files + sitemap written to dist/client/\n`)
