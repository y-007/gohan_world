import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getArticleBySlug } from '../data/articles'
import ArticleRenderer from '../components/ArticleRenderer'
import RelatedArticles from '../components/RelatedArticles'
import './ArticlePage.css'

const ArticlePage = () => {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  useEffect(() => {
    if (!article) return

    const titleStr = article.seoTitle || `${article.title} — Gohan World`
    const descStr = article.metaDescription || article.excerpt
    const canonicalStr = article.canonicalUrl || `https://www.gohanworld.com/articles/${article.slug}`
    const imageStr = article.heroImage ? `https://www.gohanworld.com${article.heroImage}` : 'https://www.gohanworld.com/hero_profile.png'

    document.title = titleStr

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', descStr)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', titleStr)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', descStr)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonicalStr)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', imageStr)

    const ogType = document.querySelector('meta[property="og:type"]')
    if (ogType) ogType.setAttribute('content', 'article')

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', canonicalStr)

    // Dynamic meta tags (article + Pinterest) + hero preload — created here, removed on unmount
    const dynamic = []
    const addMeta = (attrs) => {
      const el = document.createElement('meta')
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
      document.head.appendChild(el)
      dynamic.push(el)
    }

    // Preload hero image so the browser fetches it eagerly (equivalent of loading="eager")
    if (article.heroImage) {
      const preload = document.createElement('link')
      preload.rel = 'preload'
      preload.as = 'image'
      preload.href = article.heroImage
      document.head.appendChild(preload)
      dynamic.push(preload)
    }

    const pubDate = new Date('1 ' + article.date)
    if (!isNaN(pubDate)) addMeta({ property: 'article:published_time', content: pubDate.toISOString() })
    addMeta({ property: 'article:section', content: article.category })
    addMeta({ name: 'pinterest:title', content: titleStr })
    addMeta({ name: 'pinterest:description', content: descStr })
    addMeta({ name: 'pinterest:image', content: imageStr })

    // Article structured data (BlogPosting)
    const existingLd = document.getElementById('article-ld')
    if (existingLd) existingLd.remove()
    const ld = document.createElement('script')
    ld.id = 'article-ld'
    ld.type = 'application/ld+json'
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.seoTitle || article.title,
      description: descStr,
      image: imageStr,
      author: { '@type': 'Person', name: 'Yuko', url: 'https://www.gohanworld.com/about' },
      publisher: { '@type': 'Organization', name: 'Gohan World', url: 'https://www.gohanworld.com' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalStr },
      url: canonicalStr,
      datePublished: article.date,
      dateModified: article.lastUpdated || article.date,
    })
    document.head.appendChild(ld)

    // FAQ schema — injected only when the article has a faq_accordion block
    const faqBlock = article.content?.find(b => b.type === 'faq_accordion')
    const existingFaqLd = document.getElementById('faq-ld')
    if (existingFaqLd) existingFaqLd.remove()
    if (faqBlock?.items?.length) {
      const faqLd = document.createElement('script')
      faqLd.id = 'faq-ld'
      faqLd.type = 'application/ld+json'
      faqLd.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqBlock.items.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      })
      document.head.appendChild(faqLd)
      dynamic.push(faqLd)
    }

    return () => {
      document.title = 'USA⇄Japan Travel & Insurance Guides for Seniors & First-Timers 2026 | Gohan World'
      const desc = document.querySelector('meta[name="description"]')
      if (desc) desc.setAttribute('content', 'Gohan World is your USA⇄Japan travel and insurance guide. Senior-friendly safety tips, packing essentials, airport guidance, cultural insights, and practical answers to \'what happens if...?\' moments.')
      const canon = document.querySelector('link[rel="canonical"]')
      if (canon) canon.setAttribute('href', 'https://www.gohanworld.com')
      const ogTypeEl = document.querySelector('meta[property="og:type"]')
      if (ogTypeEl) ogTypeEl.setAttribute('content', 'website')
      dynamic.forEach(el => el.remove())
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

        <RelatedArticles currentSlug={article.slug} category={article.category} />

        <div className="article-page__footer">
          <Link to="/articles" className="article-page__back-link">← Back to All Articles</Link>
        </div>
      </div>
    </main>
  )
}

export default ArticlePage
