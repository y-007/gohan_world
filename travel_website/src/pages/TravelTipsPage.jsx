import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './TravelTipsPage.module.css'

const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbysNwT7IUrVZzsmSOS58pmoFnaIeXwOYE2l83EPcRv4bRu-1Jop2yhXLWi9I6sG0eye/exec'

const SECTIONS = [
  {
    id: 'before-you-fly',
    emoji: '✈️',
    heading: 'Before You Fly',
    links: [
      { slug: 'first-trip-japan-checklist',        label: 'Your First Trip to Japan Checklist' },
      { slug: 'japan-packing-list-seniors',         label: 'Japan Packing List for Seniors' },
      { slug: 'best-travel-insurance-japan-2026',   label: 'Best Travel Insurance for Japan' },
      { slug: 'medicare-wont-cover-you-abroad',     label: "Medicare Won't Cover You Abroad" },
    ],
  },
  {
    id: 'staying-connected',
    emoji: '📱',
    heading: 'Staying Connected',
    links: [
      { slug: 'esim-japan-beginners-guide',         label: "eSIM Beginner's Guide for Japan" },
      { slug: 'suica-vs-pasmo-ic-card-japan',       label: 'Suica or Pasmo? Which IC Card to Get' },
    ],
  },
  {
    id: 'getting-around',
    emoji: '🚅',
    heading: 'Getting Around',
    links: [
      { slug: 'haneda-airport-guide-tokyo',         label: 'Tokyo Airport Guide: Haneda vs Narita' },
      { slug: 'takkyubin-japan-luggage-delivery',   label: 'Takkyubin: Japan Luggage Forwarding' },
    ],
  },
]

const TravelTipsPage = () => {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    document.title = 'Japan Travel Tips for US Visitors — Practical Guides by Yuko | Gohan World'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Practical Japan travel tips for American seniors and first-timers — eSIMs, packing, money, transit, and more. From Yuko at Gohan World.')
    const canon  = document.querySelector('link[rel="canonical"]')
    if (canon)  canon.setAttribute('href', 'https://www.gohanworld.com/travel-tips/')
    const ogUrl  = document.querySelector('meta[property="og:url"]')
    if (ogUrl)  ogUrl.setAttribute('content', 'https://www.gohanworld.com/travel-tips/')
    const ogType = document.querySelector('meta[property="og:type"]')
    if (ogType) ogType.setAttribute('content', 'website')
    return () => {
      document.title = 'Japan Travel & Insurance for Seniors & First-Timers | Gohan World'
      if (canon)  canon.setAttribute('href', 'https://www.gohanworld.com/')
      if (ogUrl)  ogUrl.setAttribute('content', 'https://www.gohanworld.com/')
      if (ogType) ogType.setAttribute('content', 'website')
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      let city = '', country = '', ip = ''
      try {
        const locRes = await fetch('https://ipapi.co/json/')
        if (locRes.ok) {
          const loc = await locRes.json()
          city    = loc.city         || ''
          country = loc.country_name || ''
          ip      = loc.ip           || ''
        }
      } catch { /* location is optional */ }
      const now = new Date()
      const params = new URLSearchParams({
        email,
        firstName: '',
        date:    now.toLocaleDateString('en-US'),
        time:    now.toLocaleTimeString('en-US'),
        city, country, ip,
        source: 'travel-tips-page',
      })
      const res = await fetch(`${SHEETS_ENDPOINT}?${params}`)
      if (res.ok) { setStatus('success'); setEmail('') }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className={styles.page}>

      {/* ── Hero ───────────────────────────────────────── */}
      <section className={styles.hero}>
        <h1 className={styles.h1}>Japan Travel Tips for First-Timers &amp; Seniors</h1>
        <p className={styles.intro}>
          Before you land in Tokyo, there are a handful of things that will make your trip dramatically easier — and a few gaps in your coverage that could cost you thousands if you don't catch them now. This is where I'd send a friend who's never been to Japan. Start here, go in order, and you'll land prepared.
        </p>
      </section>

      {/* ── Sections ───────────────────────────────────── */}
      {SECTIONS.map(section => (
        <section key={section.id} className={styles.section}>
          <h2 className={styles.sectionHeading}>
            <span className={styles.sectionEmoji}>{section.emoji}</span>
            {section.heading}
          </h2>
          <ul className={styles.linkList}>
            {section.links.map(({ slug, label }) => (
              <li key={slug}>
                <Link to={`/articles/${slug}`} className={styles.linkCard}>
                  <span className={styles.linkLabel}>{label}</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* ── Newsletter CTA ─────────────────────────────── */}
      <section className={styles.cta}>
        <h2 className={styles.ctaHeading}>Get my Japan Pre-Trip Checklist</h2>
        <p className={styles.ctaSub}>Sent to your inbox — free.</p>
        {status === 'success' ? (
          <p className={styles.ctaSuccess}>You're in — check your inbox.</p>
        ) : (
          <form className={styles.ctaForm} onSubmit={handleSubmit}>
            <input
              className={styles.ctaInput}
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button
              className={styles.ctaBtn}
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : 'Send it to my inbox →'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className={styles.ctaError}>Something went wrong — try again or email me directly.</p>
        )}
      </section>

    </main>
  )
}

export default TravelTipsPage
