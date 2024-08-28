import React from 'react'
// import { Link } from 'react-router-dom'

import HeroSection from './HeroSection'
import Guidelines from './Guidelines'
import StudyData from './StudyData'
import CallToAction from './CallToAction'
import EcoRangers from './EcoRangers';
function Home() {
  return (
    <div>

      <HeroSection />
      <Guidelines />
      <StudyData />
      <CallToAction />
      <EcoRangers />

    </div>
  )
}

export default Home
