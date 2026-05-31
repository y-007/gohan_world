import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import { useTheme } from './hooks/useTheme'
import './index.css'
import AboutPage from './pages/AboutPage'
import DestinationsPage from './pages/DestinationsPage'
import SearchPage from './pages/SearchPage'
import Disclaimer from './pages/Disclaimer'
import AffiliateDisclosure from './pages/AffiliateDisclosure'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ContactPage from './pages/ContactPage'
import AffiliateBar from './components/AffiliateBar'
import CookieBanner from './components/CookieBanner'
import CategoryPage from './pages/CategoryPage'
import ArchivePage from './pages/ArchivePage'
import TokyoPage from './pages/destinations/TokyoPage'
import KyotoPage from './pages/destinations/KyotoPage'
import NewYorkPage from './pages/destinations/NewYorkPage'
import HawaiiPage from './pages/destinations/HawaiiPage'
import OsakaPage from './pages/destinations/OsakaPage'
import TreasureCoastPage from './pages/destinations/TreasureCoastPage'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <ScrollToTop />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <AffiliateBar />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/articles/archive/:year" element={<ArchivePage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/tokyo" element={<TokyoPage />} />
        <Route path="/destinations/kyoto" element={<KyotoPage />} />
        <Route path="/destinations/newyork" element={<NewYorkPage />} />
        <Route path="/destinations/hawaii" element={<HawaiiPage />} />
        <Route path="/destinations/osaka" element={<OsakaPage />} />
        <Route path="/destinations/treasurecoast" element={<TreasureCoastPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
