import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getArticleBySlug } from '../data/articles'
import ArticleRenderer from '../components/ArticleRenderer'
import './ArticlePage.css'

const ArticlePage = () => {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <main className="article-page article-page--notfound">
        <p>Article not found.</p>
        <Link to="/articles" className="article-page__back">← Back to Articles</Link>
      </main>
    )
  }

  return (
    <main className="article-page">
      <div
        className="article-page__hero"
        style={{ '--article-accent': article.accentColor }}
      >
        <div className="article-page__hero-inner">
          <Link
            to="/articles"
            className="article-page__back-btn"
          >
            ← All Articles
          </Link>
          <span className="article-page__category">{article.category}</span>
          <div className="article-page__icon">{article.icon}</div>
          <h1 className="article-page__title">{article.title}</h1>
          <div className="article-page__meta">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      <div className="article-page__content-wrapper">
        {article.affiliateDisclosure && (
          <div className="article-page__disclosure">
            <strong>Affiliate Disclosure:</strong> This article contains affiliate links. If you make a purchase through these links, we may earn a commission at no additional cost to you. Our recommendations are independent and based on our own research.
          </div>
        )}

        <ArticleRenderer blocks={article.content} />

        <div className="article-page__footer">
          <Link to="/articles" className="article-page__back-link">← Back to All Articles</Link>
        </div>
      </div>
    </main>
  )
}

export default ArticlePage
