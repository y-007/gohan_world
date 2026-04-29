import React from 'react'
import { Link } from 'react-router-dom'
import './LegalPage.css'

const AffiliateDisclosurePage = () => (
  <main className="legal-page">
    <h1>Affiliate Disclosure</h1>
    <p className="legal-page__updated">Last updated: April 2026</p>
    <hr />

    <h2>My commitment to transparency</h2>
    <p>
      I believe in full transparency with my readers. This page explains my relationship
      with third-party companies whose products and services I recommend on this site.
    </p>

    <hr />

    <h2>What is an affiliate link?</h2>
    <p>
      Some of the links on this website are <strong>affiliate links</strong>. This means that if you
      click on a link and then make a purchase or sign up for a service, I may receive a small
      affiliate commission — at no additional cost to you. The price you pay is exactly the same
      whether you use my affiliate link or go directly to the company's website.
    </p>

    <hr />

    <h2>Which pages contain affiliate links?</h2>
    <p>Affiliate links may appear on:</p>
    <ul>
      <li>Article pages (identified by the <strong>"Affiliate Disclosure"</strong> notice at the top of each article)</li>
      <li>Destination guides</li>
      <li>Travel tips and product recommendation pages</li>
      <li>Any page featuring a product, service, or booking platform</li>
    </ul>
    <p>
      I always label articles that contain affiliate links with a disclosure notice near the top of
      the page — before the first affiliate link appears.
    </p>

    <hr />

    <h2>My partners</h2>
    <p>I currently have affiliate relationships with travel-related companies including, but not limited to:</p>
    <ul>
      <li>Travel insurance providers (including Allianz Travel, World Nomads, Seven Corners, Squaremouth, InsureMyTrip, and SafetyWing)</li>
      <li>Accommodation booking platforms (including Booking.com)</li>
      <li>Experience and tour booking platforms (including Airbnb Experiences and Viator)</li>
      <li>Car rental comparison services (including Discover Cars)</li>
    </ul>
    <p>This list may be updated as my partnerships change.</p>

    <hr />

    <h2>My editorial standards</h2>
    <p>
      <strong>Affiliate relationships do not influence my editorial content.</strong> I only recommend
      products and services that I genuinely believe provide value to my readers. I research my
      recommendations independently, and I do not accept payment for positive reviews or guaranteed
      placement.
    </p>
    <p>
      If I have a material connection to a product or service beyond a standard affiliate commission,
      I will disclose that clearly.
    </p>

    <hr />

    <h2>FTC compliance</h2>
    <p>
      This disclosure is made in accordance with the U.S. Federal Trade Commission's guidelines on
      endorsements and testimonials (16 CFR Part 255). I am committed to complying with all
      applicable FTC regulations regarding affiliate marketing and sponsored content.
    </p>

    <hr />

    <h2>Questions?</h2>
    <p>
      If you have any questions about my affiliate relationships or how I select my recommendations,
      please visit my <Link to="/contact">Contact page</Link>.
    </p>

    <p style={{ marginTop: '40px', fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
      Gohan World is a participant in affiliate programs designed to provide a means for independent
      creators to earn advertising fees. Your support through these links helps me keep this site
      free and continue creating content for travelers.
    </p>
  </main>
)

export default AffiliateDisclosurePage
