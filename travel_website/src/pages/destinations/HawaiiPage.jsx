import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// All images — Unsplash License (free for commercial use, no attribution required)
const HERO    = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80'
const OG_IMG  = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
const PAGE_URL = 'https://www.gohanworld.com/destinations/hawaii/'

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Hawaii',
    description: 'Hawaii — where Japanese and American cultures meet the Pacific, with breathtaking nature and warm island hospitality.',
    url: PAGE_URL,
    image: OG_IMG,
    geo: { '@type': 'GeoCoordinates', latitude: 21.3069, longitude: -157.8583 },
    containedInPlace: { '@type': 'Country', name: 'United States' },
    touristType: ['Beach Tourism', 'Nature Tourism', 'Cultural Tourism', 'Senior Travel'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://www.gohanworld.com/' },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.gohanworld.com/destinations/' },
      { '@type': 'ListItem', position: 3, name: 'Hawaii',       item: PAGE_URL },
    ],
  },
]

const facts = [
  { label: 'Best Time',  value: 'Apr–May · Sep–Oct' },
  { label: 'Language',   value: 'English · Hawaiian' },
  { label: 'Currency',   value: 'USD ($)' },
  { label: 'From Japan', value: '7–8 hrs' },
  { label: 'Airports',   value: 'HNL · OGG · KOA' },
]

const attractions = [
  {
    name: 'Waikiki Beach',
    area: 'Oahu',
    desc: 'The iconic crescent beach with Diamond Head as its backdrop. Crowded but perfect — legendary surf, calm swimming, and spectacular sunsets.',
    img: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=800&q=80',
    alt: 'Waikiki Beach with turquoise water, palm trees and Diamond Head volcanic crater in the background on Oahu, Hawaii',
  },
  {
    name: 'Road to Hana',
    area: 'Maui',
    desc: 'A 64-mile coastal drive through rainforest, waterfalls, and lava cliffs. The journey is the destination — leave early and take all day.',
    img: 'https://images.unsplash.com/photo-1501731843898-5cb98e32e82f?auto=format&fit=crop&w=800&q=80',
    alt: 'Lush green tropical rainforest and waterfalls along the winding Road to Hana in Maui, Hawaii',
  },
  {
    name: 'Pearl Harbor',
    area: 'Oahu',
    desc: 'The USS Arizona Memorial and museum — a moving, essential piece of American and Pacific history. Reserve tickets in advance.',
    img: 'https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?auto=format&fit=crop&w=800&q=80',
    alt: 'USS Arizona Memorial white structure spanning over the sunken battleship at Pearl Harbor, Oahu, Hawaii',
  },
  {
    name: 'Volcanoes National Park',
    area: 'Big Island',
    desc: 'Watch lava flows, walk through lava tubes, and stand at the edge of an active caldera. One of the most dramatic landscapes on earth.',
    img: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
    alt: 'Glowing red lava flowing from an active volcano into the ocean at Hawaii Volcanoes National Park on the Big Island',
  },
]

const food = [
  {
    name: 'Poke',
    desc: 'Born here. Fresh tuna or salmon, soy, sesame, toppings.',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    alt: 'Fresh Hawaiian poke bowl with tuna, rice, avocado, edamame and sesame dressing',
  },
  {
    name: 'Plate Lunch',
    desc: 'Two scoops rice, mac salad, protein. Local comfort food.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    alt: 'Classic Hawaiian plate lunch with two scoops of white rice, macaroni salad and teriyaki chicken',
  },
  {
    name: 'Shave Ice',
    desc: 'Not a snow cone — paper-thin ice, real fruit syrups. Life-changing.',
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80',
    alt: 'Colorful Hawaiian shave ice with tropical fruit syrups in vibrant pink, blue and yellow layers',
  },
  {
    name: 'Loco Moco',
    desc: 'Rice, burger patty, fried egg, gravy. Comfort perfected.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    alt: 'Hawaiian loco moco dish with white rice topped with hamburger patty, fried egg and brown gravy',
  },
  {
    name: 'Fresh Seafood',
    desc: 'Mahi-mahi, ono, opah — caught that morning.',
    img: 'https://images.unsplash.com/photo-1551801841-ecad875a2142?auto=format&fit=crop&w=600&q=80',
    alt: 'Grilled fresh mahi-mahi fish fillet served with tropical fruit salsa and vegetables',
  },
  {
    name: 'Malasadas',
    desc: 'Portuguese fried dough. Leonard\'s Bakery is the destination.',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    alt: 'Warm golden malasada Portuguese-style fried doughnuts coated in sugar from Leonard\'s Bakery in Hawaii',
  },
]

