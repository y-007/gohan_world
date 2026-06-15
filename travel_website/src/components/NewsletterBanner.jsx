import React, { useState } from 'react'
import './NewsletterBanner.css'

const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbysNwT7IUrVZzsmSOS58pmoFnaIeXwOYE2l83EPcRv4bRu-1Jop2yhXLWi9I6sG0eye/exec'

const NewsletterBanner = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail]         = useState('')
  const [status, setStatus]       = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')

    try {
      let city = '', country = '', ip = ''
      try {
        const locRes = await fetch('https://ipapi.co/json/')
        if (locRes.ok) {
          const loc = await locRes.json()
          city    = loc.city         || ''
          country = loc.country_name || ''
          ip      = loc.ip           || ''
        }
      } catch { /* location is optional */ }

      const now = new Date()
      const params = new URLSearchParams({
        email,
        firstName,
        date:     now.toLocaleDateString('en-US'),
        time:     now.toLocaleTimeString('en-US'),
        monthTab: now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        source:   'homepage-banner',
        city,
        country,
        ip,
      })

      await new Promise((resolve) => {
        const ping = new Image()
        ping.onload  = resolve
        ping.onerror = resolve
        ping.src = `${SHEETS_ENDPOINT}?${params.toString()}`
      })

      setStatus('success')
      setFirstName('')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="nl-banner">
      <div className="nl-banner__inner">
        <p className="nl-banner__heading">Get my best tips sent straight&nbsp;to&nbsp;you!</p>

        {status === 'success' ? (
          <p className="nl-banner__success">✓ You're in! Check your inbox soon.</p>
        ) : (
          <form className="nl-banner__form" onSubmit={handleSubmit}>
            <input
              className="nl-banner__input"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              autoComplete="given-name"
            />
            <input
              className="nl-banner__input"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <button
              className="nl-banner__btn"
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? '…' : 'Send Me Tips'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="nl-banner__error">Something went wrong — please try again.</p>
        )}
      </div>
    </div>
  )
}

export default NewsletterBanner
