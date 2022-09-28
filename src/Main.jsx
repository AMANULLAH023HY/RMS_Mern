import React from 'react'
import Featured from './components/featured/Featured'
import Best from './components/best/Best'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Location from './components/location/Location'
import Team from './components/team/Team'

function Main() {
  return (
    <>
    <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Location/>
      <Team/>
      <Footer />
    </>
  )
}

export default Main