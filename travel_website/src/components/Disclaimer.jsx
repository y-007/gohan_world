import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/LegalPage.css'

const Disclaimer = () => (
  <main className="legal-page">
    <h1>Disclaimer</h1>
    <p className="legal-page__updated">Last updated: April 2026</p>
    <hr />

    <h2>General information only</h2>
    <p>
      The content published on Gohan World is provided for <strong>general informational and
      entertainment purposes only</strong>. Nothing on this website constitutes professional insurance
      advice, legal advice, financial advice, or medical advice.
    </p>
    <p>
      I am a travel enthusiast sharing my personal experiences and research — I am not a licensed
      insurance broker, attorney, financial adviser, or healthcare professional.
    </p>

    <hr />

    <h2>Travel insurance content</h2>
    <p>This site contains articles, comparisons, and recommendations related to travel insurance products. Please be aware of the following:</p>
    <ul>
      <li><strong>I am not an insurance adviser.</strong> Information about travel insurance on this site is general in nature and may not reflect the most current policy terms, coverage limits, exclusions, or pricing.</li>
      <li><strong>Always read the full policy documents</strong> before purchasing any insurance product. Policy terms vary by provider, plan, destination, traveler age, and trip details.</li>
      <li><strong>Coverage details change.</strong> Insurance product features, pricing, and availability are subject to change without notice.</li>
      <li><strong>Individual circumstances vary.</strong> A product suitable for one traveler may not be suitable for another. Consider your specific needs, health conditions, destination, and trip cost before purchasing.</li>
      <li><strong>I do not process claims.</strong> If you need to file a claim, contact your insurance provider directly.</li>
    </ul>

    <hr />

    <h2>Medicare and health insurance content</h2>
    <p>
      Articles on this site that discuss Medicare, Medicare Advantage, or Medicare Supplement (Medigap)
      coverage are for general educational purposes only. This content is not a substitute for advice
      from a licensed Medicare counselor or health insurance broker, and should not be used to make
      individual healthcare or coverage decisions.
    </p>
    <p>
      For personalized Medicare guidance, contact your State Health Insurance Assistance Program (SHIP)
      or a licensed insurance professional.
    </p>

    <hr />

    <h2>Affiliate links and sponsored content</h2>
    <p>
      Some links on this site are affiliate links. See my full <Link to="/affiliate-disclosure">Affiliate Disclosure</Link> for details.
      Affiliate relationships do not influence my editorial recommendations.
    </p>

    <hr />

    <h2>External links</h2>
    <p>
      This site may contain links to third-party websites. I am not responsible for the content,
      accuracy, or privacy practices of any external site. Links to third-party sites do not constitute
      an endorsement of those sites or their content.
    </p>

    <hr />

    <h2>Accuracy of information</h2>
    <p>
      I make every reasonable effort to ensure the accuracy of information published on this site.
      However, I do not warrant that all content is complete, accurate, or up to date, and I reserve
      the right to update or remove any content at any time without notice. I am not liable for any
      errors, omissions, or outcomes resulting from reliance on information found on this site.
    </p>

    <hr />

    <h2>Limitation of liability</h2>
    <p>
      To the fullest extent permitted by law, Gohan World and its operator shall not be liable for
      any direct, indirect, incidental, consequential, or punitive damages arising from your use of,
      or reliance on, any information on this site. Use this site and its content at your own risk.
    </p>

    <hr />

    <h2>Questions?</h2>
    <p>If you have questions about this disclaimer, please visit my <Link to="/contact">Contact page</Link>.</p>
  </main>
)

export default Disclaimer
