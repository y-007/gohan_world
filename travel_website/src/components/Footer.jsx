import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbysNwT7IUrVZzsmSOS58pmoFnaIeXwOYE2l83EPcRv4bRu-1Jop2yhXLWi9I6sG0eye/exec';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');

    try {
      // Get approximate city/country from IP — no browser permission popup needed.
      // Fails silently if the API is unreachable; location columns will be blank.
      let city = '', country = '', ip = '';
      try {
        const locRes = await fetch('https://ipapi.co/json/');
        if (locRes.ok) {
          const loc = await locRes.json();
          city    = loc.city          || '';
          country = loc.country_name  || '';
          ip      = loc.ip            || '';
        }
      } catch {
        // location is optional
      }

      const now = new Date();
      const params = new URLSearchParams({
        email,
        date:     now.toLocaleDateString('en-US'),
        time:     now.toLocaleTimeString('en-US'),
        monthTab: now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        city,
        country,
        ip,
      });

      // Image ping: CORS never blocks image src requests, so this GET always
      // reaches Google regardless of browser security policies. doGet fires,
      // the "image" fails to load (response is JSON), but we don't care.
      await new Promise((resolve) => {
        const ping = new Image();
        ping.onload  = resolve;
        ping.onerror = resolve;
        ping.src = `${SHEETS_ENDPOINT}?${params.toString()}`;
      });

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer id="footer">
      <div className="footer__columns">

        <div className="footer__col footer__col--left">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img className="footer_logo" src="/gohan_world_logo_500x500.png" alt="Gohan World™ logo" />
          </a>
          <p className="footer__tagline">Eating thoughtfully.<br />Living joyfully.</p>
        </div>

        <div className="footer__col footer__col--center">
          <h4 className="footer__col-title">Follow Us</h4>
          <div className="social_icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <a href="https://www.pinterest.com/gohanandworld/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPinterest} /></a>
          </div>
        </div>

        <div className="footer__col footer__col--right">
          <h4 className="footer__col-title">Newsletter</h4>
          <p className="footer__newsletter-sub">My best tips, right in your inbox.</p>

          {status === 'success' ? (
            <p className="footer__newsletter-success">Thanks for signing up!</p>
          ) : (
            <form className="footer__form" onSubmit={handleNewsletterSubmit}>
              <input
                className="footer__email-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
              />
              <button className="footer__email-btn" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? '...' : 'Sign Up'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="footer__newsletter-error">Something went wrong. Please try again.</p>
          )}
        </div>

      </div>

      <div className="footer__bottom">
        <nav className="footer__legal-nav">
          <Link to="/affiliate-disclosure" className="footer__legal-link">Affiliate Disclosure</Link>
          <span className="footer__legal-sep">|</span>
          <Link to="/disclaimer" className="footer__legal-link">Disclaimer</Link>
          <span className="footer__legal-sep">|</span>
          <Link to="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
          <span className="footer__legal-sep">|</span>
          <Link to="/contact" className="footer__legal-link">Contact</Link>
        </nav>
        <p className="footer__disclosure">
          Some links on this site are affiliate links — I may earn a small affiliate commission at no extra cost to you.{' '}
          <Link to="/affiliate-disclosure" className="footer__disclosure-link">Full Disclosure</Link>
          {' · '}
          Content is for informational purposes only and is not professional insurance or legal advice.{' '}
          <Link to="/disclaimer" className="footer__disclosure-link">Full Disclaimer</Link>
        </p>
        <p>&copy; {new Date().getFullYear()} GOHAN WORLD&#8482;. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
