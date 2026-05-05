import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './header.css'

const Header = ({ isDark, toggleTheme }) => {
  const [searchText, setSearchText] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => { setIsMenuOpen(false) }, [location.pathname])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSectionClick = (id) => {
    setIsMenuOpen(false)
    if (location.pathname === '/') {
      scrollTo(id)
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  const handleAboutClick = () => {
    setIsMenuOpen(false)
    navigate('/about')
  }

  const handleDestinationsClick = () => {
    setIsMenuOpen(false)
    navigate('/destinations')
  }

  const handleDisclaimerClick = () => {
    setIsMenuOpen(false)
    navigate('/disclaimer')
  }

  const handleArticlesClick = () => {
    setIsMenuOpen(false)
    navigate('/articles')
  }

  const handleInputChange = (e) => {
    if (e.target.value.length <= 60) setSearchText(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchText.trim()) return
    setIsMenuOpen(false)
    navigate(`/search?q=${encodeURIComponent(searchText.trim())}`)
    setSearchText('')
  }

  const NavItems = ({ mobile = false }) => (
    <>
      {/* Home — scroll link */}
      <li>
        <button
          onClick={() => handleSectionClick('home')}
          className={mobile ? 'mobile-menu__link' : 'nav-item'}
        >
          Home
        </button>
      </li>

      {/* About — page route */}
      <li>
        <button
          onClick={handleAboutClick}
          className={mobile ? 'mobile-menu__link' : 'nav-item'}
        >
          About
        </button>
      </li>

      {/* Destinations — page route */}
      <li>
        <button
          onClick={handleDestinationsClick}
          className={mobile ? 'mobile-menu__link' : 'nav-item'}
        >
          Destinations
        </button>
      </li>

      {/* Travel Tips — still a scroll link for now */}
      <li>
        <button
          onClick={() => handleSectionClick('tips')}
          className={mobile ? 'mobile-menu__link' : 'nav-item'}
        >
          Travel Tips
        </button>
      </li>

      {/* Disclaimer — page route */}
      <li>
        <button
          onClick={handleDisclaimerClick}
          className={[
            mobile ? 'mobile-menu__link' : 'nav-item',
            !mobile ? 'nav-disclaimer' : '',
            mobile ? 'mobile-menu__link--disclaimer' : '',
          ].filter(Boolean).join(' ')}
        >
          Disclaimer
        </button>
      </li>

      {/* Articles — page route */}
      <li>
        <button
          onClick={handleArticlesClick}
          className={mobile ? 'mobile-menu__link mobile-menu__link--articles' : 'nav-articles'}
        >
          Articles
        </button>
      </li>
    </>
  )

  return (
    <>
      <header className="header">
        <div className="logo">
          <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick('home') }}>
            <img src="/gohan_world_logo.svg" alt="Gohan World logo" />
          </a>
          <p className="logo__tagline">Travel Tips &amp; Insurance Guidance for USA–Japan Travelers</p>
        </div>

        <nav className="nav">
          <ul><NavItems /></ul>
        </nav>

        <div className="social-icons">
          <a href="https://www.facebook.com/gohanworld.by.yuko" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" aria-label="X (Twitter)"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="https://www.instagram.com/gohanworld.by.yuko/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.pinterest.com/gohanandworld/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPinterest} /></a>
        </div>

        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-btn" aria-label="Search">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </button>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>
      </header>

      <div className={`mobile-menu${isMenuOpen ? ' open' : ''}`}>
        <nav className="mobile-menu__nav">
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <NavItems mobile />
          </ul>
        </nav>
        <form className="mobile-menu__search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleInputChange}
          />
          <button type="submit" aria-label="Search">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className="mobile-menu__footer">
          <div className="mobile-menu__social">
            <a href="https://www.facebook.com/gohanworld.by.yuko" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" aria-label="X (Twitter)"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://www.instagram.com/gohanworld.by.yuko/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.pinterest.com/gohanandworld/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPinterest} /></a>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Header