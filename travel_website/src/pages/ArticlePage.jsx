import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getArticleBySlug } from '../data/articles'
import ArticleRenderer from '../components/ArticleRenderer'
import './ArticlePage.css'

const ArticlePage = () => {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  useEffect(() => {
    if (!article) return
    document.title = `${article.title} — Gohan World`

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', article.excerpt)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', `${article.title} — Gohan World`)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', article.excerpt)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', `https://www.gohanworld.com/articles/${article.slug}`)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage && article.heroImage) ogImage.setAttribute('content', `https://www.gohanworld.com${article.heroImage}`)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `https://www.gohanworld.com/articles/${article.slug}`)

    // Article structured data
    const existingLd = document.getElementById('article-ld')
    if (existingLd) existingLd.remove()
    const ld = document.createElement('script')
    ld.id = 'article-ld'
    ld.type = 'application/ld+json'
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt,
      image: article.heroImage ? `https://www.gohanworld.com${article.heroImage}` : undefined,
      author: { '@type': 'Person', name: 'Yuko', url: 'https://www.gohanworld.com/about' },
      publisher: { '@type': 'Organization', name: 'Gohan World', url: 'https://www.gohanworld.com' },
      url: `https://www.gohanworld.com/articles/${article.slug}`,
      datePublished: article.date,
      dateModified: article.lastUpdated,
    })
    document.head.appendChild(ld)

    return () => {
      document.title = 'Gohan World - USA⇄Japan Travel & Insurance Guides'
      const desc = document.querySelector('meta[name="description"]')
      if (desc) desc.setAttribute('content', 'Gohan World is your USA⇄Japan travel and insurance guide. Senior-friendly safety tips, packing essentials, airport guidance, cultural insights, and practical answers to \'what happens if...?\' moments.')
      const canon = document.querySelector('link[rel="canonical"]')
      if (canon) canon.setAttribute('href', 'https://www.gohanworld.com')
      const ldEl = document.getElementById('article-ld')
      if (ldEl) ldEl.remove()
    }
  }, [article])

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
        style={{
          '--article-accent': article.accentColor,
          '--hero-image': article.heroImage ? `url(${article.heroImage})` : 'none',
        }}
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
            <strong>Affiliate Disclosure:</strong> This article contains affiliate links. If you make a purchase through my links, I may earn a small affiliate commission at no additional cost to you. My recommendations are independent and based on my own research.
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
