import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// All images — Unsplash License (free for commercial use, no attribution required)
const HERO    = 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1920&q=80'
const OG_IMG  = 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80'
const PAGE_URL = 'https://www.gohanworld.com/destinations/newyork/'

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'New York City',
    description: 'New York City — eight million stories, world-class food, and an energy that matches Tokyo stride for stride.',
    url: PAGE_URL,
    image: OG_IMG,
    geo: { '@type': 'GeoCoordinates', latitude: 40.7128, longitude: -74.0060 },
    containedInPlace: { '@type': 'Country', name: 'United States' },
    touristType: ['City Break', 'Food Tourism', 'Cultural Tourism', 'Arts Tourism'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://www.gohanworld.com/' },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.gohanworld.com/destinations/' },
      { '@type': 'ListItem', position: 3, name: 'New York',     item: PAGE_URL },
    ],
  },
]

const facts = [
  { label: 'Best Time',  value: 'Apr–Jun · Sep–Nov' },
  { label: 'Language',   value: 'English' },
  { label: 'Currency',   value: 'USD ($)' },
  { label: 'From Japan', value: '14–15 hrs' },
  { label: 'Airports',   value: 'JFK · EWR · LGA' },
]

const attractions = [
  {
    name: 'Central Park',
    area: 'Midtown / Upper West',
    desc: '843 acres of green at the heart of Manhattan. Rent a bike, row a boat, or just walk — the park has a different personality every hour.',
    img: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=800&q=80',
    alt: 'Aerial view of Central Park with lush green trees surrounded by New York City skyscrapers',
  },
  {
    name: 'Brooklyn Bridge & DUMBO',
    area: 'Brooklyn',
    desc: 'Walk the bridge for Manhattan skyline views, then descend into DUMBO for excellent restaurants and the famous arch shot between the bridge towers.',
    img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80',
    alt: 'Brooklyn Bridge spanning the East River at sunset with Manhattan skyline in the background',
  },
  {
    name: 'The Metropolitan Museum',
    area: 'Upper East Side',
    desc: 'Two million works of art across 5,000 years. The rooftop bar has views over Central Park that are worth the price of entry alone.',
    img: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=800&q=80',
    alt: 'Grand facade of the Metropolitan Museum of Art with its iconic columns on Fifth Avenue',
  },
  {
    name: 'Times Square',
    area: 'Midtown',
    desc: 'Overwhelming, commercial, and completely unmissable. See it once — ideally at night when the neon billboards transform it into something genuinely surreal.',
    img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    alt: 'Times Square at night illuminated by massive neon billboards and yellow taxi cabs in Midtown Manhattan',
  },
]

const food = [
  {
    name: 'New York Pizza',
    desc: 'Thin, foldable, a religious experience. Joe\'s or Di Fara.',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    alt: 'Large New York-style pizza slice being lifted showing melted cheese and thin crust',
  },
  {
    name: 'Bagels & Lox',
    desc: 'Get to Russ & Daughters early. Worth the line.',
    img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80',
    alt: 'Classic New York bagel topped with cream cheese and smoked salmon lox with capers',
  },
  {
    name: 'Japanese Ramen',
    desc: 'Midtown and East Village have serious spots — Ippudo, Totto, Hide-Chan.',
    img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=600&q=80',
    alt: 'Rich steaming bowl of Japanese ramen served at a New York City ramen restaurant',
  },
  {
    name: 'Dim Sum',
    desc: 'Chinatown on weekend mornings — noisy, delicious, essential.',
    img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80',
    alt: 'Bamboo steamer baskets filled with har gow shrimp dumplings at a dim sum restaurant',
  },
  {
    name: 'Steakhouse',
    desc: 'Peter Luger, Keens, or Quality Meats — a New York rite of passage.',
    img: 'https://images.unsplash.com/photo-1544025162-d76538b4f08e?auto=format&fit=crop&w=600&q=80',
    alt: 'Perfectly seared prime dry-aged ribeye steak served at a classic New York steakhouse',
  },
  {
    name: 'Street Food',
    desc: 'Halal carts, pretzel vendors, hot dogs — eat as you walk.',
    img: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=600&q=80',
    alt: 'New York City street food vendor cart serving halal food on a busy Manhattan sidewalk',
  },
]

const tips = [
  { icon: '🚇', tip: 'Tap your contactless card or phone directly on MTA turnstiles — no MetroCard needed anymore. The subway runs 24/7 and covers the whole city.' },
  { icon: '💵', tip: 'Budget 20% tip at restaurants and 15–20% in cabs. Tipping culture is strong here — it\'s part of how service workers earn their income.' },
  { icon: '🚶', tip: 'Walk Manhattan whenever the weather allows. The grid makes navigation intuitive, and the neighborhoods reward every detour.' },
  { icon: '📅', tip: 'Book popular restaurants weeks in advance, especially on weekends. OpenTable and Resy are the standard booking platforms.' },
  { icon: '🗣️', tip: 'New Yorkers walk fast and talk fast — but they\'re more helpful than their reputation suggests. Don\'t hesitate to ask for directions.' },
]

