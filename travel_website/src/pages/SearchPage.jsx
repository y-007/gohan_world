import React, { useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { searchIndex } from '../data/searchIndex'
import './SearchPage.css'

const SearchPage = () => {
  const [params] = useSearchParams()
  const query = (params.get('q') || '').trim()

  useEffect(() => {
    document.title = query ? `Search: "${query}" — Gohan World` : 'Search — Gohan World'
    const canon = document.querySelector('link[rel="canonical"]')
    if (canon) canon.setAttribute('href', 'https://www.gohanworld.com/search/')
    return () => {
      document.title = 'USA⇄Japan Travel & Insurance Guides for Seniors & First-Timers 2026 | Gohan World'
      if (canon) canon.setAttribute('href', 'https://www.gohanworld.com/')
    }
  }, [query])

  const results = useMemo(() => {
    if (!query) return []
    const q = query.toLowerCase()
    return searchIndex.filter(entry =>
      entry.keywords.includes(q) ||
      entry.title.toLowerCase().includes(q) ||
      entry.excerpt.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <main className="search-page">
      <div className="search-page__hero">
        <h1 className="search-page__heading">
          {query ? `Results for "${query}"` : 'Search'}
        </h1>
        {query && (
          <p className="search-page__count">
            {results.length === 0
              ? 'No results found'
              : `${results.length} result${results.length !== 1 ? 's' : ''} found`}
          </p>
        )}
      </div>

      <div className="search-page__body">
        {results.length > 0 && (
          <div className="search-page__results">
            {results.map((entry, i) => (
              <Link key={i} to={entry.path} className="search-result">
                <div className="search-result__top">
                  {entry.icon && <span className="search-result__icon">{entry.icon}</span>}
                  <span className="search-result__tag">{entry.category || entry.type}</span>
                </div>
                <h2 className="search-result__title">{entry.title}</h2>
                <p className="search-result__excerpt">{entry.excerpt}</p>
              </Link>
            ))}
          </div>
        )}

        {results.length === 0 && query && (
          <div className="search-page__empty">
            <p className="search-page__empty-msg">
              No pages match <strong>"{query}"</strong>. Try a different keyword.
            </p>
            <Link to="/articles" className="search-page__fallback">Browse all articles →</Link>
          </div>
        )}
      </div>
    </main>
  )
}

export default SearchPage
