import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// All images — Unsplash License (free for commercial use, no attribution required)
const HERO    = 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1920&q=80'
const OG_IMG  = 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=80'
const PAGE_URL = 'https://www.gohanworld.com/destinations/tokyo/'

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Tokyo',
    description: 'Tokyo is Japan\'s capital — ancient temples, electric streets, and the world\'s best food, all in one city.',
    url: PAGE_URL,
    image: OG_IMG,
    geo: { '@type': 'GeoCoordinates', latitude: 35.6762, longitude: 139.6503 },
    containedInPlace: { '@type': 'Country', name: 'Japan' },
    touristType: ['Cultural Tourism', 'Food Tourism', 'Senior Travel', 'City Break'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://www.gohanworld.com/' },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.gohanworld.com/destinations/' },
      { '@type': 'ListItem', position: 3, name: 'Tokyo',        item: PAGE_URL },
    ],
  },
]

const facts = [
  { label: 'Best Time',  value: 'Mar–May · Oct–Nov' },
  { label: 'Language',   value: 'Japanese' },
  { label: 'Currency',   value: 'Yen (¥)' },
  { label: 'From USA',   value: '12–16 hrs' },
  { label: 'Airports',   value: 'HND · NRT' },
]

const attractions = [
  {
    name: 'Senso-ji Temple',
    area: 'Asakusa',
    desc: "Tokyo's oldest temple, founded 628 AD. Arrive at dawn — the lantern-lit gate is yours before the crowds.",
    img: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=800&q=80',
    alt: 'Kaminarimon gate of Senso-ji Temple illuminated at night in Asakusa, Tokyo',
    link: '/articles/asakusa-hidden-spots',
    linkText: 'Beyond Senso-ji: 9 hidden Asakusa spots →',
  },
  {
    name: 'Shibuya Crossing',
    area: 'Shibuya',
    desc: 'Up to 3,000 people cross at once when the lights change. Watch from the cafés above for the full effect.',
    img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80',
    alt: 'Shibuya scramble crossing at night with neon lights and crowds in Tokyo',
  },
  {
    name: 'Tsukiji Outer Market',
    area: 'Tsukiji',
    desc: "Still the city's freshest seafood, tamagoyaki, and street bites. Get here early — vendors sell out fast.",
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
    alt: 'Fresh seafood and fish stalls at Tsukiji outer market in Tokyo',
  },
  {
    name: 'Shinjuku Gyoen',
    area: 'Shinjuku',
    desc: '58 hectares of calm inside Tokyo\'s most electric district. In spring, the cherry blossoms here are unforgettable.',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80',
    alt: 'Cherry blossoms in full bloom over a pond in Shinjuku Gyoen garden, Tokyo',
  },
]

const food = [
  {
    name: 'Ramen',
    desc: 'Every regional style. Follow the line.',
    img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=600&q=80',
    alt: 'Steaming bowl of Japanese ramen with chashu pork and soft-boiled egg',
  },
  {
    name: 'Sushi',
    desc: 'Conveyor belt to omakase — both excellent.',
    img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80',
    alt: 'Assorted nigiri sushi pieces on a wooden board',
  },
  {
    name: 'Izakaya',
    desc: 'Skewers, small plates, cold beer. Stay late.',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
    alt: 'Japanese izakaya pub food spread with grilled skewers and small plates',
  },
  {
    name: 'Convenience Store',
    desc: '7-Eleven here is a proper meal. Seriously.',
    img: 'https://images.unsplash.com/photo-1607301405390-d831c242f59b?auto=format&fit=crop&w=600&q=80',
    alt: 'Japanese convenience store shelves with onigiri and bento boxes',
  },
  {
    name: 'Tempura',
    desc: 'Light, crisp, legendary. Try Asakusa or Ginza.',
    img: 'https://images.unsplash.com/photo-1630431342789-a1da5702ef9e?auto=format&fit=crop&w=600&q=80',
    alt: 'Golden crispy tempura shrimp and vegetables served with dipping sauce',
  },
  {
    name: 'Street Food',
    desc: 'Yakitori, crepes, ningyo-yaki — eat standing.',
    img: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=600&q=80',
    alt: 'Japanese street food stall with yakitori skewers grilling over charcoal',
  },
]

const related = [
  {
    slug: 'asakusa-hidden-spots',
    icon: '✈️',
    title: 'Asakusa Beyond the Obvious: 9 Spots Most Tourists Walk Right Past',
    readTime: '8 min read',
  },
  {
    slug: 'haneda-airport-guide-tokyo',
    icon: '🎒',
    title: 'Tokyo Airport Guide: Why I Always Fly Into Haneda (And When Narita Is Actually the Better Pick)',
    readTime: '7 min read',
  },
  {
    slug: 'mt-fuji-day-trip-tokyo',
    icon: '✈️',
    title: 'Mt. Fuji Day Trip from Tokyo: What Seniors Need to Know Before You Go',
    readTime: '7 min read',
  },
  {
    slug: 'ibaraki-hidden-gems-beyond-tokyo',
    icon: '✈️',
    title: "Ibaraki's Hidden Gems: What to Do When You're Done with Tokyo",
    readTime: '8 min read',
  },
]

