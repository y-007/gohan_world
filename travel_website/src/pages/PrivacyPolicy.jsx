import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LegalPage.css'

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy — Gohan World'
    return () => { document.title = 'Gohan World - USA⇄Japan Travel & Insurance Guides' }
  }, [])
  return (
  <main className="legal-page">
    <h1>Privacy Policy</h1>
    <p className="legal-page__updated">Last updated: May 2026</p>
    <hr />

    <h2>Who I am</h2>
    <p>
      This privacy policy applies to <strong>Gohan World</strong> (<strong>gohanworld.com</strong>),
      a travel and insurance information website focused on travel between Japan and the USA.
      The data controller is Yuko McLeod, the individual operator of this site.
      If you have questions about this policy, please visit my <Link to="/contact">Contact page</Link>.
    </p>

    <hr />

    <h2>What information I collect</h2>

    <h3>Information you provide directly</h3>
    <ul>
      <li>
        <strong>Newsletter sign-ups:</strong> If you subscribe to my email newsletter, I collect
        your email address and the date and approximate location (city and country, derived from your
        IP address) of sign-up. I do not collect your name unless you provide it.
      </li>
      <li>
        <strong>Contact submissions:</strong> If you contact me, I collect the information you
        include in your message (typically your email address and message content).
      </li>
    </ul>

    <h3>Information collected automatically</h3>
    <p>When you visit this site, the following may be collected automatically:</p>
    <ul>
      <li>Your IP address (anonymized by Google Analytics where possible)</li>
      <li>Browser type and version</li>
      <li>Pages visited and time spent on each page</li>
      <li>Referring URL (the page that linked you here)</li>
      <li>Device type (desktop, mobile, tablet)</li>
      <li>General geographic location (country and city, derived from IP)</li>
    </ul>
    <p>
      I use this information in aggregate to understand how readers use my site and to improve my
      content. I do not use it to identify individual users.
    </p>

    <hr />

    <h2>Cookies I use</h2>
    <p>This site uses cookies for the following purposes:</p>
    <table>
      <thead>
        <tr>
          <th>Cookie type</th>
          <th>Purpose</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Essential</strong></td>
          <td>Site security and performance (Cloudflare)</td>
          <td>Session</td>
        </tr>
        <tr>
          <td><strong>Analytics</strong></td>
          <td>Anonymous visitor tracking via Google Analytics (GA4)</td>
          <td>Up to 2 years</td>
        </tr>
        <tr>
          <td><strong>Consent preference</strong></td>
          <td>Remembers your cookie consent choice</td>
          <td>1 year</td>
        </tr>
      </tbody>
    </table>
    <p>
      Your dark/light theme preference is stored in your browser's local storage — not a cookie.
      It never leaves your device and is not shared with anyone.
    </p>
    <p>
      You can control or disable cookies through your browser settings. Disabling analytics
      cookies will not affect your ability to read content on this site.
    </p>
    <p>
      To opt out of Google Analytics tracking across all sites:{' '}
      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
        tools.google.com/dlpage/gaoptout
      </a>
    </p>

    <hr />

    <h2>How I use your information</h2>
    <p>I use the information I collect to:</p>
    <ul>
      <li>Send my email newsletter (only if you subscribed)</li>
      <li>Respond to enquiries you send me</li>
      <li>Improve the content and performance of this site</li>
      <li>Understand which articles and topics are most useful to readers</li>
      <li>Comply with legal obligations</li>
    </ul>
    <p><strong>I do not sell your personal information to any third party. Ever.</strong></p>

    <hr />

    <h2>Legal basis for processing (GDPR)</h2>
    <p>
      If you are located in the European Union or United Kingdom, the following legal bases apply
      under the General Data Protection Regulation (GDPR):
    </p>
    <ul>
      <li>
        <strong>Consent</strong> — Analytics cookies, affiliate cookies, and newsletter sign-ups
        are processed based on your consent. You can withdraw consent at any time.
      </li>
      <li>
        <strong>Legitimate interests</strong> — Essential site security cookies (Cloudflare) and
        basic server logging are processed on the basis of legitimate interests in operating a
        secure and functional website.
      </li>
      <li>
        <strong>Contract performance</strong> — If you contact me directly, I process your
        information to respond to your enquiry.
      </li>
    </ul>

    <hr />

    <h2>Your rights under GDPR (EU and UK visitors)</h2>
    <p>
      If you are located in the European Union or United Kingdom, you have the following rights
      under the General Data Protection Regulation (GDPR) or UK GDPR:
    </p>
    <ul>
      <li><strong>Right of access:</strong> Request a copy of the personal data I hold about you.</li>
      <li><strong>Right to rectification:</strong> Request correction of inaccurate or incomplete data.</li>
      <li><strong>Right to erasure ("right to be forgotten"):</strong> Request deletion of your personal data.</li>
      <li><strong>Right to restrict processing:</strong> Request that I limit how I use your data.</li>
      <li><strong>Right to data portability:</strong> Request your data in a structured, machine-readable format.</li>
      <li><strong>Right to object:</strong> Object to processing based on legitimate interests.</li>
      <li><strong>Right to withdraw consent:</strong> Withdraw consent for analytics or newsletter at any time without affecting prior processing.</li>
    </ul>
    <p>
      To exercise any of these rights, please <Link to="/contact">contact me</Link>. I will
      respond within 30 days. You also have the right to lodge a complaint with your national data
      protection authority (for EU residents) or the Information Commissioner's Office (for UK
      residents) if you believe your rights have not been respected.
    </p>

    <hr />

    <h2>Your rights under CCPA (California residents)</h2>
    <p>
      If you are a California resident, the California Consumer Privacy Act (CCPA) and the
      California Privacy Rights Act (CPRA) give you the following rights:
    </p>
    <ul>
      <li>
        <strong>Right to know:</strong> You have the right to request disclosure of the categories
        and specific pieces of personal information I have collected about you, the sources of that
        information, and the purposes for which it is used.
      </li>
      <li>
        <strong>Right to delete:</strong> You have the right to request deletion of personal
        information I have collected from you, subject to certain exceptions.
      </li>
      <li>
        <strong>Right to correct:</strong> You have the right to request correction of inaccurate
        personal information I hold about you.
      </li>
      <li>
        <strong>Right to opt out of sale or sharing:</strong> I do not sell or share your personal
        information with third parties for cross-context behavioral advertising. No opt-out is
        required because no sale occurs.
      </li>
      <li>
        <strong>Right to non-discrimination:</strong> I will not discriminate against you for
        exercising any of your CCPA rights. Exercising your rights will not affect your ability to
        access or read content on this site.
      </li>
    </ul>
    <p>
      To submit a CCPA request, please <Link to="/contact">contact me</Link>. I will
      respond within 45 days as required by law.
    </p>
    <p>
      <strong>Categories of personal information collected:</strong> Identifiers (email address,
      IP address); Internet or other electronic network activity (pages visited, browser type,
      device type); Geolocation data (approximate city/country from IP address).
    </p>

    <hr />

    <h2>Third-party services</h2>
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Purpose</th>
          <th>Privacy policy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Google Analytics (GA4)</strong></td>
          <td>Site traffic and usage analytics</td>
          <td>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
          </td>
        </tr>
        <tr>
          <td><strong>Google Sheets / Apps Script</strong></td>
          <td>Newsletter email collection and storage</td>
          <td>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
          </td>
        </tr>
        <tr>
          <td><strong>Cloudflare</strong></td>
          <td>Content delivery, security, and site hosting</td>
          <td>
            <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
              cloudflare.com/privacypolicy
            </a>
          </td>
        </tr>
        <tr>
          <td><strong>Affiliate partners</strong> (Squaremouth, Allianz, World Nomads, Seven Corners, etc.)</td>
          <td>Referral and commission tracking when you click affiliate links</td>
          <td>See each partner's own privacy policy</td>
        </tr>
      </tbody>
    </table>
    <p>
      When you click an affiliate link, the affiliate partner may set their own cookies and collect
      data according to their own privacy policy. I recommend reviewing the privacy policies of any
      service you purchase from.
    </p>

    <hr />

    <h2>Email newsletter</h2>
    <p>If you subscribe to my newsletter:</p>
    <ul>
      <li>Your email address is stored securely in Google Sheets and used only to send you my newsletter</li>
      <li>I do not share your email address with third parties for marketing purposes</li>
      <li>You can unsubscribe at any time by contacting me — I will remove your email within 7 days</li>
      <li>I retain your email address only for as long as you remain subscribed</li>
      <li>The legal basis for processing is your consent (GDPR Article 6(1)(a))</li>
    </ul>

    <hr />

    <h2>Data retention</h2>
    <ul>
      <li><strong>Newsletter subscribers:</strong> Retained while subscribed; removed within 30 days of unsubscription request</li>
      <li><strong>Contact enquiries:</strong> Retained for up to 2 years, then deleted</li>
      <li><strong>Analytics data:</strong> Per Google Analytics default retention settings (up to 26 months)</li>
    </ul>

    <hr />

    <h2>Data transfers outside your country</h2>
    <p>
      If you are located in the EU or UK, please be aware that some third-party services I use
      (including Google Analytics and Google Sheets) may transfer and process your data in the
      United States. These transfers are conducted under appropriate safeguards including Standard
      Contractual Clauses approved by the European Commission.
    </p>

    <hr />

    <h2>Children's privacy</h2>
    <p>
      This site is not directed at children under the age of 13 (or 16 in the EU). I do not
      knowingly collect personal data from children. If you believe a child has provided me with
      personal information, please contact me and I will delete it promptly.
    </p>

    <hr />

    <h2>Changes to this policy</h2>
    <p>
      I may update this privacy policy from time to time to reflect changes in law, technology,
      or my practices. When I do, I will update the "Last updated" date at the top of this page.
      For significant changes, I will make reasonable efforts to notify newsletter subscribers.
      Continued use of this site after any changes constitutes your acceptance of the updated policy.
    </p>

    <hr />

    <h2>Contact</h2>
    <p>
      If you have questions, concerns, or requests regarding this privacy policy or your personal
      data — including GDPR or CCPA requests — please visit my <Link to="/contact">Contact page</Link>.
      I aim to respond within 5 business days for general enquiries, 30 days for GDPR requests,
      and 45 days for CCPA requests.
    </p>
  </main>
  )
}

export default PrivacyPolicy
