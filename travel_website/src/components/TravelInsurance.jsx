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
          <p>💡 <strong>Gohan World recommends:</strong> Compare plans at <strong>InsureMyTrip</strong> before every trip. Always read what&apos;s excluded before you buy.</p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <a href="https://www.insuremytrip.com" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-bold text-white bg-[#b8a06a] hover:bg-[#a08d5a] transition-colors">
              🏥 Compare Plans — InsureMyTrip →
            </a>
          </div>
        </div>

        <p className="insurance-table__intro">
          Estimated costs vary by age, health, and trip cost — get a live quote for your exact price.
        </p>
        <div className="insurance-table-wrap">
          <table className="insurance-table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Best For</th>
                <th>Est. Cost<br /><span className="insurance-table__subhead">(2-wk Japan, 65+)</span></th>
                <th>Standout Benefit</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Plan"><strong>Squaremouth</strong></td>
                <td data-label="Best For">Comparing everything in one place</td>
                <td data-label="Est. Cost">Varies — compares 20+ insurers</td>
                <td data-label="Standout Benefit">Filters by age + pre-existing conditions</td>
                <td data-label="">
                  <a href="{{SQUAREMOUTH_AFFILIATE_LINK}}" target="_blank" rel="sponsored nofollow noopener" className="insurance-table__btn">Compare All Plans →</a>
                </td>
              </tr>
              <tr>
                <td data-label="Plan"><strong>Seven Corners</strong></td>
                <td data-label="Best For">High medical limits for seniors</td>
                <td data-label="Est. Cost">~$90–$140</td>
                <td data-label="Standout Benefit">Strong emergency medical + evacuation</td>
                <td data-label="">
                  <a href="{{SEVENCORNERS_AFFILIATE_LINK}}" target="_blank" rel="sponsored nofollow noopener" className="insurance-table__btn">Get a Quote →</a>
                </td>
              </tr>
              <tr>
                <td data-label="Plan"><strong>IMG GlobeHopper Senior</strong></td>
                <td data-label="Best For">Travelers 65–79</td>
                <td data-label="Est. Cost">~$70–$120</td>
                <td data-label="Standout Benefit">Up to $1M medical, built for seniors</td>
                <td data-label="">
                  <a href="{{IMG_AFFILIATE_LINK}}" target="_blank" rel="sponsored nofollow noopener" className="insurance-table__btn">See Senior Plan →</a>
                </td>
              </tr>
              <tr>
                <td data-label="Plan"><strong>Allianz Global Assistance</strong></td>
                <td data-label="Best For">A brand seniors trust</td>
                <td data-label="Est. Cost">~$80–$130</td>
                <td data-label="Standout Benefit">24/7 English hotline, easy claims</td>
                <td data-label="">
                  <a href="{{ALLIANZ_AFFILIATE_LINK}}" target="_blank" rel="sponsored nofollow noopener" className="insurance-table__btn">Get Covered →</a>
                </td>
              </tr>
              <tr>
                <td data-label="Plan"><strong>Faye</strong></td>
                <td data-label="Best For">Fast, app-based claims</td>
                <td data-label="Est. Cost">~$85–$135</td>
                <td data-label="Standout Benefit">Real-time app support + reimbursements</td>
                <td data-label="">
                  <a href="{{FAYE_AFFILIATE_LINK}}" target="_blank" rel="sponsored nofollow noopener" className="insurance-table__btn">Get a Quote →</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default TravelInsurance
