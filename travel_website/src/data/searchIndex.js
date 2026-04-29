import { articles } from './articles'

function extractText(blocks) {
  return blocks.map(block => {
    if (block.text) return block.text
    if (block.items) return block.items.join(' ')
    if (block.name) return [block.name, block.tagline, ...(block.pros || [])].join(' ')
    if (block.rows) return block.rows.map(r => [r.provider, r.bestFor, r.coverage].join(' ')).join(' ')
    return ''
  }).join(' ')
}

const staticPages = [
  {
    title: 'Home',
    excerpt: 'Welcome to Gohan World — food, culture, and travel between Japan and the USA.',
    path: '/',
    type: 'page',
    keywords: 'home welcome gohan world japan usa food culture travel eating living joyfully',
  },
  {
    title: 'About',
    excerpt: 'Learn about the people and story behind Gohan World.',
    path: '/about',
    type: 'page',
    keywords: 'about us story family yuko japan america background who we are',
  },
  {
    title: 'Destinations',
    excerpt: 'Explore destinations in Japan and the USA.',
    path: '/destinations',
    type: 'page',
    keywords: 'destinations tokyo kyoto osaka japan new york hawaii san francisco los angeles usa cities travel places',
  },
  {
    title: 'Articles',
    excerpt: 'Guides, stories, and practical advice for travelers between Japan and the USA.',
    path: '/articles',
    type: 'page',
    keywords: 'articles guides stories travel tips advice food culture insurance packing',
  },
]

export const searchIndex = [
  ...staticPages,
  ...articles.map(article => ({
    title: article.title,
    excerpt: article.excerpt,
    path: `/articles/${article.slug}`,
    type: 'article',
    category: article.category,
    icon: article.icon,
    accentColor: article.accentColor,
    keywords: [
      article.title,
      article.excerpt,
      article.category,
      extractText(article.content),
    ].join(' ').toLowerCase(),
  })),
]
