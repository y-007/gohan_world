import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCategoryBySlug, categories } from '../data/categories'
import { articles } from '../data/articles'
import './CategoryPage.css'

const ArticleCard = ({ article }) => (
  <Link
    to={`/articles/${article.slug}`}
    className="cat-article-card"
    style={{ '--card-accent': article.accentColor }}
  >
    <div className="cat-article-card__thumb">
      <span>{article.icon}</span>
    </div>
    <div className="cat-article-card__body">
      <h3 className="cat-article-card__title">{article.title}</h3>
      <p className="cat-article-card__excerpt">{article.excerpt}</p>
      <div className="cat-article-card__meta">
        <span>{article.readTime}</span>
        <span className="cat-article-card__read">Read →</span>
      </div>
    </div>
  </Link>
)

const CategoryPage = () => {
  const { categorySlug } = useParams()
  const category = getCategoryBySlug(categorySlug)

  useEffect(() => {
    if (category) document.title = `${category.name} — Gohan World`
    return () => { document.title = 'USA⇄Japan Travel & Insurance Guides for Seniors & First-Timers 2026 | Gohan World' }
  }, [category])

  if (!category) {
    return (
      <main className="category-page category-page--notfound">
        <p>Category not found.</p>
        <Link to="/articles" className="category-page__back-link">← Back to Articles</Link>
      </main>
    )
  }

  const categoryArticles = articles.filter(a => a.category === category.name)
  const featuredArticle  = articles.find(a => a.slug === category.featuredSlug)
  const relatedCategories = categories.filter(c => category.relatedCategories.includes(c.slug))

  return (
    <main className="category-page">

      {/* ── Hero ── */}
      <div className="category-page__hero" style={{ '--cat-accent': category.accentColor }}>
        <div className="category-page__hero-inner">
          <Link to="/articles" className="category-page__back-btn">← All Articles</Link>
          <span className="category-page__icon">{category.icon}</span>
          <h1 className="category-page__title">{category.name}</h1>
          <p className="category-page__intro">{category.intro}</p>
          <p className="category-page__count">{categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''} in this category</p>
        </div>
      </div>

      <div className="category-page__body">
        <div className="category-page__main">

          {/* ── Featured Article ── */}
          {featuredArticle && (
            <section className="category-page__section">
              <h2 className="category-page__section-title">⭐ Featured Article</h2>
              <ArticleCard article={featuredArticle} />
            </section>
          )}

          {/* ── All Articles in Category ── */}
          <section className="category-page__section">
            <h2 className="category-page__section-title">All {category.name} Articles</h2>
            <div className="category-page__grid">
              {categoryArticles.map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>

        </div>

        {/* ── Sidebar ── */}
        <aside className="category-page__sidebar">

          <div className="category-page__sidebar-box">
            <h2 className="category-page__sidebar-title">Topics Covered</h2>
            <ul className="category-page__subtopics">
              {category.subtopics.map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="category-page__sidebar-box">
            <h2 className="category-page__sidebar-title">Explore More</h2>
            <div className="category-page__related">
              {relatedCategories.map(c => (
                <Link
                  key={c.slug}
                  to={`/articles/category/${c.slug}`}
                  className="category-page__related-link"
                  style={{ '--cat-accent': c.accentColor }}
                >
                  <span>{c.icon}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
              <Link to="/articles" className="category-page__related-link category-page__related-link--all">
                <span>📚</span>
                <span>All Articles</span>
              </Link>
            </div>
          </div>

        </aside>
      </div>

    </main>
  )
}

export default CategoryPage
