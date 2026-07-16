import React, { useEffect } from 'react'
import Destinations from '../components/Destinations'

const DestinationsPage = () => {
  useEffect(() => {
    document.title = 'Destinations — Gohan World'
    const canon = document.querySelector('link[rel="canonical"]')
    if (canon) canon.setAttribute('href', 'https://www.gohanworld.com/destinations/')
    return () => {
      document.title = 'Japan Travel & Insurance for Seniors & First-Timers | Gohan World'
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