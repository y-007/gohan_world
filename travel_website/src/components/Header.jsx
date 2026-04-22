import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './header.css'

const sectionLinks = [
  { label: 'Home',         id: 'home' },
  { label: 'About',        id: 'about' },
  { label: 'Destinations', id: 'destinations' },
  { label: 'Travel Tips',  id: 'tips' },
  { label: 'Disclaimer',   id: 'disclaimer', isDisclaimer: true },
]

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

  // Close drawer when route changes
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

  const handleArticlesClick = () => {
    setIsMenuOpen(false)
    navigate('/articles')
  }

  const handleInputChange = (e) => {
    if (e.target.value.length <= 20) setSearchText(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchText.trim()) return
    const query = searchText.toLowerCase()
    const targets = [
      { id: 'home',         keywords: ['home', 'welcome', 'gohan', 'narco'] },
      { id: 'about',        keywords: ['about', 'culture', 'food', 'family', 'story'] },
      { id: 'destinations', keywords: ['destination', 'tokyo', 'kyoto', 'osaka', 'new york', 'hawaii', 'san francisco', 'japan', 'usa'] },
      { id: 'tips',         keywords: ['tip', 'tips', 'advice', 'suica', 'cash', 'wifi', 'luggage'] },
      { id: 'disclaimer',   keywords: ['disclaimer', 'affiliate', 'legal', 'commission'] },
    ]
    const match = targets.find(t => t.keywords.some(k => k.includes(query) || query.includes(k)))
    if (match) {
      setIsMenuOpen(false)
      if (location.pathname === '/') {
        scrollTo(match.id)
      } else {
        navigate('/', { state: { scrollTo: match.id } })
      }
    } else {
      // No section match — go to articles
      navigate('/articles')
      setIsMenuOpen(false)
    }
  }

  const NavItems = ({ mobile = false }) => (
    <>
      {sectionLinks.map(({ label, id, isDisclaimer }) => (
        <li key={id}>
          <button
            onClick={() => handleSectionClick(id)}
            className={[
              mobile ? 'mobile-menu__link' : 'nav-item',
              isDisclaimer && !mobile ? 'nav-disclaimer' : '',
              isDisclaimer && mobile ? 'mobile-menu__link--disclaimer' : '',
            ].filter(Boolean).join(' ')}
          >
            {label}
          </button>
        </li>
      ))}
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
            <img src="/gohan_world_logo_500x500.png" alt="Gohan World logo" />
          </a>
        </div>

        <nav className="nav">
          <ul><NavItems /></ul>
        </nav>

        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" aria-label="X (Twitter)"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" aria-label="Pinterest"><FontAwesomeIcon icon={faPinterest} /></a>
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
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" aria-label="X (Twitter)"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" aria-label="Pinterest"><FontAwesomeIcon icon={faPinterest} /></a>
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
