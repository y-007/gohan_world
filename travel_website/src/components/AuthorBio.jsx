import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AuthorBio.module.css'

const AuthorBio = () => {
  return (
    <aside className={styles.bio} aria-label="About the author">
      <div className={styles.avatarWrap}>
        <img
          src="/yuko-headshot-square.jpg"
          alt="Yuko, founder of Gohan World"
          className={styles.avatar}
          width="96"
          height="96"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>

      <div className={styles.body}>
        <p className={styles.eyebrow}>Written by</p>
        <h2 className={styles.name}>Yuko</h2>
        <p className={styles.role}>Founder of Gohan World</p>
        <p className={styles.text}>
          I spent <strong>20+ years</strong> in global travel-medical assistance, travel insurance,
          and emergency support — coordinating care with hospitals and insurers for travelers across
          the USA and abroad, in both Japanese and English. Now I share clear, honest guidance to help
          American seniors and first-timers explore Japan with confidence.
        </p>
        <Link to="/about" className={styles.link}>More about Yuko&nbsp;→</Link>
      </div>
    </aside>
  )
}

export default AuthorBio
