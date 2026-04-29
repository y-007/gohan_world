import React from 'react'
import { Link } from 'react-router-dom'
import './LegalPage.css'

const PrivacyPolicy = () => (
  <main className="legal-page">
    <h1>Privacy Policy</h1>
    <p className="legal-page__updated">Last updated: April 2026</p>
    <hr />

    <h2>About this site</h2>
    <p>
      This privacy policy applies to <strong>Gohan World</strong>, a travel content website covering
      food, culture, and travel between Japan and the USA. If you have questions about this policy,
      please visit my <Link to="/contact">Contact page</Link>.
    </p>

    <hr />

    <h2>What information I collect</h2>

    <h2>Information you provide directly</h2>
    <ul>
      <li>
        <strong>Newsletter sign-ups:</strong> If you subscribe to my email newsletter, I collect
        your email address and the date and approximate location (city and country, derived from your
        IP address) of sign-up. I do not collect your name unless you provide it.
      </li>
      <li>
        <strong>Contact submissions:</strong> If you contact me, I collect the information you
        include in your message.
      </li>
    </ul>

    <h2>Information collected automatically</h2>
    <p>When you visit this site, standard analytics tools may automatically collect:</p>
    <ul>
      <li>Your IP address (anonymized where possible)</li>
      <li>Browser type and version</li>
      <li>Pages visited and time spent on each page</li>
      <li>Referring URL (the page that linked you here)</li>
      <li>Device type (desktop, mobile, tablet)</li>
    </ul>
    <p>
      I use this information in aggregate to understand how readers use my site and to improve my
      content. I do not use it to identify individual users.
    </p>

    <hr />

    <h2>Cookies we use</h2>
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
          <td>Anonymous visitor tracking</td>
          <td>1 year</td>
        </tr>
        <tr>
          <td><strong>Affiliate tracking</strong></td>
          <td>Commission tracking for Amazon, Allianz, and insurance partners</td>
          <td>30 days</td>
        </tr>
        <tr>
          <td><strong>Consent preference</strong></td>
          <td>Remembers your cookie choice</td>
          <td>1 year</td>
        </tr>
      </tbody>
    </table>
    <p>
      You can control cookies through your browser settings. Disabling cookies may affect the
      functionality of some parts of this site.
    </p>
    <p>
      To opt out of Google Analytics tracking, visit:{' '}
      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
        https://tools.google.com/dlpage/gaoptout
      </a>
    </p>
    <p>
      To opt out of Amazon affiliate cookies, visit:{' '}
      <a href="https://www.amazon.com/adprefs" target="_blank" rel="noopener noreferrer">
        https://www.amazon.com/adprefs
      </a>
    </p>

    <hr />

    <h2>How I use your information</h2>
    <p>I use the information I collect to:</p>
    <ul>
      <li>Send my email newsletter (if you subscribed)</li>
      <li>Respond to enquiries you send me</li>
      <li>Improve the content and performance of this site</li>
      <li>Understand which articles and topics are most useful to readers</li>
      <li>Comply with legal obligations</li>
    </ul>
    <p><strong>I do not sell your personal information to any third party.</strong></p>

    <hr />

    <h2>Third-party services</h2>
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Google Analytics</strong></td>
          <td>Site traffic and usage analytics</td>
        </tr>
        <tr>
          <td><strong>Google Sheets / Apps Script</strong></td>
          <td>Newsletter email collection</td>
        </tr>
        <tr>
          <td><strong>Affiliate networks</strong> (Squaremouth, Allianz, World Nomads, etc.)</td>
          <td>Referral tracking when you click affiliate links</td>
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
      <li>Your email address is stored securely and used only to send you my newsletter</li>
      <li>I do not share your email address with third parties for marketing purposes</li>
      <li>You can unsubscribe at any time by clicking the unsubscribe link in any newsletter email</li>
      <li>I retain your email address only for as long as you remain subscribed</li>
    </ul>

    <hr />

    <h2>Your rights</h2>
    <p>Depending on your location, you may have the following rights regarding your personal data:</p>
    <ul>
      <li><strong>Access:</strong> Request a copy of the personal data I hold about you</li>
      <li><strong>Correction:</strong> Request that I correct inaccurate data</li>
      <li><strong>Deletion:</strong> Request that I delete your personal data</li>
      <li><strong>Opt-out:</strong> Unsubscribe from my newsletter at any time</li>
      <li><strong>Portability:</strong> Request your data in a portable format (where applicable)</li>
    </ul>
    <p>
      To exercise any of these rights, please visit my <Link to="/contact">Contact page</Link>.
      If you are in the EU or UK, you also have the right to lodge a complaint with your local data
      protection authority.
    </p>

    <hr />

    <h2>Data retention</h2>
    <ul>
      <li><strong>Newsletter subscribers:</strong> Retained while subscribed; removed within 30 days of unsubscription</li>
      <li><strong>Contact enquiries:</strong> Retained for up to 2 years, then deleted</li>
      <li><strong>Analytics data:</strong> Per Google Analytics default retention settings (up to 26 months)</li>
    </ul>

    <hr />

    <h2>Children's privacy</h2>
    <p>
      This site is not directed at children under the age of 13. I do not knowingly collect personal
      data from children. If you believe a child has provided me with personal information, please
      contact me and I will delete it promptly.
    </p>

    <hr />

    <h2>Changes to this policy</h2>
    <p>
      I may update this privacy policy from time to time. When I do, I will update the
      "Last updated" date at the top of this page. Continued use of this site after any changes
      constitutes your acceptance of the updated policy.
    </p>

    <hr />

    <h2>Contact</h2>
    <p>
      If you have questions, concerns, or requests regarding this privacy policy or your personal
      data, please visit my <Link to="/contact">Contact page</Link>. I aim to respond within
      5 business days.
    </p>
  </main>
)

export default PrivacyPolicy
