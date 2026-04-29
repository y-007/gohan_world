import React from 'react'
import './InsuranceDisclosure.css'

const InsuranceDisclosure = () => (
  <div className="insurance-disclosure">
    <span className="insurance-disclosure__icon">📋</span>
    <p className="insurance-disclosure__text">
      <strong>Insurance Affiliate Disclosure:</strong>{' '}
      This page contains affiliate links to insurance products.
      If you purchase a policy through my links, I may earn a referral
      commission at no extra cost to you. This does not influence
      my recommendations. I am not a licensed insurance adviser —
      information on this page is general in nature. Always read
      the full policy documents before purchasing.
    </p>
  </div>
)

export default InsuranceDisclosure
