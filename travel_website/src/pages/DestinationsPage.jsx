import React, { useEffect } from 'react'
import Destinations from '../components/Destinations'

const DestinationsPage = () => {
  useEffect(() => {
    document.title = 'Destinations — Gohan World'
    return () => { document.title = 'USA⇄Japan Travel & Insurance Guides for Seniors & First-Timers 2026 | Gohan World' }
  }, [])

  return (
    <main>
      <Destinations />
    </main>
  )
}

export default DestinationsPage