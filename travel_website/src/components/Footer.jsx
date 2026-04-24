import React, { useState } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/travelinsuranceplan101@gmail.com';

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'New Gohan World Newsletter Signup' }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer id="footer">
      <div className="footer__columns">

        <div className="footer__col footer__col--left">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img className="footer_logo" src="/gohan_world_logo_500x500.png" alt="Gohan World logo" />
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
          <p className="footer__newsletter-sub">Our best tips, right in your inbox.</p>

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
        <p>&copy; {year} GOHAN WORLD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
