import React, { useEffect } from 'react'
import Destinations from '../components/Destinations'

const DestinationsPage = () => {
  useEffect(() => {
    document.title = 'Destinations — Gohan World'
    const canon = document.querySelector('link[rel="canonical"]')
    if (canon) canon.setAttribute('href', 'https://www.gohanworld.com/destinations/')
    return () => {
      document.title = 'USA⇄Japan Travel & Insurance Guides for Seniors & First-Timers 2026 | Gohan World'
      if (canon) canon.setAttribute('href', 'https://www.gohanworld.com/')
    }
  }, [])

  return (
    <main>
      <Destinations />
    </main>
  )
}

export default DestinationsPage