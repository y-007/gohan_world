import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Destinations from '../components/Destinations'
import TravelTips from '../components/TravelTips'
import TravelInsurance from '../components/TravelInsurance'
import Disclaimer from '../components/Disclaimer'

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.state])

  return (
    <main>
      <Hero />
     
      <Destinations />
      <TravelTips />
      <TravelInsurance />
      <Disclaimer />
    </main>
  )
}

export default HomePage
