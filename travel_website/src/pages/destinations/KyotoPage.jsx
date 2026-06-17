import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// All images — Unsplash License (free for commercial use, no attribution required)
const HERO    = 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80'
const OG_IMG  = 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80'
const PAGE_URL = 'https://www.gohanworld.com/destinations/kyoto/'

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Kyoto',
    description: 'Kyoto was Japan\'s imperial capital for over a thousand years — a city of temples, bamboo forests, and timeless tradition.',
    url: PAGE_URL,
    image: OG_IMG,
    geo: { '@type': 'GeoCoordinates', latitude: 35.0116, longitude: 135.7681 },
    containedInPlace: { '@type': 'Country', name: 'Japan' },
    touristType: ['Cultural Tourism', 'Heritage Tourism', 'Senior Travel', 'Nature Tourism'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://www.gohanworld.com/' },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.gohanworld.com/destinations/' },
      { '@type': 'ListItem', position: 3, name: 'Kyoto',        item: PAGE_URL },
    ],
  },
]

const facts = [
  { label: 'Best Time',  value: 'Mar–May · Oct–Nov' },
  { label: 'Language',   value: 'Japanese' },
  { label: 'Currency',   value: 'Yen (¥)' },
  { label: 'From USA',   value: '13–17 hrs' },
  { label: 'Airports',   value: 'KIX · ITM' },
]

const attractions = [
  {
    name: 'Fushimi Inari Shrine',
    area: 'Fushimi',
    desc: 'Ten thousand vermilion torii gates winding up a forested mountain. Arrive before 8am for the full mystical experience.',
    img: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=800&q=80',
    alt: 'Thousands of red torii gates lining a forested mountain path at Fushimi Inari shrine in Kyoto',
  },
  {
    name: 'Arashiyama Bamboo Grove',
    area: 'Arashiyama',
    desc: 'A cathedral of towering bamboo that creaks and sways in the wind. Pair it with the nearby Tenryu-ji garden.',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80',
    alt: 'Towering green bamboo stalks forming a canopy walkway in Arashiyama bamboo grove, Kyoto',
  },
  {
    name: 'Kinkaku-ji',
    area: 'Kita',
    desc: 'The Golden Pavilion — its gold-leaf exterior reflected perfectly in a still pond. One of Japan\'s most iconic views.',
    img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80',
    alt: 'Golden Pavilion Kinkaku-ji temple reflected in a mirror-still pond surrounded by Japanese gardens in Kyoto',
  },
  {
    name: 'Gion District',
    area: 'Gion',
    desc: 'Kyoto\'s famous geisha quarter — wooden machiya townhouses, stone-paved Hanamikoji Street, and the chance to spot a maiko at dusk.',
    img: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&w=800&q=80',
    alt: 'Traditional wooden machiya townhouses lining a stone-paved street in Gion district, Kyoto at dusk',
  },
]

const food = [
  {
    name: 'Kaiseki',
    desc: 'Multi-course haute cuisine. Kyoto is its birthplace.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    alt: 'Elegant multi-course Japanese kaiseki meal served in small lacquerware dishes',
  },
  {
    name: 'Matcha Everything',
    desc: 'Lattes, soft serve, mochi — Uji matcha is world-class.',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
    alt: 'Vibrant green matcha latte in a ceramic cup with Japanese sweets alongside',
  },
  {
    name: 'Yudofu',
    desc: 'Simple silken tofu hotpot — Kyoto comfort food.',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
    alt: 'Japanese tofu hot pot dish served in a traditional ceramic bowl',
  },
  {
    name: 'Obanzai',
    desc: 'Traditional Kyoto home cooking — small seasonal dishes.',
    img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=600&q=80',
    alt: 'Traditional Kyoto obanzai home cooking spread with multiple small seasonal dishes',
  },
  {
    name: 'Nishiki Market',
    desc: '"Kyoto\'s kitchen" — 130 stalls of pickles, grilled tofu, and sweets.',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
    alt: 'Colorful food stalls and vendors lining the narrow Nishiki covered market in Kyoto',
  },
  {
    name: 'Kyoto Ramen',
    desc: 'Lighter chicken broth, thinner noodles — distinctly Kyoto.',
    img: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=600&q=80',
    alt: 'Bowl of Kyoto-style ramen with light broth, thin noodles and delicate toppings',
  },
]

