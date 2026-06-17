import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import NewsletterBanner from '../components/NewsletterBanner'
import Destinations from '../components/Destinations'
import TravelTips from '../components/TravelTips'
import TravelInsurance from '../components/TravelInsurance'
import PopularArticles from '../components/PopularArticles'

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    const canon = document.querySelector('link[rel="canonical"]')
    if (canon) canon.setAttribute('href', 'https://www.gohanworld.com/')
  }, [])

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState({}, '', '/')
    }
  }, [location.state])

  return (
    <main>
      <Hero />
      <NewsletterBanner />
      <Destinations />
      <TravelTips />
      <TravelInsurance />
      <PopularArticles />
    </main>
  )
}

export default HomePage
