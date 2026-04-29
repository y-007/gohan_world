import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import DisclaimerPage from './pages/DisclaimerPage'
import { useTheme } from './hooks/useTheme'
import './index.css'
import AboutPage from './pages/AboutPage'
import DestinationsPage from './pages/DestinationsPage'
import SearchPage from './pages/SearchPage'
import AffiliateDisclosurePage from './pages/AffiliateDisclosurePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ContactPage from './pages/ContactPage'
import AffiliateBar from './components/AffiliateBar'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <BrowserRouter>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <AffiliateBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
