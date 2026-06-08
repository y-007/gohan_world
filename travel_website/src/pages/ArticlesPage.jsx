import React, { useState, useMemo, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { articles } from '../data/articles'
import { categories } from '../data/categories'
import './ArticlesPage.css'

const parseYear = (dateStr) => parseInt(dateStr.split(' ')[1])

const MONTHS = { January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7, September: 8, October: 9, November: 10, December: 11 }
const parseDateStr = (dateStr) => {
  if (!dateStr) return 0
  const [month, year] = dateStr.split(' ')
  return new Date(parseInt(year), MONTHS[month] ?? 0, 1).getTime()
}

const CATEGORIES = ['All', 'Our Story', 'Travel Insurance', 'Food & Culture', 'Travel Stories', 'Trip Essentials']
const ALL_TAGS = ['All', 'Beginners', 'Seniors', 'Tokyo', 'Airports', 'Money', 'Safety', 'Packing', 'Mobile Data', 'Healthcare Abroad', 'Food', 'Culture', 'Japan', 'USA']
const DIFFICULTIES = ['All', 'Beginner', 'Intermediate']
const TYPES = ['All', 'Guide', 'Checklist', 'Comparison', 'Review']

const isNew = (dateStr) => {
  if (!dateStr) return false
  const months = { January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7, September: 8, October: 9, November: 10, December: 11 }
  const [month, year] = dateStr.split(' ')
  const d = new Date(parseInt(year), months[month], 1)
  return (Date.now() - d) / 86400000 <= 30
}

const ArticleCard = ({ article }) => (
  <Link
    to={`/articles/${article.slug}`}
    className="article-card"
    style={{ '--card-accent': article.accentColor }}
  >
    {isNew(article.lastUpdated) && (
      <span className="article-card__new-badge">New</span>
    )}
    <div className="article-card__thumb">
      <span className="article-card__icon">{article.icon}</span>
    </div>
    <div className="article-card__body">
      <span className="article-card__category">{article.category}</span>
      <h2 className="article-card__title">{article.title}</h2>
      <p className="article-card__excerpt">{article.excerpt}</p>
      <div className="article-card__meta">
        <span>{article.readTime}</span>
        <span className="article-card__read">Read article →</span>
      </div>
    </div>
  </Link>
)

const ArticlesPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'All Articles — Gohan World'
    return () => { document.title = 'Gohan World - USA⇄Japan Travel & Insurance Guides' }
  }, [])

  const [searchText, setSearchText] = useState('')
  const [category, setCategory]     = useState('All')
  const [tag, setTag]               = useState('All')
  const [difficulty, setDifficulty] = useState('All')
  const [type, setType]             = useState('All')

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchText.trim()) return
    navigate(`/search?q=${encodeURIComponent(searchText.trim())}`)
    setSearchText('')
  }

  const hasActiveFilter = category !== 'All' || tag !== 'All' || difficulty !== 'All' || type !== 'All'

  const clearFilters = () => {
    setCategory('All')
    setTag('All')
    setDifficulty('All')
    setType('All')
  }

  const pinnedArticles   = useMemo(() => articles.filter(a => a.pinned), [])
  const featuredArticles = useMemo(() => articles.filter(a => a.featured), [])

  const filteredArticles = useMemo(() => articles
    .filter(a => {
      if (category !== 'All' && a.category !== category) return false
      if (tag !== 'All' && !a.tags?.includes(tag)) return false
      if (difficulty !== 'All' && a.difficulty !== difficulty) return false
      if (type !== 'All' && a.type !== type) return false
      return true
    })
    .sort((a, b) => parseDateStr(b.date) - parseDateStr(a.date)),
  [category, tag, difficulty, type])

  return (
    <main className="articles-page">

      {/* ── Hero ── */}
      <div className="articles-page__hero">
        <h1 className="articles-page__heading">Japan & USA Travel Guides & Insurance Tips</h1>
        <p className="articles-page__sub">Guides, stories, and practical advice for travelers between Japan and the USA.</p>
        <form className="articles-page__search-wrap" onSubmit={handleSearch}>
          <input
            className="articles-page__search"
            type="text"
            placeholder="Search articles…"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            aria-label="Search articles"
          />
          <button type="submit" className="articles-page__search-btn" aria-label="Search">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>

      {/* ── Recommended Resources (pinned money pages) ── */}
      <section className="articles-page__section">
        <div className="articles-page__section-inner">
          <div className="articles-page__section-header">
            <h2 className="articles-page__section-title">⭐ Recommended Resources</h2>
            <p className="articles-page__section-sub">Affiliate-supported guides — thoroughly researched, honestly reviewed.</p>
          </div>
          <div className="articles-page__strip">
            {pinnedArticles.map(a => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>

      {/* ── Start Here (featured beginner picks) ── */}
      <section className="articles-page__section articles-page__section--alt">
        <div className="articles-page__section-inner">
          <div className="articles-page__section-header">
            <h2 className="articles-page__section-title">🚀 Start Here</h2>
            <p className="articles-page__section-sub">New to Japan travel? These are the best places to begin.</p>
          </div>
          <div className="articles-page__strip">
            {featuredArticles.map(a => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>

      {/* ── Browse by Category ── */}
      <section className="articles-page__section">
        <div className="articles-page__section-inner">
          <div className="articles-page__section-header">
            <h2 className="articles-page__section-title">📂 Browse by Category</h2>
            <p className="articles-page__section-sub">Not sure where to start? Pick a topic and find everything in one place.</p>
          </div>
          <div className="articles-page__category-cards">
            {categories.map(cat => (
              <Link
                key={cat.slug}
                to={`/articles/category/${cat.slug}`}
                className="articles-page__category-card"
                style={{ '--cat-accent': cat.accentColor }}
              >
                <span className="articles-page__category-card-icon">{cat.icon}</span>
                <span className="articles-page__category-card-name">{cat.name}</span>
                <span className="articles-page__category-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter Box ── */}
      <div className="articles-page__filter-section">
        <div className="articles-page__filter-box">
          <h2 className="articles-page__filter-title">Filter Articles Here</h2>

          <div className="articles-page__filter-group">
            <span className="articles-page__filter-label">Category</span>
            <div className="articles-page__tabs">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  className={`articles-page__tab${category === c ? ' active' : ''}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="articles-page__filter-group">
            <span className="articles-page__filter-label">Tag</span>
            <div className="articles-page__tag-pills">
              {ALL_TAGS.map(t => (
                <button
                  key={t}
                  className={`articles-page__tag-pill${tag === t ? ' active' : ''}`}
                  onClick={() => setTag(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="articles-page__filter-group articles-page__filter-group--row">
            <div className="articles-page__select-wrap">
              <label className="articles-page__filter-label">Difficulty</label>
              <select
                className="articles-page__select"
                value={difficulty}
                onChange={e => setDifficulty(e.target.value)}
              >
                {DIFFICULTIES.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div className="articles-page__select-wrap">
              <label className="articles-page__filter-label">Type</label>
              <select
                className="articles-page__select"
                value={type}
                onChange={e => setType(e.target.value)}
              >
                {TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            {hasActiveFilter && (
              <button className="articles-page__clear-btn" onClick={clearFilters}>
                ✕ Clear filters
              </button>
            )}
          </div>

        </div>
      </div>

      {/* ── All / Filtered Results ── */}
      <div className="articles-page__grid-wrapper">
        <p className="articles-page__count">
          {hasActiveFilter
            ? `${filteredArticles.length} article${filteredArticles.length !== 1 ? 's' : ''} found`
            : `All ${filteredArticles.length} articles`}
        </p>
        {filteredArticles.length > 0
          ? (
            <div className="articles-page__grid">
              {filteredArticles.map(a => <ArticleCard key={a.slug} article={a} />)}
            </div>
          ) : (
            <div className="articles-page__empty">
              <p>No articles match your filters.</p>
              <button className="articles-page__clear-btn" onClick={clearFilters}>Clear filters</button>
            </div>
          )
        }
      </div>

      {/* ── Archives ── */}
      {(() => {
        const allYears = [...new Set(articles.map(a => parseYear(a.date)))].sort((a, b) => b - a)
        return (
          <section className="articles-page__section articles-page__section--alt">
            <div className="articles-page__section-inner">
              <div className="articles-page__section-header">
                <h2 className="articles-page__section-title">📅 Browse by Year</h2>
                <p className="articles-page__section-sub">Look back through all articles by publication year.</p>
              </div>
              <div className="articles-page__archive-links">
                {allYears.map(y => (
                  <Link key={y} to={`/articles/archive/${y}`} className="articles-page__archive-link">
                    <span className="articles-page__archive-year">{y}</span>
                    <span className="articles-page__archive-count">
                      {articles.filter(a => parseYear(a.date) === y).length} articles
                    </span>
                    <span className="articles-page__archive-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

    </main>
  )
}

export default ArticlesPage
