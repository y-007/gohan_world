import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import { useTheme } from './hooks/useTheme'
import './index.css'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <BrowserRouter>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
