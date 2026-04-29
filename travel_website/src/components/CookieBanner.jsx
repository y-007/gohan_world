import CookieConsent from 'react-cookie-consent'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './CookieBanner.css'

const COOKIE_NAME = 'gohanworld-cookie-consent'

const CookieBanner = () => {
  useEffect(() => {
    const banner = document.querySelector('.cookie-banner')
    if (!banner) return
    banner.setAttribute('role', 'dialog')
    banner.setAttribute('aria-label', 'Cookie consent')
    const acceptBtn = banner.querySelector('.cookie-banner__btn--accept')
    if (acceptBtn) acceptBtn.focus()
  }, [])

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline Optional"
      cookieName={COOKIE_NAME}
      expires={365}
      enableDeclineButton
      disableStyles
      containerClasses="cookie-banner"
      contentClasses="cookie-banner__content"
      buttonWrapperClasses="cookie-banner__actions"
      buttonClasses="cookie-banner__btn cookie-banner__btn--accept"
      declineButtonClasses="cookie-banner__btn cookie-banner__btn--decline"
      customButtonProps={{ 'aria-label': 'Accept all cookies' }}
      customDeclineButtonProps={{ 'aria-label': 'Decline optional cookies' }}
    >
      This site uses cookies to analyze traffic and support affiliate
      partnerships. Essential cookies are always active and cannot be
      disabled. Optional cookies include analytics and affiliate tracking.{' '}
      <Link to="/privacy-policy" className="cookie-banner__link">Learn more</Link>
    </CookieConsent>
  )
}

export default CookieBanner
