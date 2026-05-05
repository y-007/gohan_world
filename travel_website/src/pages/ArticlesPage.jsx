import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import { categories } from '../data/categories'
import './ArticlesPage.css'

const CATEGORIES = ['All', 'Travel Insurance', 'Food & Culture', 'Travel Stories', 'Trip Essentials']
const ALL_TAGS = ['All', 'Beginners', 'Seniors', 'Tokyo', 'Airports', 'Money', 'Safety', 'Packing', 'Mobile Data', 'Healthcare Abroad', 'Food', 'Culture', 'Japan', 'USA']
const DIFFICULTIES = ['All', 'Beginner', 'Intermediate']
const TYPES = ['All', 'Guide', 'Checklist', 'Comparison', 'Review']

const isNew = (dateStr) => {
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
  const [search, setSearch]       = useState('')
  const [category, setCategory]   = useState('All')
  const [tag, setTag]             = useState('All')
  const [difficulty, setDifficulty] = useState('All')
  const [type, setType]           = useState('All')

  const hasActiveFilter = category !== 'All' || tag !== 'All' || difficulty !== 'All' || type !== 'All' || search.trim() !== ''

  const clearFilters = () => {
    setCategory('All')
    setTag('All')
    setDifficulty('All')
    setType('All')
    setSearch('')
  }

  const pinnedArticles  = useMemo(() => articles.filter(a => a.pinned), [])
  const featuredArticles = useMemo(() => articles.filter(a => a.featured), [])

  const filteredArticles = useMemo(() => articles.filter(a => {
    if (category !== 'All' && a.category !== category) return false
    if (tag !== 'All' && !a.tags?.includes(tag)) return false
    if (difficulty !== 'All' && a.difficulty !== difficulty) return false
    if (type !== 'All' && a.type !== type) return false
    if (search.trim()) {
      const q = search.toLowerCase()
      return a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
    }
    return true
  }), [category, tag, difficulty, type, search])

  return (
    <main className="articles-page">

      {/* ── Hero + Search ── */}
      <div className="articles-page__hero">
        <h1 className="articles-page__heading">Articles</h1>
        <p className="articles-page__sub">Guides, stories, and practical advice for travelers between Japan and the USA.</p>
        <div className="articles-page__search-wrap">
          <input
            className="articles-page__search"
            type="search"
            placeholder="Search articles…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search articles"
          />
        </div>
      </div>

      {/* ── Recommended Resources (pinned money pages) ── */}
      {!hasActiveFilter && (
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
      )}

      {/* ── Start Here (featured beginner picks) ── */}
      {!hasActiveFilter && (
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
      )}

      {/* ── Browse by Category ── */}
      {!hasActiveFilter && (
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
      )}

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

      {/* ── Filtered Results (only shown when a filter is active) ── */}
      {hasActiveFilter && (
        <div className="articles-page__grid-wrapper">
          <p className="articles-page__count">
            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
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
      )}

    </main>
  )
}

export default ArticlesPage
