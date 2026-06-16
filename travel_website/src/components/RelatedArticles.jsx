import React from 'react'
import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import styles from './RelatedArticles.module.css'

const RelatedArticles = ({ currentSlug, category }) => {
  const related = articles
    .filter(a => a.slug !== currentSlug && a.category === category)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>You might also like</h2>
      <ul className={styles.grid}>
        {related.map(article => (
          <li key={article.slug}>
            <Link to={`/articles/${article.slug}`} className={styles.card}>
              <span className={styles.icon}>{article.icon}</span>
              <span className={styles.title}>{article.title}</span>
              <span className={styles.meta}>{article.readTime}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RelatedArticles
