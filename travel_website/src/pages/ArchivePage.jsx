import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articles'
import './ArchivePage.css'

const MONTH_ORDER = ['January','February','March','April','May','June','July','August','September','October','November','December']

const parseDate = (dateStr) => {
  const [month, year] = dateStr.split(' ')
  return { month, year: parseInt(year), monthIndex: MONTH_ORDER.indexOf(month) }
}

const ArchivePage = () => {
  const { year } = useParams()
  const yearNum = parseInt(year)

  const yearArticles = articles.filter(a => {
    const { year: y } = parseDate(a.date)
    return y === yearNum
  })

  useEffect(() => {
    document.title = `${year} Articles — Gohan World`
    const canon = document.querySelector('link[rel="canonical"]')
    if (canon) canon.setAttribute('href', `https://www.gohanworld.com/articles/archive/${year}/`)
    return () => {
      document.title = 'Japan Travel & Insurance for Seniors & First-Timers | Gohan World'
      if (canon) canon.setAttribute('href', 'https://www.gohanworld.com/')
    }
  }, [year])

  if (yearArticles.length === 0) {
    return (
      <main className="archive-page archive-page--empty">
        <p>No articles found for {year}.</p>
        <Link to="/articles" className="archive-page__back-link">← Back to Articles</Link>
      </main>
    )
  }

  // Group by month, newest month first
  const byMonth = yearArticles.reduce((acc, a) => {
    const { month } = parseDate(a.date)
    if (!acc[month]) acc[month] = []
    acc[month].push(a)
    return acc
  }, {})

  const sortedMonths = Object.keys(byMonth).sort(
    (a, b) => MONTH_ORDER.indexOf(b) - MONTH_ORDER.indexOf(a)
  )

  // All available archive years from the articles data
  const allYears = [...new Set(articles.map(a => parseDate(a.date).year))].sort((a, b) => b - a)

  return (
    <main className="archive-page">

      {/* ── Header ── */}
      <div className="archive-page__hero">
        <div className="archive-page__hero-inner">
          <Link to="/articles" className="archive-page__back-btn">← All Articles</Link>
          <h1 className="archive-page__title">📅 {year} Articles</h1>
          <p className="archive-page__sub">{yearArticles.length} article{yearArticles.length !== 1 ? 's' : ''} published in {year}</p>
        </div>
      </div>

      <div className="archive-page__body">
        <div className="archive-page__main">

          {sortedMonths.map(month => (
            <section key={month} className="archive-page__month">
              <h2 className="archive-page__month-title">{month} {year}</h2>
              <ul className="archive-page__list">
                {byMonth[month].map(article => (
                  <li key={article.slug} className="archive-page__item">
                    <Link to={`/articles/${article.slug}`} className="archive-page__item-link">
                      <div className="archive-page__item-meta">
                        <span className="archive-page__item-category">{article.category}</span>
                        <span className="archive-page__item-type">{article.type}</span>
                      </div>
                      <h3 className="archive-page__item-title">{article.title}</h3>
                      <p className="archive-page__item-excerpt">{article.excerpt}</p>
                      <span className="archive-page__item-read">{article.readTime} · Read article →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

        </div>

        {/* ── Sidebar ── */}
        <aside className="archive-page__sidebar">
          <div className="archive-page__sidebar-box">
            <h2 className="archive-page__sidebar-title">Archives</h2>
            <ul className="archive-page__year-list">
              {allYears.map(y => (
                <li key={y}>
                  <Link
                    to={`/articles/archive/${y}`}
                    className={`archive-page__year-link${y === yearNum ? ' active' : ''}`}
                  >
                    {y}
                    <span className="archive-page__year-count">
                      {articles.filter(a => parseDate(a.date).year === y).length}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="archive-page__sidebar-box">
            <h2 className="archive-page__sidebar-title">Browse</h2>
            <div className="archive-page__browse-links">
              <Link to="/articles" className="archive-page__browse-link">📚 All Articles</Link>
              <Link to="/articles/category/trip-essentials" className="archive-page__browse-link">🎒 Trip Essentials</Link>
              <Link to="/articles/category/travel-insurance" className="archive-page__browse-link">🛡️ Travel Insurance</Link>
              <Link to="/articles/category/food-and-culture" className="archive-page__browse-link">🍜 Food & Culture</Link>
              <Link to="/articles/category/travel-stories" className="archive-page__browse-link">✈️ Travel Stories</Link>
            </div>
          </div>
        </aside>

      </div>
    </main>
  )
}

export default ArchivePage