const tips = [
  { icon: '🚗', tip: 'Rent a car on every island except Oahu, where TheBus covers Honolulu well. Outside the city, public transit is nearly nonexistent.' },
  { icon: '🌊', tip: 'Use reef-safe sunscreen only — Hawaii law bans oxybenzone and octinoxate to protect coral reefs. Standard sunscreen is illegal to sell here.' },
  { icon: '📋', tip: 'Book popular hikes in advance — Diamond Head, Kalalau Trail, and Haleakala sunrise all require online reservations now.' },
  { icon: '🐢', tip: 'Sea turtle nesting season runs May–October. Stay off beaches at night and never use flashlights near the water — it disorients hatchlings.' },
  { icon: '🌺', tip: 'April–May and September–October offer the best value — school is in session, crowds thin out dramatically, and prices drop 20–30%.' },
]

const HawaiiPage = () => {
  useEffect(() => {
    document.title = 'Hawaii Travel Guide — Beaches, Food & Island Tips | Gohan World'
    return () => { document.title = 'USA⇄Japan Travel & Insurance Guides for Seniors & First-Timers 2026 | Gohan World' }
  }, [])

  return (
    <main className="bg-[var(--color-bg-page)] text-[var(--color-text-primary)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[460px] flex items-end overflow-hidden">
        <img src={HERO} alt="Crystal clear turquoise ocean water lapping a white sand tropical beach in Hawaii with palm trees" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-14">
          <span className="inline-block bg-accent text-white text-[0.65rem] font-body font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full mb-3">USA</span>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-none">Hawaii</h1>
          <p className="font-body text-white/80 text-lg md:text-xl mt-3 font-light tracking-wide">Where the Pacific becomes paradise.</p>
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
          Hawaii is where Japanese and American cultures meet the ocean halfway. The islands have one of the <strong className="text-[var(--color-text-primary)]">largest Japanese-American communities</strong> in the United States — visible in everything from the food trucks to the family names on road signs.
        </p>
        <p className="font-body text-[var(--color-text-secondary)] text-lg leading-relaxed">
          Whether you're stopping over between the US mainland and Japan or dedicating a full trip to the islands, Hawaii offers something increasingly rare: a place that genuinely moves at its own pace, and makes you want to do the same.
        </p>
      </section>

      {/* ── Top Attractions ── */}
      <section className="bg-[var(--color-bg-section-alt)] border-t border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-1">Top Attractions</h2>
          <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">Spread across six main islands — each with its own personality and highlights.</p>
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
        <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">Hawaii's food culture blends Japanese, Filipino, Korean, Portuguese, and Native Hawaiian traditions into something completely its own.</p>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8">Travel Tips for Hawaii</h2>
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
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80" alt="Airplane wing above clouds on a transpacific flight to Hawaii" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 p-7 flex flex-col justify-end h-full">
              <span className="inline-block bg-accent text-white font-body text-[0.62rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 w-fit">From Japan</span>
              <h3 className="font-body font-bold text-lg text-white mb-2">✈️ Honolulu (HNL) — Oahu</h3>
              <p className="font-body text-sm text-white/80 leading-relaxed mb-3">JAL and ANA fly direct from Tokyo HND/NRT to HNL in 7–8 hours. The most popular Japan–Hawaii route, especially for Japanese tourists.</p>
              <p className="font-body text-xs text-accent font-semibold">~7–8 hrs from Tokyo · JAL & ANA direct</p>
            </div>
          </div>
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-7 flex flex-col justify-center">
            <h3 className="font-body font-bold text-lg text-[var(--color-text-primary)] mb-3">✈️ From US Mainland</h3>
            <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Hawaiian Airlines, United, American, and Delta all fly from major US hubs. 5–6 hours from the West Coast, 10–11 hours from the East Coast.
            </p>
            <p className="font-body text-xs text-accent font-semibold">~5–6 hrs from LA/SF · ~10–11 hrs from NYC</p>
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

export default HawaiiPage
