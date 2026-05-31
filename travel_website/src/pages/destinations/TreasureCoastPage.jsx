import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// All images — Unsplash License (free for commercial use, no attribution required)
const HERO    = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80'
const OG_IMG  = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80'
const PAGE_URL = 'https://www.gohanworld.com/destinations/treasurecoast/'

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Treasure Coast, Florida',
    description: 'Treasure Coast, Florida — miles of uncrowded Atlantic beaches, fresh seafood, and a laid-back coastal charm far from the tourist rush.',
    url: PAGE_URL,
    image: OG_IMG,
    geo: { '@type': 'GeoCoordinates', latitude: 27.1975, longitude: -80.2519 },
    containedInPlace: { '@type': 'State', name: 'Florida', containedInPlace: { '@type': 'Country', name: 'United States' } },
    touristType: ['Beach Tourism', 'Nature Tourism', 'Eco Tourism', 'Senior Travel'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',           item: 'https://www.gohanworld.com/' },
      { '@type': 'ListItem', position: 2, name: 'Destinations',   item: 'https://www.gohanworld.com/destinations/' },
      { '@type': 'ListItem', position: 3, name: 'Treasure Coast', item: PAGE_URL },
    ],
  },
]

const facts = [
  { label: 'Best Time',  value: 'Oct–May' },
  { label: 'Language',   value: 'English' },
  { label: 'Currency',   value: 'USD ($)' },
  { label: 'Getting In', value: 'Drive or fly' },
  { label: 'Airports',   value: 'PBI · MCO · FLL' },
]

const attractions = [
  {
    name: 'Hutchinson Island',
    area: 'Stuart / Jensen Beach',
    desc: '24 miles of pristine Atlantic coast — some of Florida\'s least crowded beaches. Sea turtle nesting from May through October makes this stretch especially special.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    alt: 'Pristine uncrowded Atlantic Ocean beach with clear turquoise water and white sand on Hutchinson Island, Florida',
  },
  {
    name: 'Jonathan Dickinson State Park',
    area: 'Hobe Sound',
    desc: 'Florida\'s most biologically diverse state park — kayak the Loxahatchee River, spot manatees and alligators, and watch bald eagles along the cypress banks.',
    img: 'https://images.unsplash.com/photo-1472745942893-4b9f730c7668?auto=format&fit=crop&w=800&q=80',
    alt: 'Kayakers paddling through calm mangrove waterway in a Florida state park with lush green vegetation',
  },
  {
    name: 'Downtown Stuart Riverfront',
    area: 'Stuart',
    desc: '"The Sailfish Capital of the World" — a charming brick-street waterfront with galleries, open-air dining, boutiques, and fresh-catch seafood restaurants.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    alt: 'Scenic waterfront marina with boats docked at a sunny Florida coastal town with palm trees',
  },
  {
    name: 'Fort Pierce Inlet State Park',
    area: 'Fort Pierce',
    desc: 'Great swimming, fishing, and snorkeling right at the inlet. The UDT-SEAL Museum nearby tells the history of Naval Special Warfare — free and genuinely fascinating.',
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
    alt: 'Clear blue ocean water and rocky shoreline at Fort Pierce Inlet State Park in Florida with people fishing',
  },
]

const food = [
  {
    name: 'Fresh Grouper',
    desc: 'Grilled, blackened, or in a sandwich — caught that morning.',
    img: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=600&q=80',
    alt: 'Grilled fresh grouper fish fillet with lemon and herbs served at a Florida waterfront restaurant',
  },
  {
    name: 'Stone Crab Claws',
    desc: 'October–May season only. Chilled, with mustard sauce.',
    img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3df1?auto=format&fit=crop&w=600&q=80',
    alt: 'Florida stone crab claws served chilled on ice with mustard dipping sauce',
  },
  {
    name: 'Fish Tacos',
    desc: 'Fresh local catch, lime crema, mango salsa. A coastal staple.',
    img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80',
    alt: 'Fresh grilled fish tacos with mango salsa, lime and cilantro served on corn tortillas',
  },
  {
    name: 'Key Lime Pie',
    desc: 'The Florida classic. Tart, creamy, and better here than anywhere.',
    img: 'https://images.unsplash.com/photo-1562440499-64e9a5c5a3db?auto=format&fit=crop&w=600&q=80',
    alt: 'Slice of authentic Florida Key lime pie with graham cracker crust and whipped cream topping',
  },
  {
    name: 'Indian River Oysters',
    desc: 'Local oysters from the lagoon — gaining serious recognition.',
    img: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=600&q=80',
    alt: 'Fresh raw oysters on the half shell with ice and lemon wedges at a Florida seafood bar',
  },
  {
    name: 'Smoked Fish Dip',
    desc: 'A Florida tradition — served at every local waterfront spot.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    alt: 'Florida smoked fish dip with crackers served at a casual waterfront restaurant',
  },
]

