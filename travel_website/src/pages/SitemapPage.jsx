import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import styles from './SitemapPage.module.css'

const SitemapPage = () => {
  useEffect(() => {
    document.title = 'Sitemap — Gohan World'
    return () => { document.title = 'Gohan World - USA⇄Japan Travel & Insurance Guides' }
  }, [])

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Sitemap</h1>
      <p className={styles.sub}>All pages on Gohan World — USA⇄Japan travel and insurance guide.</p>

      <hr className={styles.divider} />

      {/* ── Main Pages ─────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>🏠 Main Pages</h2>
        <ul className={styles.list}>
          <li><Link to="/" className={styles.link}>Home</Link> <span className={styles.pathLabel}>/</span></li>
          <li><Link to="/about" className={styles.link}>About</Link> <span className={styles.pathLabel}>/about</span></li>
          <li><Link to="/contact" className={styles.link}>Contact</Link> <span className={styles.pathLabel}>/contact</span></li>
        </ul>
      </section>

      <hr className={styles.divider} />

      {/* ── Articles ───────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>📝 Articles</h2>
        <ul className={styles.list}>
          <li><Link to="/articles" className={styles.link}>All Articles</Link> <span className={styles.pathLabel}>/articles</span></li>
          {articles.map(a => (
            <li key={a.slug}>
              <Link to={`/articles/${a.slug}`} className={styles.link}>{a.title}</Link>
              <span className={styles.pathLabel}>/articles/{a.slug}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className={styles.divider} />

      {/* ── Destinations ───────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>✈️ Destinations</h2>
        <ul className={styles.list}>
          <li><Link to="/destinations" className={styles.link}>All Destinations</Link> <span className={styles.pathLabel}>/destinations</span></li>
          <li><Link to="/destinations/tokyo" className={styles.link}>Tokyo, Japan</Link> <span className={styles.pathLabel}>/destinations/tokyo</span></li>
          <li><Link to="/destinations/kyoto" className={styles.link}>Kyoto, Japan</Link> <span className={styles.pathLabel}>/destinations/kyoto</span></li>
          <li><Link to="/destinations/osaka" className={styles.link}>Osaka, Japan</Link> <span className={styles.pathLabel}>/destinations/osaka</span></li>
          <li><Link to="/destinations/hawaii" className={styles.link}>Hawaii, USA</Link> <span className={styles.pathLabel}>/destinations/hawaii</span></li>
          <li><Link to="/destinations/newyork" className={styles.link}>New York, USA</Link> <span className={styles.pathLabel}>/destinations/newyork</span></li>
          <li><Link to="/destinations/treasurecoast" className={styles.link}>Treasure Coast, Florida</Link> <span className={styles.pathLabel}>/destinations/treasurecoast</span></li>
        </ul>
      </section>

      <hr className={styles.divider} />

      {/* ── Legal ──────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>📄 Legal</h2>
        <ul className={styles.list}>
          <li><Link to="/affiliate-disclosure" className={styles.link}>Affiliate Disclosure</Link> <span className={styles.pathLabel}>/affiliate-disclosure</span></li>
          <li><Link to="/disclaimer" className={styles.link}>Disclaimer</Link> <span className={styles.pathLabel}>/disclaimer</span></li>
          <li><Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link> <span className={styles.pathLabel}>/privacy-policy</span></li>
          <li><Link to="/sitemap" className={styles.link}>Sitemap</Link> <span className={styles.pathLabel}>/sitemap</span></li>
        </ul>
      </section>

      <hr className={styles.divider} />

      {/* ── Japanese Pages (JP) — Coming Soon ─────────── */}
      <section className={`${styles.section} ${styles.comingSoon}`}>
        <h2 className={styles.sectionHeading}>
          🇯🇵 Japanese Pages (JP)
          <span className={styles.badge}>Coming Soon</span>
        </h2>
        <ul className={styles.list}>
          {/* Placeholder structure — JP routes will follow /jp/... convention */}
          {/* <li><Link to="/jp" className={styles.link}>ホーム</Link> <span className={styles.pathLabel}>/jp</span></li> */}
          {/* <li><Link to="/jp/articles" className={styles.link}>記事一覧</Link> <span className={styles.pathLabel}>/jp/articles</span></li> */}
          {/* <li><Link to="/jp/destinations" className={styles.link}>目的地</Link> <span className={styles.pathLabel}>/jp/destinations</span></li> */}
          <li><span style={{ fontSize: '0.88rem' }}>Pages will appear here when the Japanese section launches.</span></li>
        </ul>
      </section>
    </main>
  )
}

export default SitemapPage
