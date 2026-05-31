import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// All images — Unsplash License (free for commercial use, no attribution required)
const HERO    = 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1920&q=80'
const OG_IMG  = 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80'
const PAGE_URL = 'https://www.gohanworld.com/destinations/osaka/'

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Osaka',
    description: 'Osaka — Japan\'s kitchen and street food capital. Loud, warm, and obsessed with eating well.',
    url: PAGE_URL,
    image: OG_IMG,
    geo: { '@type': 'GeoCoordinates', latitude: 34.6937, longitude: 135.5023 },
    containedInPlace: { '@type': 'Country', name: 'Japan' },
    touristType: ['Food Tourism', 'Cultural Tourism', 'Street Food', 'City Break'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://www.gohanworld.com/' },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.gohanworld.com/destinations/' },
      { '@type': 'ListItem', position: 3, name: 'Osaka',        item: PAGE_URL },
    ],
  },
]

const facts = [
  { label: 'Best Time',  value: 'Mar–May · Oct–Nov' },
  { label: 'Language',   value: 'Japanese' },
  { label: 'Currency',   value: 'Yen (¥)' },
  { label: 'From USA',   value: '12–16 hrs' },
  { label: 'Airports',   value: 'KIX' },
]

const attractions = [
  {
    name: 'Dotonbori',
    area: 'Namba',
    desc: 'The neon canal district — the Glico running man, giant mechanical crabs, and some of the best street food in Japan all on one electric strip.',
    img: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=800&q=80',
    alt: 'Dotonbori canal in Osaka at night with bright neon signs, the Glico running man billboard and restaurant facades reflected in the water',
  },
  {
    name: 'Osaka Castle',
    area: 'Chuo',
    desc: 'A beautifully restored 16th-century castle surrounded by a moat and park. The interior museum tells the story of Japan\'s unification era.',
    img: 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=800&q=80',
    alt: 'Osaka Castle white and gold pagoda tower reflected in the moat surrounded by cherry blossom trees in spring',
  },
  {
    name: 'Kuromon Ichiba Market',
    area: 'Namba',
    desc: '180 stalls of fresh seafood, produce, and ready-to-eat food. Walk, graze, and repeat — this is Osaka eating culture at its most direct.',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
    alt: 'Colorful fresh seafood and food vendor stalls at Kuromon Ichiba covered market in Osaka',
  },
  {
    name: 'Tsutenkaku Tower',
    area: 'Shinsekai',
    desc: 'A retro 1950s-style tower presiding over the Shinsekai neighborhood — neon signs, kushikatsu bars, and old Osaka atmosphere at every turn.',
    img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80',
    alt: 'Tsutenkaku Tower illuminated at night in the Shinsekai retro district of Osaka with vintage neon signs',
  },
]

const food = [
  {
    name: 'Takoyaki',
    desc: 'Octopus balls. The Osaka street food. Get them at Wanaka.',
    img: 'https://images.unsplash.com/photo-1599974579168-3a8ea046a8de?auto=format&fit=crop&w=600&q=80',
    alt: 'Golden round takoyaki octopus balls topped with bonito flakes, mayo and takoyaki sauce in a paper tray',
  },
  {
    name: 'Okonomiyaki',
    desc: 'Savory pancake, cabbage, pork, mayo + sauce. Order at the counter.',
    img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80',
    alt: 'Japanese okonomiyaki savory pancake topped with bonito flakes, nori, mayo and brown sauce on a griddle',
  },
  {
    name: 'Kushikatsu',
    desc: 'Deep-fried skewers. Rule: never double-dip the sauce.',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
    alt: 'Variety of kushikatsu deep-fried breaded skewers served with communal dipping sauce at an Osaka restaurant',
  },
  {
    name: 'Ramen',
    desc: 'Soy and salt broth — lighter than Fukuoka, deeper than Tokyo.',
    img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=600&q=80',
    alt: 'Bowl of Osaka-style soy ramen with tender chashu pork, noodles and green onion toppings',
  },
  {
    name: 'Udon',
    desc: 'Thick, chewy noodles in a lighter dashi broth. Sanuki style.',
    img: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=600&q=80',
    alt: 'Bowl of thick udon noodles in clear dashi broth topped with tempura and spring onion',
  },
  {
    name: 'Gyoza',
    desc: 'Osaka gyoza — thin-skinned, pan-fried to a crisp edge.',
    img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    alt: 'Pan-fried Japanese gyoza dumplings with crispy golden bottoms served with dipping sauce',
  },
]