const tips = [
  { icon: '🚗', tip: 'A rental car is essential — the Treasure Coast is spread out, and Uber coverage is limited outside Stuart and Vero Beach. Plan to drive everywhere.' },
  { icon: '🐢', tip: 'Sea turtle nesting season runs May–October. Stay off beaches after dark and never use flashlights — light disorients hatchlings navigating by moonlight.' },
  { icon: '🐟', tip: 'Sebastian Inlet is considered one of the best fishing spots in Florida. Whether you fish or not, the bridge view at sunrise is worth the early alarm.' },
  { icon: '🌡️', tip: 'October–May is the sweet spot — warm (70–85°F), dry, and far fewer crowds than peak summer. June–September is hot, humid, and hurricane season.' },
  { icon: '🏖️', tip: 'Bathtub Beach in Stuart is one of the calmest wading spots on Florida\'s east coast — perfect for seniors and young children because of the natural reef barrier.' },
]

const TreasureCoastPage = () => {
  useEffect(() => {
    document.title = 'Treasure Coast, Florida Travel Guide — Beaches, Food & Nature | Gohan World'
    return () => { document.title = 'Gohan World - USA⇄Japan Travel & Insurance Guides' }
  }, [])

  return (
    <main className="bg-[var(--color-bg-page)] text-[var(--color-text-primary)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[460px] flex items-end overflow-hidden">
        <img src={HERO} alt="Panoramic view of a pristine Atlantic Ocean beach in Florida with calm turquoise water, white sand and clear blue skies" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-14">
          <span className="inline-block bg-accent text-white text-[0.65rem] font-body font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full mb-3">Florida, USA</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-none">Treasure Coast</h1>
          <p className="font-body text-white/80 text-lg md:text-xl mt-3 font-light tracking-wide">Uncrowded beaches. Fresh seafood. Real Florida.</p>
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
          The Treasure Coast — spanning Stuart, Fort Pierce, Jensen Beach, and Hutchinson Island along Florida's Atlantic coast — is what Florida looked like before the tourist rush. Named for the Spanish treasure fleets that wrecked here in 1715, the region today offers something increasingly rare: <strong className="text-[var(--color-text-primary)]">long stretches of unspoiled beach where you can actually find a quiet spot</strong>.
        </p>
        <p className="font-body text-[var(--color-text-secondary)] text-lg leading-relaxed">
          For travelers who shuttle between Japan and the US, the Treasure Coast is a perfect place to decompress. The pace is genuinely slow, the seafood is extraordinary, and the natural beauty — from sea turtle nesting beaches to the Pelican Island wildlife refuge — is world-class.
        </p>
      </section>

      {/* ── Top Attractions ── */}
      <section className="bg-[var(--color-bg-section-alt)] border-t border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-1">Top Attractions</h2>
          <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">The Treasure Coast rewards slowing down — these are the places worth spending real time in.</p>
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
        <p className="font-body text-[var(--color-text-muted)] text-sm mb-10">Florida seafood at its freshest — caught locally, served simply, and better than anything you'll find further south in the tourist belt.</p>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8">Travel Tips for the Treasure Coast</h2>
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
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80" alt="Airplane wing above clouds during a domestic flight to Florida" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 p-7 flex flex-col justify-end h-full">
              <span className="inline-block bg-accent text-white font-body text-[0.62rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 w-fit">Closest Airport</span>
              <h3 className="font-body font-bold text-lg text-white mb-2">✈️ Palm Beach International (PBI)</h3>
              <p className="font-body text-sm text-white/80 leading-relaxed mb-3">About 45 minutes south of Stuart — the most direct access to the Treasure Coast. Served by all major US carriers.</p>
              <p className="font-body text-xs text-accent font-semibold">~45 min drive to Stuart · direct flights from most major US cities</p>
            </div>
          </div>
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-7 flex flex-col justify-center">
            <h3 className="font-body font-bold text-lg text-[var(--color-text-primary)] mb-3">🚗 Drive from Orlando or Miami</h3>
            <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Orlando (MCO) is 1.5 hrs north via Florida Turnpike. Fort Lauderdale (FLL) and Miami (MIA) are 1.5–2 hrs south on I-95 — both serve more international routes.
            </p>
            <p className="font-body text-xs text-accent font-semibold">MCO: 1.5 hrs north · FLL: 1.5 hrs south · MIA: 2 hrs south</p>
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

export default TreasureCoastPage