const tips = [
  { icon: '🚇', tip: 'Get a Suica or Pasmo IC card at any station — works on all trains, subways, buses, and convenience store checkouts.' },
  { icon: '💴', tip: 'Carry cash. Many local restaurants, shrines, and smaller shops remain cash-only outside major tourist areas.' },
  { icon: '📱', tip: 'Download Google Maps offline before landing. Add Google Translate with Japanese for instant camera translation of menus.' },
  { icon: '🤫', tip: 'Keep noise low on trains — phone calls are considered rude. Watch locals and follow their lead.' },
  { icon: '🏨', tip: 'Stay in Shinjuku, Shibuya, or Asakusa for the best mix of transit access, food, and atmosphere on a first visit.' },
]

const TokyoPage = () => {
  useEffect(() => {
    document.title = 'Tokyo Travel Guide — Attractions, Food & Tips | Gohan World'
    return () => { document.title = 'Gohan World - USA⇄Japan Travel & Insurance Guides' }
  }, [])

  return (
    <main className="bg-[var(--color-bg-page)] text-[var(--color-text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[460px] flex items-end overflow-hidden">
        <img
          src={HERO}
          alt="Tokyo skyline at night with Tokyo Tower illuminated against a dark sky"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-14">
          <span className="inline-block bg-accent text-white text-[0.65rem] font-body font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full mb-3">
            Japan
          </span>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-none">
            Tokyo
          </h1>
          <p className="font-body text-white/80 text-lg md:text-xl mt-3 font-light tracking-wide">
            Ancient temples. Electric streets. The world's best food.
          </p>
        </div>
      </section>

      {/* ── Quick Facts strip ── */}
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
          Tokyo is one of the world's great cities — a place where <strong className="text-[var(--color-text-primary)]">ancient tradition and futuristic innovation</strong> exist side by side on the same block. From the serene grounds of Senso-ji Temple to the neon-soaked crossings of Shibuya, every neighborhood tells a different story.
        </p>
        <p className="font-body text-[var(--color-text-secondary)] text-lg leading-relaxed">
          Safe, clean, and surprisingly easy to navigate — Tokyo rewards every extra day you give it. Whether it's your first visit or your fifth, there is always something new to discover.
        </p>
      </section>

      {/* ── Top Attractions ── */}
      <section className="bg-[var(--color-bg-section-alt)] border-t border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-1">
            Top Attractions
          </h2>
          <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">
            Places every first-timer should experience — and regulars keep returning to.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {attractions.map(a => (
              <div
                key={a.name}
                className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-accent text-white font-body text-[0.62rem] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
                    {a.area}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-[var(--color-text-primary)] mb-2">{a.name}</h3>
                  <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">{a.desc}</p>
                  {a.link && (
                    <Link to={a.link} className="inline-block mt-3 font-body text-xs font-semibold text-accent hover:underline">
                      {a.linkText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Food & Dining ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-1">
          Food &amp; Dining
        </h2>
        <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">
          More Michelin stars than any city on earth — but the best meals often cost under ¥1,000.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {food.map(item => (
            <div key={item.name} className="relative rounded-xl overflow-hidden group h-52 md:h-60">
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8">
            Travel Tips for Tokyo
          </h2>
          <div className="flex flex-col gap-4">
            {tips.map(t => (
              <div
                key={t.icon}
                className="flex gap-4 items-start bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl px-6 py-4"
              >
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-14 border-b border-[var(--color-border)]">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8">
          Getting There from the USA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
              alt="Airplane wing over clouds at sunset during a long-haul flight"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 p-7 flex flex-col justify-end h-full">
              <span className="inline-block bg-accent text-white font-body text-[0.62rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 w-fit">Recommended</span>
              <h3 className="font-body font-bold text-lg text-white mb-2">✈️ Haneda Airport (HND)</h3>
              <p className="font-body text-sm text-white/80 leading-relaxed mb-3">
                30 min to central Tokyo by monorail. Closer, faster, expanding US routes.
              </p>
              <p className="font-body text-xs text-accent font-semibold">~12–14 hrs from LA · ~14–16 hrs from NYC</p>
            </div>
          </div>
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-7 flex flex-col justify-center">
            <h3 className="font-body font-bold text-lg text-[var(--color-text-primary)] mb-3">✈️ Narita Airport (NRT)</h3>
            <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              60–90 min from central Tokyo via Narita Express (N'EX) or Limousine Bus. More international carriers fly here.
            </p>
            <p className="font-body text-xs text-accent font-semibold">N'EX: ~60 min to Shinjuku · ~53 min to Shibuya</p>
          </div>
        </div>
      </section>

      {/* ── Related Articles ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-8">
          Tokyo Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {related.map(a => (
            <Link
              key={a.slug}
              to={`/articles/${a.slug}`}
              className="flex gap-4 items-start bg-[var(--color-bg-section-alt)] border border-[var(--color-border)] rounded-xl px-5 py-4 hover:border-accent hover:shadow-md transition-all duration-200 no-underline"
            >
              <span className="text-2xl flex-shrink-0 leading-none mt-0.5">{a.icon}</span>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="font-body text-sm font-semibold text-[var(--color-text-primary)] leading-snug">{a.title}</span>
                <span className="font-body text-xs text-[var(--color-text-muted)]">{a.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Bottom nav ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pb-10 flex gap-6 flex-wrap items-center border-t border-[var(--color-border)] pt-8">
        <Link to="/destinations" className="font-body text-sm font-semibold text-accent hover:underline">
          ← All Destinations
        </Link>
        <Link to="/articles" className="font-body text-sm font-semibold text-[var(--color-text-muted)] hover:text-accent transition-colors">
          Browse all Japan articles →
        </Link>
      </div>

    </main>
  )
}

export default TokyoPage
