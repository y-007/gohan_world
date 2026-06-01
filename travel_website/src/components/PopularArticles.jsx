import React from 'react'
import { Link } from 'react-router-dom'
import './Destinations.css'
import { useResizeObserver, fluidSize } from '../hooks/useResizeObserver'

const popular = [
  {
    icon: '🎒',
    category: 'Trip Essentials',
    title: "Suica or Pasmo? Here's All You Need to Know",
    description: 'Which card to get, how to load it, and what to do with leftover balance',
    link: '/articles/suica-vs-pasmo-ic-card-japan',
  },
  {
    icon: '📶',
    category: 'Trip Essentials',
    title: "The Beginner's Guide to eSIMs in Japan",
    description: "Skip the roaming fees — here's the easiest way to stay connected in Japan",
    link: '/articles/esim-japan-beginners-guide',
  },
  {
    icon: '🏥',
    category: 'Travel Insurance',
    title: 'Best Travel Insurance for Japan 2026',
    description: "Why your regular insurance won't cut it — and what actually covers you",
    link: '/articles/best-travel-insurance-japan-2026',
  },
  {
    icon: '🌏',
    category: 'Travel Insurance',
    title: "Why Medicare Won't Cover You Abroad",
    description: 'What every American senior needs to know before boarding that flight',
    link: '/articles/medicare-wont-cover-you-abroad',
  },
  {
    icon: '🧳',
    category: 'Trip Essentials',
    title: 'Japan Packing List',
    description: 'Everything you actually need — and what to leave at home',
    link: '/articles/japan-packing-list',
  },
]

const PopularArticles = () => {
  const [ref, width] = useResizeObserver()
  const headingSize = fluidSize(width, 30, 46)
  const subSize     = fluidSize(width, 15, 18)

  return (
    <section
      className="destinations-section"
      style={{ backgroundColor: 'var(--color-bg-section-alt)' }}
    >
      <div
        ref={ref}
        className="destinations-section__inner"
        style={{
          '--fluid-heading': `${headingSize}px`,
          '--fluid-sub':     `${subSize}px`,
        }}
      >
        <h2 className="destinations-section__heading">Where Most Readers Start</h2>
        <p className="destinations-section__sub">New here? These are the guides our readers find most useful.</p>

        <div className="destinations-grid">
          {popular.map((item) => (
            <Link
              to={item.link}
              key={item.link}
              className="destination-card destination-card--link"
            >
              <div className="destination-card__emoji">{item.icon}</div>
              <div className="destination-card__body">
                <span className="destination-card__tag">{item.category}</span>
                <h3 className="destination-card__name">{item.title}</h3>
                <p className="destination-card__desc">{item.description}</p>
                <span className="destination-card__cta">Read More →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/articles"
            className="inline-block text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] hover:underline"
          >
            See All Articles →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PopularArticles
