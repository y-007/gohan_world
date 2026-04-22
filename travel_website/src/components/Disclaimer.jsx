import React from 'react'
import './Disclaimer.css'
import { useResizeObserver, fluidSize } from '../hooks/useResizeObserver'

const Disclaimer = () => {
  const [ref, width] = useResizeObserver()

  const headingSize = fluidSize(width, 22, 32)
  const subSize     = fluidSize(width, 12, 14)

  return (
    <section id="disclaimer" className="disclaimer-section">
      <div
        ref={ref}
        className="disclaimer-section__inner"
        style={{
          '--fluid-heading': `${headingSize}px`,
          '--fluid-sub':     `${subSize}px`,
        }}
      >
        <span className="disclaimer-section__eyebrow">Legal Notice</span>
        <h2 className="disclaimer-section__heading">Disclaimer</h2>

        <div className="disclaimer-blocks">
          <div className="disclaimer-block">
            <h3 className="disclaimer-block__title">Affiliate Links</h3>
            <p>This website contains affiliate links. If you purchase a travel insurance policy or any product through links on this site, we may earn a commission at no additional cost to you. Our editorial recommendations are independent and based on our own research and experience — we only recommend products and services we genuinely believe in.</p>
          </div>

          <div className="disclaimer-block">
            <h3 className="disclaimer-block__title">Email & Newsletter</h3>
            <p>Some links included in our newsletter emails are affiliate links. We may earn a commission if you make a purchase through those links. This does not affect our editorial independence or the recommendations we make. We will always clearly identify sponsored content where applicable.</p>
          </div>

          <div className="disclaimer-block">
            <h3 className="disclaimer-block__title">Editorial Independence</h3>
            <p>All content on Gohan World — including destination guides, travel tips, and insurance recommendations — reflects our honest opinions. Affiliate relationships do not influence which products we feature, how we rank them, or what we write about them. Our readers' trust is our top priority.</p>
          </div>

          <div className="disclaimer-block">
            <h3 className="disclaimer-block__title">No Professional Advice</h3>
            <p>The information on this site is provided for general informational purposes only. It does not constitute professional financial, legal, or insurance advice. Always read the full policy documents and consult a licensed professional before making any insurance or financial decisions.</p>
          </div>
        </div>

        <p className="disclaimer-section__footer-note">
          For questions about our affiliate relationships or content policies, please reach out via the newsletter signup below. Last updated: {new Date().getFullYear()}.
        </p>
      </div>
    </section>
  )
}

export default Disclaimer