const NewYorkPage = () => {
  useEffect(() => {
    document.title = 'New York City Travel Guide — Things to Do, Eat & See | Gohan World'
    const canon = document.querySelector('link[rel="canonical"]')
    if (canon) canon.setAttribute('href', 'https://www.gohanworld.com/destinations/newyork/')
    return () => {
      document.title = 'Japan Travel & Insurance for Seniors & First-Timers | Gohan World'
      if (canon) canon.setAttribute('href', 'https://www.gohanworld.com/')
    }
  }, [])

  return (
    <main className="bg-[var(--color-bg-page)] text-[var(--color-text-primary)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[460px] flex items-end overflow-hidden">
        <img src={HERO} alt="New York City skyline at dusk with illuminated skyscrapers reflecting on the Hudson River" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-14">
          <span className="inline-block bg-accent text-white text-[0.65rem] font-body font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full mb-3">USA</span>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-none">New York</h1>
          <p className="font-body text-white/80 text-lg md:text-xl mt-3 font-light tracking-wide">8 million stories. Zero boring meals.</p>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <div className="bg-site-dark text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-5 flex flex-wrap gap-x-10 gap-y-3">
          {facts.map(f => (
            <div key={f.label} className="flex flex-col">
              <span className="font-body text-[0.62rem] font-bold uppercase tracking-[0.14em] text-accent">{f.label}</span>
              <span className="font-body text-sm font-medium text-white/90">{f.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Introduction ── */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-14">
        <p className="font-body text-[var(--color-text-secondary)] text-lg leading-relaxed mb-5">
          New York doesn't ask you to fall in love with it. It just happens. The city is loud, relentless, and overwhelming — and then one afternoon you're eating a perfect slice of pizza on a fire escape, watching yellow cabs stream down Fifth Avenue, and you realize you never want to leave.
        </p>
        <p className="font-body text-[var(--color-text-secondary)] text-lg leading-relaxed">
          For Japan-connected travelers, New York is also <strong className="text-[var(--color-text-primary)]">a second home</strong>. It has some of the finest Japanese restaurants outside Japan, a thriving Japanese community in Midtown, and an energy that matches Tokyo stride for stride.
        </p>
      </section>

      {/* ── Top Attractions ── */}
      <section className="bg-[var(--color-bg-section-alt)] border-t border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-1">Top Attractions</h2>
          <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">New York rewards wandering — these are the anchors to build your days around.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {attractions.map(a => (
              <div key={a.name} className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-52 overflow-hidden">
                  <img src={a.img} alt={a.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-accent text-white font-body text-[0.62rem] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">{a.area}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-[var(--color-text-primary)] mb-2">{a.name}</h3>
                  <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Food & Dining ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-1">Food &amp; Dining</h2>
        <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">New York is one of the world's great food cities — every cuisine, every price point, on every block.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {food.map(item => (
            <div key={item.name} className="relative rounded-xl overflow-hidden group h-52 md:h-60">
              <img src={item.img} alt={item.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-body font-bold text-white text-sm md:text-base leading-tight">{item.name}</h3>
                <p className="font-body text-white/75 text-xs mt-0.5 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Travel Tips ── */}
      <section className="bg-[var(--color-bg-section-alt)] border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8">Travel Tips for New York</h2>
          <div className="flex flex-col gap-4">
            {tips.map(t => (
              <div key={t.icon} className="flex gap-4 items-start bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl px-6 py-4">
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-14 border-b border-[var(--color-border)]">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8">Getting There from Japan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80" alt="Airplane wing over clouds during a long-haul transpacific flight" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 p-7 flex flex-col justify-end h-full">
              <span className="inline-block bg-accent text-white font-body text-[0.62rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 w-fit">Direct Flights</span>
              <h3 className="font-body font-bold text-lg text-white mb-2">✈️ JFK International Airport</h3>
              <p className="font-body text-sm text-white/80 leading-relaxed mb-3">JAL and ANA fly direct from Tokyo HND/NRT to JFK. AirTrain + E train to Midtown takes 50–60 min and costs ~$9.</p>
              <p className="font-body text-xs text-accent font-semibold">~14 hrs from Tokyo · JAL & ANA serve this route</p>
            </div>
          </div>
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-7 flex flex-col justify-center">
            <h3 className="font-body font-bold text-lg text-[var(--color-text-primary)] mb-3">✈️ Newark Airport (EWR)</h3>
            <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              NJ Transit train runs direct from EWR to Penn Station in 30 minutes. Often less crowded than JFK and sometimes cheaper.
            </p>
            <p className="font-body text-xs text-accent font-semibold">NJ Transit: ~30 min to Penn Station · ~$17</p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 flex gap-6 flex-wrap items-center">
        <Link to="/destinations" className="font-body text-sm font-semibold text-accent hover:underline">← All Destinations</Link>
        <Link to="/articles" className="font-body text-sm font-semibold text-[var(--color-text-muted)] hover:text-accent transition-colors">Browse USA Articles →</Link>
      </div>
    </main>
  )
}

export default NewYorkPage
