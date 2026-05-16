import React, { useEffect } from 'react'
import Destinations from '../components/Destinations'

const DestinationsPage = () => {
  useEffect(() => {
    document.title = 'Destinations — Gohan World'
    return () => { document.title = 'Gohan World - USA⇄Japan Travel & Insurance Guides' }
  }, [])

  return (
    <main>
      <Destinations />
    </main>
  )
}

export default DestinationsPage