import React from 'react'
import './TravelTips.css'
import { useResizeObserver, fluidSize } from '../hooks/useResizeObserver'

const tips = [
  { icon: '🎌', title: 'Get an IC Card in Japan',       body: 'A <a href="https://www.jreast.co.jp/en/multi/pass/suica.html" target="_blank" rel="noopener noreferrer">Suica</a> or <a href="https://www.pasmo.co.jp/visitors/en/" target="_blank" rel="noopener noreferrer">Pasmo</a> card works on trains, subways, buses, and even convenience stores across Japan. Load it once and tap your way everywhere.', html: true },
  { icon: '💴', title: 'Carry Cash in Japan',            body: 'Japan is still largely cash-based outside major cities. ATMs at 7-Eleven and Japan Post reliably accept foreign cards.' },
  { icon: '🌐', title: 'Pocket Wi-Fi or eSIM',           body: 'Rent a pocket Wi-Fi at the airport or set up an eSIM before departure. Staying connected is essential for navigation and translation apps.' },
  { icon: '🥢', title: 'Learn Basic Japanese Phrases',   body: '"Sumimasen" (excuse me) and "Arigatou gozaimasu" (thank you) go a long way. Locals deeply appreciate any effort to use Japanese.' },
  { icon: '🧳', title: 'Ship Your Luggage Ahead',        body: "Japan's takkyubin (luggage delivery) service lets you send bags to your next hotel for a few dollars. Travel light between cities." },
  { icon: '🕐', title: 'Book Popular Spots Early',       body: 'Restaurants like Ichiran and attractions like teamLab fill up fast. Reserve online weeks or months in advance, especially during peak seasons.' },
  { icon: '💱', title: 'Check Exchange Rates Before You Go', body: 'Airport currency exchange booths charge high fees. Use a travel-friendly debit card (like Charles Schwab or Wise) or withdraw yen from a 7-Eleven ATM for the best rates.' },
  { icon: '📋', title: 'Make Copies of Important Documents', body: 'Keep digital and physical copies of your passport, visa, travel insurance, and hotel bookings. Store them separately from the originals.' },
]

const TravelTips = () => {
  const [ref, width] = useResizeObserver()

  const headingSize = fluidSize(width, 30, 46)
  const subSize     = fluidSize(width, 15, 18)

  return (
    <section id="tips" className="tips-section">
      <div
        ref={ref}
        className="tips-section__inner"
        style={{
          '--fluid-heading': `${headingSize}px`,
          '--fluid-sub':     `${subSize}px`,
        }}
      >
        <h2 className="tips-section__heading">Travel Tips</h2>
        <p className="tips-section__sub">Practical advice from the road</p>
        <div className="tips-list">
          {tips.map((tip) => (
            <div className="tip-item" key={tip.title}>
              <div className="tip-item__icon">{tip.icon}</div>
              <div className="tip-item__body">
                <h3>{tip.title}</h3>
                {tip.html
                  ? <p dangerouslySetInnerHTML={{ __html: tip.body }} />
                  : <p>{tip.body}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TravelTips
