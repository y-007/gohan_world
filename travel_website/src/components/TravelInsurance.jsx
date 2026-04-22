import React from 'react'
import './TravelInsurance.css'
import { useResizeObserver, fluidSize } from '../hooks/useResizeObserver'

const reasons = [
  { icon: '🏥', title: 'Medical Emergencies Abroad',      body: 'A hospital visit in the USA can cost tens of thousands of dollars without insurance. Even in Japan, where healthcare is affordable, emergency evacuation back home can exceed $50,000. Travel insurance covers it.' },
  { icon: '✈️', title: 'Trip Cancellations & Delays',     body: 'Flights get cancelled. Typhoons shut down airports. A family emergency forces you home early. Without insurance, you lose every non-refundable booking — hotels, tours, flight upgrades — all of it.' },
  { icon: '🧳', title: 'Lost or Stolen Luggage',          body: "Airlines lose bags more than you think. If your bag goes missing on the way to Tokyo with a week of clothes and gear inside, travel insurance reimburses the replacement cost so the trip isn't ruined." },
  { icon: '🌏', title: 'Different Rules in Every Country', body: 'Your home health insurance almost certainly does not cover you internationally. Each country has its own healthcare system, billing practices, and language barriers. Insurance gives you a 24/7 English-speaking emergency line wherever you are.' },
  { icon: '🤕', title: 'Adventure Activities',            body: "Hiking Fuji, surfing in Hawaii, skiing in Hokkaido — standard travel insurance may not cover these. Look for a policy with adventure sports coverage so a twisted ankle on the trail doesn't become a $20,000 helicopter rescue bill." },
  { icon: '💼', title: 'Peace of Mind Is Worth It',       body: "A comprehensive travel insurance policy for a two-week Japan trip typically costs $60–$120. That's less than one restaurant meal in Tokyo. The peace of mind alone — knowing you're covered whatever happens — makes every journey more enjoyable." },
]

const TravelInsurance = () => {
  const [ref, width] = useResizeObserver()

  const headingSize = fluidSize(width, 30, 46)
  const subSize     = fluidSize(width, 15, 18)

  return (
    <section id="insurance" className="insurance-section">
      <div
        ref={ref}
        className="insurance-section__inner"
        style={{
          '--fluid-heading': `${headingSize}px`,
          '--fluid-sub':     `${subSize}px`,
        }}
      >
        <div className="insurance-section__header">
          <span className="insurance-section__eyebrow">Don't skip this</span>
          <h2 className="insurance-section__heading">Why You Need Travel Insurance</h2>
          <p className="insurance-section__sub">
            Every seasoned traveler has a story about the trip that went sideways.
            Travel insurance is the one thing that turns a potential disaster into a manageable inconvenience.
          </p>
        </div>

        <div className="insurance-grid">
          {reasons.map((r) => (
            <div className="insurance-card" key={r.title}>
              <span className="insurance-card__icon">{r.icon}</span>
              <h3 className="insurance-card__title">{r.title}</h3>
              <p className="insurance-card__body">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="insurance-section__note">
          <p>💡 <strong>Gohan World recommends:</strong> Compare plans at <strong>InsureMyTrip</strong> or <strong>World Nomads</strong> before every trip. Always read what's excluded before you buy.</p>
        </div>
      </div>
    </section>
  )
}

export default TravelInsurance
