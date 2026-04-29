import React from 'react'
import { Link } from 'react-router-dom'
import './LegalPage.css'
import './ContactPage.css'

const ContactPage = () => (
  <main className="legal-page contact-page">
    <h1>Contact</h1>
    <p className="legal-page__updated">We'd love to hear from you.</p>
    <hr />

    <h2>Get in touch</h2>
    <p>
      Whether you have a question about one of our articles, want to report an error, have a
      partnership enquiry, or just want to say hello — we read every message.
    </p>

    <div className="contact-page__card">
      <p className="contact-page__label">Email us at</p>
      <a className="contact-page__email" href="mailto:gohanandworld@gmail.com">gohanandworld@gmail.com</a>
      <p className="contact-page__note">We aim to respond within 3–5 business days.</p>
    </div>

    <hr />

    <h2>What to include</h2>
    <ul>
      <li><strong>Article corrections:</strong> Include the article title and the specific detail you'd like us to review</li>
      <li><strong>Partnership or affiliate enquiries:</strong> Tell us about your product or program and we'll get back to you</li>
      <li><strong>Privacy requests:</strong> Include "Privacy Request" in your subject line and describe what you'd like us to do with your data</li>
      <li><strong>General feedback:</strong> Always welcome — we genuinely read it</li>
    </ul>

    <hr />

    <h2>Other pages that may help</h2>
    <ul>
      <li><Link to="/affiliate-disclosure">Affiliate Disclosure</Link> — how our affiliate links work</li>
      <li><Link to="/disclaimer">Disclaimer</Link> — the scope and limits of our content</li>
      <li><Link to="/privacy-policy">Privacy Policy</Link> — how we handle your data</li>
    </ul>
  </main>
)

export default ContactPage