const tips = [
  { icon: '🎟️', tip: 'Get the Osaka Amazing Pass — 1 or 2 day unlimited metro rides plus free entry to 40+ attractions including Osaka Castle and Tempozan Ferris Wheel.' },
  { icon: '🌃', tip: 'Dotonbori is best experienced after dark — the neon signs are in full effect and the street food stalls are at their most vibrant after 7pm.' },
  { icon: '🚆', tip: 'Easy day trips: Nara with free-roaming deer (35 min), Kyoto (15 min by Shinkansen), and Kobe\'s beef and harbor (30 min) are all close by.' },
  { icon: '🗣️', tip: 'Osaka people are known for being warm and talkative with strangers — don\'t be shy to ask locals where the best spots are.' },
  { icon: '💴', tip: 'Osaka is noticeably cheaper than Tokyo. Street food runs ¥200–600, quality ramen under ¥1,000. Budget accordingly — you\'ll eat very well for less.' },
]

const OsakaPage = () => {
  useEffect(() => {
    document.title = 'Osaka Travel Guide — Street Food, Dotonbori & Culture | Gohan World'
    return () => { document.title = 'Gohan World - USA⇄Japan Travel & Insurance Guides' }
  }, [])

  return (
    <main className="bg-[var(--color-bg-page)] text-[var(--color-text-primary)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[460px] flex items-end overflow-hidden">
        <img src={HERO} alt="Dotonbori canal district at night in Osaka, Japan with bright neon signs and the famous Glico running man billboard" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-14">
          <span className="inline-block bg-accent text-white text-[0.65rem] font-body font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full mb-3">Japan</span>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-none">Osaka</h1>
          <p className="font-body text-white/80 text-lg md:text-xl mt-3 font-light tracking-wide">Japan's kitchen. The world's best street food.</p>
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
          Osaka has a reputation, and it lives up to it. While Tokyo can feel cool and reserved, Osaka is loud, warm, and <strong className="text-[var(--color-text-primary)]">obsessed with food</strong>. Locals have a saying — "kuidaore" — which roughly means "eat until you drop." Consider yourself warned.
        </p>
        <p className="font-body text-[var(--color-text-secondary)] text-lg leading-relaxed">
          It's also Japan's most approachable city for first-time visitors. The nightlife runs later, the food is cheaper and often more satisfying than Tokyo, and people are genuinely friendlier to strangers.
        </p>
      </section>

      {/* ── Top Attractions ── */}
      <section className="bg-[var(--color-bg-section-alt)] border-t border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-1">Top Attractions</h2>
          <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">In Osaka, the main attraction is the city itself — but these anchor each day perfectly.</p>
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
        <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">Osaka's street food scene is the reason people plan entire trips around this city.</p>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8">Travel Tips for Osaka</h2>
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
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8">Getting There from the USA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80" alt="Airplane wing above clouds during a long-haul flight to Japan" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 p-7 flex flex-col justify-end h-full">
              <span className="inline-block bg-accent text-white font-body text-[0.62rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 w-fit">Main Airport</span>
              <h3 className="font-body font-bold text-lg text-white mb-2">✈️ Kansai Airport (KIX)</h3>
              <p className="font-body text-sm text-white/80 leading-relaxed mb-3">Direct flights from LA and some other US cities. The Nankai Rapi:t runs from KIX to Namba in 38 minutes — fast, direct, no transfers.</p>
              <p className="font-body text-xs text-accent font-semibold">~12–14 hrs from LA · Nankai Rapi:t: 38 min to Namba</p>
            </div>
          </div>
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-7 flex flex-col justify-center">
            <h3 className="font-body font-bold text-lg text-[var(--color-text-primary)] mb-3">🚄 Via Tokyo</h3>
            <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Fly into Tokyo (HND or NRT), then take the Shinkansen to Shin-Osaka. Just 2h30m on the Nozomi — the most common Japan routing for US travelers.
            </p>
            <p className="font-body text-xs text-accent font-semibold">Nozomi: 2h30m from Tokyo · Hikari: 3hrs (JR Pass accepted)</p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 flex gap-6 flex-wrap items-center">
        <Link to="/destinations" className="font-body text-sm font-semibold text-accent hover:underline">← All Destinations</Link>
        <Link to="/articles" className="font-body text-sm font-semibold text-[var(--color-text-muted)] hover:text-accent transition-colors">Browse Japan Articles →</Link>
      </div>
    </main>
  )
}

export default OsakaPage