const tips = [
  { icon: '🚲', tip: 'Rent a bicycle — Kyoto is flat and bike-friendly. Cycling between temples is the best way to move at your own pace.' },
  { icon: '📅', tip: 'Book popular temples online in advance. Tofuku-ji in autumn and Ryoan-ji year-round fill up fast — pre-registration required.' },
  { icon: '🦌', tip: 'Nara is 45 minutes by train — free-roaming deer and the world\'s largest bronze Buddha. An easy, unmissable day trip.' },
  { icon: '🕐', tip: 'Arrive at Fushimi Inari before 8am or after 5pm. Midday crowds make the mystical experience nearly impossible.' },
  { icon: '👟', tip: 'Wear comfortable, slip-on shoes — many temples require removing footwear repeatedly throughout the day.' },
]

const KyotoPage = () => {
  useEffect(() => {
    document.title = 'Kyoto Travel Guide — Temples, Gardens & Culture | Gohan World'
    const canon = document.querySelector('link[rel="canonical"]')
    if (canon) canon.setAttribute('href', 'https://www.gohanworld.com/destinations/kyoto/')
    return () => {
      document.title = 'USA⇄Japan Travel & Insurance Guides for Seniors & First-Timers 2026 | Gohan World'
      if (canon) canon.setAttribute('href', 'https://www.gohanworld.com/')
    }
  }, [])

  return (
    <main className="bg-[var(--color-bg-page)] text-[var(--color-text-primary)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[460px] flex items-end overflow-hidden">
        <img src={HERO} alt="Thousands of red torii gates at Fushimi Inari Shrine stretching up a forested mountain in Kyoto, Japan" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-14">
          <span className="inline-block bg-accent text-white text-[0.65rem] font-body font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full mb-3">Japan</span>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-none">Kyoto</h1>
          <p className="font-body text-white/80 text-lg md:text-xl mt-3 font-light tracking-wide">A thousand temples. One timeless city.</p>
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
          Kyoto was Japan's imperial capital for over a thousand years, and it shows. While Tokyo races forward, Kyoto breathes deep — every turning season brings out a different face of the city, from winter snow on golden pavilions to <strong className="text-[var(--color-text-primary)]">autumn maples blazing red along the Philosopher's Path</strong>.
        </p>
        <p className="font-body text-[var(--color-text-secondary)] text-lg leading-relaxed">
          For USA⇄Japan travelers, Kyoto is often the emotional center of the trip — the place that makes you understand why people fall in love with Japan. Give it at least two full days; most visitors wish they had given it a week.
        </p>
      </section>

      {/* ── Top Attractions ── */}
      <section className="bg-[var(--color-bg-section-alt)] border-t border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-1">Top Attractions</h2>
          <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">Kyoto has over 1,600 Buddhist temples and 400 Shinto shrines. These are the ones to start with.</p>
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
        <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">Kyoto cuisine — kyo-ryori — is defined by seasonal ingredients, delicate flavors, and centuries of refinement.</p>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8">Travel Tips for Kyoto</h2>
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
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8">Getting There</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80" alt="Japanese bullet train Shinkansen speeding past Mount Fuji on a clear day" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 p-7 flex flex-col justify-end h-full">
              <span className="inline-block bg-accent text-white font-body text-[0.62rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 w-fit">From Tokyo</span>
              <h3 className="font-body font-bold text-lg text-white mb-2">🚄 Shinkansen Bullet Train</h3>
              <p className="font-body text-sm text-white/80 leading-relaxed mb-3">Tokyo Station to Kyoto Station in 2 hrs 15 min on the Tokaido Shinkansen. Scenic, punctual, and comfortable.</p>
              <p className="font-body text-xs text-accent font-semibold">Nozomi: 2h15m · Hikari: 2h40m · JR Pass accepted on Hikari</p>
            </div>
          </div>
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-7 flex flex-col justify-center">
            <h3 className="font-body font-bold text-lg text-[var(--color-text-primary)] mb-3">✈️ Kansai Airport (KIX)</h3>
            <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Direct flights from some US cities. The Haruka Express runs from KIX to Kyoto Station in 75 minutes — no transfers, no stress.
            </p>
            <p className="font-body text-xs text-accent font-semibold">~13–15 hrs from LA · ~15–17 hrs from NYC</p>
          </div>
        </div>
      </section>

      {/* ── Bottom nav ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 flex gap-6 flex-wrap items-center">
        <Link to="/destinations" className="font-body text-sm font-semibold text-accent hover:underline">← All Destinations</Link>
        <Link to="/articles" className="font-body text-sm font-semibold text-[var(--color-text-muted)] hover:text-accent transition-colors">Browse Japan Articles →</Link>
      </div>
    </main>
  )
}

export default KyotoPage
