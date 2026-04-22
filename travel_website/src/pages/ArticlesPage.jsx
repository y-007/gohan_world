import React from 'react'
import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import './ArticlesPage.css'

const ArticlesPage = () => (
  <main className="articles-page">
    <div className="articles-page__hero">
      <h1 className="articles-page__heading">Articles</h1>
      <p className="articles-page__sub">Guides, stories, and practical advice for travelers between Japan and the USA.</p>
    </div>

    <div className="articles-page__grid-wrapper">
      <div className="articles-page__grid">
        {articles.map(article => (
          <Link
            key={article.slug}
            to={`/articles/${article.slug}`}
            className="article-card"
            style={{ '--card-accent': article.accentColor }}
          >
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
        ))}
      </div>
    </div>
  </main>
)

export default ArticlesPage
